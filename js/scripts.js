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
  $window
    .on('scroll', changeHeaderClass)
    .trigger('scroll');

  /**
   * plugins setup
   */
  // smooth scroll on header navigation items click
  $('.header-navigation').localScroll({
    duration: 1000,
    axis: 'y'
  });

  // fancybox setup
  $('.fancybox').fancybox({
    width: 650,
    height: 488,
    scrolling: 'no',
    autoScale: false,
    transitionIn: 'none',
    transitionOut: 'none',
    type: 'iframe',
    overlayColor: '#000000',
    overlayOpacity: 0.6
  });

  // testimonials slider
  $('#testimonials .slider-container').jCarouselLite({
    btnNext: '#testimonial-next',
    btnPrev: '#testimonial-previous',
    visible: 1,
    speed: 1000,
    beforeStart: function (e) {
      var $e = $(e);
      var visible = { opacity: 100 };

      $e.animate({ opacity: 0 });
      $e.prev().css(visible);
      $e.next().css(visible);
    }
  });
});
