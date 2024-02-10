require('dotenv').config();

let express = require('express');
let app = express();
const absolutePath = __dirname + '/views/index.html';

app.use('/public', express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    const logger = `${req.method} ${req.path} - ${req.ip}`;
    console.log(logger);
    next();
})

app.get('/', function (req, res) {
    res.sendFile(absolutePath);
})

app.get('/json', function (req, res) {
    const obj = { message: "Hello json" }

    if (process.env.MESSAGE_STYLE === "uppercase") {
        obj.message = "Hello json".toUpperCase();
    }

    res.json(obj);
})
































module.exports = app;
