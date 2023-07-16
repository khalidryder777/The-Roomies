import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-autocomplete';  // Import Autocomplete
import './AddBill.css';

const AddBill = ({ onAdd }) => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [roommates, setRoommates] = useState('');  // state to store selected roommates
    const [allRoommates, setAllRoommates] = useState([]);  // You would typically fetch this list from your backend 

    // fetch roommates list from backend when the component mounts
    useEffect(() => {
        // TODO: fetch roommates from backend and update the allRoommates state 
    }, []);

    const handleSelectRoommate = (selectedRoommate) => {
        setRoommates(selectedRoommate);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let splitAmount = (amount / roommates.length).toFixed(2);  // Calculates the split amount for each roommate
        // TODO: send splitAmount along with the bill information to your backend

        onAdd({ title, description, amount, dueDate });
        setTitle('');
        setDescription('');
        setAmount('');
        setDueDate('');
        setRoommates(''); // reset the roommates field
    };

    return (
        <form className="add-bill-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            <Autocomplete
                getItemValue={(item) => item.label}
                items={allRoommates}
                renderItem={(item, isHighlighted) =>
                    <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                        {item.label}
                    </div>
                }
                value={roommates}
                onChange={(e) => setRoommates(e.target.value)}
                onSelect={handleSelectRoommate}
            />
            <input type="submit" value="Add Bill" />
        </form>
    );
};

export default AddBill;
