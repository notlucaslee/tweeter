$(document).ready(function() {

  $("#tweet-text").on('keyup', function() {
    console.log($(this).val().length);
  });
});
