import React, { useState } from 'react';

function BoundarySetting() {
    const [userEmotion, setUserEmotion] = useState(''); // State to hold user's selected emotion
    const [responseMessage, setResponseMessage] = useState(''); // State to hold the response message

    const handleEmotionInput = (e) => {
        setUserEmotion(e.target.value); // Update the user's selected emotion
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission and page reload
        let response = '';

        switch (userEmotion) {
            case 'happy':
                response = "That's great! Let's use this positive energy to work towards an effective solution.";
                break;
            case 'neutral':
                response = "You seem calm and collected. Let's try to find a balanced solution.";
                break;
            case 'anxious':
                response = "I understand you're feeling anxious. Let's take small steps towards a solution.";
                break;
            case 'angry':
                response = "I see you're upset. Let's work through this together and find a solution.";
                break;
            case 'sad':
                response = "I'm sorry that you're feeling this way. Let's try to understand and address your concerns.";
                break;
            default:
                response = '';
        }

        setResponseMessage(response); // Update the response message based on the user's selected emotion
    }

    return (
        <div>
            <h2>Boundary Setting</h2> {/* Heading */}
            <p>Before we start, let's check in. How are you feeling right now?</p> {/* Instruction */}
            <form onSubmit={handleSubmit}> {/* Form for emotion selection */}
                <label>
                    <select value={userEmotion} onChange={handleEmotionInput}>
                        <option value="">Select your current emotion</option> {/* Default option */}
                        <option value="happy">Happy</option> {/* Emotion options */}
                        <option value="neutral">Neutral</option>
                        <option value="anxious">Anxious</option>
                        <option value="angry">Angry</option>
                        <option value="sad">Sad</option>
                    </select>
                </label>
                <input type="submit" value="Submit" /> {/* Submit button */}
            </form>
            {responseMessage && <p>{responseMessage}</p>} {/* Display the response message if available */}
        </div>
    );
}

export default BoundarySetting;
