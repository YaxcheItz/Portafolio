import { motion, useReducedMotion } from 'motion/react';

const Experience = ({ experiences, t, skillsT }) => {
  const reduceMotion = useReducedMotion();
  return (
    <section id="experiencia" className="section-card" aria-labelledby="experiencia-heading">
      <h2 id="experiencia-heading" className="section-title mb-6"><span className="h-px w-6 shrink-0 bg-ink" aria-hidden="true" />{t.title}</h2>
      <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
        <ol className="space-y-4">
          {experiences.map(exp => <motion.li key={exp.id} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45 }} className="rounded-xl border border-line bg-panel p-4">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1"><h3 className="text-sm font-semibold">{exp.role}</h3><span className="rounded bg-surface px-2 py-1 text-xs font-medium text-muted">{exp.period}</span></div>
            <p className="mb-3 text-xs font-medium text-muted">{exp.company}</p>
            <p className="text-sm leading-relaxed text-muted">{exp.description}</p>
          </motion.li>)}
        </ol>
        <aside aria-labelledby="idiomas-heading">
          <h3 id="idiomas-heading" className="mb-3 text-sm font-semibold">{skillsT.languages}</h3>
          <dl className="space-y-3">{[{ code: 'EN', label: skillsT.english }, { code: 'ES', label: skillsT.spanish }].map(language => <div key={language.code} className="flex items-center gap-3 rounded-xl border border-line bg-panel p-3 text-xs text-muted"><dt className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface font-semibold text-ink">{language.code}</dt><dd>{language.label}</dd></div>)}</dl>
        </aside>
      </div>
    </section>
  );
};

export default Experience;
