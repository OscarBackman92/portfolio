import React from 'react';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-center py-4 shadow-md z-50">
      <p>© 2025 Oscar Bäckman. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-2">
        <a href="https://github.com/OscarBackman92" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">GitHub</a>
        <a href="https://www.linkedin.com/in/oscar-b%C3%A4ckman-3149b1167/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
