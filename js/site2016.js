$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    pager: false,
    nextSelector: '.slider-testimonial__next',
    prevSelector: '.slider-testimonial__prev',
    nextText: 'Próximo',
    prevText: 'Anterior',
    adaptiveHeight: true,
    responsive: true
  });
});

$(function() {

  // Hamburger mobile menu
  //---------------------------------------------------------------
  var $btnMenu = $('.js-toggle-menu');
  var $navbar  = $('.js-navbar');

  $btnMenu.on('click', function(e) {
    e.preventDefault();
    $btnMenu.toggleClass('toggle--close');
    $navbar.toggleClass('header-navigation--is-open');
  });

});
