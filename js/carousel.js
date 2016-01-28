$(document).ready(function() {
  $("#steps-menu a").click(function(event) {
    // Replaces main content
    event.preventDefault();
    $(this).parent().addClass("is-active");
    $(this).parent().siblings().removeClass("is-active");
    var step = $(this).attr("href");
    $(".step-content").not(step).css("display", "none");
    $(step).fadeToggle();

    // Rotates the wheel
    $("#steps-menu").removeClass();
    var stepClass = step.charAt(6);
    $("#steps-menu").addClass("step-" + stepClass);
  });

  $(".read-more").click(function(event) {
    // Replaces main content
    event.preventDefault();
    var step = $(this).attr("href");
    $(".step-content").not(step).css("display", "none");
    $(step).fadeToggle();

    // Set and rotates the wheel
    var stepClass = step.charAt(6);
    $("#link"+stepClass).parent().addClass("is-active");
    $("#link"+stepClass).parent().siblings().removeClass("is-active");
    $("#steps-menu").removeClass();
    $("#steps-menu").addClass("step-" + stepClass);
  });
});