// BillCard.js
import React from 'react';
import './BillCard.css';

const BillCard = ({ bill, onPay }) => {

    // This function is called when the 'Pay' button is clicked
    const handlePay = () => {
        onPay(bill.id);
    }

    return (
        <div className="bill-card">
            <h2>{bill.title}</h2>
            <p>{bill.description}</p>
            <p>Due: {bill.dueDate}</p>
            <p>Status: {bill.status}</p>
            {bill.status !== 'settled' && (
                <button onClick={handlePay}>Pay</button>
            )}
        </div>
    );
};

export default BillCard;
