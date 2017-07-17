$(function() {
	$('#password_form').on('submit', function(e) {
		if(reg_password.value !== reg_confirm.value) {
			$('#error').text('Passwords do not match');
			e.preventDefault();
			$('#password_form input[type="password"]').css('borderColor', 'red');
		}
	});
})