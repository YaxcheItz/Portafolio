import { motion, useReducedMotion } from 'motion/react';

const highlightsList = [
  {
    id: 'java',
    keyTitle: 'java',
    keyDesc: 'javaDesc',
    badge: 'Core Backend',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z" />
        <path d="M9 10h6M9 14h4" />
      </svg>
    ),
  },
  {
    id: 'sql',
    keyTitle: 'sql',
    keyDesc: 'sqlDesc',
    badge: 'Database',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: 'stomp',
    keyTitle: 'stomp',
    keyDesc: 'stompDesc',
    badge: 'Real-time',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 'practices',
    keyTitle: 'practices',
    keyDesc: 'practicesDesc',
    badge: 'Engineering',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const StackHighlights = ({ t }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label={t.badge || 'Aspectos técnicos destacados'} className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlightsList.map((item, index) => (
          <motion.div
            key={item.id}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.06 }}
            className="group relative flex flex-col justify-between rounded-xl border border-line bg-surface p-4 shadow-xs transition-all hover:border-control hover:shadow-sm"
          >
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-panel text-ink transition-colors group-hover:border-control">
                  {item.icon}
                </span>
                <span className="rounded bg-panel px-2 py-0.5 text-[10px] font-semibold tracking-wide text-muted uppercase">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-sm font-semibold tracking-tight text-ink">
                {t[item.keyTitle]}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {t[item.keyDesc]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StackHighlights;
