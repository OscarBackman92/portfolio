import React from 'react';

function Home() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I'm [Your Name]</h1>
        <h2 className="text-2xl text-gray-600 mb-6">Full Stack Developer | React | Node.js | JavaScript</h2>
        <p className="text-lg text-gray-700 mb-8">
          Passionate about building scalable, user-friendly web applications. Let's create something amazing together!
        </p>
        
        {/* Call to Action */}
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition duration-200">
          Explore My Projects
        </button>
        {/* Contact Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
          <p className="text-lg text-gray-700 mb-4">
            I'm always open to new opportunities and collaborations. Feel free to reach out to me for any project or job inquiries!
          </p>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition duration-200">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
