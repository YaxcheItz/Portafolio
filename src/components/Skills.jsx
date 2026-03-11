import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="habilidades" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800" aria-labelledby="habilidades-heading">
      <h2 id="habilidades-heading" className="text-3xl font-bold text-white mb-10 flex items-center justify-center md:justify-start">
         <span className="w-8 h-[2px] bg-cyan-500 mr-4 hidden md:block"></span> Tecnologías y Herramientas
      </h2>
      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 bg-gray-800 border border-gray-700 text-gray-300 px-5 py-3 rounded-lg text-lg font-medium hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-500/10 transition-all cursor-default group">
            <img src={skill.icon} alt={skill.name} className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="group-hover:text-cyan-400 transition-colors">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;