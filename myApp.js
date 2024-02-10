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

app.get('/now', function (req, res, next) {
    req.time = new Date().toString();
    next();
}, function (req, res) {
    res.json({ time: req.time })
})

app.get('/:word/echo', function (req, res) {
    const word = req.params.word;
    res.json({ echo: word });
})

function nameHandler(req, res) {
    const firstName = req.query.first;
    const lastName = req.query.last;

    res.json({ name: `${firstName} ${lastName}` });
}

app.route('/name').get(nameHandler).post(nameHandler);
































module.exports = app;
