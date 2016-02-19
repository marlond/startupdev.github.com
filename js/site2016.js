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
  var $menuItem = $('.header-navigation__item');

  $btnMenu.on('click', function(e) {
    e.preventDefault();
    $btnMenu.toggleClass('toggle--close');
    $navbar.toggleClass('header-navigation--is-open');
  });
  $menuItem.on('click', function(e) {
    $navbar.removeClass('header-navigation--is-open');
    $btnMenu.toggleClass('toggle--close');
  });

  // Hash links
  //---------------------------------------------------------------
  $('a.hash').click(function (event) {
    event.preventDefault();
    if(history.pushState) {
      history.pushState(null, null, $(this).attr('href'));
    }
    return false;
  });

});
