// import { Link } from "react-router-dom";

// import CTA from "../components/CTA";
import { iosProjects, mernProjects } from "../constants";


import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import { arrow } from "../assets/icons";
import { useState } from "react";


const Projects = () => {

  

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>


       {/* Category: MERN Stack Developer */}
       <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">MERN Stack Projects</h2>
        <div className="flex flex-wrap my-10 gap-16">
          {mernProjects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.id}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="MERN project"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>

                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                  
                   to={{
                      pathname: `/project-gallery/${project.id}`,
                      state: { screens: project.screen}
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    View Screens
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category: iOS Developer */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">iOS Projects</h2>
        <div className="flex flex-wrap my-10 gap-16">
          {iosProjects.map((project, index) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="iOS project"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                  key={index}
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>

     

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};



export default Projects;