$(document).ready(function() {

  $("#tweet-text").on('input', function() {
    const count = $(this).parent().find(".counter");
    const currentCount = 140 - $(this).val().length;
    count.text(currentCount);
    if (currentCount < 0) {
      count.addClass("red-counter");
    } else {
      count.removeClass("red-counter");
    }
  });

});
