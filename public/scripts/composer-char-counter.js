$(document).ready(function() {

  $("#tweet-text").on('keyup', function() {
    const count = $(this).parent().find(".counter")
    count.text(140 - $(this).val().length)
  });
});
