import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Pass the search term to the parent component
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Phone Store</Link></li>
        <li><NavLink to="/add-phone">Add Phone</NavLink></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <form className="search-container" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for Phone..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
