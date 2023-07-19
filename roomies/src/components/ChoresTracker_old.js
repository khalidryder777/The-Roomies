// import React from 'react';

// function ChoresTracker() {
//     return (
//         <div>
//             <h1>Chores Tracker</h1>
//         </div>
//     );
// }

// export default ChoresTracker;


import React, { useState } from 'react';

const ChoresTracker = () => {
  const [bedrooms, setBedrooms] = useState(1);
  const [people, setPeople] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [framework, setFramework] = useState('Rotational');

  const handleBedroomChange = (event) => {
    setBedrooms(event.target.value);
  }

  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
  }

  const handleBathroomChange = (event) => {
    setBathrooms(event.target.value);
  }

  const handleFrameworkChange = (event) => {
    setFramework(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would typically call your backend API to save the configuration details
  }

  return (
    <div>
      <h1>Chores Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number of Bedrooms:
          <input type="number" value={bedrooms} onChange={handleBedroomChange} />
        </label>
        <br />
        <label>
          Number of People:
          <input type="number" value={people} onChange={handlePeopleChange} />
        </label>
        <br />
        <label>
          Number of Bathrooms:
          <input type="number" value={bathrooms} onChange={handleBathroomChange} />
        </label>
        <br />
        <label>
          Chore Distribution Framework:
          <select value={framework} onChange={handleFrameworkChange}>
            <option value="Rotational">Rotational</option>
            <option value="Random">Random</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ChoresTracker;
