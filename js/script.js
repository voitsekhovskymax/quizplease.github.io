$(document).ready(function () {
	console.log("ready!");
	
	// City Selector
	var state_menu = false;
	$(".city-drop-main").click(function () {
		state_menu = !state_menu;
		var list = $(this).children(".main-city-droplist");
		if (!state_menu)
			list.addClass("w--open");
		else
			list.removeClass("w--open");
	});
	
	
	// Menu
	
	$(".hamburger-menu, .menu-navbar .close").click(function () {
		$(".menu-navbar").toggleClass("open");
	});

	// Schedule Carousel
	let stagePadding = 30;
	let center = true;
	if (window.innerWidth > 992) {
		center = false;
		stagePadding = 0;
	}
	
	var owl = $(".owl-carousel.schedule-carousel").owlCarousel({
		loop: false,
		margin: 10,
		center: center,
		nav: true,
		
		stagePadding: stagePadding,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 3
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
	
	// Instagram Carousel
	var owl2 = $(".owl-carousel.insta-slider").owlCarousel({
		loop: false,
		// margin: 10,
		center: false,
		nav: true,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 2
			}
		}
	});
	
	// Questions Carousel
	var owl3 = $(".owl-carousel.question-examples-slider").owlCarousel({
		loop: false,
		margin: 10,
		center: true,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});
	
	//Faq Toogles
	$(".faq-collapse .question").click(function () {
		$(this).toggleClass("open");
		$(this).next().slideToggle();
	});
	
	// Modal Window
	
	$(".video-instruction-box-lg, .video-instruction-box ").on("click", function () {
		console.log(".video-instruction-box-lg Click");
		var video_wrapper = $(".youtube-video-place");
		
		if (video_wrapper.length) {
			video_wrapper.html("<iframe width='100%' height='100%' allowfullscreen frameborder='0'" +
				" class='embed-responsive-item'" +
				" src='" + video_wrapper.data("yt-url") + "'></iframe>");
		}
		
		
		
		$(".popup, .popup-content").addClass("active");
	});
	
	$(".close, .popup").on("click", function () {
		$("iframe").attr("src", $(this).find("iframe").attr("src"));
		
		$(".popup, .popup-content").removeClass("active");
	});
	
	
	
	
});
