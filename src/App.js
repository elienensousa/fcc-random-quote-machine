
import './App.css';
import React, {Component} from 'react';
import quotes from './QuoteDB';
  
  
  export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        phrase: '',
        author: ''
      };  
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      let  randomNum = () => Math.floor(Math.random() * quotes.length)
      let num = randomNum()
      // Change code below this line
      this.setState({
        phrase: quotes[num].phrase,
        author: '- '+quotes[num].author
      })
      // Change code above this line
    }
    render() {
      return (
        
        <div className="wrapper">
           <div id = "quote-box">
            <div id = "text">
              <p>{this.state.phrase}</p> 
            </div>
            <div id ="author">
              <p>{this.state.author}</p>
              </div>
          
             <div className='bottons'>
              <button id ="new-quote" className="newQuote" onClick={this.handleClick}> New Quote</button>
              <button className="tQuote"><a rel="noreferrer" id ="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text="${this.state.phrase}" — ${this.state.author}`}> <i className="fab fa-twitter"></i>Twitter</a> </button>
              </div>
          </div>
        </div>
        
      );
    }
  };



