import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <section className="notfound section">
      <div className="section-inner notfound__inner">
        <div className="eyebrow reveal">SIGNAL LOST</div>

        <div className="notfound__panel panel reveal" style={{ animationDelay: '0.1s' }}>
          <div className="notfound__panel-head">
            <span className="notfound__panel-dots">
              <i></i><i></i><i></i>
            </span>
            <span className="notfound__panel-title">system.error</span>
          </div>

          <div className="notfound__terminal">
            <p><span className="t-dim">$</span> curl -I /current-route</p>
            <p className="t-out t-err">HTTP/1.1 404 Not Found</p>
            <p className="t-out">&nbsp;</p>
            <p className="t-out">{'{'}</p>
            <p className="t-out">&nbsp;&nbsp;<span className="t-key">"error"</span>: <span className="t-val">"404"</span>,</p>
            <p className="t-out">&nbsp;&nbsp;<span className="t-key">"message"</span>: <span className="t-val">"Sidan kunde inte hittas"</span>,</p>
            <p className="t-out">&nbsp;&nbsp;<span className="t-key">"status"</span>: <span className="t-err">"signal lost"</span></p>
            <p className="t-out">{'}'}</p>
            <p><span className="t-dim">$</span> <span className="notfound__cursor">_</span></p>
          </div>
        </div>

        <h1 className="notfound__code display reveal" style={{ animationDelay: '0.2s' }}>
          404
        </h1>
        <p className="notfound__text reveal" style={{ animationDelay: '0.25s' }}>
          Den här sidan finns inte. Kanske fel länk, eller så har routen flyttats.
        </p>

        <div className="notfound__actions reveal" style={{ animationDelay: '0.3s' }}>
          <Link to="/" className="btn">
            ▸ Till startsidan
          </Link>
          <Link to="/contact" className="btn btn--ghost">
            ▸ Kontakta mig
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
