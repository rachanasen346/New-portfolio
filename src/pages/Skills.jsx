import { skills } from "../constants";

const Skills = () => {
  return (
    <section className='max-container bg-gradient-to-r from-[#007aff] to-[#02baff] py-20'>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-center text-white'>My Skills</h3>

        {/* Skills Grid Layout */}
        <div className='mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className='group relative flex flex-col items-center justify-center bg-white p-6 shadow-xl rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl'
            >
              <div className='w-16 h-16 mb-4'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-full h-full object-contain'
                />
              </div>
              <h4 className='text-center text-lg font-semibold text-gray-800 group-hover:text-blue-500 transition-colors'>
                {skill.name}
              </h4>
              {/* Overlay on hover */}
              <div className='absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity rounded-lg z-0'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
