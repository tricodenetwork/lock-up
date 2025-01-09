import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex justify-between items-center pb-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo/logo.svg"
              alt="LockUP Logo" 
              className="h-6"
            />
          </div>

          {/* Center Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Help/Support
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Contact Us
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Horizontal Divider */}
        <hr className="border-t-4 border-gray-800" />

        {/* Bottom section with copyright and social icons */}
        <div className="flex justify-between items-center pt-4">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} LockUp. All rights reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/icons/youtube.svg" alt="YouTube Icon" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/icons/facebook.svg" alt="Facebook Icon" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/icons/twitter.svg" alt="Twitter Icon" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/icons/instagram.svg" alt="Instagram Icon" className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="/icons/linkedin.svg" alt="LinkedIn Icon" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
