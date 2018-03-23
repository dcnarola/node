var http = require("http");
var fs=require("fs");
var path=require("path");
var querystring=require("querystring");
var MongoClient=require('mongodb').MongoClient;
var url='';

http.createServer(function(req,res){
	if(req.url==='/form'){
		res.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream('./public/form.html','UTF-8').pipe(res);
	}
	if(req.method==='POST'){
		var data="";
		req.on('data',function(chunk){
			data+=chunk;
		});
		req.on('end',function(){
			//console.log(data);
			var q=querystring.parse(data);
			console.log(q);
		});
	}
}).listen(3000);