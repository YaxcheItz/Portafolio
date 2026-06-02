import React from 'react';
import { motion } from 'motion/react';
import { GithubIcon } from './Icons';
import { skills } from '../data/constants';

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

  // Helper function to find the icon path based on the technology name
  const getTechIcon = (techName) => {
    const foundSkill = skills.find(s => s.name.toLowerCase() === techName.toLowerCase() || s.name.toLowerCase().includes(techName.toLowerCase()));
    return foundSkill ? foundSkill.icon : null;
  };

  return (
    <section id="proyectos" className="relative w-full rounded-2xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/30 p-6 md:p-10 overflow-hidden shadow-xl shadow-zinc-200/50 dark:shadow-black/20 transition-colors" aria-labelledby="proyectos-heading">
      <div className="flex justify-between items-end mb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="proyectos-heading" className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center"
        >
          <span className="w-6 h-[2px] bg-zinc-900 dark:bg-white mr-3"></span> {t.title}
        </motion.h2>
        <motion.a 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="https://github.com/YaxcheItz" target="_blank" rel="noopener noreferrer" className="hidden sm:flex text-zinc-500 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white text-[10px] font-black uppercase tracking-widest items-center transition-colors"
        >
          {t.viewGithub} <span className="ml-1">&rarr;</span>
        </motion.a>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-zinc-900 dark:border-white"></div>
        </div>
      ) : (
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {repos.map(repo => (
            <motion.article 
              key={repo.id} 
              variants={item}
              className="bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-700/50 rounded-xl overflow-hidden hover:border-zinc-300 dark:hover:border-white/30 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all duration-300 flex flex-col h-full group shadow-lg"
            >
              {/* Project Image Preview */}
              {repo.image && (
                <div className="w-full h-48 overflow-hidden border-b border-zinc-200 dark:border-zinc-700/50 relative">
                  <img 
                    src={repo.image} 
                    alt={`Preview of ${repo.name}`} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              )}

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">
                  {repo.name}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow font-medium">
                  {repo.description || t.defaultDescription}
                </p>
                
                {/* Technologies List with Icons */}
                {repo.techs && repo.techs.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.techs.map((tech, index) => (
                      <div key={index} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700/50">
                        {getTechIcon(tech) && (
                          <img src={getTechIcon(tech)} alt={tech} className="w-3.5 h-3.5 opacity-80" />
                        )}
                        <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">{tech}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Call to Action Buttons */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800/50">
                  {repo.live_url && (
                    <a 
                      href={repo.live_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`Visit site for ${repo.name}`}
                      className="flex-1 bg-zinc-900/5 dark:bg-white/5 hover:bg-zinc-900/10 dark:hover:bg-white/10 text-zinc-900 dark:text-white border border-zinc-900/20 dark:border-white/20 hover:border-zinc-900/40 dark:hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white transition-all rounded-lg py-2.5 px-4 flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider group/btn"
                    >
                      <span>{t.visitSite || 'Visit Site'}</span>
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {repo.html_url && (
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`View source code of ${repo.name} on GitHub`}
                      className="p-2.5 bg-zinc-100 dark:bg-zinc-900/50 hover:bg-zinc-200 dark:hover:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-300 dark:border-zinc-700/50 transition-all rounded-lg flex items-center justify-center"
                      title={t.sourceCode || 'Code'}
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default Projects;