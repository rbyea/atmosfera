(function () {
	$(document).ready(function () {
		$('.work-content__slider').slick({
			infinite: true,
			slidesToShow: 3,
			prevArrow: '<div class="prev"><i class="fas fa-arrow-right"></i></div>',
			nextArrow: '<div class="next"><i class="fas fa-arrow-left"></i></div>',
			slidesToScroll: 1
		});
	});
})();

$(document).ready(function () {
	jQuery("a.colorbox").colorbox({
	});
});

$("a.colorbox").colorbox({
	rel: 'gal', title: function () {
		var url = $(this).attr('href');
	}
});