	// Anchor animation

$("a[href^='#']").on('click', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
})

	// Tab

$(".program-tab__inner-status").not(":first").hide();

	// Set attribute data-tab

$(".program-tab__item").each(function(i){
	$(this).attr('data-tab', 'tab'+ i)
});
$(".program-tab__inner-status").each(function(i){
	$(this).attr('data-tab', 'tab'+ i)
});

$(".program-tab__item").on('click', function(e){
	e.preventDefault();
	let dataTab = $(this).data('tab');
	// Change menu
	$(".program-tab__item").removeClass('program-tab__item_active');
	$(this).addClass('program-tab__item_active');
	// Change content of tabs
	$(".program-tab__inner-status").hide();
	$(".program-tab__inner-status").filter('[data-tab='+dataTab+']').show();
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

