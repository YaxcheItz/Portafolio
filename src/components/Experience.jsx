import React from 'react';
import { motion } from 'motion/react';

const Experience = ({ experiences, t, skillsT }) => {
  return (
    <section id="experiencia" className="py-16 bg-slate-900" aria-labelledby="experiencia-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_280px] gap-12">
          <div>
            <h2 id="experiencia-heading" className="text-2xl font-bold text-white mb-10 flex items-center">
              <span className="w-6 h-[2px] bg-indigo-500 mr-3"></span> {t.title}
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:h-full before:w-0.5 before:bg-slate-800">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-10 group">
                  <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  </div>
                  <div className="bg-slate-800/40 border border-slate-700/50 p-5 rounded-xl hover:border-indigo-500/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                      <span className="text-indigo-400 text-[10px] font-bold uppercase tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded">{exp.period}</span>
                    </div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">{exp.company}</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
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
            className="md:pt-16"
          >
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="w-4 h-[1px] bg-indigo-500 mr-2"></span> {skillsT.languages}
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl group hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-xs font-bold">EN</div>
                  <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{skillsT.english}</span>
                </div>
              </div>
              <div className="p-4 bg-slate-800/40 border border-slate-700/50 rounded-xl group hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-xs font-bold">ES</div>
                  <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{skillsT.languages === 'Languages' ? 'Native' : 'Nativo'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
