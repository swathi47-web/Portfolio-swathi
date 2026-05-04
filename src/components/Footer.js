import React from 'react';
import './Footer.css';
import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', label: 'GitHub' }, // Update with your GitHub URL
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/illuru-taraka-swathi-017a27291/', label: 'LinkedIn' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              Made with <FaHeart className="heart-icon" /> by Illuru Taraka Swathi
            </p>
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;