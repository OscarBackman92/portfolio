import React from 'react';

function Footer() {
  return (
    <footer className="py-8 bg-gray-800 text-white text-center">
      <p>© 2025 Oscar Bäckman. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:your.email@example.com">Email</a>
      </div>
    </footer>
  );
}

export default Footer;
