import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoundarySetting from './components/BoundarySetting'; // Make sure the path is correct

function App() {
  return (
    <div className="App"> {/* The root container of the application */}
      <header className="App-header"> {/* The header section */}
        <img src={logo} className="App-logo" alt="logo" /> {/* Displaying the logo */}
        <p>
          Edit <code>src/App.js</code> and save to reload. {/* A message to instruct users to edit the file */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {/* A link to the React documentation */}
        </a>
      </header>
      <main>
        <BoundarySetting /> {/* Rendering the BoundarySetting component */}
      </main>
    </div>
  );
}

export default App;
