const Stock = require('./models/stock');

// get current stock prices from external server
exports.getContent = function(url) {
    let stock = {};
    // return new pending promise
    return new Promise((resolve, reject) => {
        // select http or https module, depending on reqested url
        const lib = url.startsWith('https') ? require('https') : require('http');
        const request = lib.get(url, (response) => {
            // handle http errors
            if (response.statusCode < 200 || response.statusCode > 299) {
                stock.srvBlocked = true;
                Stock.updateStock(stock, error => {
                    if (error) throw error;
                    reject(new Error('Failed to connect to external server, status code: ' + response.statusCode));
                });
            }
            // temporary data holder
            const body = [];
            // on every content chunk, push it to the data array
            response.on('data', (chunk) => body.push(chunk));
            //done, resolve promise with joined chunks
            response.on('end', () => {
                stock.srvBlocked = false;
                Stock.updateStock(stock, error => {
                    if (error) throw error;
                    resolve(body.join(''));
                });
            });
        });
        // handle connection errors of the request
        request.on('error', (err) => {
            stock.srvBlocked = true;
            Stock.updateStock(stock, error => {
                if (error) throw error;
                reject(err);
            });
        })
    });
}

  
// let intervalID = 0;

// let wait = 
//     ms => new Promise(
//         r => setTimeout(r, ms)
//     );

// //repeat func (returning a promise every "ms" miliseconds)
// exports.repeat = 
//     (ms, func) => new Promise(
//         res => (
//             intervalID = setInterval(func, ms),
//             wait(ms).then(res)
//         )
//     );


