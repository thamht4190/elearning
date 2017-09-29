var express = require('express')
var router = express.Router();
const path = require('path');

// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

// define the home page route
router.get('/', function (req, res) {
  console.log(path.resolve(__dirname, '../public', 'index.html'));
  res.sendFile(path.resolve(__dirname, '../public', 'index.html'));
})

module.exports = router