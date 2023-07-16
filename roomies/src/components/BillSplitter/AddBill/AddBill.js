import React, { useState } from 'react';
import './AddBill.css';

const AddBill = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [dueDate, setDueDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, description, amount, dueDate });
        setTitle('');
        setDescription('');
        setAmount('');
        setDueDate('');
    };

    return (
        <form className="add-bill-form" onSubmit={onSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
            <input type="submit" value="Add Bill" />
        </form>
    );
};

export default AddBill;
