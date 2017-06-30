var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

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

// var Card = mongoose.model('Card', {
// 	title: String,
// 	description: String,
// 	labels: Array,
// 	comments: Array
// });

var List = mongoose.model('List', listSchema);


router.post('/:lid/card', function(req, res) {
	List.findById(req.params.lid, function(err, list) {
		if (err) {
			console.log(err);
		} else {
			// var card_desc = req.body.description || "";
			// var card_labels = req.body.labels || [];
			// var card_comments = req.body.comments || [];
			list.cards.push(req.body);
			list.save(function(err, list) {
				if (err) {
					console.log(err);
				} else {
					res.json(list);
				}
			});
		}
	});
});

router.delete('/:lid/card/:cid', function(req, res) {
	List.findById(req.params.lid, function(err, list) {
		if (err) {
			console.log(err);
		} else {
			list.cards.pull(req.params.cid);
			list.save(function(err, list) {
				if (err) {
					console.log(err);
				} else {
					res.json(list);
				}
			});
		}
	});
});

router.patch('/:lid/card/:cid', function(req, res) {
	List.findById(req.params.lid, function(err, list) {
		if (err) {
			console.log(err);
		} else {
			var card = list.cards.id(req.params.cid)
			card.title = req.body.title || card.title;
			card.description = req.body.description || card.description;
			card.labels = req.body.labels || card.labels;
			card.comments = req.body.comments || card.comments;

			console.log(req.body.labels)

			list.save(function(err, list) {
				if (err) {
					console.log(err);
				} else {
					res.json(list);
				}
			});
		}
	});
});


router.get('/', function(req, res) {
	List.find(function(err, lists) {
		if(err) {
			console.log(err);
		} else {
			res.json(lists);
		}
	});
});

router.post('/', function(req, res) {
	var newList = new List(
		{title: req.body.title}
	);

	newList.save(function (err, list) {
		if (err) {
	    	console.log(err);
	  	} else {
		    res.json(list);
		}
	});

});

router.delete('/:lid', function(req, res) {
	List.findByIdAndRemove(req.params.lid, function(err) {
		if (err) {
			console.log(err);
		} else {
			res.send('complete');
		}
	});
});

router.patch('/:lid', function(req, res) {
	List.findById(req.params.lid, function(err, list) {
		if (err) {
			console.log(err);
		} else {
			list.title = req.body.title || list.title;
			list.cards = req.body.cards || list.cards;

			list.save(function(err, list) {
				if (err) {
					console.log(err);
				} else {
					res.json(list);
				}
			})
		}
	})
});


module.exports = router;
