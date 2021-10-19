import React, { useEffect, useState } from "react";
import "./App.scss";
import colorsArray from "./colorsArray";

function App() {
  const [quote, setQuote] = useState("Doobidy doo");
  const [author, setAuthor] = useState("Jesus");
  const [randomNumber, setRandomNumber] = useState();
  const [quotesArray, setQuotesArray] = useState(null);
  const [accentColor, setAccentColor] = useState("#d23f97");

  const quoteDBURL =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json();
    setQuotesArray(parsedJSON.quotes);
    console.log(parsedJSON.quotes);
  };

  useEffect(() => {
    fetchQuotes(quoteDBURL);
  }, [quoteDBURL]);

  const generateRandomNumber = () => {
    let randomInteger = Math.floor(quotesArray.length * Math.random());
    setRandomNumber(randomInteger);
    setAccentColor(colorsArray[randomInteger]);
    setQuote(quotesArray[randomInteger].quote);
    setAuthor(quotesArray[randomInteger].author);
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ background: accentColor, color: accentColor }}
      >
        <div id="quote-box">
          <p id="text" style={{ color: accentColor }}>
            <p id="quote">{quote}</p>
            <p id="author">{author}</p>
          </p>
          <a
            style={{ background: accentColor }}
            id="tweet-quote"
            href={encodeURI(
              `twitter.com/intent/tweet?text=${quote} - ${author}`
            )}
          >
            Tweet Quote
          </a>
          <button
            style={{ background: accentColor }}
            id="new-quote"
            onClick={() => generateRandomNumber()}
          >
            Change Quote
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
