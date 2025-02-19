import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_nua1mrl', // Replace with your EmailJS service ID
      'template_enxgdom', // Replace with your EmailJS template ID
      e.target,
      '6rEVB8tqgeAY6mkgV' // Replace with your EmailJS user ID
    )
    .then(() => {
      setStatusMessage('Thank you for your message! I will get back to you shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch(() => {
      setStatusMessage('There was an error. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-24 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold mb-4 animate-fade-in">Let's Connect!</h2>
        <p className="text-lg text-gray-300 mb-8 animate-slide-up">
          Have a project in mind or just want to chat? I'm always excited to discuss opportunities and collaborations.
        </p>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-6 w-full animate-slide-up">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"/>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"/>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows="4" className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-500 transition duration-200 animate-slide-up" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {statusMessage && <p className="mt-4 text-green-400 animate-fade-in">{statusMessage}</p>}
      </div>
    </section>
  );
}

export default Contact;
