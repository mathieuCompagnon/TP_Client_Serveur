var http = require('http');
var url = require('url');
var querystring = require('querystring');

var express = require('express');
var app = express();

var vehicule = [];//require('./model/vehicule.js');
var user = require('./model/user.js'); 
 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/TDvehicule');
 
  

app.use(function (req, res, next) {	

	//Cross origine request error
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype');
	res.setHeader('Access-Control-Allow-Credentials', true);

	var path = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);
	console.log(path);	
	
	res.writeHead(200, {'Content-Type': 'application/json'});  	
	var to_send;  
	  
	if(path == '/connect'){
		
	}else if(path == '/getVoiture' && params['id'] ){		
		if(car[params['id']]){
			console.log("yep");
			to_send = {voitureData : car[params['id']]};
		}else{
			console.log("nop");
			to_send = {error : 'not found'};
		}
	}else if(path == '/setVoiture'){
		
	}else if(path == '/delVoiture'){
		
	}else if(path == ''){
		
	}else if(path == ''){
		
	}else if(path == ''){
		
	}	  	  
	
	res.end(JSON.stringify(to_send));
	next();
});
 
 
app.listen(80);