import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 bg-gray-900 text-white min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">Welcome to My Portfolio</h1>
        <h2 className="text-2xl text-gray-400 mb-6 animate-slide-up">Showcasing My Journey as a Full Stack Developer</h2>
        <p className="text-lg text-gray-300 mb-8 animate-fade-in">
          I specialize in building modern web applications using React, JavaScript, Django, and Python. 
          This portfolio highlights my projects, skills, and experiences. Feel free to explore and connect with me!
        </p>
        <div className="flex space-x-4">
          <Link to="/projects" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500 transition duration-200">
            View My Projects
          </Link>
          <Link to="/contact" className="border border-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-200">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
