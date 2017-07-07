var express = require('express');
var authCheck = require('../authCheck');
var Board = require('../models/board_model');
var mongoose = require('mongoose');

var router = express.Router();

/* GET home page. */
router.get('/', authCheck, function(req, res, next) {
	res.render('boards', { title: 'Prello Boards', stylesheet: 'stylesheets/boards.css', javascript: 'javascripts/boards.js', email: req.session.user.email, showOptions: true, boards: [] });
});

router.get('/boards', authCheck, function(req, res, next) {
	Board.find(function(err, boards) {
		if (err) {
			console.log(err);
		} else {
			res.json(boards);
		}
	});
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
});

router.delete('/boards/:bid', function(req, res, next) {
	Board.findByIdAndRemove(req.params.bid, function(err) {
		if (err) {
			console.log(err);
		} else {
			res.send('complete');
		}
	});
});

router.get('/logout', function(req, res) {
  req.session.reset();
  res.redirect('/users');
});

module.exports = router;
