require('dotenv').config();

let express = require('express');
let app = express();
const absolutePath = __dirname + '/views/index.html';

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(absolutePath);
})

app.get('/json', function (req, res) {
    let text;

    if (process.env.MESSAGE_STYLE === "uppercase") {
        text = "Hello json".toUpperCase();
    } else {
        text = "Hello json"
    }

    res.json(
        { message: text }
    );
})
































module.exports = app;
