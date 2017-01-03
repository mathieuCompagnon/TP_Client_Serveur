var http = require('http');
var url = require('url');
var querystring = require('querystring');
var distance = require('google-distance');
 
 
 var car = [];
 
 
var server = http.createServer(function(req, res) {	
		
	var path = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);

	console.log("HELLO WORLD NODE JS !!");		  
	res.writeHead(200, {'Content-Type': 'application/json'});  	
	var to_send;  
	  
	if(path == '/connect'){
		
	}else if(path == ''){
		
	}else if(path == ''){
		
	}else if(path == ''){
		
	}else if(path == ''){
		
	}else if(path == ''){
		
	}else if(path == ''){
		
	}	  	  
	
	res.end(JSON.stringify(to_send));		
	
});

server.listen(80);