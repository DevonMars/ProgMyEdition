var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('../config');
var mysql = require('../mysql')

router.use("/countries", require('./api1/routes_countries'));
router.use('/city', require('./api1/routes_cities'));



module.exports = router;