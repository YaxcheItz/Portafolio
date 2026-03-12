import React from 'react';
import { motion } from 'motion/react';
import { GithubIcon } from './Icons';

const Projects = ({ repos, loading, t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="proyectos" className="py-16 bg-zinc-900" aria-labelledby="proyectos-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id="proyectos-heading" className="text-2xl font-bold text-white flex items-center"
          >
            <span className="w-6 h-[2px] bg-cyan-500 mr-3"></span> {t.title}
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://github.com/YaxcheItz" target="_blank" rel="noopener noreferrer" className="hidden sm:flex text-cyan-400 hover:text-cyan-300 text-xs font-bold items-center transition-colors"
          >
            {t.viewGithub} <span className="ml-1">&rarr;</span>
          </motion.a>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
          </div>
        ) : (
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {repos.map(repo => (
              <motion.div 
                key={repo.id} 
                variants={item}
                className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all flex flex-col h-full group"
              >
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-zinc-900 rounded-lg text-cyan-400 scale-90">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    </div>
                    <div className="flex gap-3">
                      {repo.html_url && (
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors scale-75" title="GitHub">
                          <GithubIcon />
                        </a>
                      )}
                      {repo.live_url && (
                        <a href={repo.live_url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-cyan-400 transition-colors scale-75" title="Live">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {repo.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 flex-grow">
                    {repo.description || t.defaultDescription}
                  </p>
                </div>
                <div className="px-5 py-3 bg-zinc-900/50 border-t border-zinc-800 mt-auto flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">{repo.language || t.code}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
