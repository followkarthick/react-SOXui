import React, { Component } from 'react';
import ReactDOM,{ render } from 'react-dom';
import Main from "./Main";
import "./index.css";
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Main/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
