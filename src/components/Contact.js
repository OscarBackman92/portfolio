import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    setStatusMessage('Sending your message...');

    try {
      const response = await emailjs.sendForm(
        'service_nua1mrl',    // Ersätt med din EmailJS service ID
        'template_enxgdom',    // Ersätt med din EmailJS template ID
        e.target,             // Skickar hela formuläret
        '6rEVB8tqgeAY6mkgV'         // Ersätt med din EmailJS user ID
      );

      if (response.status === 200) {
        setStatusMessage('Thank you for contacting me! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage('Sorry, there was an issue sending your message. Please try again later.');
      }
    } catch (error) {
      setStatusMessage('Error: Unable to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
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
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            />
            {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>} 

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md"
            />
            {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>} 
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {formErrors.subject && <p className="text-red-500 text-sm">{formErrors.subject}</p>} 

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows="5"
          />
          {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>} 

          <button
            type="submit"
            className={`w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'}`}
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
