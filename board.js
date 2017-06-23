/* //////     /////////   DATA TYPES    /////////    ////// */
var Category = function(title, card_list) {
	this.title = title;
	this.card_list = card_list;
};

var Card = function(title, category, description, labels) {
	this.title = title;
	this.category = category;
	this.description = description;
	this.labels = labels;
	this.comments = [];
	this.addComment = function(comment) {
		this.comments.push(comment);
	};
};

var Label = function(name, color) {
	this.name = name;
	this.color = color;
}


/* //////     /////////   MENU CONTROL    /////////    ////// */

var options_button = document.querySelector('#options_button');
var close_button = document.querySelector(".close_button");
var dropdown_button = document.querySelector(".dropdown_button");

options_button.addEventListener('click', function(e) {
	document.querySelector("#side_menu").style.width = "250px";
});

close_button.addEventListener('click', function(e) {
	document.querySelector("#side_menu").style.width = "0";
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


/* //////     /////////   DUMMY DATA    /////////    ////// */


var l0 = new Label("interesting", "blue");
var l1 = new Label("dangerous", "red");
var l2 = new Label("boring", "orange");
var l3 = new Label("wow.", "green");
var l4 = new Label("fun", "purple");

var c0 = new Card("Plants", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l2,l3], 0);
c0.addComment("plants drool.");
c0.addComment("No they don't! Plants are the reason we can exist on this planet dummy");
var c1 = new Card("Boats", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l4], 1);
var c2 = new Card("Planes", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3], 2);
var c3 = new Card("Swords", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3,l4], 3);
var c4 = new Card("Old Cars", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3,l4], 4);
var c5 = new Card("Doggies", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l3,l4], 5);
var c6 = new Card("Settlers of Catan", "Cool Stuff!", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l2,l3,l4], 6);
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


var all_labels = [l0, l1, l2, l3, l4];
var all_cards = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15];
var all_categories = [cat0, cat1, cat2, cat3, cat4];




for (var i in all_categories) {
	addCategory(all_categories[i], i);
	// for (var j in cats[i].card_list) {
	// 	addCard(cats[i].id);
	// }
}

function addCardButton(cat_li, card, category_index, card_index) {
	var card_button_li = document.createElement('li');
	card_button_li.setAttribute('class', 'card_button');
	card_button_li.setAttribute('data-category-index', category_index);
	card_button_li.setAttribute('data-card-index', card_index);
	
	var delete_button = document.createElement('a');
	delete_button.setAttribute('class', 'delete_card');
	delete_button.textContent = "x";
	card_button_li.appendChild(delete_button);

	var ul = document.createElement('ul');
	ul.setAttribute('class', 'features');
	ul.setAttribute('data-category-index', category_index);
	ul.setAttribute('data-card-index', card_index);
	for (var i in card.labels) {
		var li = document.createElement('li');
		li.style.backgroundColor = card.labels[i].color;
		li.setAttribute('data-category-index', category_index);
		li.setAttribute('data-card-index', card_index);
		ul.appendChild(li);
	}

	var p = document.createElement('p');
	p.setAttribute('class', 'card_title');
	p.textContent = card.title;
	p.setAttribute('data-category-index', category_index);
	p.setAttribute('data-card-index', card_index);

	card_button_li.appendChild(ul);
	card_button_li.appendChild(p);

	cat_li.children[1].appendChild(card_button_li);
}

