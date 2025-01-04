import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import GooglePlayBadge from '/Images/play_store.png'; // Update with the correct path
import AppStoreBadge from '/Images/app_store.png'; // Update with the correct path

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Call to Action Section */}
      <div className="bg-gray-800 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Download Our App Now!
        </h2>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://play.google.com/store/apps/details?id=com.example.tomato" target="_blank" rel="noopener noreferrer">
            <img src={GooglePlayBadge} alt="Google Play Store" className="h-12 hover:opacity-80 transition-opacity duration-300" />
          </a>
          <a href="https://apps.apple.com/app/id123456789" target="_blank" rel="noopener noreferrer">
            <img src={AppStoreBadge} alt="Apple App Store" className="h-12 hover:opacity-80 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-wrap justify-between">
          {/* Company Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-600">MEDISENCE</h2>
            <p className="mt-4 text-gray-400 leading-relaxed">
              MediSence is committed to providing quality healthcare services across the globe. We deliver the best in medical services with a strong emphasis on reliability, safety, and convenience.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-blue-400 hover:text-white transition-colors duration-300">
                <div className="bg-gray-700 p-3 rounded-full">
                  <FaFacebookF />
                </div>
              </a>
              <a href="#" className="text-blue-400 hover:text-white transition-colors duration-300">
                <div className="bg-gray-700 p-3 rounded-full">
                  <FaTwitter />
                </div>
              </a>
              <a href="#" className="text-blue-400 hover:text-white transition-colors duration-300">
                <div className="bg-gray-700 p-3 rounded-full">
                  <FaLinkedinIn />
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold">Get In Touch</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              We’re here to help and answer any question you might have. Reach out to us, and we'll respond as soon as possible.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="text-gray-400">+1-234-567-890</li>
              <li className="text-gray-400">contact@MediSence.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-500">© 2024 MediSence.com - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
