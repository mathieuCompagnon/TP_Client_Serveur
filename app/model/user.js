const mongoose = require('mongoose');
var schema = mongoose.Schema;

module.exports = mongoose.model('user', new schema({	
	username: {type: String, required: true},
	password: {type: String, required: true} 	
}));