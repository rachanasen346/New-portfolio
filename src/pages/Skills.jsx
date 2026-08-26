import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { skills } from '../constants';

import { FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt } from 'react-icons/fa';
// import { SiCplusplus, SiMicrosoft } from 'react-icons/si';
import { MdOutlineComputer } from 'react-icons/md';
import { TbBinaryTree } from 'react-icons/tb';

const renderSkillIcon = (iconName, color) => {
  const iconProps = { className: "text-4xl", style: { color } };
  
  switch (iconName) {
    case 'python': return <FaPython {...iconProps} />;
    case 'javascript': return <FaJs {...iconProps} />;
    //case 'cplusplus': return <SiCplusplus {...iconProps} />;
    case 'database': 
    case 'dbdesign': return <FaDatabase {...iconProps} />;
    case 'git': return <FaGitAlt {...iconProps} />;
    case 'html5': return <FaHtml5 {...iconProps} />;
    case 'css3': return <FaCss3Alt {...iconProps} />;
    case 'react': return <FaReact {...iconProps} />;
    case 'computer': return <MdOutlineComputer {...iconProps} />;
    case 'dsa': return <TbBinaryTree {...iconProps} />;
   // case 'msoffice': return <SiMicrosoft {...iconProps} />;
    default: return <FaDatabase {...iconProps} />;
  }
};

const skillCategories = [
  { id: 'all', label: 'All Skills' },
  { id: 'programming', label: 'Languages' },
  { id: 'database', label: 'Databases & Systems' },
  { id: 'web', label: 'Web Technologies' },
  { id: 'core', label: 'Core CS & Pedagogy' },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide mb-3">
            Expertise &amp; Teaching Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Technical &amp; Pedagogical Skills
          </h2>
          <p className="text-gray-600 text-base">
            Click on any module to view the detailed curriculum, teaching approach, and interactive quizzes.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Clickable Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill) => (
            <Link
              to={`/curriculum/${skill.iconName}`}
              key={skill.name}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center hover:-translate-y-1 cursor-pointer group"
            >
              <div className="w-14 h-14 mb-4 flex items-center justify-center bg-slate-50 rounded-xl p-2.5 group-hover:bg-blue-50 transition-colors">
                {renderSkillIcon(skill.iconName, skill.color)}
              </div>
              <h4 className="text-center text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {skill.name}
              </h4>
              <span className="text-[11px] text-gray-400 mt-1 font-medium text-center">
                {skill.level}
              </span>
              <span className="text-[11px] text-blue-500 font-semibold mt-2 group-hover:underline">
                View Curriculum →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;