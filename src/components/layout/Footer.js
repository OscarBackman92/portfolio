import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const NAV = [
  { to: '/', label: 'Hem' },
  { to: '/about', label: 'Om mig' },
  { to: '/projects', label: 'Projekt' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Kontakt' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__name">
            Oscar Bäckman
          </Link>
          <span className="footer__role">Business Operations Coordinator · Stockholm</span>
        </div>

        <nav className="footer__nav" aria-label="Sidfotsnavigation">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className="footer__link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="footer__links">
          <a href="https://github.com/OscarBackman92" target="_blank" rel="noopener noreferrer" className="footer__link">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/oscar-b%C3%A4ckman-3149b1167/" target="_blank" rel="noopener noreferrer" className="footer__link">
            LinkedIn
          </a>
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
