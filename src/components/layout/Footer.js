import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__name">Oscar Bäckman</span>
          <span className="footer__role">Business Operations · Full Stack</span>
        </div>

        <div className="footer__links">
          <a href="https://github.com/OscarBackman92" target="_blank" rel="noopener noreferrer" className="footer__link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/oscar-b%C3%A4ckman-3149b1167/" target="_blank" rel="noopener noreferrer" className="footer__link">
            LinkedIn
          </a>
          <Link to="/cv" className="footer__link">
            CV
          </Link>
          <a href="mailto:jan.oscar.backman@gmail.com" className="footer__link">
            E-post
          </a>
        </div>

        <p className="footer__copy">© {year} Oscar Bäckman</p>
      </div>
    </footer>
  );
}

export default Footer;
