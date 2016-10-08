var express = require('express');
var router = express.Router();
var util = require('util');

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host : '127.0.0.1',
  database : 'laos',
  user : 'guest',
  password : '1234'
});

router.route('/').get(function (req, res){
  res.render('test', {data:'default show'});
});

router.route('/get_url/:url').get(function(req, res){
  res.type('text/plain');
  res.send("" + req.params.url + "text");
});

module.exports = router;
