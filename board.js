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



/* //////     /////////   LOAD CARD    /////////    ////// */

// function addLabel(card, label) {
// 	// var modal_labels = $('#card_labels');
// 	// var new_label = 

// 	var ul = document.querySelector("#card_labels");
// 	var li = document.createElement('li');
// 	li.setAttribute('class', 'card_label');
// 	li.style.backgroundColor = label.color;
// 	li.textContent = label.name;
// 	if (card.labels.length < all_labels.length) {
// 		ul.insertBefore(li, ul.lastChild);
// 	} else {
// 		ul.appendChild(li);
// 	}

// 	var card_div = document.querySelector('#card');
// 	var category_index = card_div.getAttribute('data-category-index');
// 	var card_index = card_div.getAttribute('data-card-index');

// 	var card_button_ul = document.querySelector('[data-category-index="'+category_index+'"][data-card-index="'+card_index+'"][class="features"]');
// 	var button_li = document.createElement('li');
// 	button_li.setAttribute('data-category-index', category_index);
// 	button_li.setAttribute('data-card-index', card_index);
// 	button_li.style.backgroundColor = label.color;
// 	card_button_ul.appendChild(button_li);
// };

// function clearList(card) {
// 	var ul = document.querySelector("#card_labels");
// 	ul.removeChild(ul.lastChild);

// 	if (card.labels.length < all_labels.length) {
// 		var add_label = makeAddButton(card);
// 		ul.appendChild(add_label);
// 	}
// }

// function makeAddButton(card) {
// 	var add_label = document.createElement('li');
// 	add_label.setAttribute('id', 'add_label');
// 	var p = document.createElement('p');
// 	p.textContent = "+";
// 	add_label.appendChild(p);

// 	add_label.addEventListener('click', function(e) {
// 		showLabelDropDown(card, add_label);
// 	});

// 	add_label.addEventListener('mouseout', function(e) {
// 		if (!(e.target.parentElement === add_label) && !(e.target.parentElement.parentElement === add_label)) {
// 			clearList(card);
// 			makeAddButton(card);
// 		}
// 	});
// 	return add_label;
// }

// function showLabelDropDown(card) {
// 	var labels_to_add = [];
// 	for (i in all_labels) {
// 		var add = true;
// 		for (j in card.labels) {
// 			if ((all_labels[i].name === card.labels[j].name) && (all_labels[i].color === card.labels[j].color)) {
// 				add = false;
// 			}
// 		}
// 		if (add) {
// 			labels_to_add.push(all_labels[i]);
// 		}
// 	}


// 	$('#labels_to_add').html('');
// 	for (l in labels_to_add) {
// 		var label_option = $(`<li class="card_label">${labels_to_add[l].name}</li>`)
// 		label_option.css('background-color', labels_to_add[l].color);
// 		$('#labels_to_add').append(label_option);

// 		// li.addEventListener('click', function(e) {
// 		// 	var new_label = new Label(e.target.textContent, e.target.style.backgroundColor);
// 		// 	card.labels.push(new_label);
// 		// 	clearList(card);
// 		// 	addLabel(card, new_label);
			
// 		// });	
// 	}
// 	// add_label.appendChild(ul);
// };

// function fillCard(card) {
// 	$('#card_title').text(card.title);
// 	$('#category_name').text(card.category);
// 	$('#text_description').text(card.description);

// 	var card_labels = $('#card_labels');
// 	card_labels.html('');

// 	for (var j in card.labels) {
// 		var new_label = $(`<li class="card_label">${card.labels[j].name}</li>`);
// 		new_label.css('background-color', card.labels[j].color);
// 		card_labels.append(new_label);
// 	}

// 	if (card.labels.length < all_labels.length) {
// 		var add_btn = $('<li id="add_label"/>');		
// 		var plus_sign = $('<p>+</p>');
// 		add_btn.append(plus_sign);

// 		card_labels.append(add_btn);
// 	}


	// document.querySelector('#modal h3').textContent = card.title;
	// document.querySelector('#category_name').textContent  = card.category;
	// document.querySelector('#text_description').textContent = card.description;

	// var label_list = document.querySelector("#modal ul");
	// label_list.innerHTML = '';

	// for (var j in card.labels) {
	// 	var li = document.createElement('li');
	// 	li.style.backgroundColor = card.labels[j].color;
	// 	li.setAttribute('class', 'card_label');
	// 	li.textContent = card.labels[j].name;

	// 	label_list.appendChild(li);
	// }

	// if (card.labels.length < all_labels.length) {
	// 	var add_label = makeAddButton(card);
	// 	label_list.appendChild(add_label);
	// }
// }


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


function addCategory(category, index) {
	var lol = $('#lol');
	var category_li = $('<li class="category_li"/>');

	var title = $(`<p class="category">${category.title}</p>`);
	var card_list = $('<ul class="card_list"/>');
	var add_card_button = $('<a class="add_content">Add new card...</a>');
	
	var new_card_div = $('<div class="new_content" style="display: none;"/>');
	var form = $('<form/>');
	var title_input = $('<input type="text" class="title_input" placeholder="Enter card title..." required/>');
	var submit_button = $('<button class="add_card_button">Add</button>');
	var cancel_button = $('<a class="cancel_new_button">Cancel</a>');
	form.append(title_input).append(submit_button);
	
	new_card_div.append(form).append(cancel_button);
	category_li.append(title).append(card_list).append(add_card_button).append(new_card_div);

	$('#add_category_li').before(category_li);

	if(category.card_list.length > 0) {
		for (var i in category.card_list) {
			card_list.append(makeCardButton(category.card_list[i]));
		}
	}
}