function addCategory(category, index) {
	var lol = document.querySelector("#lol");
	var li = document.createElement('li');
	li.setAttribute('data-category-index', index);

	var p = document.createElement('p');
	p.setAttribute('class', 'category');
	p.textContent = category.title;

	var ul = document.createElement('ul');
	ul.setAttribute('class', 'card_list');
	
	var a = document.createElement('a');
	a.setAttribute('class','add_content');
	a.setAttribute('data-category-index', index);
	a.textContent = "Add new card...";
	
	var new_card_div = document.createElement('div');
	new_card_div.setAttribute('class', 'new_content');
	new_card_div.setAttribute('data-category-index', index);
	var form = document.createElement('form');
	var title_input = document.createElement('input');
	title_input.setAttribute('type', 'text');
	title_input.setAttribute('class', 'title_input');
	title_input.setAttribute('data-category-index', index);
	title_input.required = true;
	form.appendChild(title_input);
	var submit_button = document.createElement('button');
	submit_button.setAttribute('class', 'add_card_button');
	submit_button.textContent = "Add";

	form.appendChild(submit_button);
	var cancel_button = document.createElement('a');
	cancel_button.setAttribute('class','cancel_new_button');
	cancel_button.textContent = "Cancel";
	// cancel_button.addEventListener('click', function(e) {
	// 	resetAddButton(e.target.parentElement);
	// });
	new_card_div.appendChild(form);
	new_card_div.appendChild(cancel_button);
	new_card_div.style.display = "none";

	li.appendChild(p);
	li.appendChild(ul);
	li.appendChild(a);
	li.appendChild(new_card_div);
	
	// li.style.height = "80px"; //JUST PLUS 80

	var before = document.querySelector("#lol > li:last-child");
	lol.insertBefore(li, before);

	if(category.card_list.length > 0) {
		for (var i in category.card_list) {
			addCardButton(li, category.card_list[i], index, i);
		}
	}
}



/* //////     /////////   MODAL    /////////    ////// */

var close_card_button = document.querySelector("#close_card");
var modal_bg = document.querySelector("#modal_bg");

close_card_button.addEventListener('click', function(e) {
	document.querySelector("#modal").style.display = "none";
	resetDescription();
	// console.log(document.querySelector('[data-category-index="0"][data-card-index="1"]'));
});

modal_bg.addEventListener('click', function(e) {
	document.querySelector("#modal").style.display = "none";
	resetDescription;
});


/* //////     /////////   LOAD CARD    /////////    ////// */

function addLabel(card, label) {
	var ul = document.querySelector("#card_labels");
	var li = document.createElement('li');
	li.setAttribute('class', 'card_label');
	li.style.backgroundColor = label.color;
	li.textContent = label.name;
	if (card.labels.length < all_labels.length) {
		ul.insertBefore(li, ul.lastChild);
	} else {
		ul.appendChild(li);
	}

	var card_div = document.querySelector('#card');
	var category_index = card_div.getAttribute('data-category-index');
	var card_index = card_div.getAttribute('data-card-index');

	var card_button_ul = document.querySelector('[data-category-index="'+category_index+'"][data-card-index="'+card_index+'"][class="features"]');
	var button_li = document.createElement('li');
	button_li.setAttribute('data-category-index', category_index);
	button_li.setAttribute('data-card-index', card_index);
	button_li.style.backgroundColor = label.color;
	card_button_ul.appendChild(button_li);
};

function clearList(card) {
	var ul = document.querySelector("#card_labels");
	ul.removeChild(ul.lastChild);

	if (card.labels.length < all_labels.length) {
		var add_label = makeAddButton(card);
		ul.appendChild(add_label);
	}
}

function makeAddButton(card) {
	var add_label = document.createElement('li');
	add_label.setAttribute('id', 'add_label');
	var p = document.createElement('p');
	p.textContent = "+";
	add_label.appendChild(p);

	add_label.addEventListener('click', function(e) {
		showLabels(card, add_label);
	});

	add_label.addEventListener('mouseout', function(e) {
		if (!(e.target.parentElement === add_label) && !(e.target.parentElement.parentElement === add_label)) {
			clearList(card);
			makeAddButton(card);
		}
	});
	return add_label;
}

