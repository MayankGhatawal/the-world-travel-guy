import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Images/Logo.webp'

const Navbar = () => {
  const [isDestinationsOpen, setDestinationsOpen] = useState(false);
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const handleMouseEnter = (setOpen) => {
    setOpen(true);
  };

  const handleMouseLeave = (setOpen) => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src={logo} alt="logo" /></div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Blog</li>
        <li
          onMouseEnter={() => handleMouseEnter(setDestinationsOpen)}
          onMouseLeave={() => handleMouseLeave(setDestinationsOpen)}
        >
          Destinations
          {isDestinationsOpen && (
            <ul className="dropdown">
              <li>Americas</li>
              <li>Europe</li>
              <li>Asia</li>
              <li>Carebian</li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(setCategoriesOpen)}
          onMouseLeave={() => handleMouseLeave(setCategoriesOpen)}
        >
          Categories
          {isCategoriesOpen && (
            <ul className="dropdown">
              <li>Beaches</li>
              <li>Mountains</li>
              <li>Forests</li>
            </ul>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter(setGalleryOpen)}
          onMouseLeave={() => handleMouseLeave(setGalleryOpen)}
        >
          Gallery
          {isGalleryOpen && (
            <ul className="dropdown">
              <li>Photos</li>
              <li>Videos</li>
            </ul>
          )}
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
