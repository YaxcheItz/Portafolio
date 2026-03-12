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
    <section id="habilidades" className="py-16 bg-gray-950" aria-labelledby="habilidades-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="habilidades-heading" className="text-2xl font-bold text-white mb-8 flex items-center"
        >
          <span className="w-6 h-[2px] bg-blue-500 mr-3"></span> {t.title}
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="flex items-center gap-3 p-3 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-blue-500/30 hover:bg-gray-800 transition-all cursor-default group"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <img src={skill.icon} alt={skill.name} className="w-full h-full group-hover:scale-110 transition-transform object-contain opacity-70 group-hover:opacity-100" />
              </div>
              <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
