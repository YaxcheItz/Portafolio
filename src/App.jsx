import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { translations } from './translations';
import { skills } from './data/constants';

function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  const [loading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ sending: false, success: false, error: false });
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ sending: true, success: false, error: false });

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.sendForm(serviceID, templateID, e.target, publicKey);
      setFormStatus({ sending: false, success: true, error: false });
      e.target.reset();
      setTimeout(() => setFormStatus({ sending: false, success: false, error: false }), 5000);
    } catch (error) {
      console.error('Error enviando el correo:', error);
      setFormStatus({ sending: false, success: false, error: true });
      setTimeout(() => setFormStatus({ sending: false, success: false, error: false }), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-600 dark:text-zinc-300 selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-200 dark:selection:text-zinc-950 transition-colors duration-300 relative overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-zinc-50 to-zinc-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950">
        {/* Very subtle monochrome glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-zinc-300/30 dark:bg-zinc-800/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-zinc-200/50 dark:bg-white/5 blur-[120px]"></div>
      </div>

      <Navbar 
        activeSection={activeSection} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        t={t.nav}
      />
      
      <main className="relative z-10 pt-24 pb-20 max-w-5xl mx-auto px-6 flex flex-col gap-6">
        <Hero t={t.hero} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <About t={t.about} />
          <Skills skills={skills} t={t.skills} />
        </div>
        <Experience experiences={t.experiencesData} t={t.experience} skillsT={t.skills} />
        <Projects repos={t.projectsData} loading={loading} t={t.projects} />
        <Contact handleSubmit={handleSubmit} formStatus={formStatus} t={t.contact} />
      </main>
    </div>
  );
}

export default App;