import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__block">
          <span className="dot"></span>
          <span className="footer__mono">SYSTEM OPERATIONAL</span>
        </div>

        <div className="footer__links">
          <a href="https://github.com/OscarBackman92" target="_blank" rel="noopener noreferrer" className="footer__link">
            GitHub
          </a>
          <span className="footer__sep">/</span>
          <a href="https://www.linkedin.com/in/oscar-b%C3%A4ckman-3149b1167/" target="_blank" rel="noopener noreferrer" className="footer__link">
            LinkedIn
          </a>
          <span className="footer__sep">/</span>
          <a href="mailto:jan.oscar.backman@gmail.com" className="footer__link">
            Email
          </a>
        </div>

        <div className="footer__block footer__copy">
          <span className="footer__mono">© {year} OSCAR BÄCKMAN</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
