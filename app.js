var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {	
	
	
	var page = url.parse(req.url).pathname;

		
	console.log("HELLO WORLD NODE JS !!");	
	  

	res.writeHead(200, {'content-type': 'text/javascript'});  


	res.end("Test !");		
		  
});

server.listen(80);