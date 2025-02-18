import React from 'react';

function Home() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I'm Oscar Bäckman</h1>
        <h2 className="text-2xl text-gray-600 mb-6">Full Stack Developer | React | JavaScript | Django | Python</h2>
        <p className="text-lg text-gray-700 mb-8">
          Newly certified Full Stack Developer with a passion for creating web applications. I have experience with React, JavaScript, Django, and Python. I'm always looking for new opportunities and collaborations. Feel free to reach out to me for any project or job inquiries!
        </p>
        
        {/* Call to Action */}
        <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-500 transition duration-200">
          Explore My Projects
        </button>
        {/* Contact Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h3>
          <p className="text-lg text-gray-700 mb-4">
            I'm currently looking for new opportunities and collaborations. If you're interested in working with me, feel free to send me a message!
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
