import React from 'react';
import './components.css';

const Navbar = ({ onClick }) => {
  return (
    <nav className="navbar">
      <div className="brand">Sanchit</div>
      <button className="get-users-button" onClick={onClick}>
        Get Users
      </button>
    </nav>
  );
};

export default Navbar;

