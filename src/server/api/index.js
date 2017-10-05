var express = require('express')
var router = express.Router();
const path = require('path');

router.get('/', function (req, res) { console.log('/admin/courses');
    res.sendFile(path.resolve(__dirname, '../../public', 'admin.html'));
})

module.exports = router