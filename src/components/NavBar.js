import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/icon.webp';

const NavBar = () => (
  <nav className="nav-bar">
    <p>
      <img alt="LOGO" src={logo} />
      Math Magicians
    </p>
    <ul className="links-nav">
      <li><Link to="/"> Home </Link></li>
      <li><Link to="/calculator"> Calculator </Link></li>
      <li><Link to="/quote"> Quote </Link></li>
    </ul>
  </nav>
);

export default NavBar;