function makeCardButton(card) {
	var card_button_li = $("<li class='card_button'/>");
	var delete_button = $("<a class='delete_card'>x</a>");
	var label_list = $("<ul class='features'/>");
	var title = $(`<p class='card_title'>${card.title}</p>`);

	for (var i in card.labels) {
		var li = $("<li/>");
		li.css('backgroundColor', card.labels[i].color);
		label_list.append(li);
	}

	card_button_li.append(delete_button);
	card_button_li.append(label_list);
	card_button_li.append(title);

	return card_button_li;
}


/* //////     /////////   EVENT DELEGATION    /////////    ////// */

var lol;
$(function() {
	for (var i in all_categories) {
		addCategory(all_categories[i], i);
	}	
	lol = $('#lol');
	lol.on('click', '.delete_card', function(e) {
		var to_delete = $(this).parent();
		var category_index = to_delete.parent().parent().index();
		all_categories[category_index].card_list.splice(to_delete.attr('data-card-index'), 1);

		to_delete.remove();
		e.stopPropagation();
  	});

  	lol.on('click', '.card_button', function(e) {
  		var category_index = $(this).parent().parent().index();
		var card_index = $(this).index();
		var card = all_categories[category_index].card_list[card_index];
		$('#modal').attr('data-current-category', category_index);
		$('#modal').attr('data-current-card', card_index);

		$('#card_title').text(card.title);
		$('#category_name').text(card.category);
		$('#text_description').text(card.description);

		$('#card_labels').children().each(function() {
			if ($(this)[0] !== $('#add_label_btn')[0]) {
				$(this).remove();
			}
		})

		for (var i in card.labels) {
			var new_label = $(`<li class="card_label">${card.labels[i].name}</li>`);
			new_label.css('background-color', card.labels[i].color);
			$('#add_label_btn').before(new_label);
		}

		if (card.labels.length < all_labels.length) {
			$('#add_label_btn').show();
		} else {
			$('#add_label_btn').hide();
		}
		$('#modal').show();
  	});

  	lol.on('click', '.add_card_button', function(e) {
  		var category_index = $(this).parent().parent().parent().index();
  		var title = $(this).parent().find('input')[0].value;
  		
  		var new_card = new Card(title, all_categories[category_index].title, "", []);
  		all_categories[category_index].card_list.push(new_card);

  		var card_list = $(this).parent().parent().parent().children()[1];
  		console.log(card_list);
		card_list.appendChild(makeCardButton(new_card)[0]);

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
  	});

  	lol.on('click', '.cancel_new_button', function(e) {
  		$(this).parent().hide();
  		$(this).parent().find('input').val("");
  		$(this).parent().parent().find('.add_content').show();
  	});

  	$('#close_card, #modal_bg').on('click', function(e) {
  		$('#modal').hide();
  		$('#editable_description').hide();
  		$('#text_description').show();
  		$('#description_edit_btn').show();
  	});

  	$('#description_cancel').on('click', function(e) {
  		$('#editable_description').hide();
  		$('#text_description').show();
  		$('#description_edit_btn').show();
  	});

  	$('#description_edit_btn').on('click', function(e) {
  		$('#editable_description').show();
  		$('#description_edit_btn').hide();
  		var text_desc = $('#text_description');
  		text_desc.hide();
  		var textarea = $('#editable_description textarea');

  		textarea.val(text_desc.text());
  		textarea.height(text_desc.height()-5);
  		textarea.focus();
  	});

  	$('#description_save').on('click', function(e) {
  		$('#editable_description').hide();
  		$('#description_edit_btn').show();
  		var text_desc = $('#text_description');
  		text_desc.show();
  		var textarea = $('#editable_description textarea');
  		text_desc.text(textarea.val());

		var card = all_categories[$(modal).attr('data-current-category')].card_list[$(modal).attr('data-current-card')];
		card.description = textarea.val();
  	});

  	$('#add_label_btn').on('mouseenter', function(e) {
  		var labels_to_add = [];
  		var card = all_categories[$(modal).attr('data-current-category')].card_list[$(modal).attr('data-current-card')];
		for (i in all_labels) {
			var add = true;
			for (j in card.labels) {
				if ((all_labels[i].name === card.labels[j].name)) { //put back in color comparison later
					add = false;
				}
			}
			if (add) {
				labels_to_add.push(all_labels[i]);
			}
		}

		$('#labels_to_add').html('');
		for (l in labels_to_add) {
			var label_option = $(`<li class="card_label">${labels_to_add[l].name}</li>`)
			label_option.css('background-color', labels_to_add[l].color);
			$('#labels_to_add').append(label_option);
		}

  		$('#label_plus_sign').hide();
  		$('#labels_to_add').show("fast");
  	});

  	$('#add_label_btn').on('mouseleave', function(e) {
  		$('#labels_to_add').hide("fast");
  		$('#label_plus_sign').show("fast");
  	});

  	$('#labels_to_add').on('click', '.card_label', function(e) {
  		var curr_category = $(modal).attr('data-current-category');
  		var curr_card = $(modal).attr('data-current-card');
  		var card = all_categories[curr_category].card_list[curr_card];

  		card.labels.push(new Label($(this).text(), $(this).css('background-color')));

  		var label_li = $(`<li class="card_label">${$(this).text()}</li>`);
  		label_li.css('background-color', $(this).css('background-color'));
  		$('#add_label_btn').before(label_li);

  		if (card.labels.length === all_labels.length) {
			$('#add_label_btn').hide();
		}

  		$('#labels_to_add').hide();
  		$('#label_plus_sign').show();

  		var card_button_label = $('<li class="card_label">');
  		card_button_label.css('background-color', $(this).css('background-color'));
  		$('.category_li').eq(curr_category).find('.features').eq(curr_card).append(card_button_label);


  	});

});





