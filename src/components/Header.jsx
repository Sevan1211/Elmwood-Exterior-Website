import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = ({ setActivePage, activePage }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Header */}
      <div className={`top-header ${scrollY > 100 ? 'hide' : ''}`}>
        <div className="top-header-container">
          <img
            src='/logo1.png' // Path to the logo image
            alt="Elmwood Exteriors Logo"
            className="header-logo"
            onClick={() => setActivePage('home')}
            style={{ cursor: 'pointer' }}
          />
          <div className="company-info">
            <h1 className="company-name">Elmwood Exteriors</h1>
            <p className="company-slogan">MORE THAN PAINTING</p>
          </div>
          <button className="estimate-button" onClick={() => setActivePage('estimate')}>
            Request an Estimate
          </button>
        </div>
      </div>
      <div className={`spacer ${scrollY > 100 ? 'active' : ''}`} />
      {/* Bottom Header (Sticky) */}
      <div className={`bottom-header ${scrollY > 100 ? 'fixed-header' : 'relative-header'}`}>
        <nav className="header-nav">
          <ul className="nav-links">
            <li>
              <button
                className={activePage === 'home' ? 'active' : ''}
                onClick={() => setActivePage('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={activePage === 'about' ? 'active' : ''}
                onClick={() => setActivePage('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={activePage === 'projects' ? 'active' : ''}
                onClick={() => setActivePage('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={activePage === 'contact' ? 'active' : ''}
                onClick={() => setActivePage('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;





