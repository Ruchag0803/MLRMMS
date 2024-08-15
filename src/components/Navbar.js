import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">YourLogo</div>
      <div className="nav-links">
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
    </nav>
  );
}

export default Navbar;
