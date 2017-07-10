var express = require('express');
var authCheck = require('../authCheck');
var permissionCheck = require('../permissionCheck');
var Board = require('../models/board_model');
var mongoose = require('mongoose');

var router = express.Router();

/* GET home page. */
router.get('/', authCheck, function(req, res, next) {
	res.render('boards', { title: 'Prello Boards', stylesheet: 'stylesheets/boards.css', javascript: 'javascripts/boards.js', email: req.session.user.email, showOptions: true, boards: [] });
});

router.get('/boards', authCheck, function(req, res, next) {
	Board.find({users: {$elemMatch: {_id: req.user._id}}},function(err, boards) {
		if (err) {
			console.log(err);
		} else {
			res.json(boards);
		}
	});
});

router.post('/boards', authCheck, function(req, res, next) {
	var userInfo = {_id: req.user._id, email: req.user.email};

	var newBoard = new Board({
		title: req.body.title,
		users: [userInfo]
	});

	newBoard.save(function(err, board) {
		if (err) {
			console.log(err);
		} else {
			res.json(board);
		}
	});
});

router.delete('/boards/:bid', authCheck, permissionCheck, function(req, res, next) {
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
