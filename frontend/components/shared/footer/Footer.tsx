import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[#1B1B1B] text-[#FFFFFF]">
      <div className="w-full border-t border-[#FFFFFF] border-opacity-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Top section with logo and navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center py-6">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <a href="/" className="flex items-center">
                <img 
                  src="/icons/lockup-logo.png"
                  alt="LockUP"
                  className="h-6"
                />
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <a 
                href="/help" 
                className="text-[#FFFFFF] hover:text-gray-300 text-sm font-semibold"
              >
                Help/Support
              </a>
              <a 
                href="/contact" 
                className="text-[#FFFFFF] hover:text-gray-300 text-sm font-semibold"
              >
                Contact Us
              </a>
              <a 
                href="/privacy" 
                className="text-[#FFFFFF] hover:text-gray-300 text-sm font-semibold"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Full-width horizontal line */}
        <hr className="border-t-2 border-[#FFFFFF] border-opacity-90 w-full m-0" />

        {/* Bottom section */}
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright text */}
            <div className="text-[#FFFFFF] text-sm mb-4 md:mb-0">
              © {currentYear} LockUp. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="/send-money" className="text-[#FFFFFF] hover:text-gray-300">
                <img src="/icons/youtube.png" alt="YouTube" className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#FFFFFF] hover:text-gray-300">
                <img src="/icons/facebook.png" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#FFFFFF] hover:text-gray-300">
                <img src="/icons/twitter.png" alt="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#FFFFFF] hover:text-gray-300">
                <img src="/icons/instagram.png" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#FFFFFF] hover:text-gray-300">
                <img src="/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
