import React from 'react';
import { motion } from 'motion/react';

const Experience = ({ experiences, t, skillsT }) => {
  return (
    <section id="experiencia" className="relative w-full rounded-2xl border border-gray-800/50 bg-gray-900/20 backdrop-blur-md p-6 md:p-8 overflow-hidden shadow-xl" aria-labelledby="experiencia-heading">
      <div className="grid lg:grid-cols-[1fr_250px] gap-8">
        <div>
          <h2 id="experiencia-heading" className="text-xl font-bold text-white mb-6 flex items-center">
            <span className="w-6 h-[2px] bg-indigo-500 mr-3"></span> {t.title}
          </h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="group">
                <div className="bg-gray-800/20 border border-gray-700/30 p-4 rounded-xl hover:border-indigo-500/20 transition-all">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                    <span className="text-indigo-400 text-[8px] font-black uppercase tracking-widest bg-indigo-500/5 px-2 py-0.5 rounded">{exp.period}</span>
                  </div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">{exp.company}</div>
                  <p className="text-xs text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:pt-12"
        >
          <h3 className="text-base font-bold text-white mb-4 flex items-center">
            <span className="w-4 h-[1px] bg-indigo-500 mr-2"></span> {skillsT.languages}
          </h3>
          <div className="space-y-2">
            {[
              { code: 'EN', label: skillsT.english },
              { code: 'ES', label: skillsT.languages === 'Languages' ? 'Native' : 'Nativo' }
            ].map((lang, idx) => (
              <div key={idx} className="p-3 bg-gray-800/20 border border-gray-700/30 rounded-xl group hover:border-indigo-500/20 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/5 flex items-center justify-center text-indigo-400 text-[10px] font-black border border-indigo-500/10">{lang.code}</div>
                  <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors">{lang.label}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
