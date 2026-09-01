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

/** Frekvensspärr: en sändning per minut */
const RATE_KEY = 'contact:lastSentAt';
const RATE_WINDOW = 60 * 1000;

const MESSAGES = {
  sending: 'Skickar…',
  success: 'Tack! Meddelandet är skickat — jag återkommer så snart jag kan.',
  error:
    'Något gick fel. Mejla mig direkt på jan.oscar.backman@gmail.com så löser vi det.',
  throttled: 'Du skickade nyss ett meddelande — vänta en minut.',
  incomplete: 'Fyll i namn, e-post, ämne och meddelande.',
  invalidEmail: 'Ange en giltig e-postadress så jag kan svara.',
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

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
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle');
  const [errorDetail, setErrorDetail] = useState('');

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error' || status === 'throttled' || status === 'incomplete' || status === 'invalidEmail') {
      setStatus('idle');
      setErrorDetail('');
    }
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setHoneypot('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot: bara bottar fyller i fältet. Avbryt tyst.
    if (honeypot.trim()) {
      setStatus('success');
      resetForm();
      return;
    }

    if (isThrottled()) {
      setStatus('throttled');
      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setStatus('incomplete');
      return;
    }

    if (!isValidEmail(email)) {
      setStatus('invalidEmail');
      return;
    }

    setStatus('sending');
    setErrorDetail('');

    const body = [
      `Från: ${name}`,
      `E-post: ${email}`,
      `Ämne: ${subject}`,
      '',
      message,
    ].join('\n');

    // Skicka inte "email" som mallfält — om To i EmailJS är {{email}}
    // hamnar mailet hos besökaren i stället för i din inkorg.
    emailjs
      .send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          subject,
          message: body,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        markSent();
        setStatus('success');
        resetForm();
      })
      .catch((err) => {
        const text =
          (err && (err.text || err.message)) ||
          'EmailJS avvisade sändningen.';
        setErrorDetail(String(text));
        setStatus('error');
      });
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
          halvfärdiga. Skriv några rader så återkommer jag så snart jag kan.
        </p>

        <form
          onSubmit={handleSubmit}
          className="contact__form panel reveal"
          style={{ animationDelay: '0.16s' }}
        >
          <div className="contact__row">
            <label className="contact__field">
              <span className="contact__label">
                Namn <span className="contact__req" aria-hidden="true">*</span>
              </span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                minLength={2}
                autoComplete="name"
                placeholder="Ditt namn"
              />
            </label>
            <label className="contact__field">
              <span className="contact__label">
                E-post <span className="contact__req" aria-hidden="true">*</span>
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="email"
                inputMode="email"
                placeholder="din@epost.se"
              />
            </label>
          </div>

          <label className="contact__field">
            <span className="contact__label">
              Ämne <span className="contact__req" aria-hidden="true">*</span>
            </span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              aria-required="true"
              placeholder="T.ex. jobbmöjlighet"
            />
          </label>

          <label className="contact__field">
            <span className="contact__label">
              Meddelande <span className="contact__req" aria-hidden="true">*</span>
            </span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
              minLength={10}
              rows="5"
              placeholder="Skriv ditt meddelande…"
            />
          </label>

          {/* Honeypot — dolt utanför skärmen, inte med display:none */}
          <div className="contact__honeypot" aria-hidden="true">
            <label htmlFor="contact-hp">Lämna tomt</label>
            <input
              id="contact-hp"
              type="text"
              name="contact_hp_field"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
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
            }${
              status === 'error' || status === 'incomplete' || status === 'invalidEmail'
                ? ' contact__status--err'
                : ''
            }`}
          >
            {statusMessage}
            {errorDetail && status === 'error' ? ` (${errorDetail})` : ''}
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
