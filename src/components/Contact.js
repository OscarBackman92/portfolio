import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Seo from './Seo';
import './Contact.css';

const EMAILJS_SERVICE = 'service_e7qqbor';
const EMAILJS_TEMPLATE = 'template_enxgdom';
const EMAILJS_PUBLIC_KEY = '6rEVB8tqgeAY6mkgV';

/** Frekvensspärr: en sändning per minut */
const RATE_KEY = 'contact:lastSentAt';
const RATE_WINDOW = 60 * 1000;

const MESSAGES = {
  sending: 'Skickar…',
  success: 'Tack! Meddelandet är skickat — jag återkommer inom ett dygn.',
  error:
    'Något gick fel. Mejla mig direkt på jan.oscar.backman@gmail.com så löser vi det.',
  throttled: 'Du skickade nyss ett meddelande — vänta en minut.',
};

function isThrottled() {
  try {
    const last = Number(localStorage.getItem(RATE_KEY));
    return Boolean(last) && Date.now() - last < RATE_WINDOW;
  } catch {
    return false;
  }
}

function markSent() {
  try {
    localStorage.setItem(RATE_KEY, String(Date.now()));
  } catch {
    // Privat läge — spärren är ett komplement, inte enda skyddet
  }
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error' || status === 'throttled') setStatus('idle');
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setCompany('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot: bara bottar fyller i fältet. Avbryt tyst.
    if (company.trim()) {
      setStatus('success');
      resetForm();
      return;
    }

    if (isThrottled()) {
      setStatus('throttled');
      return;
    }

    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, e.target)
      .then(() => {
        markSent();
        setStatus('success');
        resetForm();
      })
      .catch(() => setStatus('error'));
  };

  const sending = status === 'sending';
  const statusMessage = MESSAGES[status] || '';

  return (
    <section className="contact section">
      <Seo
        title="Kontakt — Oscar Bäckman"
        description="Öppen för roller inom order, inköp, ekonomiadministration och operations i Stockholm. Hör av dig."
        path="/contact"
      />
      <div className="section-inner contact__inner">
        <div className="eyebrow reveal">Kontakt</div>
        <h1 className="contact__title display reveal" style={{ animationDelay: '0.08s' }}>
          Hör av dig
        </h1>
        <p className="contact__lede reveal" style={{ animationDelay: '0.12s' }}>
          Jag är öppen för roller inom order, inköp, ekonomiadministration och
          operations i Stockholm — gärna där systemen är många och rutinerna
          halvfärdiga. Skriv några rader så svarar jag inom ett dygn.
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
                autoComplete="name"
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
                autoComplete="email"
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

          {/* Honeypot — dolt utanför skärmen, inte med display:none */}
          <div className="contact__honeypot" aria-hidden="true">
            <label htmlFor="contact-company">Företag</label>
            <input
              id="contact-company"
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <button type="submit" className="btn contact__submit" disabled={sending}>
            {sending ? 'Skickar…' : 'Skicka meddelande'}
          </button>

          <p
            role="status"
            aria-live="polite"
            className={`contact__status${
              status === 'success' ? ' contact__status--ok' : ''
            }${status === 'error' ? ' contact__status--err' : ''}`}
          >
            {statusMessage}
          </p>
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
