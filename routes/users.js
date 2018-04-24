const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Stock = require('../models/stock');

const config = require('../config/database');


//check for a non-negative Integer
function isNormal(str) {
    return /^\+?(0|[1-9]\d*)$/.test(str);
}
//ensuring all numbers are Natural
function allNormal(obj) {
    for ( let o in obj ) {
        //if empty field
        if ( !obj[o]) {
            obj[o] = 0;
        } 
        if ( !isNormal(obj[o]) ) {
            return false;
        }
    }
    return true;
}

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name : req.body.name,
        email : req.body.email,
        username : req.body.username,
        password : req.body.password,
        wallet: {
            FP : req.body.wallet.FP,
            FPL : req.body.wallet.FPL,
            FPC : req.body.wallet.FPC,
            PGB : req.body.wallet.PGB,
            FPA : req.body.wallet.FPA,
            DL24 : req.body.wallet.DL24,
            PLN : req.body.wallet.PLN
        }
    });

    console.log(allNormal(newUser.wallet));
    if (!allNormal(newUser.wallet)){
        return res.json({'success': false, msg: 'Not all amounts of unit shares are non-negative integers. Please ensure correct values in all fields.'});
    }

    User.getUserByUsername(newUser.username, (err, user) => {
        if (err) {
            res.json({success : false,  msg: err})
        }
        if (user){
            return res.json({'success': false, msg: 'User with username: ' + newUser.username + ' already exists, please use a different username'});
        } else {
            User.addUser(newUser, (err, user) => {
                console.log(new Date(), " New user added: ", newUser.username);
                if (err) {
                    res.json({success : false,  msg: "Failed to register user"});
                } else {
                    res.json({success : true,  msg: "User: " + newUser.username + " successfully registered"});
                }
            });
        }
    });
    
});

//Authentication when Logging in
router.post('/authenticate', (req, res) => {
    const username = req.body.username;
    const pass = req.body.password;
    User.getUserByUsername(username, (err1, user) => {
        if (err1) {
            return res.json({'success': false, msg: err1});
        } 
     
        if (!user){
            return res.json({'success': false, msg: 'Incorrect username or password'});
        }

        if (pass === undefined){
            return res.json({'success': false, msg: 'Please fill in the password'});
        }

        User.checkPassword(pass, user.password, (err2, isMatch) => {
            if (err2) {
                return res.json({'success': false, msg: err2});
            }

            if (!isMatch){
                return res.json({'success': false, msg: 'Wrong password'});
            } else {
                Stock.getStock((err3, exchData)=> {
                    if (err3) {
                        return res.json({'success': false, msg: err3});
                    }
                    if (!exchData){
                        return res.json({'success': false, msg: 'Stock Data not found in DB'});
                    } else {
                        let user_jwt = {    //creating new object for Front end, not to send a password
                            id: user._id,   
                            name: user.name,
                            username: user.username,
                            email: user.email,
                            wallet: user.wallet
                        };
                        const token = jwt.sign({data: user_jwt}, config.secret, { // user_jwt (no password) used for signing with jwt, because anyone can decrypt jwt
                            expiresIn: '7d' //1 week
                        });
                        res.json({  //sending values to client app
                            'success': true, 
                            token: 'JWT ' + token,
                            user: user_jwt
                        });
                    }
                });
            }
        });
    });
});

// Profile, protected
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        user: req.user
    })
});

module.exports = router;