import React, { useState, useEffect } from 'react';
import './App.css';
import AccountList from './components/AccountList';
import AddAccountForm from './components/AddAccountForm';

function App() {
  const [accounts, setAccounts] = useState([]);

  // Fetch accounts from backend on mount
  useEffect(() => {
    fetch('http://localhost:5000/accounts')
      .then(res => res.json())
      .then(data => setAccounts(data))
      .catch(err => console.error('Failed to fetch accounts:', err));
  }, []);

  // Add account via backend
  const handleAddAccount = (account) => {
    fetch('http://localhost:5000/accounts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(account)
    })
      .then(res => res.json())
      .then(newAccount => setAccounts([...accounts, newAccount]))
      .catch(err => console.error('Failed to add account:', err));
  };

  return (
    <div className="App">
      <h1>Account Manager</h1>
      <AddAccountForm onAdd={handleAddAccount} />
      <AccountList accounts={accounts} />
    </div>
  );
}

export default App;