import { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { GithubIcon } from './Icons';

const ProjectLightbox = ({ isOpen, repo, onClose, t }) => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!repo) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal content */}
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 260 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-line px-5 py-3.5 sm:px-6">
              <div>
                <h3 id="lightbox-title" className="text-base font-bold tracking-tight text-ink">
                  {repo.name}
                </h3>
                {repo.category && (
                  <span className="text-xs text-muted">{repo.category}</span>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.close || 'Cerrar'}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel text-muted transition-colors hover:border-control hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Image viewport */}
            <div className="relative flex max-h-[60vh] min-h-[220px] items-center justify-center overflow-auto bg-black/90 p-2 sm:p-4">
              {repo.image ? (
                <img
                  src={repo.image}
                  alt={repo.imageAlt || repo.name}
                  className="max-h-full max-w-full rounded-lg object-contain shadow-lg"
                />
              ) : (
                <div className="py-16 text-center text-muted">
                  <span className="block text-3xl font-bold text-white/90">{repo.name}</span>
                </div>
              )}
              {repo.imageCaption && (
                <span className="absolute bottom-4 left-4 rounded-md border border-white/10 bg-black/75 px-2.5 py-1 text-xs text-white/90 backdrop-blur-xs">
                  {repo.imageCaption}
                </span>
              )}
            </div>

            {/* Footer actions & description */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line bg-panel p-4 sm:p-5">
              <p className="max-w-xl text-xs leading-relaxed text-muted sm:text-sm">
                {repo.description}
              </p>
              <div className="flex items-center gap-2">
                {repo.live_url && (
                  <a
                    href={repo.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary text-xs"
                  >
                    <span>{t.visitSite || 'Abrir demo'}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
                {repo.html_url && (
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary text-xs"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>{t.viewCode || 'Código'}</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectLightbox;
