import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import CTA from "../components/CTA";
import { academicProjects, pythonProjects } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block px-3.5 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide mb-3">
            Portfolio &amp; Lab Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Academic &amp; Technical Projects
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            A selection of software development, database design, and instructional applications developed for academic coursework, lab demonstrations, and practical student learning.
          </p>
        </div>

        {/* Category 1: Academic & Full-Stack Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-3 border-gray-100 flex items-center justify-between">
            <span>Academic &amp; Web Applications</span>
            <span className="text-xs font-normal text-gray-500">MCA &amp; Full-Stack</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{project.emoji || "💻"}</span>
                    <div className="flex items-center space-x-3 text-gray-500">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition"
                          title="GitHub Repository"
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-white text-gray-700 px-2.5 py-1 rounded-md border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Python & Database Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-3 border-gray-100 flex items-center justify-between">
            <span>Python &amp; Database Systems</span>
            <span className="text-xs font-normal text-gray-500">Practical &amp; Instructional</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pythonProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{project.emoji || "🐍"}</span>
                    <div className="flex items-center space-x-3 text-gray-500">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition"
                          title="GitHub Repository"
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-white text-gray-700 px-2.5 py-1 rounded-md border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-slate-200 mb-12" />

        {/* <CTA /> */}
      </div>
    </section>
  );
};

export default Projects;