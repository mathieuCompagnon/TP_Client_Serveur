var api = require('json-api');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var auto = require('./model/auto.js');
var user = require('./model/user.js'); 

mongoose.connect('mongodb://localhost/TDvehicule'); 
var models = { User: user, auto: auto };
var adapter = new api.dbAdapters.Mongoose(models);
var registry = new api.ResourceTypeRegistry({}, { dbAdapter: adapter }); 
var Front = new api.httpStrategies.Express(new api.controllers.API(registry),'');
console.log("Server ready.");

app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype');
   next();
});

app.get('/api/:type(user|auto)', Front.apiRequest.bind(Front));
app.get('/api/:type(user|auto)/:id', Front.apiRequest.bind(Front));
app.post('/api/:type(user|auto)', Front.apiRequest.bind(Front));
app.patch('/api/:type(user|auto)/:id', Front.apiRequest.bind(Front));
app.delete('/api/:type(user|auto)/:id', Front.apiRequest.bind(Front));

app.get('/', function (req, res) {
	return res.send('The api is here : http://localhost:3000/api');  
});
 
app.listen(3000);