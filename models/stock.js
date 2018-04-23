const mongoose = require('mongoose');
const config = require('../config/database')

const stockSchema = mongoose.Schema({
    wallet: { 
        type: {
            FP: {
                type: Number,
                default: 100000,
                required : true
            },  
            FPL: {
                type: Number,
                default: 1000000,
                required : true
            },  
            FPC: {
                type: Number,
                default: 100000,
                required : true
            },  
            PGB: {
                type: Number,
                default: 1000000,
                required : true
            },  
            FPA: {
                type: Number,
                default: 1000000,
                required : true
            },  
            DL24: {
                type: Number,
                default: 1000000,
                required : true
            },
            PLN: {
                type: Number,
                default: 100000,
                required : true
            }
        }   
    },
    current: {
        type: {
        publicationDate: Date,
        items:
        [ { name: String,
            code: String,
            unit: Number,
            Price: Number } ]
        }
    },
    srvBlocked: {
        type: Boolean,
        default: false
    }
    // ,
    // history: [{
    //     publicationDate: Date,
    //     usd: Number,
    //     eur: Number,
    //     chf: Number,
    //     rub: Number,
    //     czk: Number,
    //     gbp: Number
    // }]
});

const Stock = mongoose.model('Stock', stockSchema);
module.exports = Stock;

module.exports.getStock = function (callback){
    Stock.findOne({}, callback);
}

module.exports.setStock = function (newStock, callback){
    Stock.findOneAndUpdate({}, newStock, {upsert: true}, callback);
}

module.exports.updateStock = function (editStock, callback){
    Stock.update( {}, editStock, callback);
}