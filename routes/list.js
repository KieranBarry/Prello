var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();

var Card = mongoose.model('Card', {
	title: String,
	description: String,
	labels: Array,
	comments: Array
});

var List = mongoose.model('List', {
	title: String,
	cards: Array
});


router.post('/:lid/card', function(req, res) {
	var newCard = new Card(
		{
			title: req.body.title,
			description: ""
		}
	);

	List.findById(req.params.lid, function(err, list) {
		if (err) {
			console.log(error);
		} else {
			list.cards.push(newCard);
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


// not working
router.delete('/:lid/card/:cid', function(req, res) {
	List.findById(req.params.lid, function(err, list) {
		if (err) {
			console.log(error);
		} else {
			list.cards.push(newCard);
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
	List.findByIdAndRemove(req.params.lid, function(err, list) {
		if (err) {
			console.log(err);
		} else {
			res.send('complete');
		}
	});
});

router.patch('/:lid', function(req, res) {
	console.log(req.params.lid);
	List.findById(req.params.lid, function(err, list) {
		if (err) {
			console.log(error);
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
