$(document).ready(function() {

  console.log("jquery active");

  $("#tweet-text").on('keyup', function() {
    console.log($(this).val().length);
  });
});
