'use client';

import { FC } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <footer className="bg-[#281930] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subscribe Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe Today To Get Offers</h2>
          <form className="flex flex-col sm:flex-row items-center justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-l-lg border-none focus:outline-none text-black"
            />
            <button
              type="submit"
              className="bg-[#85207e] text-white px-6 py-3 rounded-r-lg mt-4 sm:mt-0 hover:bg-[#874983] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Links and Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {/* Company Info */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold mb-4">About Mr Fruit</h3>
            <p className="text-gray-400">
              Dedicated to bringing you the best in natural health and wellness. Pure, simple, and effective.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <ul className="space-y-3">
          
              <li>
                <a href="#" className="hover:text-[#874983] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#874983] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#874983] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center lg:text-right">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-end space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#85207e] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#85207e] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#85207e] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#85207e] text-white p-3 rounded-full hover:opacity-80 transition-opacity"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center border-t border-gray-600 pt-6 text-gray-400">
          <p>© 2024 <span className='text-[#85207e] font-bold'>Mr.fruit.</span> All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
