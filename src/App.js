import "./App.css";
import { useState, useEffect } from "react";

const data = require("./data/quotes.json");

const initialValues = data[Math.floor(Math.random() * 499)];

function App() {
  const [quote, setQuote] = useState(initialValues);

  function handleRefresh() {
    setQuote((prevQuote) => {
      let newQuote = data[Math.floor(Math.random() * 499)];
      while (newQuote._id === prevQuote._id) {
        newQuote = data[Math.floor(Math.random() * 499)];
      }
      return newQuote;
    });
  }



  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <div id="quote-box">
        <h2 id="text" key={quote._id}>
          {quote.content}
        </h2>
        <h3 id="author" key={quote.authorId}>
          {quote.author}
        </h3>
        <div id="button-block">
          <button id="new-quote" onClick={handleRefresh}>
            <p>New quote</p>
          </button>
          <button >
            <a
              id="tweet-quote"
              href="https://twitter.com/intent/tweet"
              data-text={quote.text}
              data-size="large"
              target="_blank"
              data-hashtags={quote.tags}
              
            >
              <p>Tweet</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
