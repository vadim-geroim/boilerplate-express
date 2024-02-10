let express = require('express');
let app = express();
const absolutePath = __dirname + '/views/index.html';

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(absolutePath);
})
































module.exports = app;
