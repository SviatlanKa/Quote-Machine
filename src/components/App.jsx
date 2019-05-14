import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import Quote from './Quote.jsx';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
            author: ''
        };
    }
    render() {
        return (
            <div id="quote-box">
                <Quote
                    text={this.state.text}
                    author={this.state.author}
                />
                <button id="new-quote">
                    New Quote
                </button>
                <button id="tweet-quote">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                </button>
            </div>
        );
    }
}

export default App;