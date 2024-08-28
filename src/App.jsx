import React,  { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import './index.css';

function App() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
                method: 'GET',
                headers: {'X-Api-Key': 'XKmO1cLp4aRQ8tXEDEuFDA==ELoy4RneFSpcvUhR'},
            });
            const data = await response.json();
            const {quote, author} = data[0];
            setQuote(quote);
            setAuthor(author);
        } catch (error) {
            console.error('Error fetching quote', error);
        }
    }

    useEffect(() => {
        fetchQuote().catch(error => {
            console.error("Error in UseEffect", error);
        })
    }, []);

    const handleQuote = async () => {
       await fetchQuote();
    }

    const handleMode = () => {
        setDarkMode(!darkMode);
    }

    return(
        <div className={darkMode ? "dark-mode" : ''}>
            <div className="dark-mode-toggle" onClick={handleMode}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon } />
            </div>
            <div className="quote-box">
                <div>
                    <div className="quote-text">{quote}</div>
                    <div className="quote-author">{author}</div>
                </div>
                <div className="btn-group">
                    <button className="new-quote-btn" onClick={handleQuote}>New Quote</button>
                    <button className="tweet-quote-btn">
                        <a className="twitter-share-link"
                           href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quote} ${author}`}
                           id="tweet-quote"
                        >
                            <FontAwesomeIcon icon={faTwitter} /> Tweet
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App;
