// TopBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';  // Add some custom styles (optional)

function TopBar() {
  return (
    <div className="topbar">
      <Link to="/" className="topbar-button">Home</Link>
      <Link to="/create" className="topbar-button">Create New Crewmate</Link>
      <Link to="/" className="topbar-button">Crewmate Gallery</Link>
    </div>
  );
}

export default TopBar;
