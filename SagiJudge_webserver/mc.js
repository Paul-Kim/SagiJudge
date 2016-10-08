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


var url = 'http://damoadamoa.tistory.com/121';
request(url, function(error, response, html){
	if (error) {throw error};

	// console.log (html);

	var $ = cheerio.load(html);
	var result = "";
	$('#entry div.article p').each(function(){
		//console.log($(this).text());
		result += $(this).text() + "\r\n";
	});

  var title = "";
  $('div.titleWrap h2 .subs').each(function(){
		console.log($(this).text());
    title += $(this).text();
	});
	var query = "CALL getIdByUrl("+ url + ", "+ title + ", "+ result  +")" ;
	//console.log("Query: "+ query);
	//pool.query(query, function (err, rows, fields){
		//console.log(fields);
	//});
});

console.log(encodeURIComponent("http://lemontia.tistory.com/50"));


console.log(Math.random());
