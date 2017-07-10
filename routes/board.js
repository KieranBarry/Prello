var express = require('express');
var mongoose = require('mongoose');
var authCheck = require('../authCheck');
var permissionCheck = require("../permissionCheck");
var Board = require('../models/board_model');
var User = require('../models/user_model');

var router = express.Router();

var board_id = ""
router.get('/:bid', authCheck, permissionCheck, function(req, res) {
	board_id = req.params.bid;

	Board.find(function(err, boards) {
		if (err) {
			console.log(err);
		} else {
			var board_title = "uh oh";
			var boards_to_add = [];
			boards.forEach(function(board) {
				if (board._id == board_id) {
					board_title = board.title;
				} else {
					boards_to_add.push(board);
				}
			})
			res.render('board', { title: board_title, stylesheet: '../stylesheets/board.css', javascript: '../javascripts/board.js', email: req.session.user.email, showOptions: true, boards:boards_to_add });
		}
	});
	// Board.findById(board_id, function(err, board) {
	// 	if (err) {
	// 		console.log(err);
	// 	} else {
	// 		res.render('board', { title: board.title, stylesheet: '../stylesheets/board.css', javascript: '../javascripts/board.js', email: req.session.user.email, showOptions: true, boards: [] });
	// 	}
	// });
});

router.get('/:bid/content', function(req, res) {
	Board.findById(board_id, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			res.json(board);
		}
	})
});

router.post('/:bid/user', function(req, res) {
	User.findOne({email: req.body.email}, function(err, user) {
		if (err) {
			console.log(err);
		} else {
			if (!user) {
				res.send("User does not exist");
			}
			var userObj = {_id: user._id, email: user.email}; 
			console.log(userObj);
			Board.findById(board_id, function(err, board) {
				if (err) {
					console.log(err);
				} else {
					board.users.push(userObj);
					board.save(function(err, board) {
						if(err) {
							console.log(err);
						} else {
							res.send("complete");
						}
					})
				}
			});
		}
	});
	
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
					io.emit("newCard", { for: 'everyone', card: req.body})
					res.json(board.lists.id(req.params.lid));
				}
			})
		}
	});
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
});



module.exports = router;