function showLabels(card, add_label) {
	var labels_to_add = [];
	for (i in all_labels) {
		var add = true;
		for (j in card.labels) {
			if ((all_labels[i].name === card.labels[j].name) && (all_labels[i].color === card.labels[j].color)) {
				add = false;
			}
		}
		if (add) {
			labels_to_add.push(all_labels[i]);
		}
	}
	add_label.innerHTML = '';
	add_label.style.height = labels_to_add.length*30 + "px";
	add_label.style.width = "110px";
	add_label.style.backgroundColor = "white";
	add_label.style.transform = "translate(0,-5px)"
	var ul = document.createElement('ul')
	for (l in labels_to_add) {
		var li = document.createElement('li');
		li.setAttribute('class', 'card_label');
		li.style.backgroundColor = labels_to_add[l].color;
		// li.style.top = "-"+add_label.style.height;
		// li.style.transform = "translate(0, " + add_label.style.height + ")";
		// li.style.transition = "transform .5s"; 
		li.textContent = labels_to_add[l].name;

		li.addEventListener('click', function(e) {
			var new_label = new Label(e.target.textContent, e.target.style.backgroundColor);
			card.labels.push(new_label);
			clearList(card);
			addLabel(card, new_label);
			
		});	

		ul.appendChild(li);
	}
	add_label.appendChild(ul);
};

function fillCard(card) {
	document.querySelector('#modal h3').textContent = card.title;
	document.querySelector('#category_name').textContent  = card.category;
	document.querySelector('#text_description').textContent = card.description;

	var label_list = document.querySelector("#modal ul");
	label_list.innerHTML = '';

	for (var j in card.labels) {
		var li = document.createElement('li');
		li.style.backgroundColor = card.labels[j].color;
		li.setAttribute('class', 'card_label');
		li.textContent = card.labels[j].name;

		label_list.appendChild(li);
	}

	if (card.labels.length < all_labels.length) {
		var add_label = makeAddButton(card);
		label_list.appendChild(add_label);
	}
}

// function cardButtonHandler(e) {
// 	var category_index = e.target.getAttribute('data-category-index');
// 	var card_index = $(this).parent().index($(this));
// 	console.log($(this));
// 	var card = all_categories[category_index].card_list[$(this).eq()];
	
// 	var card_div = document.querySelector('#card');
// 	card_div.setAttribute('data-category-index', category_index);
// 	card_div.setAttribute('data-card-index', card_index);

// 	fillCard(card);

// 	document.querySelector("#modal").style.display = "block";
// };

/* //////     /////////   NEW CARD    /////////    ////// */

// var new_card_buttons = document.querySelectorAll(".add_card");

// for (var i = 0; i < new_card_buttons.length; i++) {
// 	new_card_buttons[i].addEventListener('click', function(e) {
// 		var category_index = e.target.getAttribute('data-category-index');
// 		var new_card_div = document.querySelector('[data-category-index="'+category_index+'"][class="new_card"]');
// 		new_card_div.style.display = "block";
// 		var new_title = document.querySelector('[data-category-index="'+category_index+'"][class="title_input"]');
// 		new_title.focus();

// 		e.target.parentElement.style.height = parseInt(e.target.parentElement.style.height,10)+35+"px";
// 		e.target.style.display = "none";
// 	});
// }

// function resetAddButton(new_card_div) {
// 	new_card_div.style.display = "none";
// 	new_card_div.firstChild.firstChild.value = "";
// 	new_card_div.parentElement.style.height = parseInt(new_card_div.parentElement.style.height,10)-35+"px";
	
// 	var add_card_button = document.querySelector('[data-category-index="'+new_card_div.getAttribute('data-category-index')+'"][class="add_content"]');
// 	add_card_button.style.display = "block";
// }

/* //////     /////////   NEW CATEGORY    /////////    ////// */



// var new_cat_button = document.querySelector(".add_category");
// var cancel_cat_button = document.querySelector("#category_cancel_button");
// var cat_add_button = document.querySelector("#category_add_button");

// new_cat_button.addEventListener('click', function(e) {
// 	var new_cat_div = e.target.parentElement.children[1];
// 	new_cat_div.style.display = "block";
// 	new_cat_div.children[0].children[0].focus();

// 	e.target.parentElement.style.height = "80px";
// 	e.target.style.display = "none";
// });

// category_cancel_button.addEventListener('click', function(e) {
// 	console.log(e.target.parentElement);
// 	resetCatAddButton(e.target.parentElement);
// });

// category_add_button.addEventListener('click', function(e) {
// 	var new_category = new Category(e.target.parentElement.children[0].value, []);
// 	addCategory(new_category, all_categories.length);
// 	all_categories.push(new_category);
// 	resetCatAddButton(e.target.parentElement.parentElement);
// });

