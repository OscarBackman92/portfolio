import React from 'react';

function AboutMe() {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <img src="https://via.placeholder.com/150" alt="Your Name" className="rounded-full w-32 h-32 mx-auto" />
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 mb-8">
            I am a passionate Full Stack Developer with experience in React, Node.js, and various other technologies. I enjoy building scalable and efficient web applications, collaborating with teams, and continuously learning new skills.
          </p>
                  {/* Lägg till diplombilden här */}
        <div className="mb-8">
          <img
            src="/Skärmbild 2025-02-15 125830.png" // Här anger du sökvägen till din bild
            alt="Oscar Bäckman's Diploma"
            className="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg" // Bilden blir responsiv, rundad och centrerad
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>HTML, CSS, JavaScript, Python</li>
              <li>React, Django, RestAPI</li>
              <li>Database: Postgress </li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Frontend Developer - Code Institute</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800">Education</h3>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Full stack Developer - Code Institute</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
