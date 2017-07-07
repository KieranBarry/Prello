$(function() {
	if ($('#email_error').text() !== "") {
		$('#login').hide();
		$('#register').show();
		$('#reg_email').focus();
	} else {
		if ($('#login_error').text() !== "") {
			$('#login_form input').css('borderColor', 'red');
			$('#login_email').focus();
		}
	}


	$('#register_form').on('submit', function(e) {
		// e.preventDefault();
		if(reg_password.value !== reg_confirm.value) {
			$('#register_error').text('Passwords do not match');
			e.preventDefault();
			$('#register_form input[type="password"]').css('borderColor', 'red');
			// $('#reg_password').focus();
		}
	});

	// $('#login_form').on('submit', function(e) {
	// 	console.log(e);
	// });

	$('.inactive').on('click', function(e) {
		e.preventDefault();
		if ($(this).hasClass('register')) {
			$('#login').hide();
			$('#register').show();
		} else {
			$('#login').show();
			$('#register').hide();
		}
	});

})