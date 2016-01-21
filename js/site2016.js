$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});

$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    pager: false,
    nextSelector: '.slider-testimonial__next',
    prevSelector: '.slider-testimonial__prev',
    nextText: 'Próximo',
    prevText: 'Anterior'
  });
});

