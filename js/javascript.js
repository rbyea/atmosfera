(function () {
	$(document).ready(function () {
		$('.work-content__slider').slick({
			infinite: true,
			slidesToShow: 3,
			prevArrow: '<div class="prev"><i class="fas fa-arrow-right"></i></div>',
			nextArrow: '<div class="next"><i class="fas fa-arrow-left"></i></div>',
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1284,
					settings: {
						slidesToScroll: 1,
						slidesToShow: 2,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 864,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});
})();


$(document).ready(function () {
	$('#humburger').on('click', function () {
		$('.header-content__navbar-mobile').toggleClass('header-menu_vis');
	});
	$('.header-mobile__window-box').on('click', function () {
		$('.header-content__navbar-mobile').toggleClass('header-menu_vis');
	});
});


$(document).ready(function () {
	$('.btn-open').on('click', function () {
		$('.modal').toggleClass('modal-vis');
	});
	$('.modal-window__close').on('click', function () {
		$('.modal').toggleClass('modal-vis');
	});
});

$("#back-top").hide();

$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$("#back-top").fadeIn();
	} else {
		$("#back-top").fadeOut();
	}
});


$("#back-top a").click(function () {
	$("html").animate({
		scrollTop: 0
	}, 1000);
	return false;
});


	//всплывающее описание, через 1 минуту
$('.warning').fadeOut().delay(60000).fadeIn();

$("body").on('click', '[href*="#"]', function (e) {
	var fixed_offset = 100;
	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	e.preventDefault();
});


var wow = new WOW(
	{
		boxClass: 'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0,          // distance to the element when triggering the animation (default is 0)
		mobile: true,       // trigger animations on mobile devices (default is true)
		live: true,       // act on asynchronously loaded content (default is true)
		callback: function (box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null,    // optional scroll container selector, otherwise use window,
		resetAnimation: true,     // reset animation on end (default is true)
	}
);
wow.init();


$(document).ready(function () {
	$('#btn-rev').on('click', function () {
		$('.modal-2').toggleClass('modal-vis-2');
	});
	$('.modal-window__close-2').on('click', function () {
		$('.modal-2').toggleClass('modal-vis-2');
	});
});

$(document).ready(function(){
	$("#phone-two").mask("+7 (999) 99-99-999");
	$("#phone-three").mask("+7 (999) 99-99-999");
});
