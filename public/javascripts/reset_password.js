$(function() {

	$('#password_form').on('submit', function(e) {
		// e.preventDefault();
		if(reg_password.value !== reg_confirm.value) {
			$('#error').text('Passwords do not match');
			e.preventDefault();
			$('#password_form input[type="password"]').css('borderColor', 'red');
		} else {
			console.log(user_email);

			// e.preventDefault();
			$("#password_form").attr("action", `/reset/password`);
			$("#password_form").attr("method", "POST");
		}
	});


})