var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {	
		
	var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);

	console.log("HELLO WORLD NODE JS !!");	
	  

	res.writeHead(200, {'content-type': 'text/javascript'});  
	res.end("Test !");		
	
});

server.listen(80);