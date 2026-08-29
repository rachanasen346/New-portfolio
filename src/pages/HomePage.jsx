import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaReact, FaPython, FaDatabase, FaCss3Alt, FaHtml5, FaFileArrowDown } from "react-icons/fa6";

const backgroundIcons = [
  { icon: <FaPython />, color: '#3776AB' },
  { icon: <FaDatabase />, color: '#F29111' },
  { icon: <FaReact />, color: '#61DBFB' },
  { icon: <FaHtml5 />, color: '#F16529' },
  { icon: <FaCss3Alt />, color: '#264DE4' },
];

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-slate-50 pt-24 pb-20 relative overflow-hidden max-container shadow-sm">
        
        {/* Subtle Background Animation (Coding & System Icons) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute inset-0">
            {[...Array(25)].map((_, index) => {
              const item = backgroundIcons[index % backgroundIcons.length];
              return (
                <div
                  key={index}
                  className="absolute text-3xl sm:text-4xl animate-floating"
                  style={{
                    top: `${(index * 17) % 95}%`,
                    left: `${(index * 23) % 95}%`,
                    color: item.color,
                    animationDuration: `${6 + (index % 5)}s`,
                    animationDelay: `${(index % 4) * 0.8}s`,
                  }}
                >
                  {item.icon}
                </div>
              );
            })}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative text-center z-10 px-4 max-w-3xl mx-auto">
          {/* Academic Focus Pill */}
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium">
            MCA Graduate • UGC NET / SET Aspirant • Technical Trainer
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Rachana Sen
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Dedicated <strong>Computer Science Educator</strong> & Technical Trainer passionate about simplifying core computer science, Python programming, and modern web development through hands-on learning.
          </p>
        </div>

        {/* Call-to-action buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 z-10 px-4">
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 px-8 rounded-full shadow-md hover:shadow-lg hover:opacity-95 transition duration-300 inline-flex items-center justify-center font-medium"
          >
            Teaching & Experience
            <FaArrowRightLong className="ml-3 text-sm" />
          </Link>

          <a
            href="/RachanaSenResume.pdf"
            download
            className="bg-white text-gray-800 border border-gray-300 py-3.5 px-8 rounded-full shadow-sm hover:bg-gray-50 transition duration-300 inline-flex items-center justify-center font-medium"
          >
            Download Resume
            <FaFileArrowDown className="ml-3 text-sm" />
          </a>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .animate-floating {
          animation: floating ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default HomePage;