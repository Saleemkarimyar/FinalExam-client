import React from 'react';

function AccountList({ accounts }) {
    if (!accounts.length) return <div>No accounts found.</div>;

    const containerStyle = {
        margin: '20px auto',
        padding: '20px',
        maxWidth: '400px',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    };

    const listStyle = {
        listStyle: 'none',
        padding: 0,
        marginTop: '15px',
    };

    const itemStyle = {
        padding: '10px',
        borderBottom: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '16px',
    };

    const nameStyle = {
        fontWeight: 'bold',
        color: '#333',
    };

    const numberStyle = {
        color: '#555',
    };

    return (
        <div style={containerStyle}>
            <h2>Account List</h2>
            <ul style={listStyle}>
                {accounts.map((account, idx) => (
                    <li key={idx} style={itemStyle}>
                        <span style={nameStyle}>{account.name}</span>
                        <span style={numberStyle}>{account.number}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AccountList;
