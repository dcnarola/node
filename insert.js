//crud man
var http = require("http");
var fs=require("fs");
var path=require("path");
var querystring=require("querystring");
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/";

/*http.createServer(function(req,res){
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
			  q=querystring.parse(data);
			console.log(q);
		}); 
	}
}).listen(3000);*/ 
/*create database and collections*/
/*MongoClient.connect(url,function(err,db){
if(err) throw err;
var dbo=db.db("mydb");
dbo.createCollection('customers',function(err,res){
	if(err) throw err;
	console.log("Collection created!!");
	db.close();
});
});*/

MongoClient.connect(url,function(err,db){
if(err) throw err;
var dbo=db.db("mydb");
var myobj={name:"temp2",address:"mongolearn"};
/*dbo.collection("customers").insertOne(myobj,function(err,res){
	if(err) throw err;
	console.log("one record inserted!!");
	//db.close();
});*/
dbo.collection("customers").findOne({},function(err,result){
	if(err) throw err;
	console.log(result.name+'--'+result.address);
	db.close();
});
});