const mongoose = require('mongoose');
var schema = mongoose.Schema;

module.exports = mongoose.model('auto', new schema({
    start_point: {type: Number},
    end_point: {type: Number},
	user: {type: String},
    group : {type: Number},
    image: {type: String}
}));