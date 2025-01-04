import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolling ? 'bg-gray-700' : 'bg-gray-800'} shadow-md`}>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3 relative right-[4rem]">
          <img src="./Images/logo.svg" alt="Logo" className="h-[3rem] w-auto" />
          <h1 className="text-gray-100 text-2xl font-extrabold relative left-[-10rem]">MediSence.ai</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-blue-600 text-md font-medium transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-blue-600 text-md font-medium transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-blue-600 text-md font-medium transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://66d7789bd6f7dfc4b93d8aca--zingy-baklava-2704bf.netlify.app"
              className="text-white hover:text-blue-600 text-md font-medium transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services
            </a>
          </li>
          <li>
            <Link
              to="/pricing"
              className="text-white hover:text-blue-600 text-md font-medium transition duration-300"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className="text-white hover:text-blue-600 text-md font-medium transition duration-300"
            >
              Community
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/signin">
            <button className="bg-transparent text-white hover:bg-gray-200 hover:text-gray-900 font-semibold py-2 px-4 border border-gray-300 rounded transition duration-300">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded transition duration-300">
              Start for Free
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
