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

function App() {
  const [lang, setLang] = useState('es');
  const t = translations[lang];

  const [repos] = useState([
    {
      id: 1,
      name: "RAPPI-SAFE",
      description: lang === 'es' 
        ? "Aplicación de monitoreo de seguridad desarrollada con Django y TailwindCSS. Implementé un sistema de notificaciones en tiempo real a través de la API de Telegram y diseñé un flujo de despliegue automatizado en Render."
        : "Security monitoring application developed with Django and TailwindCSS. I implemented a real-time notification system via the Telegram API and designed an automated deployment flow on Render.",
      html_url: "https://github.com/YaxcheItz/RAPPI-SAFE",
      live_url: "https://rappisafe-mdo8.onrender.com/",
      language: "Python / Django",
      updated_at: "2026-03-10"
    },
    {
      id: 2,
      name: "Universo Dev",
      description: lang === 'es'
        ? "Plataforma web para la gestión de torneos de desarrollo (Laravel/PHP). Arquitecturé un sistema con múltiples roles, filtros de búsqueda avanzados y carga segura de archivos. Contenerizado con Docker y desplegado en Render con PostgreSQL."
        : "Web platform for development tournament management (Laravel/PHP). I architected a system with multiple roles, advanced search filters, and secure file uploading. Containerized with Docker and deployed on Render with PostgreSQL.",
      html_url: "https://github.com/YaxcheItz/universo_dev",
      live_url: "https://universo-dev.onrender.com/login",
      language: "PHP / Laravel",
      updated_at: "2026-03-10"
    }
  ]);

  const [loading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ sending: false, success: false, error: false });
  const [activeSection, setActiveSection] = useState('inicio');

  const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" }
  ];

  const experiences = [
    {
      id: 1,
      role: lang === 'es' ? "Desarrollador Web (Proyecto Académico/Personal)" : "Web Developer (Academic/Personal Project)",
      company: lang === 'es' ? "Proyectos Independientes" : "Independent Projects",
      period: "2023 - Presente",
      description: lang === 'es' 
        ? "Desarrollo de aplicaciones web utilizando tecnologías como Laravel para el backend y HTML/CSS/JS para el frontend. Creación de sistemas de login y páginas web responsivas."
        : "Development of web applications using technologies such as Laravel for the backend and HTML/CSS/JS for the frontend. Creation of login systems and responsive web pages."
    }
  ];

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
        <Experience experiences={experiences} t={t.experience} skillsT={t.skills} />
        <Projects repos={repos} loading={loading} t={t.projects} />
        <Contact handleSubmit={handleSubmit} formStatus={formStatus} t={t.contact} />
      </main>
    </div>
  );
}

export default App;
