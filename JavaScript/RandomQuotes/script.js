window.onload = function() {
    const quoteButton = document.getElementById('quote-button')
    const quoteHolder = document.getElementById('quote-holder')

    quoteButton.onclick = function() {
        console.log('test')
        quoteRandomizer()
    }

    const quoteRandomizer = () => {
        return quoteHolder.innerHTML = quotes[Math.floor(Math.random() * 3)]
    }

    let quotes = [
        'Here we go bbbb', 
        'Awww yis',
        'Looky look'
    ]
}   