import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Importera EmailJS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  // Hantera ändringar i formulärfälten
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Skicka formuläret via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);


    // Skicka formulärdata till EmailJS
    emailjs
      .send(
        'service_nua1mrl', // Ersätt med din EmailJS service_id
        'template_enxgdom', // Ersätt med din EmailJS template_id
        formData, // Skicka formData som parameter till din mall
        '6rEVB8tqgeAY6mkgV' // Ersätt med din EmailJS user_id
      )
      .then(
        (response) => {
          setStatusMessage('Thank you for contacting me! I will get back to you shortly.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          setStatusMessage('There was an error. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">I'd love to hear from you. Feel free to reach out with any questions or just to connect!</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          />
          <button
            type="submit"
            className={`w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg focus:outline-none ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500 transition duration-200'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {statusMessage && <p className="mt-6 text-gray-700">{statusMessage}</p>}
      </div>
    </section>
  );
}

export default Contact;
