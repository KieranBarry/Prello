var Board = require('./models/board_model');

module.exports = function (req, res, next) {
	var bid = req.params.bid;
	Board.findById(req.params.bid, function(err, board) {
		if (err) {
			console.log(err);
		} else {
			var found = false;
			board.users.forEach(function(u) {
				if (u._id == req.user._id) {
					console.log("found");
					found = true;
				}
			});

			if (found) {
				next();
			} else {
				res.render('permission_error', {error_message: "Sorry, you do not have permission to view this page"});
			}
		}
	});
}