import React from 'react';
import './NavBar.css';
import logo from '../assets/icon.webp';

const NavBar = () => (
  <nav className="nav-bar">
    <p>
      <img alt="LOGO" src={logo} />
      Math Magicians
    </p>
    <ul className="links-nav">
      <li><a href="/"> Home </a></li>
      <li><a href="/calculator"> Calculator </a></li>
      <li><a href="/quote"> Quote </a></li>
    </ul>
  </nav>
);

export default NavBar;
