// Variables
const tweetList = document.getElementById('tweet-list')

// Event Listeners
eventListeners()

function eventListeners() {
    // Form Submission
    document.querySelector('#form').addEventListener('submit', newTweet)

    // remove tweet from the list
    tweetList.addEventListener('click', removeTweet)
}

// Functions

function newTweet(e) {
    e.preventDefault();
    
    // read the textarea value
    const tweet = document.getElementById('tweet').value

    // create the remove button
    const removeBtn = document.createElement('a')
    removeBtn.classList = 'remove-tweet'
    removeBtn.textContent = 'X'

    // craete an <li> element
    const li = document.createElement('li')
    li.textContent = tweet

    // add to the list
    li.appendChild(removeBtn)

    tweetList.appendChild(li)

    addTweetLocalStorage(tweet);

}

// removes the tweets from the DOM
function removeTweet(e) {
    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove()
    }
}

// adds into the local storage
function addTweetLocalStorage(tweet) {
    let tweets = getTweetsFromStorage()
}

// get items from local storage
function getTweetsFromStorage() {
    let tweets;
    const tweetsLocalStorage = localStorage.getItem('tweets')
    // get the values, if the null is returned then we create an empty array
    if (tweetsLocalStorage === null) {
        tweets = []
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'))
    }
    return tweets
}
