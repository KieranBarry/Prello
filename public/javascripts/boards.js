function closeBoardForm() {
	$('#add_btn').width('110px');
	$('#add_btn').addClass('hover');
	$('#board_form').hide();
	$('#board_name').val("Board Name");
	$('#plus').delay(200).show(0);
}

$(function() {
	// $('#board_form').hide();
	// <% boards.forEach(function(b) { %>
	// 	   <%- `<li class="board_btn"><a class="delete_btn">x</a><a class="board_title" href="/board/${b.id}">${b.title}</a></li>` %>
	// 	<% }); %>
	$.ajax({
		url: 'http://localhost:3000/boards',
		dataType: "json",
	}).done(function(json) {
		json.forEach(function(b) {
			var li = $('<li class="board_btn"/>');
			var x = $('<a class="delete_btn">x</a>');
			var a = $(`<a class="board_title" href="/board/${b._id}">${b.title}</a>`);
			li.append(x).append(a);
			$('#add_btn').before(li);
		})
	}).fail(function(err) {
		console.log(err);
	});

	$('#boards_list').on('click', '.board_btn', function(e) {
		$(this).children()[1].click();
	});

	$('#boards_list').on('click', '.delete_btn', function(e) {
		e.stopPropagation();

		var to_delete = $(this).parent();
		var split_href = to_delete.find('.board_title').attr('href').split("/");
		var board_id = split_href[split_href.length -1];

		$.ajax({
			url: `http://localhost:3000/boards/${board_id}`,
			type: 'DELETE'
		}).done(function() {
			to_delete.remove();
		}).fail(function(err) {
			console.log(err);
		})
	});

	$('#add_btn').click(function(e) {
		$(this).width('260px');
		$(this).removeClass('hover');
		$('#plus').hide();
		$('#board_form').delay(200).show(50, function() {
			$('#board_name').select();
		});
	});

	$('#add_board_button').click(function(e) {
		e.stopPropagation();
		var title = $('#board_name').val();
		closeBoardForm();

		$.ajax({
			url: 'http://localhost:3000/boards',
			type: "POST",
			dataType: "json",
			data: {title}
		}).done(function(json) {
			var li = $('<li class="board_btn"/>');
			var x = $('<a class="delete_btn">x</a>');
			var a = $(`<a class="board_title" href="/board/${json._id}">${json.title}</a>`);
			li.append(x).append(a);
			$('#add_btn').before(li);
		}).fail(function(err) {
			console.log(err);
		})
	});

	$('#cancel_button').click(function(e) {
		e.stopPropagation();
		closeBoardForm();
	});

});