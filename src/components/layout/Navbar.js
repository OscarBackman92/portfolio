import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home', code: '01' },
  { to: '/about', label: 'About', code: '02' },
  { to: '/projects', label: 'Projects', code: '03' },
  { to: '/contact', label: 'Contact', code: '04' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clock, setClock] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const t = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
      });
      setClock(`${t} UTC`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__brand-mark">◆</span>
          <span className="navbar__brand-text">
            OSCAR<span className="navbar__brand-dot">.</span>B
            <span className="navbar__brand-sub">{'// DEV TERMINAL'}</span>
          </span>
        </Link>

        <button
          className={`navbar__burger ${isOpen ? 'is-open' : ''}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle navigation"
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
              <span className="navbar__link-code">{l.code}</span>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar__status">
          <span className="dot"></span>
          <span className="navbar__clock">{clock}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
