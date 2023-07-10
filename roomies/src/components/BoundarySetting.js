import React, { useState } from 'react';

function BoundarySetting() {
    const [userEmotion, setUserEmotion] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleEmotionInput = (e) => {
        setUserEmotion(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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

        setResponseMessage(response);
    }

    return (
        <div>
            <h2>Boundary Setting</h2>
            <p>Before we start, let's check in. How are you feeling right now?</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <select value={userEmotion} onChange={handleEmotionInput}>
                        <option value="">Select your current emotion</option>
                        <option value="happy">Happy</option>
                        <option value="neutral">Neutral</option>
                        <option value="anxious">Anxious</option>
                        <option value="angry">Angry</option>
                        <option value="sad">Sad</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
}

export default BoundarySetting;
