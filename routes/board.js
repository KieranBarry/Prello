var express = require('express');
var mongoose = require('mongoose');
// var authCheck = require('../authCheck');
var Board = require('../models/board_model');

var router = express.Router();

var board_id = ""
router.get('/:bid', function(req, res) {
	board_id = req.params.bid;

	Board.findById(board_id, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			res.render('board', { title: board.title, stylesheet: '../stylesheets/board.css', javascript: '../javascripts/board.js', email: req.session.user.email });
		}
	});
});

router.get('/:bid/list', function(req, res) {
	Board.findById(board_id, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			res.json(board.lists);
		}
	})
	// List.find(function(err, lists) {
	// 	if(err) {
	// 		console.log(err);
	// 	} else {
	// 		res.json(lists);
	// 	}
	// });
});

router.post('/:bid/list', function(req, res) {
	Board.findById(board_id, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			board.lists.push(req.body);
			board.save(function(err, board) {
				if (err) {
					console.log(err);
				} else {
					res.json(board.lists[board.lists.length - 1]);
				}
			})
		}
	})

	// var newList = new List(
	// 	{title: req.body.title}
	// );

	// newList.save(function (err, list) {
	// 	if (err) {
	//     	console.log(err);
	//   	} else {
	// 	    res.json(list);
	// 	}
	// });
});

router.delete('/:bid/list/:lid', function(req, res) {
	Board.findById(board_id, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			board.lists.pull(req.params.lid);
			board.save(function(err, board) {
				if (err) {
					console.log(err);
				} else {
					res.send("complete");
				}
			});
		}
	});
	// List.findByIdAndRemove(req.params.lid, function(err) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		res.send('complete');
	// 	}
	// });
});

router.patch('/:bid/list/:lid', function(req, res) {
	Board.findById(board_id, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			var list = board.lists.id(req.params.lid);
			list.title = req.body.title || list.title;
			list.cards = req.body.cards || list.cards;

			board.save(function(err, board) {
				if (err) {
					console.log(err);
				} else {
					res.json(board.lists.id(req.params.lid));
				}
			});
		}
	});

	// List.findById(req.params.lid, function(err, list) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		list.title = req.body.title || list.title;
	// 		list.cards = req.body.cards || list.cards;

	// 		list.save(function(err, list) {
	// 			if (err) {
	// 				console.log(err);
	// 			} else {
	// 				res.json(list);
	// 			}
	// 		})
	// 	}
	// })
});

router.post('/:bid/list/:lid/card', function(req, res) {
	Board.findById(board_id, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			board.lists.id(req.params.lid).cards.push(req.body);

			board.save(function(err, board) {
				if (err) {
					console.log(err);
				} else {
					res.json(board.lists.id(req.params.lid));
				}
			})
		}
	});
	// List.findById(req.params.lid, function(err, list) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		list.cards.push(req.body);
	// 		list.save(function(err, list) {
	// 			if (err) {
	// 				console.log(err);
	// 			} else {
	// 				res.json(list);
	// 			}
	// 		});
	// 	}
	// });
});

router.delete('/:bid/list/:lid/card/:cid', function(req, res) {
	Board.findById(board_id, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			board.lists.id(req.params.lid).cards.pull(req.params.cid);

			board.save(function(err, board) {
				if (err) {
					console.log(err);
				} else {
					res.json(board.lists.id(req.params.lid));
				}
			})
		}
	});

	// List.findById(req.params.lid, function(err, list) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		list.cards.pull(req.params.cid);
	// 		list.save(function(err, list) {
	// 			if (err) {
	// 				console.log(err);
	// 			} else {
	// 				res.json(list);
	// 			}
	// 		});
	// 	}
	// });
});

router.patch('/:bid/list/:lid/card/:cid', function(req, res) {
	Board.findById(board_id, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			var card = board.lists.id(req.params.lid).cards.id(req.params.cid);
			card.title = req.body.title || card.title;
			card.description = req.body.description || card.description;
			card.labels = req.body.labels || card.labels;
			card.comments = req.body.comments || card.comments;

			board.save(function(err, board) {
				if (err) {
					console.log(err);
				} else {
					res.json(board.lists.id(req.params.lid));
				}
			})
		}
	});

	// List.findById(req.params.lid, function(err, list) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		var card = list.cards.id(req.params.cid)
	// 		card.title = req.body.title || card.title;
	// 		card.description = req.body.description || card.description;
	// 		card.labels = req.body.labels || card.labels;
	// 		card.comments = req.body.comments || card.comments;

	// 		list.save(function(err, list) {
	// 			if (err) {
	// 				console.log(err);
	// 			} else {
	// 				res.json(list);
	// 			}
	// 		});
	// 	}
	// });
});



module.exports = router;
