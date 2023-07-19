// import React from 'react';
// import './App.css';
// import HouseRules from './components/HouseRules';
// import BoundarySetting from './components/BoundarySetting'; // Assuming the path is correct
// import HomePage from './components/HomePage'; // Assuming the path is correct
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/house-rules" element={<HouseRules />} />
//           <Route path="/boundary-setting" element={<BoundarySetting />} />
//           <Route path="/" element={<HomePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import HouseRules from './components/HouseRules';
// import BoundarySetting from './components/BoundarySetting';
// import ChoresTracker from './components/ChoresTracker';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/house-rules" component={HouseRules} />
//           <Route path="/boundary-setting" component={BoundarySetting} />
//           <Route path="/chores-tracker" component={ChoresTracker} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import HouseRules from './components/HouseRules';
import BoundarySetting from './components/BoundarySetting';
//import ChoresTracker_old from './components/ChoresTracker_old';
import ChoresTrackerConfig from './components/ChoresTracker';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/house-rules" element={<HouseRules />} />
          <Route path="/boundary-setting" element={<BoundarySetting />} />
          <Route path="/chores-tracker" element={<ChoresTrackerConfig />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

