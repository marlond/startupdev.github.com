/**
 * base scripts file used on every page
 */
$(function () {

  /**
   * settings
   */
  var $window = $(window);
  var $header = $('#home-section');

  /**
   * change header class based on scroll position
   */
  function changeHeaderClass() {
    $header[ $window.scrollTop() > 100 ? 'addClass' : 'removeClass' ]('header--dark');
  }

  /**
   * Events
   */
  $window.on('scroll', changeHeaderClass).trigger('scroll');

  /**
   * plugins setup
   */
  // smooth scroll on header navigation items click
  $('.header-navigation').localScroll({
    duration: 1000,
    axis: 'y'
  });

  // remodal elements setup
  $('[data-remodal-id]').remodal();
});
