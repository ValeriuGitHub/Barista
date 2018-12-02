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

// Gallery Slideshow

let width = $('.gallery-slider__list').width();
let itemWidth = width / $('.gallery-slider__item').length;
console.log(itemWidth);

let firstItem = $(".gallery-slider__item:first-child");
let firstItemOffsetRight = firstItem.offset().left + firstItem.outerWidth();
let secondItem = firstItem.next();
let thirdItem = secondItem.next();
let thirdItemOffsetLeft = thirdItem.offset().left;
console.log("offset 3 = " + thirdItemOffsetLeft);
console.log("offset 1 = " + firstItemOffsetRight);

function moveItemForward(item, itemWidth) {
    console.log("1 = " + item.offset().left);
	if (thirdItemOffsetLeft - itemWidth <= item.offset().left) {
		item.prependTo($(".gallery-slider__list"));
		console.log("1(1) = " + item.offset().left);
	} else {
    	item.css({
    		'margin-left':itemWidth
    	})
	}
}

// function moveItemBack(item, itemWidth) {
//     console.log("1 = " + item.offset().left + item.outerWidth());
// 	if (firstItemOffsetRight - itemWidth >= item.offset().left + item.outerWidth()) {
// 		item.appendTo($(".gallery-slider__list"));
// 		console.log("1(1) = " + item.offset().left + item.outerWidth());
// 	} else {
//     	item.css({
//     		'margin-left':-itemWidth
//     	})
// 	}
// }

function reseteMargin() {
	firstItem.css('margin-left', 0);
	secondItem.css('margin-left', 0);
	thirdItem.css('margin-left', 0);
	$(".gallery-slider__list").css('margin-left', 0);
}

function nextSlide() {
    $(".gallery-slider__list").animate({
      	'margin-left':-width
    },500, function() {
    	moveItemForward(firstItem, 0)
    	moveItemForward(secondItem, secondItem.width())
    	moveItemForward(thirdItem, 0)
    	reseteMargin()
    });
}

// function prevSlide() {
//     $(".gallery-slider__list").animate({
//       	'margin-left':-width
//     },500, function() {
//     	moveItemBack(firstItem, 0)
//     	moveItemBack(secondItem, secondItem.width())
//     	moveItemBack(thirdItem, 0)
//     	reseteMargin()
//     });
// }

$('.gallery-slider__ctrl-prev').on('click', function(e){
	e.preventDefault();
	prevSlide();
})

$('.gallery-slider__ctrl-next').on('click', function(e){
	e.preventDefault();
	nextSlide();
})
