import React from 'react';
import { motion } from 'motion/react';

const Experience = ({ experiences, t, skillsT }) => {
  return (
    <section id="experiencia" className="relative w-full rounded-2xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/30 p-6 md:p-8 overflow-hidden shadow-xl shadow-zinc-200/50 dark:shadow-black/20 transition-colors" aria-labelledby="experiencia-heading">
      <div className="grid lg:grid-cols-[1fr_250px] gap-8">
        <div>
          <h2 id="experiencia-heading" className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center">
            <span className="w-6 h-[2px] bg-zinc-900 dark:bg-white mr-3"></span> {t.title}
          </h2>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="group">
                <div className="bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-700/50 p-4 rounded-xl hover:border-zinc-900/30 dark:hover:border-white/30 transition-all">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">{exp.role}</h3>
                    <span className="text-zinc-600 dark:text-zinc-300 text-[8px] font-black uppercase tracking-widest bg-zinc-200 dark:bg-zinc-700/50 px-2 py-0.5 rounded">{exp.period}</span>
                  </div>
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">{exp.company}</div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{exp.description}</p>
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
          <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-4 flex items-center">
            <span className="w-4 h-[1px] bg-zinc-900 dark:bg-white mr-2"></span> {skillsT.languages}
          </h3>
          <div className="space-y-2">
            {[
              { code: 'EN', label: skillsT.english },
              { code: 'ES', label: skillsT.languages === 'Languages' ? 'Native' : 'Nativo' }
            ].map((lang, idx) => (
              <div key={idx} className="p-3 bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-700/50 rounded-xl group hover:border-zinc-900/30 dark:hover:border-white/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-zinc-200 dark:bg-zinc-700/50 flex items-center justify-center text-zinc-800 dark:text-zinc-200 text-[10px] font-black border border-zinc-300 dark:border-zinc-600/50">{lang.code}</div>
                  <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">{lang.label}</span>
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