 //////     /////////   MENU CONTROL    /////////    ////// */

var options_button = document.querySelector('.options_button');
var close_button = document.querySelector(".close_button");
var dropdown_button = document.querySelector(".dropdown_button");

options_button.addEventListener('click', function(e) {
	document.getElementById("side_menu").style.width = "250px";
});

close_button.addEventListener('click', function(e) {
	document.getElementById("side_menu").style.width = "0";
});

dropdown_button.addEventListener('click', function(e) {
	var dropdown_height = document.querySelector("#drop_down").style.height;
	if ((dropdown_height === "0px") || (dropdown_height === "")) {
    	document.querySelector("#drop_down").style.height = "300px";
    	document.querySelector("#down_arrow").innerHTML = "&#x25b2";

	} else {
		document.querySelector("#drop_down").style.height = "0px";
		document.querySelector("#down_arrow").innerHTML = "&#9660";
	}
});


/* //////     /////////   ADD CARD    /////////    ////// */

var add_card_buttons = document.querySelectorAll(".add_card");

for (var i = 0; i < add_card_buttons.length; i++) {
	add_card_buttons[i].addEventListener('click', function(e) {
		document.querySelector("#modal").style.display = "block";
		// document.querySelectorAll(".category_name")[i].innerHTML = i; //INSERT THE ACTUAL CATEGORY NAME HERE ONCE I HAVE DATA
	});
}

var close_card_button = document.querySelector("#close_card");
var modal_bg = document.querySelector(".modal_bg");

close_card_button.addEventListener('click', function(e) {
	document.querySelector("#modal").style.display = "none";
});

modal_bg.addEventListener('click', function(e) {
	document.querySelector("#modal").style.display = "none";
});