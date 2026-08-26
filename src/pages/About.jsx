import React from 'react';
import { Link } from 'react-scroll';
import { FaGraduationCap, FaChalkboardTeacher, FaCode } from 'react-icons/fa';
import portfolioImage from '../assets/images/wpp.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Section - Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src={portfolioImage}
                alt="Rachana Sen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section - About Content */}
          <div className="md:w-2/3">
            <div className="inline-block mb-3 px-3.5 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide">
              About Me
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Passionate Computer Science Educator &amp; Technologist
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              I am a dedicated Computer Science educator and MCA postgraduate with hands-on experience in technical instruction, curriculum delivery, and student mentorship. Currently working as an Associate Trainer, I specialize in bridging core theoretical computing concepts with practical, hands-on programming.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              My core areas of expertise include <strong>Python Programming</strong>, <strong>Relational Database Management (SQL)</strong>, and <strong>Modern Web Development</strong>. Alongside practical training, I am actively preparing for the <strong>UGC NET / SET</strong> examinations with the long-term goal of fostering academic excellence and practical research in higher education.
            </p>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg text-xl">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">MCA Graduate</h4>
                  <p className="text-xs text-gray-500">Class of 2024</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-3">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg text-xl">
                  <FaChalkboardTeacher />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Technical Trainer</h4>
                  <p className="text-xs text-gray-500">1+ Year Experience</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-3">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg text-xl">
                  <FaCode />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Core Stack</h4>
                  <p className="text-xs text-gray-500">Python, SQL, Web</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-sm transition duration-200"
              >
                View Teaching Experience
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-lg border border-gray-300 transition duration-200"
              >
                Get in Touch
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;