var http=require("http");
var staff=require('./public/data/data.json');

var server=http.createServer(function(req,res){
	console.log(req.url);
	if(req.url==='/'){
		res.writeHead(200,{"Content-Type":"text/json"});
		res.end(JSON.stringify(staff));
	}else if(req.url==='/node.js'){
		var data=staff.filter(function(item){
		 return item.language==="node.js";	
		});
		res.writeHead(200,{"Content-Type":"text/json"});
		res.end(JSON.stringify(data));
	}else{
		res.writeHead(404,{"Content-Type":"text/html"});
		res.end("No Record Found");
	}
});

server.listen(3000,function(){
	console.log("listing at port 3000");
});