var express = require('express');
var router = express.Router();
var config = require('../../config.json');
var path = require('path');
var mysql = require('../../mysql')


router.get("/:ID", function (req, res, next) {
    var ID = parseInt(req.params.ID) - 1 || 0;

    mysql.query('SELECT * FROM city', function (error, rows, fields) {
        if (error)
            res.status(400).json(error);
        else {
            res.status(200).json
            res.contentType('application/json');
            res.json(rows[ID]);
        };

    });

});

router.get('*', function (req, res) {
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