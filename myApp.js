require('dotenv').config();

let express = require('express');
let app = express();
const absolutePath = __dirname + '/views/index.html';

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(absolutePath);
})

app.get('/json', function (req, res) {
    console.log(process.env.MESSAGE_STYLE)

    const text = "Hello json";

    res.json({ "message": `${process.env.MESSAGE_STYLE === "uppercase" ? text.toUpperCase() : text}` })
})
































module.exports = app;
