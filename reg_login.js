/* //////     /////////   REGISTER    /////////    ////// */

var reg_password = document.querySelector('#reg_password');
var reg_confirm = document.querySelector('#reg_confirm');
var register_form = document.querySelector('#register_form');

register_form.addEventListener('submit', function(e) {
	if(reg_password.value !== reg_confirm.value) {
    e.preventDefault();
		alert("Passwords ain't da same");
	}
});

// var toggle_button = document.querySelector(".inactive");

// toggle_button.addEventListener