$(function() {
	$('#email_form').submit(function(e){
		var email = $('#email_input').val();
		e.preventDefault();
		$.ajax({
			context: this,
			url: 'http://localhost:3000/reset/exists',
			type: "POST",
			data: {email},
			dataType: "json"
		}).done(function(json) {
			if(json.msg === "complete") {
				$("#email_form").attr("action", `/reset/${$('#email_input').val()}`);
				this.submit();
			} else {
				$('#error').text('Email does not exist in our database');
				$('#password_form input[type="text"]').css('borderColor', 'red');
			}
		});

	});
});