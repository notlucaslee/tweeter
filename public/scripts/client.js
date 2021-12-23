/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//fake temp db
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

//Take content from mock tweet database and create HTML tweet elements
const createTweetElements = function(tweet) {

  let $tweet = 
  `<article class="tweet-container">
  <header>
    <span>
      <img src="${tweet['user']['avatars']}" width="30px;" height="21.8px;">
      ${tweet["user"]["name"]}
    </span>
    <span>${tweet["user"]["handle"]}</span>
  </header>
  <p>${tweet["content"]["text"]}</p>
  
  <footer>
    <span>${tweet["created_at"]}</span>
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
    $(".container").append(createTweetElements(tweet));
  }
}

//Calling renderData function
$(document).ready(function() {
  renderData(data);
})