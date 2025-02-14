import React from 'react';

function AboutMe() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-700 mb-8">I am a passionate web developer with experience in building dynamic websites and applications. Here are some of my skills:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>HTML, CSS, JavaScript</li>
              <li>React, Redux</li>
              <li>Node.js, Express</li>
              <li>Database: MongoDB, SQL</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>React Developer Certification</li>
              <li>Web Development Bootcamp</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Education</h3>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Bachelor’s in Computer Science</li>
              <li>Full Stack Web Development Course</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
