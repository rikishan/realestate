// src/components/Header.js
import React, { useState, useEffect, useRef } from 'react';
import '../components/Header.css';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'antd';
import Form from './Form';

const Header = ({ scrollToContactUs }) => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
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
          <li><a style={{ fontWeight: '700', paddingLeft: '1rem' }}>Home</a></li>
          <li><Link to='/properties' style={{ fontWeight: '700', paddingLeft: '1rem' }}>Properties</Link></li>
          <li><Link to='/site' style={{ fontWeight: '700', paddingLeft: '1rem' }}>Site</Link></li>
          <li><Link to='/Lands' style={{ fontWeight: '700', paddingLeft: '1rem' }}>Lands</Link></li>
          <li><a style={{ fontWeight: '700', paddingLeft: '1rem' }}>Market</a></li>
          <li><a onClick={scrollToContactUs} style={{ fontWeight: '700', paddingLeft: '1rem', cursor: 'pointer' }}>Contact Us</a></li>
          <li>
            <button
            onClick={showModal}
            style={{ fontWeight: '700', color: 'red', backgroundColor: 'white', border: 'none', padding: '3px 20px', cursor: 'pointer', transition: '0.3s',borderRadius:20 }}
              onMouseOver={(e) => { e.target.style.color = 'white'; e.target.style.backgroundColor = 'red'; }}
              onMouseOut={(e) => { e.target.style.color = 'red'; e.target.style.backgroundColor = 'white'; }}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
       <Modal
        open={open}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}>
       
       <Form />
      </Modal>
 
    </header>
  );
};

export default Header;
