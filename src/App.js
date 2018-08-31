import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from './components/Keypad/Keypad'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Calculator</h1>
        </header>
          <Keypad/>
        
      </div>
    );
  }
}

export default App;
