import React from 'react';
import './Footer.css'; // Style the footer

const Footer = ({ setActivePage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Elmwood Exteriors. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><button onClick={() => setActivePage('contact')}>Contact</button></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
