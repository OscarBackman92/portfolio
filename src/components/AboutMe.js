import React from 'react';

function AboutMe() {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 bg-gray-900 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profilbild with Lazy Loading */}
        <img 
          src="https://media.licdn.com/dms/image/v2/C4D03AQGsAsu-UNwnyw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628016204993?e=1745452800&v=beta&t=upYDH3JMlCrZSasqn2Tq84ejb0TOH2g-Xo0TAqMMA7M" 
          alt="Oscar Bäckman" 
          loading="lazy"
          className="rounded-full w-40 h-40 mx-auto shadow-lg border-4 border-gray-700"
        />
        
        <h2 className="text-3xl font-semibold mt-6 animate-fade-in">About Me</h2>
        <p className="text-lg text-gray-300 mt-4 animate-slide-up">
          I'm a Full Stack Developer with experience in React, Django, and modern web technologies. 
          Passionate about building scalable applications and continuously improving my skills.
        </p>

        {/* Diplom och certifikat */}
        <div className="mt-8">
          <img 
            src="/Skärmbild 2025-02-15 125830.png" 
            alt="Oscar Bäckman's Diploma" 
            loading="lazy"
            className="w-full h-auto max-w-xs mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Skills, Certifikat och Utbildning */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-800 shadow-md rounded-lg p-6 animate-fade-in">
            <h3 className="text-xl font-semibold">Skills</h3>
            <ul className="list-disc list-inside text-gray-400 mt-4">
              <li>HTML, CSS, JavaScript, Python</li>
              <li>React, Django, REST API</li>
              <li>PostgreSQL, Git, Agile Development</li>
            </ul>
          </div>
          <div className="bg-gray-800 shadow-md rounded-lg p-6 animate-fade-in">
            <h3 className="text-xl font-semibold">Certifications</h3>
            <ul className="list-disc list-inside text-gray-400 mt-4">
              <li>Frontend Developer - Code Institute</li>
              <li>Full Stack Development - Code Institute</li>
            </ul>
          </div>
          <div className="bg-gray-800 shadow-md rounded-lg p-6 animate-fade-in">
            <h3 className="text-xl font-semibold">Education</h3>
            <ul className="list-disc list-inside text-gray-400 mt-4">
              <li>Full Stack Developer - Code Institute</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
