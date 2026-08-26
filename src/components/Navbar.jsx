import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [toggle]);

  const handleLinkClick = (path) => {
    setActive(path);
    setToggle(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#007aff] to-[#02baff] shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          
          {/* Logo / Brand Name */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleLinkClick("home")}
          >
            <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center font-bold text-blue-600 shadow-sm">
              RS
            </div>
            <span className="text-lg font-semibold text-white tracking-wide">
              Rachana Sen
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-7">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => setActive(item.path)}
                  className={`cursor-pointer transition-all duration-200 text-sm font-medium pb-1 ${
                    active === item.path
                      ? "text-white font-bold border-b-2 border-white"
                      : "text-blue-100 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right CTA / Socials */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/Rachana_Sen_Resume.pdf"
              download
              className="bg-white text-blue-600 text-xs font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition shadow-sm"
            >
              Resume
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-200 transition"
            >
              <FaLinkedin size={19} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-blue-200 transition"
            >
              <FaGithub size={19} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setToggle(!toggle)}
            className="md:hidden text-white focus:outline-none p-1.5 rounded-lg hover:bg-white/10 transition"
          >
            {toggle ? <IoMdClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Mobile Slide-out Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out p-6 flex flex-col justify-between md:hidden ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center pb-6 border-b border-gray-800 mb-6">
            <span className="font-semibold text-lg">Menu</span>
            <button
              onClick={() => setToggle(false)}
              className="text-gray-400 hover:text-white"
            >
              <IoMdClose size={22} />
            </button>
          </div>

          <ul className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleLinkClick(item.path)}
                  className={`block text-base py-1.5 transition-colors cursor-pointer ${
                    active === item.path
                      ? "text-blue-400 font-semibold border-l-2 border-blue-400 pl-3"
                      : "text-gray-300 hover:text-white pl-3"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Drawer Footer Actions */}
        <div className="pt-6 border-t border-gray-800 space-y-5">
          <a
            href="/Rachana_Sen_Resume.pdf"
            download
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg text-sm transition"
          >
            Download Resume
          </a>

          <div className="flex justify-center space-x-6 text-gray-400">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;