// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      {user && (
        <>
          <span>Welcome, {user.name}</span>
          <button onClick={onLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
