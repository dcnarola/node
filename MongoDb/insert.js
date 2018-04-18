var http = require("http");
var fs=require("fs");
var path=require("path");
var querystring=require("querystring");
var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';

http.createServer(function(req,res){
	if(req.url==='/form'){
		res.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream('../public/form.html','UTF-8').pipe(res);
	}
	if(req.method==='POST'){
		var data="";
		req.on('data',function(chunk){
			data+=chunk;
		});
		req.on('end',function(){
			//console.log(data);
			//console.log(q);
			MongoClient.connect(url,function(err,db){
				if(err) throw err;
				var q=querystring.parse(data);
				var dbo=db.db("college");
				dbo.createCollection("students",function(err,res){
					if(err) throw err;
					console.log("created");
				});
				dbo.collection('students').insertOne(q,function(err,res){
					if(err) throw err;
					console.log("data inserted");
				});
				db.close();
			});
		});
	}
}).listen(3000);