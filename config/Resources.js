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

let lastDate, displayLocal;

//checks if receive prices are new
function handleTime(newDate){
    if ( lastDate != newDate){ 
    //new prices
      lastDate = newDate;
      let dateTime = new Date(newDate);
      displayLocal =  dateTime.toLocaleString();
      return true;

    } else {
    //current prices are up to date
      return false;
    }
}

// initialize available resources of the stock market
exports.initWallet = function() {
        // return new pending promise
    return new Promise((resolve, reject) => {
        Stock.getStock( (err, stock) => {
            if (err) {
                reject(new Error("Failed to initialize the Stock market wallet: " + err));

            } else if (!stock) {
                //if Stock not in DB -> initialize
                Stock.setStock(initStock, (err, initVals) => {
                    if (err) {
                        reject(new Error("Failed to initialize the Stock market wallet: " + err));
                    } else {
                        resolve("Stock market wallet: " + initStock.wallet + " successfully initialized");
                    }
                });
                // Stock is already in DB
            } else if (stock) {
                resolve("Stock market already had been initialized");
            }
        });
    });
}

//update current stock prices in DB
exports.updatePrices = function(currData) {    
        let stock = {};
        stock.current = currData;
    // return new pending promise
        return new Promise((resolve, reject) => {
            //check if prices are new, if yes -> update DB
            if ( handleTime(currData.publicationDate) ){
                Stock.updateStock(stock, (err) => {
                    if (err) {
                        reject(new Error("Failed to update the stock prices: " + err));
                    } else {
                        resolve({
                            new: true,
                            msg: "Stock prices updated: " + displayLocal
                        });
                    }
                });
            } else {
                resolve({
                    new: false,
                    msg: "Stock prices up to date"
                });
            }
    });
}