$( document ).ready(function() {
	console.log( "ready!" );
	
	
	var state_menu = false;
	$('.city-drop-main').click(function () {
		state_menu = !state_menu;
		var list = $(this).children('.main-city-droplist');
		if(!state_menu)
			list.addClass('w--open');
		else
			list.removeClass('w--open');
	})
});
