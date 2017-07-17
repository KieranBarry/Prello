/* //////     /////////   DATA TYPES    /////////    ////// */
var Category = function(title, cards) {
	return {
		title,
		cards
	};
};

var Card = function(title, description, labels) {
	return {
		title,
		description,
		labels,
		comments: ['']
	};
};

var Label = function(name, color) {
	return {
		name,
		color
	}
}


/* //////     /////////   DUMMY DATA    /////////    ////// */


var l0 = new Label("interesting", "blue");
var l1 = new Label("dangerous", "red");
var l2 = new Label("boring", "orange");
var l3 = new Label("wow.", "green");
var l4 = new Label("fun", "purple");
var all_labels = [l0, l1, l2, l3, l4];

// var c0 = new Card("Plants", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l2,l3]);
// c0.comments.push("plants drool.");
// c0.comments.push("No they don't! Plants are the reason we can exist on this planet dummy");
// var c1 = new Card("Boats", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l4]);
// var c2 = new Card("Planes", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3]);
// var c3 = new Card("Swords", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3,l4], 3);
// var c4 = new Card("Old Cars", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3,l4], 4);
// var c5 = new Card("Doggies", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l3,l4], 5);
// var c6 = new Card("Settlers of Catan", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l2,l3,l4], 6);
// var c7 = new Card("Boxes", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l2,l4], 7);
// var c8 = new Card("Foxes", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l1,l3], 8);
// var c9 = new Card("Nickleback", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l2,l3], 9);
// var c10 = new Card("N3rdz", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l3,l4], 10);
// var c11 = new Card("We're Does", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3], 11);
// var c12 = new Card("ur mom", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l1,l2,l3], 12);
// var c13 = new Card("Mosquito", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l1], 13);
// var c14 = new Card("Elephant", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l2], 14);
// var c15 = new Card("Trump", "This is the description. It is very informative. It tells you everything there is to konw about whatever it is that this card is about (see card title above). Wow. So useful.", [l0,l1,l3], 15);

// var cat0 = new Category("Cool Stuff!", [c0, c1, c2, c3, c4, c5, c6], 0);
// var cat1 = new Category("Other Stuff", [c7, c8], 1);
// var cat2 = new Category("Rejects", [c9, c10, c11, c12], 2);
// var cat3 = new Category("Fish", [c13, c14, c15], 3);
// var cat4 = new Category("Empty Category", [], 4);

// // var all_cards = [c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15];
// var all_categories = [cat0, cat1, cat2, cat3, cat4];



/* //////     /////////   HELPER METHODS    /////////    ////// */

function addCategory(category, index) {
	all_categories.push(category);
	var lol = $('#lol');
	var category_li = $('<li class="category_li"/>');

	var delete_button = $("<a class='delete_category'>x</a>");
	var title = $(`<p class="category">${category.title}</p>`);
	var card_list = $('<ul class="card_list"/>');
	var add_card_button = $('<a class="add_content">Add new card...</a>');
	
	var new_card_div = $('<div class="new_content" style="display: none;"/>');
	var title_input = $('<input type="text" class="title_input" placeholder="Enter card title..." required/>');
	var submit_button = $('<button class="add_card_button add_button">Add</button>');
	var cancel_button = $('<a class="cancel_new_button">Cancel</a>');
	
	new_card_div.append(title_input).append(submit_button).append(cancel_button);
	category_li.append(delete_button).append(title).append(card_list).append(add_card_button).append(new_card_div);

	$('#add_category_li').before(category_li);

	if(category.cards.length > 0) {
		for (var i in category.cards) {
			card_list.append(makeCardDom(category.cards[i]));
		}
	}
}

function deleteCategory(index) {
	all_categories.splice(index, 1);
	$('#lol').children().eq(index).remove();
}

function addCard(card, category_index) {
	all_categories[category_index].cards.push(card);
	$('#lol').children().eq(category_index).find('.card_list').append(makeCardDom(card)[0]);
}

function makeCardDom(card) {
	var card_button_li = $("<li class='card_button'/>");
	var delete_button = $("<a class='delete_card'>x</a>");
	var label_list = $("<ul class='features'/>");
	var title = $(`<p class='card_title'>${card.title}</p>`);

	for (var i in card.labels) {
		if (card.labels[i] === "") {continue;}
		var li = $("<li/>");
		li.css('backgroundColor', card.labels[i].color);
		label_list.append(li);
	}

	card_button_li.append(delete_button);
	card_button_li.append(label_list);
	card_button_li.append(title);

	return card_button_li;
}

