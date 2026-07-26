import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const EMAILJS_SERVICE = 'service_e7qqbor';
const EMAILJS_TEMPLATE = 'template_enxgdom';
const EMAILJS_PUBLIC_KEY = '6rEVB8tqgeAY6mkgV';

function getErrorMessage(err) {
  const text = err?.text || err?.message || '';

  if (text.includes('Invalid grant') || text.includes('Gmail')) {
    return 'E-posttjänsten behöver återkopplas i EmailJS (Gmail). Mejla mig direkt så länge.';
  }
  if (text.includes('limit') || err?.status === 429) {
    return 'För många försök. Vänta en stund eller mejla mig direkt.';
  }
  if (text.includes('Public Key') || text.includes('user_id')) {
    return 'E-postkonfigurationen är felaktig. Mejla mig direkt så länge.';
  }

  return 'Kunde inte skicka meddelandet. Försök igen eller mejla mig direkt.';
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    emailjs
      .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, e.target)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        setStatus('error');
        setErrorMessage(getErrorMessage(err));
      });
  };

  const sending = status === 'sending';

  return (
    <section className="contact section">
      <div className="section-inner contact__inner">
        <div className="eyebrow reveal">Kontakt</div>
        <h2 className="contact__title display reveal" style={{ animationDelay: '0.08s' }}>
          Låt oss prata
        </h2>
        <p className="contact__lede reveal" style={{ animationDelay: '0.12s' }}>
          Har du ett projekt, en möjlighet eller vill bara stämma av? Skicka ett
          meddelande så återkommer jag så snart jag kan.
        </p>

        <form
          onSubmit={handleSubmit}
          className="contact__form panel reveal"
          style={{ animationDelay: '0.16s' }}
        >
          <div className="contact__row">
            <label className="contact__field">
              <span className="contact__label">Namn</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ditt namn"
              />
            </label>
            <label className="contact__field">
              <span className="contact__label">E-post</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="din@epost.se"
              />
            </label>
          </div>

          <label className="contact__field">
            <span className="contact__label">Ämne</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="T.ex. jobbmöjlighet"
            />
          </label>

          <label className="contact__field">
            <span className="contact__label">Meddelande</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Skriv ditt meddelande…"
            />
          </label>

          <button type="submit" className="btn contact__submit" disabled={sending}>
            {sending ? 'Skickar…' : 'Skicka meddelande'}
          </button>

          {status === 'success' && (
            <p className="contact__status contact__status--ok">
              Meddelandet är skickat. Jag återkommer så snart jag kan.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__status contact__status--err">
              {errorMessage}
            </p>
          )}
        </form>

        <div className="contact__direct reveal" style={{ animationDelay: '0.24s' }}>
          <a href="tel:+46720101647" className="contact__direct-link">
            072-010 16 47
          </a>
          <span className="contact__direct-sep">·</span>
          <a href="mailto:jan.oscar.backman@gmail.com" className="contact__direct-link">
            jan.oscar.backman@gmail.com
          </a>
          <span className="contact__direct-sep">·</span>
          <a href="/cv/oscar-backman-cv.pdf" download className="contact__direct-link">
            Ladda ner CV (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
