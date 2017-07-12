var io;

module.exports = {
	getInstance: function() {
			return io;
		},
	setup: function(server) {
			io = require('socket.io')(server);
			io.on('connection', function(socket){
				console.log('a user connected');
				// connect the user to specified board
				socket.on('room', function(room) {
    				socket.join(room);
    			});
				socket.on('disconnect', function(){
					console.log('user disconnected');
				});
			});
		}
}