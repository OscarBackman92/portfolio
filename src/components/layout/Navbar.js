import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="/">My Portfolio</a>
        </div>

        {/* Hamburger icon (visible on small screens) */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Links (visible on large screens) */}
        <div className="hidden lg:flex space-x-4">
          <a href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
            Home
          </a>
          <a href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
            About
          </a>
          <a href="/projects" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
            Projects
          </a>
          <a href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile menu (visible on small screens) */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="/projects" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            Projects
          </a>
          <a href="/contact" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
