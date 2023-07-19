// import React, { useState } from 'react';

// const ChoresTrackerConfig = () => {
//     const [bedrooms, setBedrooms] = useState(1);
//     const [people, setPeople] = useState(1);
//     const [bathrooms, setBathrooms] = useState(1);
//     const [framework, setFramework] = useState('Rotational');

//     const handleBedroomChange = (event) => {
//         setBedrooms(event.target.value);
//     }

//     const handlePeopleChange = (event) => {
//         setPeople(event.target.value);
//     }

//     const handleBathroomChange = (event) => {
//         setBathrooms(event.target.value);
//     }

//     const handleFrameworkChange = (event) => {
//         setFramework(event.target.value);
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // TODO: Save the configuration somewhere and navigate to the main Maintenance page.
//     }

//     return (
//         <div>
//             <h1>Chores Tracker</h1>
//             <h3>Hey Jon Do! Please select your home configuration:</h3>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Number of Bedrooms:
//                     <select value={bedrooms} onChange={handleBedroomChange}>
//                         <option value={1}>1</option>
//                         <option value={2}>2</option>
//                         <option value={3}>3</option>
//                     </select>
//                 </label>
//                 <label>
//                     Number of People:
//                     <select value={people} onChange={handlePeopleChange}>
//                         <option value={1}>1</option>
//                         <option value={2}>2</option>
//                         <option value={3}>3</option>
//                         <option value={4}>4</option>
//                         <option value={5}>5</option>
//                     </select>
//                 </label>
//                 <label>
//                     Number of Bathrooms:
//                     <select value={bathrooms} onChange={handleBathroomChange}>
//                         <option value={1}>1</option>
//                         <option value={2}>2</option>
//                         <option value={3}>3</option>
//                         <option value={4}>4</option>
//                     </select>
//                 </label>
//                 <label>
//                     Chore Distribution Framework:
//                     <select value={framework} onChange={handleFrameworkChange}>
//                         <option value="Rotational">Rotational</option>
//                         {/* Add more options as needed */}
//                         <option value="Specialist">Specialist</option>
//                         <option value="Proportional">Proportional</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     );
// }

// export default ChoresTrackerConfig;


// import React, { useState } from 'react';

// const ChoresTrackerConfig = () => {
//     const [bedrooms, setBedrooms] = useState(1);
//     const [people, setPeople] = useState(1);
//     const [bathrooms, setBathrooms] = useState(1);
//     const [framework, setFramework] = useState('Rotational');

//     const handleBedroomChange = (event) => {
//         setBedrooms(Number(event.target.value));
//         setPeople(1);
//         setBathrooms(1);
//     }

//     const handlePeopleChange = (event) => {
//         setPeople(event.target.value);
//     }

//     const handleBathroomChange = (event) => {
//         setBathrooms(event.target.value);
//     }

//     const handleFrameworkChange = (event) => {
//         setFramework(event.target.value);
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // TODO: Save the configuration somewhere and navigate to the main Maintenance page.
//     }

//     let peopleOptions = [<option value={1}>1</option>, <option value={2}>2</option>];
//     let bathroomOptions = [<option value={1}>1</option>, <option value={2}>2</option>];

//     if (bedrooms === 2) {
//         peopleOptions.push(<option value={3}>3</option>, <option value={4}>4</option>);
//         bathroomOptions.push(<option value={3}>3</option>);
//     }

//     if (bedrooms === 3) {
//         peopleOptions.push(<option value={3}>3</option>, <option value={4}>4</option>, <option value={5}>5</option>);
//         bathroomOptions.push(<option value={3}>3</option>, <option value={4}>4</option>);
//     }

//     return (
//         <div>
//             <h1>Chores Tracker</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Number of Bedrooms:
//                     <select value={bedrooms} onChange={handleBedroomChange}>
//                         <option value={1}>1</option>
//                         <option value={2}>2</option>
//                         <option value={3}>3</option>
//                     </select>
//                 </label>
//                 <label>
//                     Number of People:
//                     <select value={people} onChange={handlePeopleChange}>
//                         {peopleOptions}
//                     </select>
//                 </label>
//                 <label>
//                     Number of Bathrooms:
//                     <select value={bathrooms} onChange={handleBathroomChange}>
//                         {bathroomOptions}
//                     </select>
//                 </label>
//                 <label>
//                     Chore Distribution Framework:
//                     <select value={framework} onChange={handleFrameworkChange}>
//                         <option value="Rotational">Rotational</option>
//                         {/* Add more options as needed */}
//                         <option value="Specialist">Specialist</option>
//                         <option value="Proportional">Proportional</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     );
// }

// export default ChoresTrackerConfig;

import React, { useState } from 'react';

const ChoresTrackerConfig = () => {
    const [bedrooms, setBedrooms] = useState(1);
    const [people, setPeople] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [framework, setFramework] = useState('Rotational');

    const handleBedroomChange = (event) => {
        setBedrooms(Number(event.target.value));
        if (event.target.value === "2" || event.target.value === "3") {
            setPeople(2);
        } else {
            setPeople(1);
        }
        setBathrooms(1);
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
        // TODO: Save the configuration somewhere and navigate to the main Maintenance page.
    }

    let peopleOptions = [];
    let bathroomOptions = [<option value={1}>1</option>, <option value={2}>2</option>];

    if (bedrooms === 1) {
        peopleOptions = [<option value={1}>1</option>, <option value={2}>2</option>];
    }

    if (bedrooms === 2) {
        peopleOptions = [<option value={2}>2</option>, <option value={3}>3</option>, <option value={4}>4</option>];
        bathroomOptions.push(<option value={3}>3</option>);
    }

    if (bedrooms === 3) {
        peopleOptions = [<option value={2}>2</option>, <option value={3}>3</option>, <option value={4}>4</option>, <option value={5}>5</option>];
        bathroomOptions.push(<option value={3}>3</option>, <option value={4}>4</option>);
    }

    return (
        <div>
            <h1>Chores Tracker</h1>
            <h3>Hey Jon Do! Please select your home configuration:</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Number of Bedrooms:
                    <select value={bedrooms} onChange={handleBedroomChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </label>
                <label>
                    Number of People:
                    <select value={people} onChange={handlePeopleChange}>
                        {peopleOptions}
                    </select>
                </label>
                <label>
                    Number of Bathrooms:
                    <select value={bathrooms} onChange={handleBathroomChange}>
                        {bathroomOptions}
                    </select>
                </label>
                <label>
                    Chore Distribution Framework:
                    <select value={framework} onChange={handleFrameworkChange}>
                        <option value="Rotational">Rotational</option>
                        {/* Add more options as needed */}
                        <option value="Specialist">Specialist</option>
                        <option value="Proportional">Proportional</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default ChoresTrackerConfig;

