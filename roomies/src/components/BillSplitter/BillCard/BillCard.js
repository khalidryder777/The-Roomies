// BillCard.js
import React from 'react';
import './BillCard.css';

const BillCard = ({ bill }) => {
    return (
        <div className="bill-card">
            <h2>{bill.title}</h2>
            <p>{bill.description}</p>
            <p>{bill.amount}</p>
            <p>{bill.dueDate}</p>
        </div>
    );
};

export default BillCard;
