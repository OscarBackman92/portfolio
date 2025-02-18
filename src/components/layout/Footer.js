import React from 'react';

function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <p>© 2025 Oscar Bäckman. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
        <a href="mailto:your.email@example.com" className="hover:text-gray-400">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
