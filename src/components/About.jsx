import React from 'react';

const About = () => {
  return (
    <section id="sobre-mi" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800" aria-labelledby="sobre-mi-heading">
      <h2 id="sobre-mi-heading" className="text-3xl font-bold text-white mb-8 flex items-center">
        <span className="w-8 h-[2px] bg-cyan-500 mr-4"></span> Sobre Mí
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-lg text-gray-400 space-y-4">
          <p>
            Soy un desarrollador enfocado en construir soluciones tecnológicas eficientes. Me gusta el aprendizaje continuo y mantenerme al día con las nuevas tecnologías del ecosistema web.
          </p>
          <p>
            A lo largo de mi formación, he trabajado en proyectos utilizando tecnologías tanto de Frontend como de Backend, desarrollando desde interfaces atractivas hasta la lógica del lado del servidor y bases de datos.
          </p>
          <p>
            Cuando no estoy programando, disfruto aprendiendo nuevas herramientas y mejorando mis habilidades analíticas para resolver problemas complejos.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl transform rotate-3 opacity-20"></div>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 relative flex items-center justify-center min-h-[300px] overflow-hidden">
            <div className="flex flex-col items-center justify-center text-center">
              <svg className="w-24 h-24 text-cyan-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-gray-500 text-sm max-w-xs">
                Coloca tu foto en <code className="text-cyan-400 text-xs">/public/profile.jpg</code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;