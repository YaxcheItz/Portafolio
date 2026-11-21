import { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { GithubIcon } from './Icons';
import { skills } from '../data/constants';

const getTechIcon = (techName) => skills.find(skill => skill.name.toLowerCase() === techName.toLowerCase())?.icon;

const ProjectCard = ({ repo, t, index, selectedTech, onSelectTech, onOpenLightbox }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.05 });
  const reduceMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 180, damping: 24 });
  const rotateY = useSpring(tiltY, { stiffness: 180, damping: 24 });

  useEffect(() => {
    if (!inView || reduceMotion) {
      tiltX.set(0);
      tiltY.set(0);
    }
  }, [inView, reduceMotion, tiltX, tiltY]);

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const handlePointerMove = (event) => {
    if (!repo.featured || reduceMotion || event.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
    const y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
    tiltX.set(-y * 4);
    tiltY.set(x * 5);
  };

  return (
    <motion.article
      ref={ref}
      layout={!reduceMotion ? 'position' : false}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        layout: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
        delay: reduceMotion ? 0 : (index % 2) * 0.06,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className="project-card group/card flex h-full flex-col"
      data-in-view={inView}
      aria-labelledby={`${repo.id}-heading`}
    >
      {repo.featured && <span className="project-glint" aria-hidden="true" />}
      <div
        className={`project-cover relative flex h-48 items-center justify-center overflow-hidden border-b border-line bg-surface [perspective:800px] ${
          repo.image ? 'cursor-zoom-in' : ''
        }`}
        onClick={() => repo.image && onOpenLightbox && onOpenLightbox(repo)}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="h-full w-full"
        >
          {repo.image ? (
            <img src={repo.image} alt={repo.imageAlt} width="1280" height="720" loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
          ) : (
            <div className="flex h-full w-full items-center justify-center px-6 text-center" aria-hidden="true"><span className="block text-3xl font-bold tracking-tight">{repo.name}</span><span className="mt-3 block text-xs text-muted">{repo.category}</span></div>
          )}
        </motion.div>
        {repo.image && (
          <span className="absolute top-2.5 right-2.5 z-10 rounded-md border border-line/70 bg-paper/85 p-1.5 text-muted opacity-0 backdrop-blur-xs transition-opacity group-hover/card:opacity-100 hover:text-ink">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </span>
        )}
        {repo.imageCaption && (
          <span className="absolute bottom-2 left-2 z-10 rounded-md border border-line/70 bg-paper/90 px-2 py-0.5 text-[10px] font-medium tracking-wide text-ink shadow-xs backdrop-blur-xs">
            {repo.imageCaption}
          </span>
        )}
      </div>
      <div className="flex grow flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted">
          {repo.status && <span className="inline-flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-muted" aria-hidden="true" />{t.statusLabels[repo.status]}</span>}
          {repo.privateCode && <span>· {t.privateCode}</span>}
        </div>
        <h3 id={`${repo.id}-heading`} className="mb-3 break-words text-xl font-semibold tracking-tight" translate="no">{repo.name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted">{repo.description}</p>
        {repo.featured && repo.contribution && <p className="mb-4 text-sm leading-relaxed text-muted"><span className="font-medium text-ink">{t.contributionLabel}: </span>{repo.contribution}</p>}
        <ul className="mb-5 flex flex-wrap gap-2">
          {repo.techs.map(tech => {
            const isMatch = selectedTech && tech.toLowerCase() === selectedTech.toLowerCase();
            return (
              <li key={tech}>
                <button
                  type="button"
                  onClick={() => onSelectTech && onSelectTech(isMatch ? null : tech)}
                  title={`${tech} - ${isMatch ? (t.clearFilter || 'Clear') : (t.clickToFilter || 'Filter')}`}
                  className={`tech-tag cursor-pointer rounded-md border px-2 py-1 text-xs transition-colors ${
                    isMatch
                      ? 'border-ink bg-surface font-semibold text-ink ring-1 ring-ink/30 shadow-xs'
                      : 'border-line bg-surface text-muted hover:border-control hover:text-ink'
                  }`}
                  translate="no"
                >
                  {getTechIcon(tech) && <img src={getTechIcon(tech)} width="14" height="14" alt="" aria-hidden="true" />}
                  {tech}
                </button>
              </li>
            );
          })}
        </ul>
        {repo.scope && <details className="mb-4 text-xs leading-relaxed text-muted"><summary className="inline-flex min-h-11 items-center font-medium text-ink">{t.scopeLabel}<span aria-hidden="true" className="ml-2">+</span></summary><p className="pt-2">{repo.scope}</p></details>}
        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-line pt-4">
          {repo.live_url && <a href={repo.live_url} target="_blank" rel="noopener noreferrer" className="button-secondary grow">{t.visitSite}<span aria-hidden="true">↗</span><span className="sr-only">: {repo.name}</span></a>}
          {repo.html_url && <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="button-secondary"><GithubIcon className="h-4 w-4" />{t.code}<span className="sr-only">: {repo.name}</span></a>}
          {repo.privateCode && <span className="py-2 text-xs text-muted">{t.privateCode}</span>}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = ({ repos, t, selectedTech, onSelectTech, onOpenLightbox }) => {
  const reduceMotion = useReducedMotion();
  const filterOptions = Array.from(new Set(repos.flatMap(r => r.techs || [])));

  const matchesTech = (repo) =>
    !selectedTech || repo.techs.some(tech => tech.toLowerCase() === selectedTech.toLowerCase());

  const filteredRepos = selectedTech ? repos.filter(matchesTech) : repos;
  const featured = filteredRepos.filter(repo => repo.featured);
  const secondary = filteredRepos.filter(repo => !repo.featured);

  return (
    <section id="proyectos" className="section-card md:p-10" aria-labelledby="proyectos-heading">
      <div className="mb-7 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h2 id="proyectos-heading" className="section-title"><span className="h-px w-6 shrink-0 bg-ink" aria-hidden="true" />{t.title}</h2>
        <a href="https://github.com/YaxcheItz" target="_blank" rel="noopener noreferrer" className="text-link">{t.viewGithub}<span aria-hidden="true">↗</span></a>
      </div>

      {/* Filter Tabs with Sliding Pill */}
      {repos.length > 0 && filterOptions.length > 1 && (
        <div className="mb-6 flex flex-wrap items-center gap-1.5" role="toolbar" aria-label={t.filteringBy || 'Filtro de proyectos'}>
          <button
            type="button"
            onClick={() => onSelectTech(null)}
            className={`relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              !selectedTech ? 'text-surface' : 'text-muted hover:text-ink'
            }`}
          >
            {!selectedTech && !reduceMotion && (
              <motion.span
                layoutId="activeFilterPill"
                className="absolute inset-0 z-0 rounded-lg bg-ink"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            {!selectedTech && reduceMotion && (
              <span className="absolute inset-0 z-0 rounded-lg bg-ink" />
            )}
            <span className="relative z-10">{t.allFilter || 'Todos'}</span>
          </button>
          {filterOptions.map(tech => {
            const isSelected = selectedTech && selectedTech.toLowerCase() === tech.toLowerCase();
            return (
              <button
                key={tech}
                type="button"
                onClick={() => onSelectTech(isSelected ? null : tech)}
                className={`relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  isSelected ? 'text-surface' : 'text-muted hover:text-ink'
                }`}
                translate="no"
              >
                {isSelected && !reduceMotion && (
                  <motion.span
                    layoutId="activeFilterPill"
                    className="absolute inset-0 z-0 rounded-lg bg-ink"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {isSelected && reduceMotion && (
                  <span className="absolute inset-0 z-0 rounded-lg bg-ink" />
                )}
                <span className="relative z-10">{tech}</span>
              </button>
            );
          })}
        </div>
      )}

      {selectedTech && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-panel p-3.5 text-xs">
          <span className="text-muted">
            {t.filteringBy} <strong className="text-ink">{selectedTech}</strong> ({filteredRepos.length})
          </span>
          <button
            type="button"
            onClick={() => onSelectTech(null)}
            className="rounded-lg border border-line bg-surface px-2.5 py-1 text-xs font-semibold text-ink transition-colors hover:border-control hover:bg-panel"
          >
            ✕ {t.clearFilter}
          </button>
        </div>
      )}

      {repos.length === 0 && (
        <p className="py-8 text-sm text-muted">{t.empty}</p>
      )}

      {repos.length > 0 && filteredRepos.length === 0 && (
        <div className="py-12 text-center text-sm text-muted">
          <p>{t.noMatches || 'No se encontraron proyectos con esta tecnología.'}</p>
          <button
            type="button"
            onClick={() => onSelectTech(null)}
            className="mt-3 text-xs font-medium text-ink underline"
          >
            {t.clearFilter}
          </button>
        </div>
      )}

      {featured.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {featured.map((repo, index) => (
              <ProjectCard
                key={repo.id}
                repo={repo}
                t={t}
                index={index}
                selectedTech={selectedTech}
                onSelectTech={onSelectTech}
                onOpenLightbox={onOpenLightbox}
              />
            ))}
          </AnimatePresence>
        </div>
      )}

      {secondary.length > 0 && (
        <div className={featured.length ? 'mt-8 border-t border-line pt-6' : ''}>
          <h3 className="mb-5 text-sm font-semibold">{t.secondaryTitle}</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {secondary.map((repo, index) => (
                <ProjectCard
                  key={repo.id}
                  repo={repo}
                  t={t}
                  index={index}
                  selectedTech={selectedTech}
                  onSelectTech={onSelectTech}
                  onOpenLightbox={onOpenLightbox}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
