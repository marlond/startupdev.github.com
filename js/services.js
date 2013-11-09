$(document).on('ready', function() {
	$('#landing').append('<div class="bg-cover"></div>');
	$('.who-we-are').append('<div class="bg-cover"></div>');

	// last and first child
	$(':last-child').addClass('last-child');
	$(':first-child').addClass('first-child');


	// with jQuery



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

  $("#Field4").focusout(function(){
    var phone, element;
    element = $(this);
    element.unmask();
    phone = element.val().replace(/\D/g, '');
    if(phone.length > 10) {
        element.mask("(99) 99999-999?9");
    } else {
        element.mask("(99) 9999-9999?9");
    }
  }).trigger('focusout');

});
