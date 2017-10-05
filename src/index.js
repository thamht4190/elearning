var express = require('express');
const app = express();
const path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/elearning', { useMongoClient: true, promiseLibrary: global.Promise });
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

var logger = require('./server/log');

var common = require('./server/common');
var admin = require('./server/admin');
var api = require('./server/api');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', admin);
app.use('/api', api);
app.use('/', common);

app.listen(8080, function () {
    logger.info('Example app listening on port 8080!')
})