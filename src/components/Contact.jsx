import React from 'react';
import { motion } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = ({ handleSubmit, formStatus, t }) => {
  return (
    <footer id="contacto" className="relative w-full rounded-2xl border border-zinc-200 dark:border-zinc-800/50 bg-white dark:bg-zinc-900/30 p-6 md:p-10 overflow-hidden shadow-xl shadow-zinc-200/50 dark:shadow-black/20 mb-12 transition-colors" role="contentinfo" aria-labelledby="contacto-heading">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="contacto-heading" className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6"
        >
          {t.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-zinc-600 dark:text-zinc-400 mb-10 max-w-xl mx-auto font-medium"
        >
          {t.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 md:p-8 shadow-inner max-w-xl mx-auto mb-12 relative overflow-hidden group"
        >
          <form onSubmit={handleSubmit} className="text-left relative z-10 space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">{t.name}</label>
                <input type="text" id="name" name="from_name" required disabled={formStatus.sending} className="w-full bg-white dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-700/50 rounded-lg px-4 py-3 text-zinc-900 dark:text-white text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white transition-all disabled:opacity-50 font-medium" placeholder={t.placeholderName} />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">{t.email}</label>
                <input type="email" id="email" name="from_email" required disabled={formStatus.sending} className="w-full bg-white dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-700/50 rounded-lg px-4 py-3 text-zinc-900 dark:text-white text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white transition-all disabled:opacity-50 font-medium" placeholder={t.placeholderEmail} />
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">{t.message}</label>
                <textarea id="message" name="message" rows="4" required disabled={formStatus.sending} className="w-full bg-white dark:bg-zinc-900/50 border border-zinc-300 dark:border-zinc-700/50 rounded-lg px-4 py-3 text-zinc-900 dark:text-white text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white transition-all resize-none disabled:opacity-50 font-medium" placeholder={t.placeholderMessage}></textarea>
              </div>

              {formStatus.success && (
                <div className="bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white px-4 py-3 rounded-lg text-xs font-bold">
                  {t.success}
                </div>
              )}
              {formStatus.error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-500/50 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-xs font-bold">
                  {t.error}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus.sending}
                className="w-full bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-black uppercase tracking-widest py-4 px-6 rounded-lg shadow-lg shadow-zinc-900/10 dark:shadow-white/10 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
              >
                {formStatus.sending ? t.sending : t.send}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;