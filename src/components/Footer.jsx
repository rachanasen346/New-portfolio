import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#007aff] to-[#02baff] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {/* Column 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Me</h3>
          <p className="text-sm text-gray-100">
            I’m Rachana Sen, a passionate software engineer from Indore, creating beautiful web experiences with a focus on clean design and code.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-400 mt-8 pt-5 text-center">
        <p className="text-sm text-gray-200">
          © {new Date().getFullYear()} Rachana Sen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
