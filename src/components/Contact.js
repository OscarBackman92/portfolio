import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const EMAILJS_SERVICE = 'service_nua1mrl';
const EMAILJS_TEMPLATE = 'template_enxgdom';
const EMAILJS_PUBLIC_KEY = '6rEVB8tqgeAY6mkgV';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, e.target, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => setStatus('error'));
  };

  const sending = status === 'sending';

  return (
    <section className="contact section">
      <div className="section-inner contact__inner">
        <div className="eyebrow reveal">COMMS CHANNEL</div>
        <h2 className="contact__title display reveal" style={{ animationDelay: '0.1s' }}>
          Open Comms
        </h2>
        <p className="contact__lede reveal" style={{ animationDelay: '0.15s' }}>
          Got a project, an opportunity, or just want to talk shop? Transmit a
          message and I'll respond on the next cycle.
        </p>

        <form
          onSubmit={handleSubmit}
          className="contact__form panel reveal"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="contact__form-head">
            <span className="hud-label">{'// new_transmission.req'}</span>
            <span className="dot"></span>
          </div>

          <div className="contact__row">
            <label className="contact__field">
              <span className="contact__label">Name</span>
              <input
                type="text" name="name" value={formData.name}
                onChange={handleChange} required placeholder="Jane Doe"
              />
            </label>
            <label className="contact__field">
              <span className="contact__label">Email</span>
              <input
                type="email" name="email" value={formData.email}
                onChange={handleChange} required placeholder="jane@domain.com"
              />
            </label>
          </div>

          <label className="contact__field">
            <span className="contact__label">Subject</span>
            <input
              type="text" name="subject" value={formData.subject}
              onChange={handleChange} required placeholder="Project enquiry"
            />
          </label>

          <label className="contact__field">
            <span className="contact__label">Message</span>
            <textarea
              name="message" value={formData.message} onChange={handleChange}
              required rows="5" placeholder="Type your message…"
            ></textarea>
          </label>

          <button type="submit" className="btn contact__submit" disabled={sending}>
            {sending ? '▸ Transmitting…' : '▸ Transmit Message'}
          </button>

          {status === 'success' && (
            <p className="contact__status contact__status--ok">
              ● Message received. I'll get back to you shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="contact__status contact__status--err">
              ● Transmission failed. Please try again or email me directly.
            </p>
          )}
        </form>

        <div className="contact__direct reveal" style={{ animationDelay: '0.3s' }}>
          <a href="mailto:jan.oscar.backman@gmail.com" className="contact__direct-link">
            jan.oscar.backman@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
