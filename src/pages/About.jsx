import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import CTA from "../components/CTA";

import portfolioImage from '../assets/images/wpp.jpeg';

const About = () => {
  return (
    <section className="py-16">
    <section className="max-container bg-gradient-to-r from-blue-200 to-purple-200 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-40 pointer-events-none"></div>
      
      <div className="mx-auto flex flex-col md:flex-row items-center gap-12 px-8 relative">
        {/* Left Section - About Content */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            <span className="blue-gradient_text font-semibold">About Me</span> 👋
          </h1>
  
          <p className="text-lg text-slate-600 mb-4">
            I'm a passionate Software Engineer based in Indore, specializing in building interactive web applications using modern technologies. With over 1.7 years of experience in the field, I thrive on creating solutions that blend technical innovation and design excellence.
          </p>
  
          <p className="text-lg text-slate-600 mb-4">
            My journey started with iOS development, but my focus quickly expanded to full-stack web development. Now, I build intuitive interfaces with React, manage back-end logic with Node.js, and store data efficiently using MongoDB.
          </p>
  
          <p className="text-lg text-slate-600 mb-4">
            I’m always eager to learn new technologies, collaborate with talented teams, and develop scalable, impactful solutions.
          </p>
  
          {/* Call-to-Action */}
          <div className="mt-6">
            <a
              href="#"
              className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-blue-600"
            >
              Contact Me
            </a>
          </div>
        </div>
  
        {/* Right Section - Optional Image */}
        <div className="md:w-1/3 flex justify-center relative">
          <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
            <img
              src={portfolioImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            {/* Removed the gradient overlay on the image */}
          </div>
        </div>
      </div>
    </section>
  </section>
  
     
    


  

  );
};

export default About;