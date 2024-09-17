import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5 } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white pt-24 pb-20 relative overflow-hidden max-container shadow-md mt-32">
        
        {/* Background Animation (Coding Icons) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0">
            {[...Array(15)].map((_, index) => (
              <div
                key={index}
                className="absolute text-4xl animate-floating"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  color: index % 2 === 0 ? '#61DBFB' : '#8CC84B', // Alternate colors
                  animationDuration: `${5 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                <FaReact />
              </div>
            ))}
            {[...Array(15)].map((_, index) => (
              <div
                key={index + 15}
                className="absolute text-4xl animate-floating"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  color: '#F7DF1E',
                  animationDuration: `${5 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                <FaNodeJs />
              </div>
            ))}
            {[...Array(15)].map((_, index) => (
              <div
                key={index + 30}
                className="absolute text-4xl animate-floating"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  color: '#F7DF1E',
                  animationDuration: `${5 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                <FaDatabase />
              </div>
            ))}
            {[...Array(15)].map((_, index) => (
              <div
                key={index + 45}
                className="absolute text-4xl animate-floating"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  color: '#264DE4',
                  animationDuration: `${5 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                <FaCss3Alt />
              </div>
            ))}
            {[...Array(15)].map((_, index) => (
              <div
                key={index + 60}
                className="absolute text-4xl animate-floating"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  color: '#F16529',
                  animationDuration: `${5 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                <FaHtml5 />
              </div>
            ))}
          </div>
        </div>

        <div className="relative text-center z-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Rachana Sen
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-lg mx-auto">
            A passionate Software Engineer from Indore, crafting beautiful and seamless web experiences.
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-6 z-10">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition duration-300 inline-flex items-center"
          >
            View My Work
            <FaArrowRightLong className="ml-3" />
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-white text-gray-700 border border-gray-300 py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 inline-flex items-center"
          >
            Contact Me
            <FaArrowRightLong className="ml-3" />
          </Link>
        </div>
      </section>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .animate-floating {
          animation: floating 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default HomePage;
