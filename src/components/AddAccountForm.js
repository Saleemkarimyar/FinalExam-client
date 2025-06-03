import React, { useState } from 'react';

function AddAccountForm({ onAdd }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !number) return;
        onAdd({ name, number });  // ✅ match backend format
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Account</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Number"
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddAccountForm;
