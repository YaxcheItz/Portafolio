import React from 'react';
import { motion } from 'motion/react';

const About = ({ t }) => {
  return (
    <section id="sobre-mi" className="py-16 bg-gray-900/50" aria-labelledby="sobre-mi-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="sobre-mi-heading" className="text-2xl font-bold text-white mb-10 flex items-center"
        >
          <span className="w-6 h-[2px] bg-purple-500 mr-3"></span> {t.title}
        </motion.h2>
        
        <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-purple-400 font-bold mb-2 uppercase tracking-widest text-xs">{t.role}</h3>
              <p className="text-base text-gray-400 leading-relaxed">{t.p1}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {t.interests.map((interest, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-800/30 border border-gray-700/50 rounded-xl hover:bg-gray-800 transition-colors group">
                  <span className="text-xl group-hover:scale-110 transition-transform">{interest.icon}</span>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-wider">{interest.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform"></div>
            <div className="bg-gray-800 border border-gray-700/50 rounded-2xl p-6 relative flex flex-col items-center justify-center min-h-[220px]">
              <div className="w-20 h-20 rounded-full bg-gray-900 border border-purple-500/30 flex items-center justify-center mb-4 group-hover:border-purple-500 transition-colors">
                 <svg className="w-10 h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Full Stack Dev</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;