var express = require('express');
var mongoose = require('mongoose');
var authCheck = require('../authCheck');
var socketio = require('../socketio');
var permissionCheck = require("../permissionCheck");
var Board = require('../models/board_model');
var User = require('../models/user_model');


var router = express.Router();

router.get('/:bid', authCheck, permissionCheck, function(req, res) {
	Board.find({users: {$elemMatch: {_id: req.user._id}}}, function(err, boards) {
		if (err) {
			console.log(err);
		} else {
			var board_title = "uh oh";
			var boards_to_add = [];
			boards.forEach(function(board) {
				if (board._id == req.params.bid) {
					board_title = board.title;
				} else {
					boards_to_add.push(board);
				}
			})
			res.render('board', { board_id: req.params.bid, title: board_title, stylesheet: '../stylesheets/board.css', javascript: '../javascripts/board.js', email: req.session.user.email, showOptions: true, boards:boards_to_add });
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

router.get('/:bid/content', authCheck, permissionCheck, function(req, res) {
	Board.findById(req.params.bid, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			res.json(board);
		}
	})
});

router.post('/:bid/user', authCheck, permissionCheck, function(req, res) {
	User.findOne({email: req.body.email}, function(err, user) {
		if (err) {
			console.log(err);
		} else {
			if (!user) {
				res.send("User does not exist");
			} else {
				var userObj = {_id: user._id, email: user.email}; 
				console.log(userObj);
				Board.findById(req.params.bid, function(err, board) {
					if (err) {
						console.log(err);
					} else {
						board.users.push(userObj);
						board.save(function(err, board) {
							if(err) {
								console.log(err);
							} else {
								socketio.getInstance().in(req.params.bid).emit('newUser', {email: user.email});
								res.send("complete");
							}
						})
					}
				});
			}
		}
	});
	
});

router.post('/:bid/list', authCheck, permissionCheck, function(req, res) {
	Board.findById(req.params.bid, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			board.lists.push(req.body);
			board.save(function(err, board) {
				if (err) {
					console.log(err);
				} else {
					socketio.getInstance().in(req.params.bid).emit('newCategory', {category: board.lists[board.lists.length - 1]});
					res.json(board.lists[board.lists.length - 1]);
				}
			})
		}
	})
});

router.delete('/:bid/list/:lid', authCheck, permissionCheck, function(req, res) {
	Board.findById(req.params.bid, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			var list_i = board.lists.findIndex(function(list) {
				return list._id == req.params.lid;
			});
			board.lists.pull(req.params.lid);
			board.save(function(err, board) {
				if (err) {
					console.log(err);
				} else {
					socketio.getInstance().in(req.params.bid).emit('deleteCategory', {list_i});
					res.send("complete");
				}
			});
		}
	});
});


// NOT USED
router.patch('/:bid/list/:lid', authCheck, permissionCheck, function(req, res) {
	Board.findById(req.params.bid, function(err, board) {
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

router.post('/:bid/list/:lid/card', authCheck, permissionCheck, function(req, res) {
	Board.findById(req.params.bid, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			var list_i = board.lists.findIndex(function(list) {
				return list._id == req.params.lid;
			});
			board.lists[list_i].cards.push(req.body);

			board.save(function(err, board) {
				if (err) {
					console.log(err);
				} else {
					var list = board.lists.id(req.params.lid);
					socketio.getInstance().in(req.params.bid).emit('newCard', {list_i, card: list.cards[list.cards.length-1]});
					res.json(list);
				}
			})
		}
	});
});

router.delete('/:bid/list/:lid/card/:cid', authCheck, permissionCheck, function(req, res) {
	Board.findById(req.params.bid, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			var list_i = board.lists.findIndex(function(list) {
				return list._id == req.params.lid;
			});
			var card_i = board.lists[list_i].cards.findIndex(function(card) {
				return card._id == req.params.cid;
			});
			board.lists[list_i].cards.pull(req.params.cid);

			board.save(function(err, board) {
				if (err) {
					console.log(err);
				} else {
					console.log(`list index: ${list_i}, card index: ${card_i}`);
					socketio.getInstance().in(req.params.bid).emit('deleteCard', {list_i, card_i});
					res.json(board.lists.id(req.params.lid));
				}
			})
		}
	});
});

router.patch('/:bid/list/:lid/card/:cid', authCheck, permissionCheck, function(req, res) {
	Board.findById(req.params.bid, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			var list_i = board.lists.findIndex(function(list) {
				return list._id == req.params.lid;
			});
			var card_i = board.lists[list_i].cards.findIndex(function(card) {
				return card._id == req.params.cid;
			});
			var card = board.lists[list_i].cards[card_i];
			card.title = req.body.title || card.title;
			card.description = req.body.description || card.description;
			card.labels = req.body.labels || card.labels;
			card.comments = req.body.comments || card.comments;

			board.save(function(err, board) {
				if (err) {
					console.log(err);
				} else {
					socketio.getInstance().in(req.params.bid).emit('patchCard', {list_i, card_i, card});
					res.json(board.lists.id(req.params.lid));
				}
			})
		}
	});
});



module.exports = router;
