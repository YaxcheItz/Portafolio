import { motion, useReducedMotion } from 'motion/react';

const Skills = ({ skills, t, selectedTech, onSelectTech }) => {
  const reduceMotion = useReducedMotion();

  const handleTechClick = (techName) => {
    if (!onSelectTech) return;
    const isAlreadySelected = selectedTech?.toLowerCase() === techName.toLowerCase();
    onSelectTech(isAlreadySelected ? null : techName);

    if (!isAlreadySelected) {
      setTimeout(() => {
        const target = document.querySelector('#proyectos');
        if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
      }, 50);
    }
  };

  return (
    <section id="habilidades" className="section-card h-full" aria-labelledby="habilidades-heading">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
        <h2 id="habilidades-heading" className="section-title"><span className="h-px w-6 shrink-0 bg-ink" aria-hidden="true" />{t.title}</h2>
        {selectedTech && (
          <button
            type="button"
            onClick={() => onSelectTech(null)}
            className="text-xs text-muted transition-colors hover:text-ink"
          >
            ✕ {t.clickToFilter || 'Reset'}
          </button>
        )}
      </div>
      <p className="mb-5 text-sm leading-relaxed text-muted">{t.description}</p>
      <motion.ul initial={reduceMotion ? false : 'hidden'} whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={{ show: { transition: { staggerChildren: reduceMotion ? 0 : 0.04 } } }} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {skills.map(skill => {
          const isSelected = selectedTech?.toLowerCase() === skill.name.toLowerCase();
          return (
            <motion.li
              key={skill.name}
              variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
            >
              <button
                type="button"
                onClick={() => handleTechClick(skill.name)}
                aria-pressed={isSelected}
                className={`flex w-full min-w-0 items-center gap-2 rounded-xl border px-2 py-3 text-left text-xs font-medium transition-all ${
                  isSelected
                    ? 'border-ink bg-surface text-ink ring-2 ring-ink/30 shadow-xs'
                    : 'border-line bg-panel text-muted hover:border-control hover:text-ink'
                }`}
              >
                <img src={skill.icon} alt="" aria-hidden="true" width="18" height="18" loading="lazy" className="h-[18px] w-[18px] shrink-0" />
                <span className="min-w-0 truncate" translate="no">{skill.name}</span>
                {isSelected && <span className="ml-auto text-[10px] text-ink font-bold" aria-hidden="true">•</span>}
              </button>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default Skills;
