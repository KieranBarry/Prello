/* //////     /////////   REGISTER    /////////    ////// */

$(function() {
	$('#register').hide();
	$('#register_form').on('submit', function(e) {
		e.preventDefault();
		if(reg_password.value !== reg_confirm.value) {
			alert("Passwords ain't da same");
		}
	});

	$('.inactive').on('click', function(e) {
		e.preventDefault();
		if ($(this).hasClass('register')) {
			$('#login').hide();
			$('#register').show();
		} else {
			$('#login').show();
			$('#register').hide();
		}
	})
})