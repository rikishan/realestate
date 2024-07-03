// src/components/Header.js
import React, { useState, useEffect, useRef } from 'react';
import '../components/Header.css';

const Header = ({ scrollToContactUs }) => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      // If scrolling down
      setShow(false);
    } else {
      // If scrolling up
      setShow(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${show ? 'visible' : 'hidden'}`}>
      <img
        src="https://homezennextjs.vercel.app/images/logo/logo@2x.png"
        alt="Logo"
        className="logo"
      />
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-icon-line ${showMenu ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${showMenu ? 'open' : ''}`}></div>
        <div className={`menu-icon-line ${showMenu ? 'open' : ''}`}></div>
      </div>
      <nav className={`nav-menu ${showMenu ? 'open' : ''}`}>
        <ul>
          <li><a style={{fontWeight:'700',paddingLeft:'1rem'}}>Home</a></li>
          <li><a style={{fontWeight:'700',paddingLeft:'1rem'}}>Properties</a></li>
          <li><a style={{fontWeight:'700',paddingLeft:'1rem'}}>Blogs</a></li>
          <li><a style={{fontWeight:'700',paddingLeft:'1rem'}}>Appreciation</a></li>
          <li><a style={{fontWeight:'700',paddingLeft:'1rem'}}>Market</a></li>
          <li><a onClick={scrollToContactUs} style={{fontWeight:'700',paddingLeft:'1rem', cursor: 'pointer'}}>Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
