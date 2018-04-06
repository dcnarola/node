//import React from 'react';
//import ReactDOM from 'react-dom';
var React = require('react');
var ReactDOM = require('react-dom'); 
var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("<div id='content'></div>");
}).listen(3000);

ReactDOM.render('<h1>welcom react</h1>',document.getElementById('content'));

console.log('check react');
