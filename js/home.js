$(function () {


  /**
   * events
   */
   $("#steps-menu a").click(function(event) {
     // Replaces main content
     event.preventDefault();

     var step = $(this).attr("href");
     var stepWrap = $(this).closest("#steps");
     var stepMenu = $(this).closest("#steps-menu");
     var stepClass = step.charAt(6);

     $(this).parent().addClass("is-active");
     $(this).parent().siblings().removeClass("is-active");
     $(stepWrap).find(".step-content").not(step).css("display", "none");
     $(stepWrap).find(step).fadeToggle();

     // Rotates the wheel
     $(stepMenu).removeClass();
     $(stepMenu).addClass("step-" + stepClass);
   });

   $(".read-more").click(function(event) {
     // Replaces main content
     event.preventDefault();

     var step = $(this).attr("href");
     var stepWrap = $(this).closest("#steps");
     var stepMenu = $(stepWrap).find("#steps-menu");
     var stepClass = step.charAt(6);

     $(stepWrap).find(".step-content").not(step).css("display", "none");
     $(stepWrap).find(step).fadeToggle();

     // Set and rotates the wheel
     $(stepMenu).find("li:nth-child("+stepClass+")").addClass("is-active");
     $(stepMenu).find("li:nth-child("+stepClass+")").siblings().removeClass("is-active");
     $(stepMenu).removeClass();
     $(stepMenu).addClass("step-" + stepClass);
   });

  /**
   * plugins setup
   */
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
