// Currently we do not have a backend, we'd likely want to use a more robust state management solution or store this data in a backend database.
import React, { useState } from 'react';



function HouseRules() {
    const [rules, setRules] = useState([]);
    const [formMode, setFormMode] = useState('Add');
    const [currentRule, setCurrentRule] = useState({ id: null, text: '', category: '' });

    // Function to add a rule
    const addRule = (rule) => {
        setRules([...rules, { ...rule, id: rules.length + 1 }]);
        setCurrentRule({ id: null, text: '', category: '' });
    }

    // Function to edit a rule
    const editRule = (rule) => {
        const otherRules = rules.filter(r => r.id !== rule.id);
        setRules([...otherRules, rule]);
        setCurrentRule({ id: null, text: '', category: '' });
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

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentRule({ ...currentRule, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (formMode === 'Add') {
            addRule(currentRule);
        } else {
            editRule(currentRule);
        }
        setFormMode('Add');
    };

    return (
        <div>
            <h2>House Rules</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Rule:
                    <input type="text" name="text" value={currentRule.text} onChange={handleInputChange} required />
                </label>
                <label>
                    Category:
                    <input type="text" name="category" value={currentRule.category} onChange={handleInputChange} required />
                </label>
                <button type="submit">{formMode === 'Add' ? 'Add Rule' : 'Update Rule'}</button>
            </form>
            {rules.map(rule => (
                <div key={rule.id}>
                    <h3>{rule.text}</h3>
                    <p>{rule.category}</p>
                    <button onClick={() => handleRuleClick(rule)}>Edit</button>
                    <button onClick={() => deleteRule(rule.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default HouseRules;
