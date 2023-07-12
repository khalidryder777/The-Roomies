import React from 'react';
import './App.css';
import ChoresTracker from './components/ChoresTracker';
import BillSplitter from './components/BillSplitter';
import HouseRules from './components/HouseRules';
import Fun from './components/Fun';
import ChitChat from './components/ChitChat';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/house-rules">
            <HouseRules />
          </Route>
          <Route path="/boundary-setting">
            <BoundarySetting />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
