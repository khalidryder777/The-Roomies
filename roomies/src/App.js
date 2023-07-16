import React from 'react';
import './App.css';
import HouseRules from './components/HouseRules';
import BoundarySetting from './components/BoundarySetting';
import HomePage from './components/HomePage';
import BillSplitter from './components/BillSplitter/BillSplitter';  // Assuming the path is correct
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/house-rules" element={<HouseRules />} />
          <Route path="/boundary-setting" element={<BoundarySetting />} />
          <Route path="/bill-splitter" element={<BillSplitter />} />  
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
