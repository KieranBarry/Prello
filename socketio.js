var io;

module.exports = {
	getInstance: function() {
			return io;
		},
	setup: function(server) {
			io = require('socket.io')(server);
			io.on('connection', function(socket){
				console.log('a user connected');
				socket.on('disconnect', function(){
					console.log('user disconnected');
				});
			});
		}
}