function deleteCard(category_index, card_index) {
	all_categories[category_index].cards.splice(card_index, 1);
	$('#lol').children().eq(category_index).find('.card_list').children().eq(card_index).remove();
}

function addComment(comment) {
	var li = $('<li class="card_comment"/>');
	var user = $(`<p class="comment_author">${comment.username}</p>`);
	var date = $(`<p class="comment_date">${new Date(comment.date)}</p>`);
	var text = $(`<p class="card_text">${comment.text}</p>`);
	li.append(user).append(date).append(text);
	$('#comment_list').append(li);
}

function hideAddContent(domObj) {
	domObj.parent().hide();
	domObj.parent().find('input').val("");
	domObj.parent().parent().find('.add_content').show();
}

function showAddContent(domObj) {
	domObj.parent().find('.new_content').show();
	domObj.parent().find('input').focus();
	domObj.hide();
}

function hideEditDescription() {
	$('#editable_description').hide();
	$('#text_description').show();
	$('#description_edit_btn').show();
}

function showEditDescription() {
  	$('#editable_description').show();
	$('#text_description').hide();
	$('#description_edit_btn').hide();

	var text_desc = $('#text_description');
  	var textarea = $('#editable_description textarea');
	textarea.val(text_desc.text());
	if (text_desc.height() < 30) {
		textarea.height(30);
	} else {
		textarea.height(text_desc.height()-5);
	}
	textarea.focus();
}

function showAddComment() {
	$('#add_comment').show();
	$('#add_comment_btn').hide();
	$('#add_comment textarea').focus();
}

function hideAddComment() {
	$('#add_comment').hide();
	$('#add_comment_btn').show();
	$('#add_comment textarea').val("");
}

var all_categories = [];

