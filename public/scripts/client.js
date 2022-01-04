/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//Take content from mock tweet database and create HTML tweet elements
const createTweetElements = function(tweet) {

  let $tweet =
  `<article class="user-tweet">
  <header>
    <span>
      <img src="${tweet['user']['avatars']}" width="30px;" height="21.8px;">
      ${tweet["user"]["name"]}
    </span>
    <span>${tweet["user"]["handle"]}</span>
  </header>
  <p>${tweet["content"]["text"]}</p>
  
  <footer>
    <span>${timeago.format(tweet["created_at"])}</span>
    <div class="icons">
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-heart"></i>
  </div>
  </footer>
</article>`;
  return $tweet;
};

//loop through fake db and append new node for each tweet
const renderData = function(array) {
  for (let tweet of array) {
    $("#tweet-container").append(createTweetElements(tweet));
  }
};

const clearTweets = function() {
  $("#tweet-container").empty();
}

//Calling renderData function
$(document).ready(function() {

  $('#post-tweet').submit(function(event) {
    event.preventDefault();
    if ($('#tweet-text').val() === "" || $('#tweet-text').val() === null) {
      alert("Tweet must not be blank.");
    } else if ($('#tweet-text').val().length > 140) {
      alert("Tweet must be fewer than 140 characters.");
    } else {
      const data = $(this).serialize();
      console.log(data);
      $.ajax({
        url: "/tweets",
        method: "POST",
        data
      })
        .then(function() {
          clearTweets();
          loadTweets();
        });
    }
  });
    
  const loadTweets = function() {
    $.ajax({
      url: "/tweets",
      method: "GET"
    })
      .then(function(tweets) {
        renderData(tweets);
      });
  };

  loadTweets();
});