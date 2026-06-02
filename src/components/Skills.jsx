import React from 'react';
import { motion } from 'motion/react';

const Skills = ({ skills, t }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="habilidades" className="relative h-full rounded-2xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/30 p-6 md:p-8 overflow-hidden shadow-xl shadow-zinc-200/50 dark:shadow-black/20 transition-colors" aria-labelledby="habilidades-heading">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        id="habilidades-heading" className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center"
      >
        <span className="w-6 h-[2px] bg-zinc-900 dark:bg-white mr-3"></span> {t.title}
      </motion.h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill.name} 
            variants={item}
            className="relative flex items-center gap-2.5 p-2 bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-700/50 rounded-xl hover:border-zinc-900/50 dark:hover:border-white/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all cursor-default group overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-200/0 via-zinc-200/50 dark:from-white/0 dark:via-white/10 to-zinc-200/0 dark:to-zinc-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
            
            <div className="w-5 h-5 flex items-center justify-center relative z-10">
              <img src={skill.icon} alt={skill.name} className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity object-contain" />
            </div>
            <span className="text-[10px] font-black text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white uppercase tracking-wider transition-colors">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;