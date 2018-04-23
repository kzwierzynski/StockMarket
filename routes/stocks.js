const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');

const Stock = require('../models/stock');
const User = require('../models/user');

const Codes = ["FP", "FPL", "FPC", "PGB", "FPA", "DL24"];
const Units = [1, 100, 1, 50, 50, 100];

//check for a positive integer
function isPosInt(str) {
    return /^\+?([1-9]\d*)$/.test(str);
}

//Get current prices
router.get('/current', (req, res) => {
    Stock.getStock( (err, stock) => {
        if (err) throw err;
        if (!stock) {
            res.json({success : false,  
                msg: "Failed to get current stock prices from DB",
                srvBlocked: stock.srvBlocked
            })
        } else {
            res.json({
                success : true,
                msg: "Current stock prices received",
                current: stock.current,
                srvBlocked: stock.srvBlocked
            })
        }
    });
});

//authenticate transaction, only if logged in
router.post('/buy', passport.authenticate('jwt', { session: false }), (req, res) => {
    let num_code = req.body.num_code;
    let user_id = req.body.user_id;
    let code = Codes[num_code];
    let buy_units = req.body.units;
       
    if (!isPosInt(buy_units)) {
        return res.json({success : false,  msg: "The value you've typed in is not a positive integer. Please change the value."});
    }
    let buy_shares = buy_units * Units[num_code]; 

    User.getUserById(user_id, (err, user) => {
        if (err) throw err;
        if (!user){
            return res.json({'success': false, msg: 'User not found in DB'});
        }
        let user_pln = user.wallet.PLN;
        let user_units = user.wallet[code];

        Stock.getStock( (err, stock) => {
            if (err) throw err;
            if (!stock) {
                return res.json({success : false,  msg: "Failed to get necessary data from DB"});
            }

            // buy wrt current stock price from Server
            //Avoid Floating point pproximation error  + change to number again
            let buy_pln = +(buy_units * stock.current.items[num_code].price).toFixed(2);
            let market_pln = stock.wallet.PLN;
            let market_shares = stock.wallet[code];            
            
            if (buy_pln > user_pln) {
                return res.json({success : false,  msg: "You don't have enough PLN for this transaction. Please try again"});
            }
            if (buy_shares > market_shares) {
                return res.json({success : false,  msg: "We're sorry, currently we don't have enough " + code + " shares for this transaction.  Please try again later or try buying less units."});
            }

            let newMarketWallet = stock;               
            newMarketWallet.wallet[code] = market_shares - buy_shares;
            //Avoid Floating point pproximation error  + change to number again
            newMarketWallet.wallet.PLN = +(market_pln + buy_pln).toFixed(2);
            let newUserWallet = user;
            //Avoid Floating point pproximation error  + change to number again
            newUserWallet.wallet.PLN = +(user_pln - buy_pln).toFixed(2);
            newUserWallet.wallet[code] = user_units + buy_units;

            Stock.updateStock(newMarketWallet, err => {
                if (err) throw err;

                User.updateUser(user_id, newUserWallet, (err, updatedUser) => {
                    if (err) throw err;
                    return res.json({
                        success : true,  
                        msg: "Transaction completed- you've bought " + buy_units + " unit(s) of " + code + " shares for " + buy_pln.toFixed(2) + " PLN",
                        wallet: updatedUser.wallet
                    });
                });
            });

        });
    });
});

//authenticate transaction, only if logged in
router.post('/sell', passport.authenticate('jwt', { session: false }), (req, res) => {
    let num_code = req.body.num_code;
    let user_id = req.body.user_id;
    let code = Codes[num_code];
    let sell_units = req.body.units;
       
    if (!isPosInt(sell_units)) {
        return res.json({success : false,  msg: "The value you've typed in is not a positive integer! Please change the value."});
    }
    let sell_shares = sell_units * Units[num_code]; 

    User.getUserById(user_id, (err, user) => {
        if (err) throw err;
        if (!user){
            return res.json({'success': false, msg: 'User not found in DB'});
        }
        let user_pln = user.wallet.PLN;
        let user_units = user.wallet[code];

        Stock.getStock( (err, stock) => {
            if (err) throw err;
            if (!stock) {
                return res.json({success : false,  msg: "Failed to get necessary data from DB"});
            }

            // sell wrt current stock price from Server
            //Avoid Floating point pproximation error  + change to number again
            let sell_pln = +(sell_units * stock.current.items[num_code].price).toFixed(2);
            let market_pln = stock.wallet.PLN;
            let market_shares = stock.wallet[code];            
            
            if (sell_units > user_units) {
                return res.json({success : false,  msg: "You don't have enough " + code + " shares for this transaction. Please try again"});
            }
            if (sell_pln > market_pln) {
                return res.json({success : false,  msg: "We're sorry, currently we don't have enough PLN for this transaction. Please try again later or try selling less units."});
            }

            let newMarketWallet = stock;
            newMarketWallet.wallet[code] = market_shares + sell_shares;
            //Avoid Floating point pproximation error + change to number again
            newMarketWallet.wallet.PLN = +(market_pln - sell_pln).toFixed(2);
            let newUserWallet = user;
            newUserWallet.wallet[code] = user_units - sell_units;
            //Avoid Floating point pproximation error + change to number again
            newUserWallet.wallet.PLN = +(user_pln + sell_pln).toFixed(2);

                Stock.updateStock(newMarketWallet, err => {
                    if (err) throw err;

                    User.updateUser(user_id, newUserWallet, (err, updatedUser) => {
                        if (err) throw err;
                        return res.json({
                            success : true,  
                            msg: "Transaction completed- you've sold " + sell_units + " unit(s) of " + code + " shares for " + sell_pln.toFixed(2) + " PLN",
                            wallet: updatedUser.wallet
                        });
                    });
                });

        });
    });
});

module.exports = router;