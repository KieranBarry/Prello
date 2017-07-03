var mongoose = require('mongoose');

var cardSchema = mongoose.Schema({
	title: String,
	description: String,
	labels: Array,
	comments: Array
});

var listSchema = mongoose.Schema({
	title: String,
	cards: [cardSchema]
});

module.exports = mongoose.model('List', listSchema);