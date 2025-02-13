import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left side (e.g., copyright) */}
          <div className="text-sm">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </div>

          {/* Right side (e.g., social media links) */}
          <div className="space-x-4">
            <a href="https://github.com/oscarbackman92" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/oscarbackman92/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-gray-400">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
