var express = require('express');
const app = express();
const path = require('path');

var logger = require('./server/log');

var common = require('./server/common');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // console.log(path.resolve(__dirname, '../public', 'index.html'));
    //res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
    res.send('hello world');
});

app.listen(8080, function () {
    logger.info('Example app listening on port 8080!')
})