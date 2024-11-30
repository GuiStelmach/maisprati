import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/timer">Timer</Link></li>
        <li><Link to="/background-changer">Background Changer</Link></li>
        <li><Link to="/todo-list">Todo List</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/name-filter">Name Filter</Link></li>
        <li><Link to="/registration-form">Registration Form</Link></li>
        <li><Link to="/post-list">Post List</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/countdown-timer">Countdown Timer</Link></li>
        <li><Link to="/tabs">Tabs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
