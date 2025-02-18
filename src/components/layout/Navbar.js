import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">My Portfolio</Link>
        </div>
        <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
          ☰
        </button>
        <div className={`lg:flex lg:space-x-6 absolute right-4 top-14 bg-gray-800 text-white w-48 rounded-md shadow-lg lg:static lg:w-auto lg:bg-transparent lg:shadow-none ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-700 rounded-md">Home</Link>
          <Link to="/about" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-700 rounded-md">About</Link>
          <Link to="/projects" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-700 rounded-md">Projects</Link>
          <Link to="/contact" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-700 rounded-md">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
