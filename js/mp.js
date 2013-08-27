$(document).on('ready', function() {
	$('#landing').append('<div class="bg-cover"></div>');
	$('.who-we-are').append('<div class="bg-cover"></div>');

	// last and first child
	$(':last-child').addClass('last-child');
	$(':first-child').addClass('first-child');

	$('.testimonials ul li:nth-child(2n)').addClass('n2');

	// with jQuery
	$('.testimonials ul').masonry({
	  columnWidth: 480,
	  itemSelector: 'li'
	});


	$('#projects_gallery ul')
	.after('<a href="#" id="projects_gallery_prev"></a>')
	.after('<a href="#" id="projects_gallery_next"></a>')
	.cycle({
		'pause': 1,
		'timeout': 8000,
		'prev': '#projects_gallery_prev',
		'next': '#projects_gallery_next'
	});


	$('#testimonials_gallery ul')
	.after('<a href="#" id="testimonials_gallery_prev"></a>')
	.after('<a href="#" id="testimonials_gallery_next"></a>')
	.cycle({
		'pause': 1,
		'timeout': 8000,
		'prev': '#testimonials_gallery_prev',
		'next': '#testimonials_gallery_next'
	});


	$('.other-services').click(function(e) {
		e.preventDefault();

		$('#other-services').slideToggle();
	});

	$('.more .bt').on('click',function (e) {
	    e.preventDefault();

	    $('html, body').stop().animate({
	        'scrollTop': $('.contact').offset().top
	    }, 900, 'swing');
	});


	$('#nav').smint();

	Shadowbox.init();
});

