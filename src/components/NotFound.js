import React from 'react';
import { Link } from 'react-router-dom';
import Seo from './Seo';
import './NotFound.css';

function NotFound() {
  return (
    <section className="notfound section">
      <Seo
        title="Sidan hittades inte — Oscar Bäckman"
        description="404 — sidan du sökte finns inte. Gå till startsidan eller kontakta mig."
        path="/404"
        noindex
      />
      <div className="section-inner notfound__inner">
        <div className="eyebrow reveal">Sidan hittades inte</div>
        <h1 className="notfound__code display reveal" style={{ animationDelay: '0.08s' }}>
          404
        </h1>
        <p className="notfound__text reveal" style={{ animationDelay: '0.14s' }}>
          Den här sidan finns inte. Länken kan vara fel, eller så har innehållet flyttats.
        </p>
        <nav className="notfound__actions reveal" style={{ animationDelay: '0.2s' }} aria-label="Navigering från 404">
          <Link to="/" className="btn">
            Till startsidan
          </Link>
          <Link to="/cv" className="btn btn--ghost">
            Visa CV
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            Kontakta mig
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default NotFound;
