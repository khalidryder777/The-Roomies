import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homepage"> {/* Root container for the homepage */}
            <header className="homepage-header"> {/* Header section */}
                <img src="../assets/logo.png" alt="Roomies Logo"/> {/* Displaying the Roomies logo */}
                <h1>Welcome to Roomies!</h1> {/* Heading */}
            </header>
            <div className="homepage-buttons"> {/* Container for the buttons */}
                <button className="button">Chores Tracker</button> {/* Button for chores tracker */}
                <button className="button">Bill Splitter</button> {/* Button for bill splitter */}
                <button className="button">House Rules</button> {/* Button for house rules */}
                <button className="button">Fun</button> {/* Button for fun activities */}
                <button className="button">Chit-Chat</button> {/* Button for chit-chat */}
            </div>
        </div>
    );
}

export default HomePage;
