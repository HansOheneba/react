// src/components/Dashboard.js
import React from 'react';

function Dashboard({ user }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.name}!</p>
    </div>
  );
}

export default Dashboard;
