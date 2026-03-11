import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <section id="experiencia" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800" aria-labelledby="experiencia-heading">
      <h2 id="experiencia-heading" className="text-3xl font-bold text-white mb-12 flex items-center">
        <span className="w-8 h-[2px] bg-cyan-500 mr-4"></span> Experiencia
      </h2>
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 text-cyan-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg hover:border-cyan-500/50 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-cyan-400 text-sm font-medium bg-cyan-500/10 px-3 py-1 rounded-full mt-2 sm:mt-0">{exp.period}</span>
              </div>
              <div className="text-gray-400 font-medium mb-4">{exp.company}</div>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;