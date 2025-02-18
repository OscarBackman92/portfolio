import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/">My Portfolio</Link>
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
          <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
            Home
          </Link>
          <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
            About
          </Link>
          <Link to="/projects" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
            Projects
          </Link>
          <Link to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-lg">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu (visible on small screens) */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            About
          </Link>
          <Link to="/projects" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            Projects
          </Link>
          <Link to="/contact" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
