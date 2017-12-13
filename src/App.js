import React, { Component } from 'react';
import Keeper from './Keeper'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Brains Motel Keeper Track</h1>
        </header>
        <Keeper />
      </div>
    );
  }
}



export default App;
