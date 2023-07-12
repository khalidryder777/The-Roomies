import React, { useState } from 'react';

function HouseRules() {
    const [rules, setRules] = useState([]);  // Array to store all the house rules
    const [formMode, setFormMode] = useState('Add');  // Switches between 'Add' and 'Edit' modes
    const [currentRule, setCurrentRule] = useState({});  // Stores the current rule in 'Edit' mode

    // Function to add a rule
    const addRule = (rule) => {
        setRules([...rules, rule]);
    }

    // Function to edit a rule
    const editRule = (rule) => {
        const otherRules = rules.filter(r => r.id !== rule.id);
        setRules([...otherRules, rule]);
    }

    // Function to delete a rule
    const deleteRule = (ruleId) => {
        setRules(rules.filter(rule => rule.id !== ruleId));
    }

    // Function to set the form mode to 'Edit' and set the current rule
    const handleRuleClick = (rule) => {
        setFormMode('Edit');
        setCurrentRule(rule);
    }

    return (
        <div>
            <h2>House Rules</h2>
            {/* Display the list of rules here */}
            {/* Display the form for adding/editing rules here */}
        </div>
    );
}

export default HouseRules;
