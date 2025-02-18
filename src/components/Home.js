import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="bg-blue-600 text-white py-20 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold mb-6">Hello, I'm Oscar Bäckman</h1>
        <p className="text-xl mb-8">A passionate Full Stack Developer specializing in React, Node.js, and more.</p>
        <Link to="/about" className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-400 transition-all duration-200">
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}

export default Home;
