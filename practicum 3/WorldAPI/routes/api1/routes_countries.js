var express = require('express');
var router = express.Router();
var config = require('../../config.json');
var path = require('path');
var database = require('../../mysql');

router.get("/:number", function(req, res, next) {
    var number = parseInt(req.params.number) - 1 || 0;
    database.query('SELECT * FROM country;', function(error, rows, fields){
            if(error)
                res.status(400).json(error);
            else {
                res.status(200);
                res.contentType('application/json');
                res.json(rows[number]);
            }
    })
})

router.post("/add?", function(req, res, next){
    var name = req.get('name');
    var code = req.get('code');
    var continent = req.get('continent');
    database.query(
        'INSERT INTO country (code, name, continent) VALUES(?, ?, ?)',
        [code, name, continent],
        function(error, rows, fields){
        if(error)
            res.status(400).json(error);
        else {
            res.status(200);
            res.contentType('application/json');
            res.json({"msg" : "country succesfully added"});
        }
    })
})

router.get("*", function(req, res, next){
  database.query('SELECT * FROM country;', function(error, rows, fields){
      if(error)
          res.status(400).json(error);
      else {
          res.status(200);
          res.contentType('application/json');
          res.json(rows);
      }
  })
})

module.exports = router;