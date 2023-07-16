import React, { useState } from 'react';
import './BillSplitter.css';
import AddBill from './AddBill/AddBill';
import BillCard from './BillCard/BillCard';

const BillSplitter = () => {
    const [bills, setBills] = useState([]);

    const addBill = (bill) => {
        setBills([...bills, bill]);
    };

    return (
        <div className="bill-splitter">
            <h1>Bill Splitter</h1>
            <AddBill onAdd={addBill} />
            {bills.map((bill, index) => (
                <BillCard key={index} bill={bill} />
            ))}
        </div>
    );
};

export default BillSplitter;
