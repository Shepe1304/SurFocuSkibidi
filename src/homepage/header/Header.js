import React from 'react';
import './Header.css'; // Import your CSS file

function Header() {
  return (
    <header className="header">
      <img src="logo.png" alt="Logo" className="logo" />
      <div className="search-bar">
        <input type="text" placeholder="Search or type a URL" />
        <button>
          <img src="search-icon.svg" alt="Search" />
        </button>
      </div>
    </header>
  );
}

export default Header;