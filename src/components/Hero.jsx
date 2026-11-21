import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './Icons';

const HeroMonogram = ({ mouseX, mouseY, reduceMotion }) => {
  const baseRotateX = -18;
  const baseRotateY = 32;

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <div
      className="relative mb-5 flex h-12 w-12 items-center justify-center [perspective:600px]"
      aria-hidden="true"
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          rotateX: reduceMotion ? baseRotateX : smoothY,
          rotateY: reduceMotion ? baseRotateY : smoothX,
        }}
        className="relative h-9 w-9"
      >
        <div
          className="absolute inset-0 flex items-center justify-center rounded-md border border-line bg-surface/90 text-[11px] font-bold text-ink shadow-xs backdrop-blur-xs select-none dark:border-zinc-700/80 dark:bg-zinc-800/90"
          style={{ transform: 'translateZ(18px)' }}
        >
          Y
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-md border border-line bg-panel text-[10px] text-muted shadow-xs select-none dark:border-zinc-800 dark:bg-zinc-900"
          style={{ transform: 'rotateY(180deg) translateZ(18px)' }}
        >
          •
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-md border border-line bg-panel text-[10px] text-muted shadow-xs select-none dark:border-zinc-800 dark:bg-zinc-900"
          style={{ transform: 'rotateY(90deg) translateZ(18px)' }}
        >
          /
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-md border border-line bg-panel text-[10px] text-muted shadow-xs select-none dark:border-zinc-800 dark:bg-zinc-900"
          style={{ transform: 'rotateY(-90deg) translateZ(18px)' }}
        >
          \
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-md border border-line bg-surface text-[10px] font-semibold text-muted shadow-xs select-none dark:border-zinc-700/80 dark:bg-zinc-800"
          style={{ transform: 'rotateX(90deg) translateZ(18px)' }}
        >
          ◇
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-md border border-line bg-panel shadow-xs select-none dark:border-zinc-800 dark:bg-zinc-900"
          style={{ transform: 'rotateX(-90deg) translateZ(18px)' }}
        />
      </motion.div>
    </div>
  );
};

const Hero = ({ t }) => {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(32);
  const mouseY = useMotionValue(-18);

  const handlePointerMove = (e) => {
    if (reduceMotion || !sectionRef.current || e.pointerType !== 'mouse') return;
    const rect = sectionRef.current.getBoundingClientRect();
    const nx = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width) * 2 - 1));
    const ny = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height) * 2 - 1));
    mouseX.set(32 + nx * 28);
    mouseY.set(-18 - ny * 22);
  };

  const handlePointerLeave = () => {
    mouseX.set(32);
    mouseY.set(-18);
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.5 } },
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="section-card overflow-hidden text-center md:p-10"
      aria-labelledby="inicio-heading"
    >
      <motion.div initial={reduceMotion ? false : 'hidden'} animate="show" variants={{ show: { transition: { staggerChildren: 0.09 } } }} className="flex flex-col items-center">
        <HeroMonogram mouseX={mouseX} mouseY={mouseY} reduceMotion={reduceMotion} />
        <motion.p variants={item} className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-ink" aria-hidden="true" />{t.available}
        </motion.p>
        <h1 id="inicio-heading" className="mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          <motion.span variants={item} className="inline-block">{t.greeting}</motion.span>{' '}
          <motion.span variants={item} className="inline-block bg-linear-to-r from-muted via-ink to-muted bg-clip-text text-transparent" translate="no">Yaxche</motion.span>
        </h1>
        <motion.p variants={item} className="mb-3 text-sm font-semibold text-ink">{t.role}</motion.p>
        <motion.p variants={item} className="mb-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">{t.description}</motion.p>
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-3">
          <motion.a href="/CV_YaxcheItz.pdf" download className="button-primary" whileTap={reduceMotion ? undefined : { scale: 0.97 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M4 16v4h16v-4M12 4v12m-4-4 4 4 4-4" /></svg>
            {t.downloadCV}
          </motion.a>
          <a href="#proyectos" className="button-secondary">{t.viewProjects}</a>
          <a href="https://www.linkedin.com/in/yaxche-itzamna-ramirez-garcia-b7556a177" target="_blank" rel="noopener noreferrer" aria-label={t.linkedin} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel text-muted transition-colors hover:bg-surface hover:text-ink"><LinkedinIcon className="h-5 w-5" /></a>
          <a href="https://github.com/YaxcheItz" target="_blank" rel="noopener noreferrer" aria-label={t.github} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel text-muted transition-colors hover:bg-surface hover:text-ink"><GithubIcon className="h-5 w-5" /></a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
