import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import StackHighlights from './components/StackHighlights';
import CommandMenu from './components/CommandMenu';
import ProjectLightbox from './components/ProjectLightbox';
import { translations } from './translations';
import { skills, projects } from './data/constants';

function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];
  const [theme, setTheme] = useState(() => (
    localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  ));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [lightboxRepo, setLightboxRepo] = useState(null);
  const [formStatus, setFormStatus] = useState({ sending: false, success: false, error: false, rateLimited: false });
  const [selectedTech, setSelectedTech] = useState(null);
  const [activeSection, setActiveSection] = useState('inicio');
  const sending = useRef(false);
  const visibleProjects = projects.filter(project => project.visible).map(project => ({
    ...project,
    ...project.content[lang],
  }));

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0a0a0a' : '#fafafa';
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = [...document.querySelectorAll('section[id]')];
    const updateActiveSection = () => {
      const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      const linkedSection = sections.find(item => `#${item.id}` === window.location.hash);
      const linkedTop = linkedSection?.getBoundingClientRect().top;
      const alignedLink = linkedTop >= 64 && linkedTop <= (atBottom ? window.innerHeight : 112);
      const section = alignedLink ? linkedSection : atBottom ? sections.at(-1) : sections.findLast(item => item.getBoundingClientRect().top <= 112);
      setActiveSection(section?.id || 'inicio');
    };
    const observer = new IntersectionObserver(updateActiveSection, {
      rootMargin: '-64px 0px -100px 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    sections.forEach(section => {
      section.tabIndex = -1;
      observer.observe(section);
    });
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // 1. Honeypot check (security bot mitigation)
    if (formData.get('_honey_bot')) {
      form.reset();
      setFormStatus({ sending: false, success: true, error: false, rateLimited: false });
      toast.success(t.contact.success);
      return;
    }

    // 2. Local cooldown check (45 seconds)
    const lastSent = localStorage.getItem('portfolio_contact_last_sent');
    if (lastSent && Date.now() - Number(lastSent) < 45000) {
      setFormStatus({ sending: false, success: false, error: false, rateLimited: true });
      toast.warning(t.contact.rateLimit || 'Espera unos segundos antes de enviar otro mensaje.');
      return;
    }

    sending.current = true;
    setFormStatus({ sending: true, success: false, error: false, rateLimited: false });
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      localStorage.setItem('portfolio_contact_last_sent', Date.now().toString());
      form.reset();
      setFormStatus({ sending: false, success: true, error: false, rateLimited: false });
      toast.success(t.contact.success);
    } catch {
      setFormStatus({ sending: false, success: false, error: true, rateLimited: false });
      toast.error(t.contact.error);
    } finally {
      sending.current = false;
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a href="#contenido" className="fixed left-5 top-4 z-[60] -translate-y-24 rounded bg-accent px-4 py-3 text-sm font-semibold text-on-accent focus:translate-y-0">
        {t.nav.skip}
      </a>
      <Navbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        t={t.nav}
        onOpenCommand={() => setCommandOpen(true)}
      />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,var(--panel),transparent_70%)]" aria-hidden="true" />
      <main id="contenido" tabIndex={-1} className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-12 pt-24">
        <Hero t={t.hero} />
        <StackHighlights t={t.highlights} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <About t={t.about} />
          <Skills
            skills={skills}
            t={t.skills}
            selectedTech={selectedTech}
            onSelectTech={setSelectedTech}
          />
        </div>
        <Experience experiences={t.experiencesData} t={t.experience} skillsT={t.skills} />
        <Projects
          repos={visibleProjects}
          t={t.projects}
          selectedTech={selectedTech}
          onSelectTech={setSelectedTech}
          onOpenLightbox={(repo) => setLightboxRepo(repo)}
        />
        <Contact handleSubmit={handleSubmit} formStatus={formStatus} t={t.contact} />
      </main>
      <footer className="relative mx-auto max-w-5xl px-6 pb-8 text-center text-xs text-muted">
        <span>{t.contact.footer}</span>
      </footer>
      <ScrollToTop label={t.contact.scrollToTop} />
      <CommandMenu
        open={commandOpen}
        setOpen={setCommandOpen}
        t={t.commandMenu}
        navT={t.nav}
        projects={visibleProjects}
        onSelectProject={(project) => {
          setSelectedTech(null);
          setLightboxRepo(project);
        }}
        toggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
        currentTheme={theme}
        toggleLang={() => setLang(prev => prev === 'es' ? 'en' : 'es')}
        currentLang={lang}
      />
      <ProjectLightbox
        isOpen={Boolean(lightboxRepo)}
        repo={lightboxRepo}
        onClose={() => setLightboxRepo(null)}
        t={t.lightbox}
      />
      <Toaster
        position="bottom-right"
        theme={theme === 'dark' ? 'dark' : 'light'}
        toastOptions={{
          style: {
            background: theme === 'dark' ? '#141414' : '#ffffff',
            color: theme === 'dark' ? '#f5f5f5' : '#171717',
            border: `1px solid ${theme === 'dark' ? '#2a2a2a' : '#e5e5e5'}`,
            borderRadius: '0.75rem',
            fontFamily: 'inherit',
          },
        }}
      />
    </div>
  );
}

export default App;
