var http = require("http");
var fs=require("fs");
var path=require("path");
var querystring=require("querystring");
var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/';

http.createServer(function(req,res){
	MongoClient.connect(url,function(err,db){
		if(err) throw err;
		var data={"dname":"darshan"};
		var newdata={$set:{dname:"darshansinh",demail:"crehaan@gmail.com",daddress:"hell"}};
		var dbo=db.db("college");
		dbo.collection('students').updateOne(data,newdata,function(err,result){
			if(err) throw err;
			console.log("recor updated");
		});
			
		//});
	});
}).listen(3000);