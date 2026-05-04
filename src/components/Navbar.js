import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import logo from '../assets/logo.png'; 

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={closeMenu}>
             
            <img src={logo} alt="Logo" className="logo-image" /> 
            <span className="logo-text">Swathi</span>
          </a>
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} onClick={closeMenu}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <FaSun /> : <FaMoon />}
            <span className="toggle-text">{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;