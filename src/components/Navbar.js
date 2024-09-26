/*import React from 'react';
import './Navbar.css';  // Add custom styling here

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">Mywebsite</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;*/

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">React-Demo</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/buy">BUY</Link></li>
      </ul>
      <div className="search-icon">
        <i className="fa fa-search"></i>
      </div>
    </nav>
  );
};

export default Navbar;
