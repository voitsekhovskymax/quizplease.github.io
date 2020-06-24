$(document).ready(function () {
	console.log("ready!");
	
	
	var state_menu = false;
	$(".city-drop-main").click(function () {
		state_menu = !state_menu;
		var list = $(this).children(".main-city-droplist");
		if (!state_menu)
			list.addClass("w--open");
		else
			list.removeClass("w--open");
	});
	
	
	
	
	var owl = $(".owl-carousel.schedule-carousel").owlCarousel({
		loop: false,
		margin: 10,
		center: true,
		stagePadding: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});
	
	$(".owl-filter-bar").on("click", ".owl-filter-bar-item", function () {
		
		var $item = $(this);
		
		var filter = $item.data("owl-filter");
		
		owl.owlcarousel2_filter(filter);
		
		$(".owl-filter-bar-item").removeClass("active");
		
		$item.addClass("active");
		
		
	});
	
	
	var owl2 = $(".owl-carousel.insta-slider").owlCarousel({
		loop: false,
		margin: 10,
		center: true,
		// stagePadding: 30,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});
	
	var owl3 = $(".owl-carousel.question-examples-slider").owlCarousel({
		loop: false,
		margin: 10,
		center: true,
		// stagePadding: 30,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	});
	
	$(".faq-collapse .question").click(function () {
		$(this).toggleClass("open");
		$(this).next().slideToggle();
	});
	
	
});