// function resetCatAddButton(new_cat_div) {
// 	new_cat_div.style.display = "none";
// 	new_cat_div.children[0].children[0].value = "";
// 	new_cat_div.parentElement.style.height = "50px";
	
// 	var new_cat_button = document.querySelector('.add_content');
// 	new_cat_button.style.display = "block";
// }

/* //////     /////////   EDIT CARD    /////////    ////// */

var desc_edit_button = document.querySelector('.edit_button');
desc_edit_button.addEventListener('click', function(e) {
	var text_description = document.querySelector('#text_description');
	var edit_description = document.querySelector('#editable_description');
	edit_description.style.display = "block";
	var text_area = document.querySelector('#editable_description textarea');
	text_area.value = text_description.textContent;
	text_area.style.height = text_description.offsetHeight+"px";
	text_area.focus();
	desc_edit_button.style.display = "none";
	text_description.style.display = "none";
});

var desc_cancel_button = document.querySelector('#description_cancel');
desc_cancel_button.addEventListener('click', function(e) {
	resetDescription();
});

var desc_save_button = document.querySelector("#description_save");
desc_save_button.addEventListener('click', function(e) {
	// e.preventDefault();
	var edit_description_text = document.querySelector('#edit_description_text');
	var description_editor = document.querySelector("#editable_description");
	var text_description = document.querySelector('#text_description');
	text_description.style.display = "block";
	text_description.textContent = edit_description_text.value;

	var card_div = document.querySelector('#card');
	var card = all_categories[card_div.getAttribute('data-category-index')].card_list[card_div.getAttribute('data-card-index')];
	card.description = edit_description_text.value;

	desc_edit_button.style.display = "inline-block";
	description_editor.style.display = "none";
});

function resetDescription() {
	var edit_description = document.querySelector('#editable_description');
	edit_description.style.display = "none";
	var text_description = document.querySelector('#text_description');
	text_description.style.display = "block";
	desc_edit_button.style.display = "inline-block";
}


/* //////     /////////   EVENT DELEGATION    /////////    ////// */

var lol;
$(function() {
	lol = $('#lol');
	lol.on('click', '.delete_card', function(e) {
		var to_delete = $(this).parent()
		var category_index = to_delete.attr('data-category-index');
		all_categories[category_index].card_list.splice(to_delete.attr('data-card-index'), 1);

		to_delete.remove();

		e.stopPropagation();
  	});

  	lol.on('click', '.card_button', function(e) {
  		var category_index = $(this).parent().parent().index();
		var card_index = $(this).index();
		var card = all_categories[category_index].card_list[card_index];

		fillCard(card);

		$('#modal').show();
  	});

  	lol.on('click', '.add_card_button', function(e) {
  		var category_index = $(this).parent().parent().parent().index();
  		var card_index = all_categories[category_index].card_list.length;
  		var title = $(this).parent().find('input')[0].value;
  		
  		var new_card = new Card(title, all_categories[category_index].title, "", []);
  		all_categories[category_index].card_list.push(new_card);

  		var cat_li = $(this).parent().parent().parent()[0];
		addCardButton(cat_li, new_card, category_index, card_index);

		$(this).parent().parent().hide();
  		$(this).parent().parent().find('input').val("");
  		$(this).parent().parent().parent().find('.add_content').show();
  	});

  	lol.on('click', '.add_category_button', function(e) {
  		var new_category = new Category($(this).parent().find('input')[0].value, []);
  		all_categories.push(new_category);

		addCategory(new_category, all_categories.length);

		$(this).parent().parent().hide();
  		$(this).parent().parent().find('input').val("");
  		$(this).parent().parent().parent().find('.add_content').show();
  	});

  	lol.on('click', '.add_content', function(e) {
  		$(this).parent().find('.new_content').show();
  		$(this).parent().find('input').focus();
  		$(this).hide();
  	})

  	lol.on('click', '.cancel_new_button', function(e) {
  		$(this).parent().hide();
  		$(this).parent().find('input').val("");
  		$(this).parent().parent().find('.add_content').show();
  	})

});
