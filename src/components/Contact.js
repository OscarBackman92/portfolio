import React, { useState } from 'react';

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

  // Skicka formuläret
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Form submission started');
    console.log('Form data:', formData); // Logga formulärdata innan vi skickar det

    try {
      // Skicka formulärdata till emailJS
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY',
        },
      });

      if (response.ok) {
        setStatusMessage('Thank you for contacting me! I will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        console.log('Form successfully submitted');
      } else {
        setStatusMessage('There was an error. Please try again later.');
        console.log('Failed to submit form:', response);
      }
    } catch (error) {
      setStatusMessage('There was an error. Please try again later.');
      console.error('Error occurred during form submission:', error); // Logga eventuella fel
    } finally {
      setIsSubmitting(false);
      console.log('Form submission ended');
    }
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
            className={`w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-500 transition duration-200`}
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
