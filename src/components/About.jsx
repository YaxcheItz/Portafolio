import { motion, useReducedMotion } from 'motion/react';

const About = ({ t }) => {
  const reduceMotion = useReducedMotion();
  return (
    <section id="sobre-mi" className="section-card h-full" aria-labelledby="sobre-mi-heading">
      <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45 }}>
        <h2 id="sobre-mi-heading" className="section-title mb-6"><span className="h-px w-6 shrink-0 bg-ink" aria-hidden="true" />{t.title}</h2>
        <h3 className="mb-3 text-sm font-semibold">{t.role}</h3>
        <div className="space-y-3 text-sm leading-relaxed text-muted"><p>{t.p1}</p><p>{t.p2}</p></div>
        <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {t.interests.map(interest => <li key={interest} className="flex items-center gap-2 rounded-xl border border-line bg-panel p-2.5 text-xs font-medium text-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="shrink-0 text-ink" aria-hidden="true"><path d="m9 6-6 6 6 6m6-12 6 6-6 6" /></svg><span className="truncate">{interest}</span>
          </li>)}
        </ul>
        {t.principles && (
          <div className="mt-6 border-t border-line pt-4">
            <h4 className="mb-3 text-xs font-semibold tracking-wide text-ink">{t.principlesTitle}</h4>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {t.principles.map(p => (
                <div key={p.title} className="rounded-lg border border-line bg-panel p-2.5 transition-colors hover:border-control">
                  <span className="block text-xs font-semibold text-ink">{p.title}</span>
                  <span className="mt-0.5 block text-[11px] leading-relaxed text-muted">{p.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default About;
