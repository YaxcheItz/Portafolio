import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center text-center" aria-label="Sección de bienvenida">
      <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wide">
        Disponible para nuevas oportunidades
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
        Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">YaxcheItz</span>
      </h1>
      <p className="mt-4 max-w-2xl text-xl text-gray-400 mb-10">
        Desarrollador de Software apasionado por crear experiencias web modernas, rápidas y escalables. Transformo ideas en código estructurado y funcional.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#proyectos" className="px-8 py-3 rounded-lg bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors" aria-label="Ver mis proyectos">
          Ver Proyectos
        </a>
        <a href="#contacto" className="px-8 py-3 rounded-lg border border-gray-700 text-white font-bold hover:bg-gray-800 transition-colors" aria-label="Ir a formulario de contacto">
          Contactar
        </a>
        <a
          href="/CV_YaxcheItz.pdf"
          download
          className="px-8 py-3 rounded-lg border border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500 hover:text-white transition-colors inline-flex items-center justify-center gap-2"
          aria-label="Descargar mi currículum en PDF"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Descargar CV
        </a>
      </div>
    </section>
  );
};

export default Hero;