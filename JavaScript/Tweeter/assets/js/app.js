// Variables
const tweetList = document.getElementById("tweet-list");

// Event Listeners
eventListeners();

function eventListeners() {
  // Form Submission
  document.querySelector("#form").addEventListener("submit", newTweet);

  // remove tweet from the list
  tweetList.addEventListener("click", removeTweet);

  // document
  document.addEventListener("DOMContentLoaded", localStorageOnLoad);
}

// Functions

function newTweet(e) {
  e.preventDefault();

  // read the textarea value
  const tweet = document.getElementById("tweet").value;

  // create the remove button
  const removeBtn = document.createElement("a");
  removeBtn.classList = "remove-tweet";
  removeBtn.textContent = "X";

  // craete an <li> element
  const li = document.createElement("li");
  li.textContent = tweet;

  // add to the list
  li.appendChild(removeBtn);

  tweetList.appendChild(li);

  addTweetLocalStorage(tweet);

  alert('Tweet Added')
  this.reset()
}

// removes the tweets from the DOM
function removeTweet(e) {
  if (e.target.classList.contains("remove-tweet")) {
    e.target.parentElement.remove();
  }
  
  // remove from storage
  removeTweetLocalStorage(e.target.parentElement.textContent) 
}

// adds into the local storage
function addTweetLocalStorage(tweet) {
  let tweets = getTweetsFromStorage();

  // add the tweet into the array
  tweets.push(tweet);

  // convert tweet array into string
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// get items from local storage
function getTweetsFromStorage() {
  let tweets;
  const tweetsLocalStorage = localStorage.getItem("tweets");
  // get the values, if the null is returned then we create an empty array
  if (tweetsLocalStorage === null) {
    tweets = [];
  } else {
    tweets = JSON.parse(localStorage.getItem("tweets"));
  }
  return tweets;
}

// print local storage tweets on load
function localStorageOnLoad() {
  let tweets = getTweetsFromStorage();

  tweets.forEach(function (tweet) {
    // create the remove button
    const removeBtn = document.createElement("a");
    removeBtn.classList = "remove-tweet";
    removeBtn.textContent = "X";

    // craete an <li> element
    const li = document.createElement("li");
    li.textContent = tweet;

    // add to the list
    li.appendChild(removeBtn);

    tweetList.appendChild(li);
  });
}

function removeTweetLocalStorage(tweet) {
    // get tweets from storage
    let tweets = getTweetsFromStorage()

    // remove X from the tweet
    const tweetDelete = tweet.substring(0, tweet.length - 1)

    tweets.forEach(function(tweetLocalStorage, index) {
        if (tweetDelete === tweetLocalStorage) {
            tweets.splice(index, 1)
        }
    })

    // save the data
    localStorage.setItem('tweets', JSON.stringify(tweets))
}