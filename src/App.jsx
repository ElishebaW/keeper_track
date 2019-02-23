import React, { Component } from 'react';
import Keeper from './Keeper'


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HouseKeeper Tracker</h1>
        </header>
        <Keeper />
      </div>
    );
  }
}



export default App;
