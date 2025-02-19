import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 bg-gray-900 text-white min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">Hi, I'm Oscar Bäckman!</h1>
        <h2 className="text-2xl text-gray-400 mb-6 animate-slide-up">
          A Passionate Junior Developer eager to learn and build amazing web applications.
        </h2>
        <p className="text-lg text-gray-300 mb-8 animate-fade-in">
          I specialize in creating interactive, fast, and accessible web applications using modern technologies like 
          <span className="text-blue-400 font-semibold"> React</span>, <span className="text-blue-400 font-semibold">JavaScript</span>, 
          and <span className="text-blue-400 font-semibold">Django</span>. I'm always looking for new challenges and opportunities to grow.
        </p>
        <div className="flex space-x-4">
          <Link to="/projects" className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-500 transition duration-200 animate-slide-up">
            Explore My Work
          </Link>
          <Link to="/contact" className="border border-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition duration-200 animate-slide-up">
            Let's Connect!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
