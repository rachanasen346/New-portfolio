import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaChalkboardTeacher, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { experiences } from '../constants';

const getExperienceIcon = (type) => {
  switch (type) {
    case 'teaching':
      return <FaChalkboardTeacher />;
    case 'education':
      return <FaGraduationCap />;
    case 'workshop':
      return <FaLaptopCode />;
    default:
      return <FaChalkboardTeacher />;
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide mb-3">
            Career &amp; Academic Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Teaching &amp; Experience
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Hands-on technical instruction, academic pedagogical training, and computer science degrees.
          </p>
        </div>

        {/* Vertical Timeline */}
        <VerticalTimeline lineColor="#E2E8F0">
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              dateClassName="text-gray-600 font-medium font-poppins"
              iconStyle={{
                background: experience.iconBg || '#2563EB',
                color: '#ffffff',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              }}
              icon={getExperienceIcon(experience.type)}
              contentStyle={{
                background: '#ffffff',
                color: '#1F2937',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                borderRadius: '1rem',
                border: '1px solid #F1F5F9',
                padding: '1.75rem',
              }}
              contentArrowStyle={{ borderRight: '8px solid #ffffff' }}
            >
              <div>
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 mb-2">
                  {experience.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  {experience.title}
                </h3>
                <h4 className="text-sm font-semibold text-blue-600 mt-1">
                  {experience.company_name}
                </h4>
                <p className="text-xs text-gray-500 !mt-0.5">
                  {experience.location}
                </p>
              </div>

              {/* Responsibilities / Accomplishments */}
              <ul className="my-4 list-disc ml-5 space-y-2">
                {experience.points.map((point, pointIndex) => (
                  <li
                    key={`experience-point-${pointIndex}`}
                    className="text-gray-600 text-sm leading-relaxed pl-1"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {/* Skill Badges */}
              {experience.skills && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;