import React from 'react';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-4 shadow-md z-50">
      <p>© 2025 Oscar Bäckman. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-2">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
        <a href="mailto:your.email@example.com" className="hover:text-gray-400">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
