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
		if ($('#drop_down').height() > 0) {
			$('#drop_down').height(0);
			$('#down_arrow').html("&#9660");
		} else {
			console.log($('#drop_down').find("li").length);
			$('#drop_down').height($('#drop_down').find("li").length*42 + 7);
			$('#down_arrow').html("&#x25b2");
		}
	});

	$('body').on('click', '.board_li', function(e) {
		$(this).children()[0].click();
	})
});

