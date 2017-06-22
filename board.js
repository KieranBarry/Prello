/* //////     /////////   DATA TYPES    /////////    ////// */
var Category = function(title, card_list, id) {
	this.title = title;
	this.card_list = card_list;
	this.id = id;
};

var Card = function(title, category, description, labels, id) {
	this.title = title;
	this.category = category;
	this.description = description;
	this.labels = labels;
	this.id = id;
	this.comments = [];
};

var Label = function(name, color) {
	this.name = name;
	this.color = color;
}


/* //////     /////////   MENU CONTROL    /////////    ////// */

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
		// document.querySelectorAll(".category_name")[i].innerHTML = i; //INSERT THE ACTUAL CATEGORY NAME HERE ONCE DATA
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



/* //////     /////////   DUMMY DATA    /////////    ////// */


var l0 = new Label("interesting", "blue");
var l1 = new Label("dangerous", "red");
var l2 = new Label("boring", "orange");
var l3 = new Label("wow.", "green");
var l4 = new Label("fun", "purple");

var c0 = new Card("Plants", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l2,l3], 0);
var c1 = new Card("Boats", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l4], 1);
var c2 = new Card("Planes", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3], 2);
var c3 = new Card("Swords", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3,l4], 3);
var c4 = new Card("Old Cars", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3,l4], 4);
var c5 = new Card("Doggies", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l3,l4], 5);
var c6 = new Card("Settlers of Catan", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3,l4], 6);
var c7 = new Card("Boxes", "Other Stuff", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l2,l4], 7);
var c8 = new Card("Foxes", "Other Stuff", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l1,l3], 8);
var c9 = new Card("Nickleback", "Rejects", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l2,l3], 9);
var c10 = new Card("N3rdz", "Rejects", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l3,l4], 10);
var c11 = new Card("We're Does", "Rejects", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3], 11);
var c12 = new Card("ur mom", "Rejects", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l1,l2,l3], 12);
var c13 = new Card("Mosquito", "Fish", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l1], 13);
var c14 = new Card("Elephant", "Fish", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l2], 14);
var c15 = new Card("Trump", "Fish", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3], 15);

var cat0 = new Category("Cool Stuff!", [c0, c1, c2, c3, c4, c5, c6], 0);
var cat1 = new Category("Other Stuff", [c7, c8], 1);
var cat2 = new Category("Rejects", [c9, c10, c11, c12], 2);
var cat3 = new Category("Fish", [c13, c14, c15], 3);
var cat4 = new Category("Empty Category", [], 4);

var cats = [cat0, cat1, cat2, cat3, cat4];




for (var i in cats) {
	addCategory(cats[i]);
	// for (var j in cats[i].card_list) {
	// 	addCard(cats[i].id);
	// }
}

function addCard(cat_ul, card) {
	var card_li = document.createElement('li');
	
	var ul = document.createElement('ul');
	ul.setAttribute('class', 'features');
	for (var i in card.labels) {
		var li = document.createElement('li');
		li.style.backgroundColor = card.labels[i].color;
		ul.appendChild(li);
	}

	var p = document.createElement('p');
	p.setAttribute('class', 'card_title');
	p.textContent = card.title;

	card_li.appendChild(ul);
	card_li.appendChild(p);
	cat_ul.appendChild(card_li);
}

function addCategory(category) {
	var lol = document.querySelector("#lol");
	var li = document.createElement('li');
	var p = document.createElement('p');
	p.setAttribute('class', 'category');
	p.textContent = category.title;

	var ul = document.createElement('ul');
	ul.setAttribute('class', 'card_list');
	
	var a = document.createElement('a');
	a.setAttribute('href', '#');
	a.setAttribute('class','add_card');
	a.textContent = "Add new card...";
	
	li.appendChild(p);
	li.appendChild(ul);
	li.appendChild(a);
	
	li.style.height = (category.card_list.length*85 + 80) + "px";

	var before = document.querySelector("#lol > li:last-child");
	console.log(before);
	lol.insertBefore(li, before);

	if(category.card_list.length > 0) {
		for (var i in category.card_list) {
			addCard(ul, category.card_list[i]);
		}
	}
}


