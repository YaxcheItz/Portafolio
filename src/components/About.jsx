import React from 'react';
import { motion } from 'motion/react';

const About = ({ t }) => {
  return (
    <section id="sobre-mi" className="relative h-full rounded-2xl border border-gray-800/50 bg-gray-900/20 backdrop-blur-md p-6 md:p-8 overflow-hidden shadow-xl" aria-labelledby="sobre-mi-heading">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        id="sobre-mi-heading" className="text-xl font-bold text-white mb-6 flex items-center"
      >
        <span className="w-6 h-[2px] bg-purple-500 mr-3"></span> {t.title}
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4"
      >
        <div>
          <h3 className="text-purple-400 font-bold mb-2 uppercase tracking-widest text-[10px]">{t.role}</h3>
          <p className="text-sm text-gray-400 leading-relaxed font-medium">{t.p1}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 pt-2">
          {t.interests.map((interest, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/20 border border-gray-700/30 rounded-xl hover:bg-gray-800 transition-all group">
              <span className="text-lg group-hover:scale-110 transition-transform">{interest.icon}</span>
              <span className="text-[10px] font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-wider">{interest.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;