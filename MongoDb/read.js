var http = require("http");
var fs=require("fs");
var path=require("path");
var querystring=require("querystring");
var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';

http.createServer(function(req,res){
	MongoClient.connect(url,function(err,db){
		if(err) throw err;
		var dbo=db.db("college");
		var query={daddress:"hell"};
		//dbo.collection('students').findOne({},function(err,result){
		dbo.collection('students').find(query).toArray(function(err,result){
			if(err) throw err;
			console.log(result);
			res.writeHead(200,{"Content-Type":"text/html"});
			res.end(JSON.stringify(result));
		});	
	});
}).listen(3000);