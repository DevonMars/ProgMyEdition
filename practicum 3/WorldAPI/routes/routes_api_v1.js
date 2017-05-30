var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('../config');
var mysql = require('../mysql')

router.use("/countries", require('./api1/routes_countries'));
router.use('/city', require('./api1/routes_cities'));



//
// router.post('/city', function (req, res) {
//     var city = req.body;
//     var query = {
//         sql: 'INSERT INTO `city`(`4080`, `Konoha`, `LEAF`, `Uchiha`, `15`) VALUES (?, ?, ?, ?, ? )',
//         values: [city.id, city.Name, city.CountryCode, city.District, city.Population ],
//         timeout: 2000
//     };
//     console.dir(city);
//     console.log('Onze query: ' + query.sql);
//
//     res.contentType('application/json');
//     mysql.query(query, function (error,rows,fields) {
//         if (error){
//             res.status(400);
//             res.json(error);
//         } else{
//             res.status(200);
//             res.json(rows);
//         };
//     });
// });

module.exports = router;