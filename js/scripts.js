$(document).ready(function(){
  $('nav, .call-to-action').localScroll({
    duration: 1000,
    axis: 'y'
  });

  $("#menu li").hover(
    function(){
      var link = $(this).find("a");
      margin_left = link.css("margin-left");
      link.animate({
           marginLeft: '0',
      }, 500);
    },
    function(){
      $(this).find("a").animate({
          marginLeft: margin_left,
      }, 500);
    }
  );
  $("#testimonials .slider-container").jCarouselLite({
    btnNext: "#testimonial-next",
    btnPrev: "#testimonial-previous",
    visible: 1,
    speed: 1000
  });

  $("#developed-projects-slider div").jCarouselLite({
      btnNext: "#slider-next",
      btnPrev: "#slider-previous",
      visible: 1
  });
});
