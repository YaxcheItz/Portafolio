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

  const [loading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ sending: false, success: false, error: false });
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
    <div className="min-h-screen bg-[#020617] font-sans text-gray-300 selection:bg-cyan-500 selection:text-white transition-colors duration-300 relative overflow-x-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.1]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-cyan-600/5 blur-[100px]"></div>
      </div>

      <Navbar 
        activeSection={activeSection} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        lang={lang}
        setLang={setLang}
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
