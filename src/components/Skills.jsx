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
    <section id="habilidades" className="relative h-full rounded-2xl border border-gray-800/50 bg-gray-900/20 backdrop-blur-md p-6 md:p-8 overflow-hidden shadow-xl" aria-labelledby="habilidades-heading">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        id="habilidades-heading" className="text-xl font-bold text-white mb-6 flex items-center"
      >
        <span className="w-6 h-[2px] bg-blue-500 mr-3"></span> {t.title}
      </motion.h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="flex items-center gap-2.5 p-2 bg-gray-800/20 border border-gray-700/30 rounded-xl hover:border-blue-500/30 transition-all cursor-default group"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <img src={skill.icon} alt={skill.name} className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity object-contain" />
            </div>
            <span className="text-[10px] font-black text-gray-500 group-hover:text-white uppercase tracking-wider">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
