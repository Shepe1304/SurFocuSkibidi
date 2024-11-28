import React from 'react';
import './Header.css'; // Import your CSS file

function Header() {
  return (
    <header className="header">
      <img src="brain.gif" alt="Brainrot" className="brainrot" />
      <h1>My Website</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;