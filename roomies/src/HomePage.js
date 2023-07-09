import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <img src="../assets/logo.png" alt="Roomies Logo"/>
                <h1>Welcome to Roomies!</h1>
            </header>
            <div className="homepage-buttons">
                <button className="button">Chores Tracker</button>
                <button className="button">Bill Splitter</button>
                <button className="button">House Rules</button>
                <button className="button">Fun</button>
                <button className="button">Chit-Chat</button>
            </div>
        </div>
    );
}

export default HomePage;
