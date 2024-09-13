import { useState } from "react";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import style from "../constants/style";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link, scroller } from "react-scroll";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [active, setActive] = useState("home");

  const toggleMenu = (() => {
    setToggle(!toggle)

    if (!toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  })

  const scrollTo = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
    });
    setToggle(false); // Close menu if it's open
  };



  return (
    <>
    <header
      className={`flex justify-around items-center font-poppins py-4 font-medium text-black text-smF lg:text-lgF  navbar overflow-hidden bg-gradient-to-r from-[#007aff] to-[#02baff] shadow-md fixed top-0 left-0 w-full z-10`}
    >
    
       <Link to="home" className="flex items-center space-x-2 cursor-pointer" smooth={true} duration={500} >
        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold text-white" onClick={() => scrollTo('/')}>
          <p className=' text-gray-800'>RS</p>
        </div>
        <span className="text-lg font-semibold text-white">Rachana Sen</span>
      </Link>

      <ul
        className={`lg:gap-5 cursor-pointer sm:flex hidden lg:mr-0 sm:gap-6 custom-700:hidden text-white`}
      >
      {navLinks.map((item, index) => (
        <Link
        
        smooth={true}
        duration={500}
        key={item.id}
          to={item.path}
          onClick={() => setActive(item.path)}
          className={`${
                active === item.path
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600" // Active styles
                  : "text-white hover:text-blue-600 transition-colors" // Inactive styles
              }`}
        >
          {item.title}
        </Link>

      
    ))}
      </ul> 
    
      <div
        onClick={toggleMenu}
        className={`h-[35px] w-[35px] bg-red ${style.flexCenter} lg:hidden sm:hidden -mr-8 rounded-full relative`}
      >
        {toggle ? (
          <IoMdClose size={18} color="#ffffff" />
        ) : (
          <AiOutlineMenu size={18} color="#ffffff" className="" />
        )}


        <nav className="flex space-x-6 text-lg">
        {/* Menu Bar */}
        <ul
          className={`nike-list fixed top-[4.5rem] right-0 left-0 h-full p-4 ml-32 transform ${
            toggle ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-1 ease lg:flex lg:flex-row lg:static lg:transform-none lg:bg-transparent gap-5 cursor-pointer flex flex-col items-center text-white z-10 bg-gray-800`}
        >
         {navLinks.map((item, index) => (
        <Link
          key={item.id}
          smooth={true}
         duration={500}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
              : 'text-gray-800 hover:text-blue-600 transition-colors'
          }
          // style={{ display: item.title === 'Resume' ? 'none' : 'block' }}

          onClick={() => {
                    scrollTo(item.path);
                    setToggle(false); // Close the menu on click
                  }}
        >
          {item.title}
        </Link>
      ))}
      {/* Button for downloading resume */}
      <a href="/rachana.pdf.pdf" download className="text-white hover:text-blue-600 transition-colors ml-4">
        Download Resume
      </a>

        <div className="flex space-x-4 mt-16">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-800">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-800">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-800">
              <FaTwitter size={24} />
            </a>
          </div>

        </ul>
      </nav>
      </div>
    </header>
    </>
    
  );
};

export default Navbar 

