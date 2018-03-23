var http = require("http");
var fs=require("fs");
var url=require("url");
var querystring=require("querystring");
http.createServer(function(req,res){
	if(req.url==='/form'){
		res.writeHead(200,{"Content-Type":"text/html"});
		fs.createReadStream('./public/form.html','UTF-8').pipe(res);
	}
	if(req.method=="GET"){
		console.log("get method");
		var q=url.parse(req.url,true).query;
		//console.log(q);
	}else if(req.method=="POST"){
		var data='';
		req.on("data",function(chunk){
			data+=chunk;
		});
		req.on('end',function(){
			var formdata=querystring.parse(data);
			console.log(formdata);
			//res.writeHead(200,{"Content-Type":"text/html"});
		});
	}
}).listen(3000);