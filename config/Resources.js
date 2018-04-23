const Stock = require('../models/stock');

let initStock = new Stock(); //with no "_id", bacause if document exists, .findOneAndUpdate() tried to overwrite the existing _id
const initWallet = {
    "FP" : 100000,
    "FPL" : 100000,
    "FPC" : 100000,
    "PGB" : 50000000,
    "FPA" : 50000000,
    "DL24" : 100000,
    "PLN" : 1000000,
}

initStock.wallet = initWallet;
initStock.current = {};
initStock.srvBlocked = false;

// initialize available resources of the stock market
exports.initWallet = function() {
        // return new pending promise
    return new Promise((resolve, reject) => {
        Stock.getStock( (err, stock) => {
            if (err) {
                reject(new Error("Failed to initialize the Stock market wallet: " + err));

            } else if (!stock) {
                Stock.setStock(initStock, (err, initVals) => {
                    if (err) {
                        reject(new Error("Failed to initialize the Stock market wallet: " + err));
                    } else {
                        resolve("Stock market wallet: " + initStock.wallet + " successfully initialized");
                    }
                });

            } else if (stock) {
                resolve("Stock market already had been initialized");
            }
        });
    });
}

//update current stock prices in DB
exports.updatePrices = function(currData) {
    let upTime = new Date();
    let stock = {};
    stock.current = currData;
// return new pending promise
    return new Promise((resolve, reject) => {
        Stock.updateStock(stock, (err) => {
            if (err) {
                reject(new Error("Failed to update the stock prices: " + err));
            } else {
                resolve("Stock prices updated: " + upTime)
            }
        });
    });
}