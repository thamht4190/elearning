var express = require('express');
const app = express();
const path = require('path');

var logger = require('./server/log');

var common = require('./server/common');
var admin = require('./server/admin');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin);
app.use('/', common);

app.listen(8080, function () {
    logger.info('Example app listening on port 8080!')
})