// var express = require('express');
// var routes = express.Router();
// var mysql = require('../../mysql.js');
//
// routes.get('/city', function (req, res) {
//     res.contentType('application/json');
//
//     mysql.query('SELECT * FROM city', function (error, rows, fields) {
//         if (error){
//             res.status(400).json(error);
//         } else {
//             res.status(200).json(rows);
//         };
//
//     });
//
// });
//
// module.exports = routes;