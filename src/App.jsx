import React,  { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter} from "@fortawesome/free-brands-svg-icons";
import './index.css';

function App() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [newQuote, setNewQuote] = useState(false);

    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
            method: 'GET',
            headers: {'X-Api-Key': 'XKmO1cLp4aRQ8tXEDEuFDA==ELoy4RneFSpcvUhR'
            },
            contentType: 'application/json'})
            .then(response =>
                response.json())
            .then(json => {
                const { quote, author } = json[0];
                setQuote(quote);
                setAuthor(author);
            });
    }, []);

    useEffect(() => {
        if (newQuote) {
            fetch('https://api.api-ninjas.com/v1/quotes?category=computers', {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'XKmO1cLp4aRQ8tXEDEuFDA==ELoy4RneFSpcvUhR'
                },
                contentType: 'application/json'
            })
                .then(response =>
                    response.json())
                .then(json => {
                    const {quote, author} = json[0];
                    setQuote(quote);
                    setAuthor(author);
                });
            return () =>  setNewQuote(false);
        }
    }, [newQuote]);

    return(
        <div id="quote-box">
            <div>
                <div id="text">{quote}</div>
                <div id="author">{author}</div>
            </div>
            <button
                id="new-quote"
                onClick={() => setNewQuote(true)}
            >
                New Quote
            </button>
            <button className="tweet-quote">
                <a
                    className="twitter-share-button"
                    href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quote} ${author}`}
                    id="tweet-quote"
                >
                    <FontAwesomeIcon icon={faTwitter} /> Tweet
                </a>
            </button>
        </div>
    )
}

export default App;
