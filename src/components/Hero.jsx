import React from 'react';
import { motion } from 'motion/react';

const Hero = ({ t }) => {
  return (
    <section id="inicio" className="relative w-full rounded-2xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/30 shadow-xl shadow-zinc-200/50 dark:shadow-black/20 p-6 md:p-10 flex flex-col items-center text-center overflow-hidden transition-colors" aria-label="Sección de bienvenida">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-500/30 bg-zinc-100 dark:bg-zinc-500/10 text-zinc-600 dark:text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em]"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-500 dark:bg-zinc-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-zinc-600 dark:bg-zinc-300"></span>
        </span>
        {t.available}
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tight mb-6 leading-tight"
      >
        {t.greeting}<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-zinc-900 to-zinc-500 dark:from-zinc-200 dark:via-white dark:to-zinc-400">Yaxche</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-xl text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium mb-8"
      >
        {t.description}
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <a 
          href="/CV_YaxcheItz.pdf" 
          download
          className="px-8 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-zinc-800 dark:hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950 transition-all shadow-lg shadow-zinc-900/10 dark:shadow-white/10 flex items-center gap-3 group"
        >
          <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          {t.downloadCV}
        </a>

        <div className="flex gap-3">
          <a 
            href="https://www.linkedin.com/in/yaxche-itzamna-ramirez-garcia-b7556a177" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 hover:border-zinc-900/50 dark:hover:border-white/50 hover:bg-zinc-100 dark:hover:bg-white/10 transition-all text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white shadow-lg shadow-zinc-200/50 dark:shadow-black/20"
            title="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a 
            href="https://github.com/YaxcheItz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 hover:border-zinc-900/50 dark:hover:border-white/50 hover:bg-zinc-100 dark:hover:bg-white/10 transition-all text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white shadow-lg shadow-zinc-200/50 dark:shadow-black/20"
            title="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;