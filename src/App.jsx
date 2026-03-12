import React, { useState, useEffect } from 'react';
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
    if (typeof window !== 'undefined' && window.emailjs) {
      setFormStatus({ sending: true, success: false, error: false });
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      try {
        await window.emailjs.sendForm(serviceID, templateID, e.target, publicKey);
        setFormStatus({ sending: false, success: true, error: false });
        e.target.reset();
        setTimeout(() => setFormStatus({ sending: false, success: false, error: false }), 5000);
      } catch (error) {
        setFormStatus({ sending: false, success: false, error: true });
        setTimeout(() => setFormStatus({ sending: false, success: false, error: false }), 5000);
      }
    } else {
      const formData = new FormData(e.target);
      const name = formData.get('from_name');
      const email = formData.get('from_email');
      const message = formData.get('message');
      const mailtoLink = `yaxtibla1@gmail.com?subject=Mensaje de ${name}&body=${encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;
      window.location.href = mailtoLink;
      setFormStatus({ sending: false, success: true, error: false });
      e.target.reset();
      setTimeout(() => setFormStatus({ sending: false, success: false, error: false }), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans text-gray-300 selection:bg-cyan-500 selection:text-white transition-colors duration-300">
      <Navbar 
        activeSection={activeSection} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        lang={lang}
        setLang={setLang}
        t={t.nav}
      />
      <main className="pt-24 pb-12">
        <Hero t={t.hero} />
        <About t={t.about} />
        <Skills skills={skills} t={t.skills} />
        <Experience experiences={experiences} t={t.experience} skillsT={t.skills} />
        <Projects repos={repos} loading={loading} t={t.projects} />
      </main>
      <Contact handleSubmit={handleSubmit} formStatus={formStatus} t={t.contact} />
    </div>
  );
}

export default App;