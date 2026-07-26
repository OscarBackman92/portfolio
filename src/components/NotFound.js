import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <section className="notfound section">
      <div className="section-inner notfound__inner">
        <div className="eyebrow reveal">Sidan hittades inte</div>
        <h1 className="notfound__code display reveal" style={{ animationDelay: '0.08s' }}>
          404
        </h1>
        <p className="notfound__text reveal" style={{ animationDelay: '0.14s' }}>
          Den här sidan finns inte. Länken kan vara fel, eller så har innehållet flyttats.
        </p>
        <div className="notfound__actions reveal" style={{ animationDelay: '0.2s' }}>
          <Link to="/" className="btn">
            Till startsidan
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            Kontakta mig
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
