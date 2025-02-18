import React, { useState } from 'react';

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

    try {
      const response = await fetch('https://your-emailjs-endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Thank you for your message! I will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage('There was an error. Please try again later.');
      }
    } catch (error) {
      setStatusMessage('There was an error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <p className="text-lg text-gray-300 mt-4">Feel free to reach out for collaborations or job inquiries.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"/>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"/>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"/>
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows="4" className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-500 transition duration-200" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {statusMessage && <p className="mt-4 text-green-400">{statusMessage}</p>}
      </div>
    </section>
  );
}

export default Contact;
