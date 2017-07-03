$(function() {
	$('#register').hide();
	$('#register_form').on('submit', function(e) {
		e.preventDefault();
		if(reg_password.value !== reg_confirm.value) {
			alert("Passwords ain't da same");
		} else {
			$.ajax({
			    url: 'http://localhost:3000/users/register',
			    type: "POST",
			    data: {
			    	email: reg_email.value,
			    	password: reg_password.value
			    }
			})
			.done(function() {
				window.location.href="/";
			})
			.fail(function(e) {
				console.log(e);
			});
		}
	});

	$('#login_form').on('submit', function(e) {
		e.preventDefault();
		$.ajax({
		    url: 'http://localhost:3000/users/login',
		    type: "POST",
		    data: {
		    	email: login_email.value,
		    	password: login_password.value
		    }
		})
		.done(function(res) {
			if (res.msg) {
				$('.error_msg').text(res.msg);
				$('#login_form input').css('borderColor', 'red');
			} else {
				console.log('reloading');
				window.location.href="/";
			}
		})
		.fail(function(e) {
			console.log(e);
		});
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
	});

})