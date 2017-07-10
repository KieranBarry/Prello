var mongoose = require('mongoose');

var labelSchema = mongoose.Schema({
	name: String,
	color: String
});

var commentSchema = mongoose.Schema({
	text: String,
	username: String,
	date: Date
})

var cardSchema = mongoose.Schema({
	title: String,
	creator: String,
	description: String,
	labels: [labelSchema],
	comments: [commentSchema]
});

var listSchema = mongoose.Schema({
	title: String,
	cards: [cardSchema]
});

var userSchema = mongoose.Schema({
	email: String,
	_id: String
});

var boardSchema = mongoose.Schema({
	title: String,
	users: [userSchema],
	lists: [listSchema]
});

module.exports = mongoose.model('Board', boardSchema);