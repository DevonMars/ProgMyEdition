var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('../config');
var database = require('../mysql')

router.use("/countries", require('./api1/routes_countries'));
router.use("/city", require('./api1/routes_cities'));

router.get("/search?", function(req, res, next){
    var type = req.query.type;
    var continent = req.query.continent;
    var amount = parseInt(req.query.amount);
    database.query(
        "SELECT * FROM country WHERE continent=?",
        [continent],
        function(error, rows, fields) {
            if (error)
                res.status(400).json(error);
            else{
                res.status(200);
                res.contentType("application/json");
                for(var i = 0; i < amount; i++) {
                    res.json(rows[i]);
                }
            }
        }
    )
})

module.exports = router;