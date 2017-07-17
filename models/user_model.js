var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	email: String,
	password: String,
	token: ""
});

module.exports = mongoose.model('User', userSchema);