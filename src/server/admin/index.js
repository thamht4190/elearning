var express = require('express')
var router = express.Router();
const path = require('path');

// define the about route
router.get('/', function (req, res) { console.log('/admin/courses');
    res.sendFile(path.resolve(__dirname, '../../public', 'admin.html'));
})

module.exports = router