var express = require('express');
const app = express();
const path = require('path');
var session = require('express-session');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

var logger = require('./server/log');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/elearning', { useMongoClient: true, promiseLibrary: global.Promise });
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);


var common = require('./server/common');
var admin = require('./server/admin');
var api = require('./server/api');

app.use(express.static(path.join(__dirname, 'public')));

const SESSION_SECRET_KEY = 'elearning_session_key';
app.use(session({
  secret: SESSION_SECRET_KEY,
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 } // expire every hour
}));

app.use('/admin', admin);
app.use('/api', api);
app.use('/', common);

const PORT = process.env.PORT || 8081;

app.listen(PORT, function () {
    logger.info(`Example app listening on port ${PORT}!`)
})