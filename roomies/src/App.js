import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoundarySetting from './components/BoundarySetting'; // Make sure the path is correct
import HouseRules from './components/HouseRules'; // Make sure the path is correct


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        {/* Boundary Setting is meant to include a series of prompts whose goal is to calm the user, and to understand the basis of the conflict from both parties */}
        <BoundarySetting />
        {/*  HouseRules includes CRUD operations for our app */}
        <HouseRules />  {/* New line for HouseRules */}
      </main>
    </div>
  );
}

export default App;
