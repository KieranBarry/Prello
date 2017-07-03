// Side Menu Control
$(function(){
	$('#options_button').on('click', function(e) {
		$('#side_menu').width(250);
	});

	$('.close_button').on('click', function(e) {
		$('#side_menu').width(0);
	});

	// Dropdown Control
	$('.dropdown_button').on('click', function(e) {
		if ($('#drop_down').height() === 300) {
			$('#drop_down').height(0);
			$('#down_arrow').html("&#9660");
		} else {
			$('#drop_down').height(300);
			$('#down_arrow').html("&#x25b2");
		}
	});

	$('#logout_button').click(function(e) {
		$.ajax({
			url: 'http://localhost:3000/logout'
		})
		.done(function() {
			console.log("logged out");
			window.location.href = '/';
		})
		.fail(function(e) {
			console.log(e);
		});
	})
});

