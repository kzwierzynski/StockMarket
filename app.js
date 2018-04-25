const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/database');
const resources = require('./config/Resources');
const users = require('./routes/users');
const stocks = require('./routes/stocks');

const url = 'http://webtask.future-processing.com:8068/stocks';
const getData = require('./externalCommunication/getData');
let currData, srvBlock = false;


//Connect to MongoDB
mongoose.connect(config.database);
let db = mongoose.connection;

//Diagnostics of connection with MongoDB
db.once('open', () => {
    console.log(`Connected to database ${config.database}`);
});
db.on('error', (err) => {
    console.log(err);
});


const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

// initialize stocks wallet and get initial stock standings
resources.initWallet()
    .then((val)=> {
        console.log(val);
        return getData.getContent(url);
    })
    .then((html) => {
        srvBlock = false;
        currData = JSON.parse(html);
        return resources.updatePrices(currData);
    })
    .then( val => {
        if (val.new) {
            console.log(val.msg)
        }
    })
    .catch((err) => {
        srvBlock = true;
        console.error(err);
    });

// setinterval to get new data from URL every 3s
let intervalID = setInterval(()=> {
    getData.getContent(url)
    .then((html) => {
        srvBlock = false;
        currData = JSON.parse(html);
        return resources.updatePrices(currData);
    })
    .then( val => {
        if (val.new) {
            console.log(val.msg)
        }
    })
    .catch((err) => {
        srvBlock = true;
        console.error(err);
    });
}, 3000);
    


//setting static folder for Front end files
app.use(express.static(path.join(__dirname, "public")));

// ----- MIDDLEWARE ------

//Middleware for cors
app.use(cors());

// Middleware bodyParser application/json
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
//file with passport config
require('./config/passport')(passport);


// ----- ROUTING ------
app.use('/users', users);
app.use('/stocks', stocks);

// index route
app.get('/', (req, res)=>{
    res.send("Invalid Endpoint");
});

app.get('*',function (req, res) {   //redirect if some different url from all specified
    res.redirect('/');
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}...`)
})
