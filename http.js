var http = require("http");

/*http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.write("Request receive at "+req.url);
res.write("<b>Hello</b>");
res.end();
}).listen(3000);
console.log("running node");*/

http.createServer((req,res) => {
res.writeHead(200,{'Content-Type':'text/html'});
res.write("Request receive at "+req.url);
res.write("<b>Hello 1</b>");
res.end();
}).listen(3000);
console.log("running node");