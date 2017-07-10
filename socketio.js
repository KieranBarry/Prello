var io;

// function ioInit(server) {
// 	io = require('socket.io')(server);
// }

	// ADD THIS TO BOARD.EJS
	// <head> 
	// 	<script src="/socket.io/socket.io.js"></script>
	// 	<script>
	// 	  var socket = io();
	// 	</script>
	// </head>



module.export = {
	getInstance: function() {
			return io;
		},
	setup: function(server) {
			io = require('socket.io')(server);
			io.on('connection', function(socket){
			console.log('a user connected');
			  // socket.on(event, function(data))
			});
		}
}