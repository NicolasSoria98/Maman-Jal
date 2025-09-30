import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo y info de contacto */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3>MAMAN & JAL</h3>
              <p className="footer-subtitle">Design / Construction</p>
            </div>
            
            <div className="footer-contact">
              <p>11943 Montana Ave, Ste 300</p>
              <p>Los Angeles, CA 90049</p>
              <p className="footer-phone">(310) 398-9644</p>
              <a href="mailto:info@deivanmaman.com" className="footer-email">
                info@deivanmaman.com
              </a>
            </div>
          </div>

          {/* Icono central */}
          <div className="footer-icon">
            <div className="footer-building-icon">
              {/* SVG del icono de edificio - placeholder */}
              <svg viewBox="0 0 100 100" fill="currentColor">
                <rect x="35" y="20" width="30" height="60" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="40" y="30" width="5" height="5" fill="currentColor"/>
                <rect x="55" y="30" width="5" height="5" fill="currentColor"/>
                <rect x="40" y="40" width="5" height="5" fill="currentColor"/>
                <rect x="55" y="40" width="5" height="5" fill="currentColor"/>
                <rect x="40" y="50" width="5" height="5" fill="currentColor"/>
                <rect x="55" y="50" width="5" height="5" fill="currentColor"/>
                <rect x="45" y="65" width="10" height="15" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-section footer-right">
            <p className="footer-copyright">
              © {currentYear} MAMAN & JAL PARTNERS. DESIGN+CONSTRUCTION. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;