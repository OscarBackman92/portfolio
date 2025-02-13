import React from 'react';

function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">I'd love to hear from you. Feel free to reach out with any questions or just to connect!</p>
        
        <div className="flex justify-center">
          <a
            href="mailto:your.email@example.com"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-xl hover:bg-blue-500 transition-colors duration-300 text-lg font-medium"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
