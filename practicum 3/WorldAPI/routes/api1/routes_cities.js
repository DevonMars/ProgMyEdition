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

router.post("/add", function(req, res, next){
    var cid = 4080;
    var name = 'KONOHAGAKURE';
    var district = 'Uchiha District';
    mysql.query(
        'INSERT INTO city (ID, Name, District) VALUES(?, ?, ?)',
        [cid,name, district],
        function(error, rows, fields){
            if(error)
                res.status(400).json(error);
            else {
                res.status(200);
                res.contentType('application/json');
                res.json({"msg" : "city succesfully added"});
            };
        });
});

module.exports = router;