import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Hem' },
  { to: '/about', label: 'Om mig' },
  { to: '/projects', label: 'Projekt' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Kontakt' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-mark" aria-hidden="true" />
          <span className="navbar__brand-text">
            Oscar<span className="navbar__brand-dot">.</span>Bäckman
          </span>
        </Link>

        <button
          className={`navbar__burger ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Öppna meny"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar__menu ${isOpen ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'is-active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="navbar__cta" onClick={closeMenu}>
            Hör av dig
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
