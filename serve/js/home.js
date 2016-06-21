$(document).on('ready', function() {
  $("#see-more").on('click', function(e) {
    e.preventDefault();

    $.scrollTo('#choose-service', 800);
  })
});