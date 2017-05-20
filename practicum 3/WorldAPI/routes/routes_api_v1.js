var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('../config');
var mysql = require('../mysql')

// router.use("/countries", require('./api1/routes_countries'));
// router.use('/city', require('./api1/routes_cities'));

router.get('/city', function (req, res) {
    res.contentType('application/json');

    mysql.query('SELECT * FROM city', function (error, rows, fields) {
        if (error){
            res.status(400).json(error);
        } else {
            res.status(200).json(rows);
        };

    });

});

module.exports = router;