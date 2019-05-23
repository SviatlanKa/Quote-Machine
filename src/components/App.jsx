import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter} from "@fortawesome/free-brands-svg-icons";
import Quote from './Quote.jsx';
import '../index.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            quote: '',
            author: ''
        };
    }

    getQuote() {
        fetch('http://quotes.stormconsultancy.co.uk/random.json', { method: 'GET'})
            .then(response => response.json())
            .then(json => {
              const { quote, author } = json;
              this.setState({ quote, author });
            })
        console.log('state', this.state);
    }
    componentDidMount() {
      this.getQuote();
    }

    render() {
        return (
            <div id="quote-box">
                <Quote
                    quote={this.state.quote}
                    author={this.state.author}
                />
                <button
                    id="new-quote"
                    onClick={() => this.getQuote()}
                >
                    New Quote
                </button>
                <button className="tweet-quote">
                    <a
                       className="twitter-share-button"
                       href={"https://twitter.com/intent/tweet?hashtags=quotes&text="
                       + this.state.quote + " " + this.state.author}
                       id="tweet-quote"
                    >
                        <FontAwesomeIcon icon={faTwitter} /> Tweet
                    </a>
                </button>
            </div>
        );
    }
}

export default App;
