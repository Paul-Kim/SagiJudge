// filename : scraping.js
// author : saltfactory@gmail.com

var cheerio = require('cheerio');
var request = require('request');

var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host : '127.0.0.1',
  database : 'lacidem',
  user : 'guest',
  password : '1234'
});

//
// var url = 'http://damoadamoa.tistory.com/123';
// request(url, function(error, response, html){
// 	if (error) {throw error};
//
// 	// console.log (html);
//
// 	var $ = cheerio.load(html);
// 	var result = "";
// 	$('#entry div.article p').each(function(){
// 		//console.log($(this).text());
// 		result += $(this).text() + "\r\n";
// 	});
// 	var query = "CALL getIdByUrl("+ url + ", "+ JSON.stringify(result)  +")" ;
// 	console.log("Query: "+ query);
// 	pool.query(query, function (err, rows, fields){
// 		console.log(fields);
// 	});
// });

console.log(encodeURIComponent("http://damoadamoa.tistory.com/123"));
