// Anchor animation

$("a[href^='#']").on('click', function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({scrollTop: top}, 1500);
})

// Tab

$(".program-tab__inner-status").not(":first").hide();

$(".program-tab__item").each(function(i){
	$(this).attr('data-tab', 'tab'+ i)
});
$(".program-tab__inner-status").each(function(i){
	$(this).attr('data-tab', 'tab'+ i)
});

$(".program-tab__item").on('click', function(e){
	e.preventDefault();
	let dataTab = $(this).data('tab');
	$(".program-tab__item").removeClass('program-tab__item_active');
	$(this).addClass('program-tab__item_active');
	$(".program-tab__inner-status").hide();
	$(".program-tab__inner-status").filter('[data-tab='+dataTab+']').fadeIn(500);
});

// Anchor-top

let headerOffset = $(".header").height();
$(window).scroll(function() {
	let scrollPos = $(window).scrollTop();
	if (scrollPos >= headerOffset) {
		$(".ancher-top").addClass("ancher-top_active");
	} else {
		$(".ancher-top").removeClass("ancher-top_active");
	}
})

// Gallery SLide

let	totalAmount = $('.gallery-slider__item').length;
$("#total-amount").text(totalAmount);

var $counter = $('#counter');
var $slickElement = $('.gallery-slider__list');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$counter.text(i);
});

$('.gallery-slider__list').slick({
	infinite: true,
	slidesToScroll: 1,
	centerMode: true,
	variableWidth: true,
	adaptiveHeight: true,
	prevArrow: $('#gallery-prev'),
	nextArrow: $('#gallery-next'),
	responsive: [
		{
			breakpoint: 1025,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				infinite: true,
				dots: true
			}
		}
	]
});

// Testimonials slider

$('.main-slider__list').slick({
	prevArrow: $('#slider__ctrl-wrapper_left'),
	nextArrow: $('#slider__ctrl-wrapper_right'),
	dots: true,
	dotsClass: "my-dots",
});

// Partners slider

$('.partners__list').slick({
	prevArrow: $('#partners-left'),
	nextArrow: $('#partners-right'),
	infinite: true,
	slidesToShow: 6,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});