var lol;
$(function() {


	// fill in current data
	// for (var i in all_categories) {
	// 	var cards = all_categories[i].cards;

	// 	$.ajax({
	// 		async: false,
	// 	    url: "http://localhost:3000/list",
	// 	    dataType : "json",
	// 	    type: "POST",
	// 	    data: {
	// 	    	title: all_categories[i].title,
	// 	    	cards: []
	// 	    }
	// 	})
	// 	.done(function( json ) {
	// 		// console.log(json);
	// 		for (var j in cards) {
	// 			var post_url = "http://localhost:3000/list/"+json._id+"/card/";
	// 			$.ajax({
	// 				url: post_url,
	// 				type: "POST",
	// 				data: JSON.stringify(cards[j]),
	// 				contentType: 'application/json',
	// 				dataType: "json"
	// 			})
	// 			.done(function(json) {
	// 				console.log(json);
	// 			});
	// 		}
	// 	})
	// 	.fail(function(err) {
	// 		console.log(err);
	// 		// alert("fail fail fail");
	// 	});	
	// }	

	// var users_btn = $('<a id="users_btn" class="option">Users</a>');

	lol = $("#lol");

/////////////////// SOCKETIO ////////////////////////

	var socket = io();
	socket.on('connect', function() {
		// tell the server to connect you to this board's room
		socket.emit('room', bid);
	})
	.on('newCategory', function(res) {
		addCategory(res.category, all_categories.length);
    })
    .on('deleteCategory', function(res) {
    	deleteCategory(res.list_i);
    })
	.on('newCard', function(res){
		addCard(res.card, res.list_i)
    })
    .on('deleteCard', function(res) {
    	deleteCard(res.list_i, res.card_i);
    })
    .on('patchCard', function(res) {
    	all_categories[res.list_i].cards[res.card_i] = res.card;
    	var label_list = $('.category_li').eq(res.list_i).find('.features').eq(res.card_i);
    	label_list.empty();
    	res.card.labels.forEach(function(l) {
	    	var card_button_label = $('<li>');
	  		card_button_label.css('background-color', l.color);
	  		label_list.append(card_button_label);
    	});
    })
    .on('newUser', function(res){
    	var li = $(`<li class="user_li">${res.email}</li>`);
		$('#users_ul').append(li);
    });


///////////////////// PAGE SETUP /////////////////////////

    //LOAD IN SIDE MENU DOM OBJECTS
	var users_div = $('<div id="users_div"/>');
	var users_title = $('<h5>Users</h5>');
	var users_ul = $('<ul id="users_ul"/>');
	var add_user_btn = $('<a id="add_user_btn">Add a user...</a>');

	var new_user_div = $('<div id="add_user" class="add_user" style="display:none;"/>');
	var user_input = $('<input type="text" id="add_user_input" placeholder="Enter User Email"/>');
	var user_add_btn = $('<button id="user_add_button">Add</button>');
	var user_cancel_btn = $('<a id="user_cancel_button">Cancel</a>');

	new_user_div.append(user_input).append(user_add_btn).append(user_cancel_btn);
	users_div.append(users_title).append(users_ul).append(add_user_btn).append(new_user_div);
	$('#logout_button').before(users_div);


	// GET LIST AND USER DATA FROM SERVER, AND RENDER DOM OBJECTS
	$.ajax({
	    url: `http://localhost:3000/board/${bid}/content`,
	    dataType : "json"
	})
	.done(function(json) {
		json.lists.forEach(function(l) {
			addCategory(l);
		})
		json.users.forEach(function(u) {
			var li = $(`<li class="user_li">${u.email}</li>`);
			users_ul.append(li);
		});
	})
	.fail(function(err) {
		console.log(err);
	});

///////////////////////////////// EVENT HANDLING /////////////////////////////////

	// ADD A CATEGORY
  	lol.on('click', '.add_category_button', function(e) {
  		var new_category = new Category($(this).parent().find('input')[0].value, []);
  		hideAddContent($(this));

  		$.ajax({
		    url: `http://localhost:3000/board/${bid}/list/`,
		    type: "POST",
		    dataType : "json",
		    data: new_category
		})
		.done(function(json) {
			// addCategory(json, all_categories.length);
		})
		.fail(function(e) {
			console.log(e);
		});
  	});

	// DELETE A CATEGORY
  	lol.on('click', '.delete_category', function(e) {
		var index = $(this).parent().index();
		$.ajax({
			url: `http://localhost:3000/board/${bid}/list/${all_categories[index]._id}`,
			type: "DELETE",

		})
		.done(function() {
			// deleteCategory(index);
		})
		.fail(function(e) {
			console.log(e);
		});
  	});

	// ADD A CARD
  	lol.on('click', '.add_card_button', function(e) {
  		var category_index = $(this).parent().parent().index();
  		
		var new_card = {
	    	title: $(this).parent().find('input')[0].value,
	    	creator: user_email,
	    	description: ""
	    };

	    hideAddContent($(this));
  		$.ajax({
		    url: `http://localhost:3000/board/${bid}/list/${all_categories[category_index]._id}/card`,
		    type: "POST",
		    dataType : "json",
		    data: new_card
		})
		.done(function(json) {
			// addCard(json, category_index);
		})
		.fail(function(e) {
			console.log(e);
		});
  	});

  	// DELETE A CARD
	lol.on('click', '.delete_card', function(e) {
		var card_index = $(this).parent().index();
		var category_index = $(this).parent().parent().parent().index();
		e.stopPropagation();

		$.ajax({
			url: `http://localhost:3000/board/${bid}/list/${all_categories[category_index]._id}/card/${all_categories[category_index].cards[card_index]._id}`,
			type: "DELETE",

		})
		.done(function() {
			// deleteCard(category_index, card_index);
		})
		.fail(function(e) {
			console.log(e);
		});
  	});

  	// CARD AND CATEGORY DOM VIEW CONTROL
  	lol.on('click', '.add_content', function(e) {
  		showAddContent($(this));
  	});

  	lol.on('click', '.cancel_new_button', function(e) {
  		hideAddContent($(this));
  	});


	// CLICK ON CARD -- OPEN AND FILL CARD MODAL 
	lol.on('click', '.card_button', function(e) {
  		var category_index = $(this).parent().parent().index();
		var card_index = $(this).index();
		var card = all_categories[category_index].cards[card_index];
		$('#modal').attr('data-current-category', category_index);
		$('#modal').attr('data-current-card', card_index);

		$('#card_title').text(card.title);
		$('#category_name').text(all_categories[category_index].title);
		$('#text_description').text(card.description);
		$('#creator').text(card.creator);

		$('.card_label').remove();
		card.labels.forEach(function(l) {
			var new_label = $(`<li class="card_label">${l.name}</li>`);
			new_label.css('background-color', l.color);
			$('#add_label_btn').before(new_label);
		});

		$('#comment_list').empty();
		card.comments.forEach(function(e) {
			addComment(e);
		});

		if (card.labels.length < all_labels.length) {
			$('#add_label_btn').show();
		} else {
			$('#add_label_btn').hide();
		}
		$('#editable_description').hide();
		$('#add_comment').hide();
		$('#modal').show();
  	});

  	// Modal Control
  	$('#close_card, #modal_bg').on('click', function(e) {
  		$('#modal').hide();
  		hideEditDescription();
  	});

  	$('#description_cancel').on('click', function(e) {
  		hideEditDescription();
  	});

  	$('#description_edit_btn').on('click', function(e) {
  		showEditDescription();
  	});

  	$('#description_save').on('click', function(e) {
  		$('#editable_description').hide();
  		$('#description_edit_btn').show();
  		var text_desc = $('#text_description');
  		text_desc.show();
  		var textarea = $('#editable_description textarea');
  		text_desc.text(textarea.val());

  		var category_index = $('#modal').attr('data-current-category');
  		var card_index = $('#modal').attr('data-current-card');

		var card = all_categories[category_index].cards[card_index];
		card.description = textarea.val();

		$.ajax({
			url: `http://localhost:3000/board/${bid}/list/${all_categories[category_index]._id}/card/${all_categories[category_index].cards[card_index]._id}`,
			type: "PATCH",
			data: card,
		})
		.done(function(e) {

		})
		.fail(function(e) {
			console.log(e);
		});
  	});

  	$('#add_comment_btn').on('click', function(e) {
  		showAddComment();
  	});

  	$('#comment_cancel').on('click', function(e) {
  		hideAddComment();
  	});

  	$('#comment_save').on('click', function(e) {
  		var category_index = $(modal).attr('data-current-category');
  		var card_index = $(modal).attr('data-current-card');

		var card = all_categories[category_index].cards[card_index];
		var new_comment = {
			text: $('#add_comment textarea').val(),
			username: user_email,
			date: new Date()
		}

		card.comments.push(new_comment);
		addComment(new_comment);
		hideAddComment();

		$.ajax({
			url: `http://localhost:3000/board/${bid}/list/${all_categories[category_index]._id}/card/${all_categories[category_index].cards[card_index]._id}`,
			type: "PATCH",
			data: card,
		})
		.done(function (e) {

		})
		.fail(function(e) {
			console.log(e);
		});
  	});


  	$('#add_label_btn').on('mouseenter', function(e) {
  		var labels_to_add = [];
  		var card = all_categories[$(modal).attr('data-current-category')].cards[$(modal).attr('data-current-card')];
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
  		var curr_category = $('#modal').attr('data-current-category');
  		var curr_card = $('#modal').attr('data-current-card');
  		var card = all_categories[curr_category].cards[curr_card];

  		if(card.labels[0] === "") {
  			card.labels[0] = new Label($(this).text(), $(this).css('background-color'));
  		} else {
  			card.labels.push(new Label($(this).text(), $(this).css('background-color')));
  		}

  		var label_li = $(`<li class="card_label">${$(this).text()}</li>`);
  		label_li.css('background-color', $(this).css('background-color'));
  		$('#add_label_btn').before(label_li);

  		if (card.labels.length === all_labels.length) {
			$('#add_label_btn').hide();
		}

  		$('#labels_to_add').hide();
  		$('#label_plus_sign').show();

  		// var card_button_label = $('<li class="card_label">');
  		// card_button_label.css('background-color', $(this).css('background-color'));
  		// $('.category_li').eq(curr_category).find('.features').eq(curr_card).append(card_button_label);

  		$.ajax({
			url: `http://localhost:3000/board/${bid}/list/${all_categories[curr_category]._id}/card/${all_categories[curr_category].cards[curr_card]._id}`,
			type: "PATCH",
			data: card
		})
		.done(function(e) {

		})
		.fail(function(e) {
			console.log(e);
		});
  	});

 //  	// Side Menu Control

 	$('#add_user_btn').click(function(e){
 		$(this).hide();
 		$("#add_user").show();
 		$("#add_user_input").focus();
 	});

 	$('#user_cancel_button').click(function(e) {
 		$(this).parent().hide();
 		$("#add_user_input").val("");
 		$("#add_user_btn").show();
 	});

 	$("#user_add_button").click(function(e) {
 		var user = {email: $("#add_user_input").val()};

 		$(this).parent().hide();
 		$("#add_user_input").val("");
 		$("#add_user_btn").show();

 		$.ajax({
 			url: `http://localhost:3000/board/${bid}/user`,
 			type: "POST",
 			data: user
 		}).done(function(res) {
 			console.log(res);
 			// if (res === "complete") {
 			// 	var li = $(`<li class="user_li">${user.email}</li>`);
				// $('#users_ul').append(li);
 			// }
 		}).fail(function(err) {
 			console.log(err);
 		})
 	});

});





