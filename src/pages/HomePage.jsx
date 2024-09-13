import React from 'react'
import HomeInfo from '../components/HomeInfo'

import { arrow } from '../assets/icons'

import { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";



import { Link } from 'react-scroll';
import portfolioImage from '../assets/images/wpp.jpeg';
import About from './About';


const HomePage = () => {
  return (
    <>
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white pt-24 pb-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hi, I’m <span className="text-gradient-to-r from-[#007aff] to-[#02baff]">Rachana Sen</span>
        </h1>
        <p className="text-lg text-gray-600">
          A passionate Software Engineer from Indore, crafting beautiful web experiences.
        </p>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
        {/* Left Section */}
        <div className="text-center lg:text-left max-w-lg space-y-6">
          <p className="text-lg text-gray-700">
            I specialize in building amazing websites, scalable applications, and creating seamless user experiences.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 ml-4 mr-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="bg-gradient-to-r from-[#007aff] to-[#02baff] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 inline-flex items-center"
            >
              View Projects
              <FaArrowRightLong className=' ml-5'/>
              {/* <img src={arrow} alt="arrow icon" className="ml-2 w-4 h-4" /> */}
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-gray-100 text-gray-800 py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 inline-flex items-center"
            >
              Get in Touch
              <FaArrowRightLong className=' ml-5'/>
              {/* <img src={arrow} alt="arrow icon" className="ml-2 w-4 h-4" /> */}
            </Link>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <img
            src={portfolioImage}
            alt="Rachana Sen Portfolio"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Let’s Build Something Great Together!</h2>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="bg-gradient-to-r from-[#007aff] to-[#02baff] text-white py-3 px-10 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 inline-flex items-center"
        >
          Learn More About Me
          <FaArrowRightLong className=' ml-5'/>

          {/* <img src={arrow} alt="arrow icon" className="ml-2 w-4 h-4" />  */}

        </Link>
      </div>
    </section>
   
    </>
  );
};

export default HomePage;
