import React from 'react';
import { motion } from 'motion/react';

const Hero = ({ t }) => {
  return (
    <section id="inicio" className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center text-center overflow-hidden" aria-label="Sección de bienvenida">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-[10px] font-bold uppercase tracking-widest"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
        </span>
        {t.available}
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
      >
        {t.greeting}<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">YaxcheItz</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl text-base md:text-lg text-gray-400 mb-10 leading-relaxed"
      >
        {t.description}
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <a href="#proyectos" className="px-6 py-2.5 rounded-lg bg-cyan-600 text-white text-sm font-bold hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-900/10" aria-label="Ver mis proyectos">
          {t.viewProjects}
        </a>
        <a href="#contacto" className="px-6 py-2.5 rounded-lg border border-gray-700 text-white text-sm font-bold hover:bg-gray-800 transition-all" aria-label="Ir a formulario de contacto">
          {t.contact}
        </a>
        <a
          href="/CV_YaxcheItz.pdf"
          download
          className="px-6 py-2.5 rounded-lg border border-cyan-500/20 text-cyan-400 text-sm font-bold hover:bg-cyan-500/5 transition-all inline-flex items-center justify-center gap-2"
        >
          {t.downloadCV}
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;