var express = require('express');
var authCheck = require('../authCheck');
var Board = require('../models/board_model');
var mongoose = require('mongoose');

var router = express.Router();

/* GET home page. */
router.get('/', authCheck, function(req, res, next) {
	Board.find(function(err, boards) {
		if (err) {
			console.log(err);
		} else {
			all_boards = boards;
			res.render('boards', { title: 'Prello Boards', stylesheet: 'stylesheets/boards.css', javascript: 'javascripts/boards.js', email: req.session.user.email, boards });
		}
	});

	// res.render('boards', { title: 'Prello Boards', stylesheet: 'stylesheets/boards.css', javascript: 'javascripts/boards.js', email: req.session.user.email })
});

router.post('/boards', function(req, res, next) {
	var newBoard = new Board({
		title: req.body.title
	});

	newBoard.save(function(err, board) {
		if (err) {
			console.log(err);
		} else {
			res.json(board);
		}
	});
})

// router.get('/board', authCheck, function(req, res, next) {
// 	console.log("hello");
// 	// res.send("done");
//   	res.render('board', { title: 'Prello Board', stylesheet: 'stylesheets/board.css', javascript: 'javascripts/board.js', email: req.session.user.email });

// });

router.get('/logout', function(req, res) {
  req.session.reset();
  res.redirect('/users');
});

module.exports = router;
