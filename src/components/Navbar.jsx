import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const Navbar = ({ activeSection, mobileMenuOpen, setMobileMenuOpen, lang, setLang, theme, setTheme, t, onOpenCommand }) => {
  const menuButton = useRef(null);
  const reduceMotion = useReducedMotion();
  const links = [
    { id: 'sobre-mi', label: t.about },
    { id: 'habilidades', label: t.skills },
    { id: 'experiencia', label: t.experience },
    { id: 'proyectos', label: t.projects },
    { id: 'contacto', label: t.contact },
  ];

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKey = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButton.current.focus();
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen, setMobileMenuOpen]);

  const navigate = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id).focus({ preventScroll: true });
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm" aria-label={t.label}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#inicio" aria-label={t.home} className="flex min-h-11 items-center gap-2 font-semibold tracking-tight" translate="no">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ink text-xl font-bold text-surface" aria-hidden="true">Y</span>
            <span>Yaxche<span className="text-muted">.dev</span></span>
          </a>
          <div className="hidden items-center gap-5 lg:flex">
            {links.map(link => <a key={link.id} href={`#${link.id}`} aria-current={activeSection === link.id ? 'location' : undefined} className={`relative flex min-h-11 min-w-11 items-center justify-center text-[13px] font-medium transition-colors hover:text-ink ${activeSection === link.id ? 'text-ink' : 'text-muted'}`}>
              {link.label}
              {activeSection === link.id && <motion.span layoutId="active-section" initial={false} transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 30 }} className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-ink" aria-hidden="true" />}
            </a>)}
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={onOpenCommand}
              aria-label="Comandos (Ctrl+K)"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-control hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="text-[11px] font-medium">Ctrl K</span>
            </button>
            <button
              type="button"
              onClick={onOpenCommand}
              aria-label="Buscar"
              className="flex sm:hidden h-11 w-11 items-center justify-center rounded-xl text-muted transition-colors hover:bg-panel hover:text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? t.lightMode : t.darkMode} className="flex h-11 w-11 items-center justify-center rounded-xl text-muted transition-colors hover:bg-panel hover:text-ink">
              {theme === 'dark' ? (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></svg>
              ) : (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M20.8 13A9 9 0 0111 3.2 9 9 0 1020.8 13z" /></svg>
              )}
            </button>
            <button type="button" onClick={() => setLang(lang === 'es' ? 'en' : 'es')} aria-label={t.switchLanguage} className="flex h-11 min-w-11 items-center justify-center rounded-xl px-2 text-[13px] font-semibold text-muted transition-colors hover:bg-panel hover:text-ink" translate="no">{lang === 'es' ? 'EN' : 'ES'}</button>
            <button ref={menuButton} type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-controls="menu-movil" aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu} className="flex h-11 w-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-panel lg:hidden">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{mobileMenuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
            </button>
          </div>
        </div>
        <div id="menu-movil" hidden={!mobileMenuOpen} className="border-t border-line pb-5 pt-3 lg:hidden">
          {links.map(link => <a key={link.id} href={`#${link.id}`} onClick={() => navigate(link.id)} aria-current={activeSection === link.id ? 'location' : undefined} className={`flex min-h-11 items-center rounded-xl px-3 text-sm font-medium transition-colors hover:bg-panel hover:text-ink ${activeSection === link.id ? 'bg-panel text-ink' : 'text-muted'}`}>{link.label}</a>)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
