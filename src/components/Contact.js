import React from 'react';

function Contact() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-4">I would love to hear from you. Feel free to get in touch!</p>
        <a href="mailto:your.email@example.com" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 transition duration-200">
          Send an Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
