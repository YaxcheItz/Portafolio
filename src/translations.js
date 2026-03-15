export const translations = {
  es: {
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      experience: "Trayectoria",
      projects: "Proyectos",
      contact: "Contactar",
    },
    hero: {
      available: "Disponible para nuevas oportunidades",
      greeting: "Hola, soy ",
      description: "Estudiante de Ingeniería en Sistemas enfocado en el desarrollo Backend con Java. Especialista en arquitectura MVC, bases de datos SQL y soluciones escalables.",
      viewProjects: "Ver Proyectos",
      contact: "Contactar",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      role: "Desarrollador Backend & Java",
      p1: "Estudiante apasionado por la lógica robusta y la eficiencia en el servidor. Mi enfoque principal es Java, la Programación Orientada a Objetos (POO) y el diseño de bases de datos relacionales.",
      interests: [
        { icon: "☕", label: "Java" },
        { icon: "🗄️", label: "SQL" },
        { icon: "🏗️", label: "Arquitectura" },
        { icon: "🚀", label: "Escalabilidad" }
      ]
    },
    skills: {
      title: "Tecnologías",
      languages: "Idiomas",
      english: "Inglés Técnico B2",
    },
    experience: {
      title: "Educación y Experiencia",
      education: "Educación",
      work: "Experiencia",
    },
    projects: {
      title: "Proyectos Destacados",
      viewGithub: "Ver todos en GitHub",
      defaultDescription: "Proyecto enfocado en arquitectura y lógica backend.",
      code: "Código",
    },
    contact: {
      title: "¿Iniciamos un proyecto?",
      description: "Busco mi primera oportunidad profesional o proyectos freelance donde pueda aplicar mis conocimientos en Java y Backend.",
      name: "Nombre",
      email: "Correo Electrónico",
      message: "Mensaje",
      placeholderName: "Tu nombre",
      placeholderEmail: "tu@correo.com",
      placeholderMessage: "¿En qué puedo ayudarte?",
      sending: "Enviando...",
      send: "Enviar Mensaje",
      success: "✓ ¡Mensaje enviado! Te contactaré pronto.",
      error: "✗ Error al enviar. Intenta de nuevo.",
    },
    experiencesData: [
      {
        id: 1,
        role: "Desarrollador Web (Proyecto Académico/Personal)",
        company: "Proyectos Independientes",
        period: "2023 - Presente",
        description: "Desarrollo de aplicaciones web utilizando tecnologías como Laravel para el backend y HTML/CSS/JS para el frontend. Creación de sistemas de login y páginas web responsivas."
      }
    ],
    projectsData: [
      {
        id: 3,
        name: "Smart Support Dashboard",
        description: "Plataforma full-stack para optimizar flujos de soporte técnico. Construida con Spring Boot y TypeScript, ofrece visualización de datos en tiempo real y gestión de tickets. Contenerizada con Docker y desplegada en Vercel.",
        html_url: "https://github.com/YaxcheItz/SmartSupportDashboardApplication",
        live_url: "https://smartsupportdashboard.vercel.app/dashboard",
        image: "/projects/smart-support.jpg",
        techs: ["Spring Boot", "TypeScript"]
      },
      {
        id: 1,
        name: "RAPPI-SAFE",
        description: "Aplicación de monitoreo de seguridad desarrollada con Django y TailwindCSS. Implementé un sistema de notificaciones en tiempo real a través de la API de Telegram y diseñé un flujo de despliegue automatizado en Render.",
        html_url: "https://github.com/YaxcheItz/RAPPI-SAFE",
        live_url: "https://rappisafe-mdo8.onrender.com/",
        image: "/projects/rappi-safe.jpg",
        techs: ["Python", "Tailwind CSS"]
      },
      {
        id: 2,
        name: "Universo Dev",
        description: "Plataforma web para la gestión de torneos de desarrollo (Laravel/PHP). Arquitecturé un sistema con múltiples roles, filtros de búsqueda avanzados y carga segura de archivos. Contenerizado con Docker y desplegado en Render con PostgreSQL.",
        html_url: "https://github.com/YaxcheItz/universo_dev",
        live_url: "https://universo-dev.onrender.com/login",
        image: "/projects/universo-dev.jpg",
        techs: ["PHP", "Laravel", "SQL"]
      }
    ]
  },
  en: {
    nav: {
      about: "About Me",
      skills: "Skills",
      experience: "Timeline",
      projects: "Projects",
      contact: "Let's Talk",
    },
    hero: {
      available: "Available for new opportunities",
      greeting: "Hi, I'm ",
      description: "Systems Engineering student focused on Backend development with Java. Specialist in MVC architecture, SQL databases, and scalable solutions.",
      viewProjects: "View Projects",
      contact: "Contact Me",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      role: "Backend & Java Developer",
      p1: "Engineering student passionate about robust logic and server-side efficiency. My main focus is Java, Object-Oriented Programming (OOP), and relational database design.",
      interests: [
        { icon: "☕", label: "Java" },
        { icon: "🗄️", label: "SQL" },
        { icon: "🏗️", label: "Programming" },
        { icon: "🚀", label: "Scalability" }
      ]
    },
    skills: {
      title: "Technologies",
      languages: "Languages",
      english: "Technical English B2",
    },
    experience: {
      title: "Education & Experience",
      education: "Education",
      work: "Experience",
    },
    projects: {
      title: "Featured Projects",
      viewGithub: "View all on GitHub",
      defaultDescription: "Project focused on architecture and backend logic.",
      code: "Code",
      visitSite: "Visit Site",
      sourceCode: "Code"
    },
    contact: {
      title: "Start a project?",
      description: "I'm looking for my first professional opportunity or freelance projects where I can apply my Java and Backend skills.",
      name: "Name",
      email: "Email Address",
      message: "Message",
      placeholderName: "Your name",
      placeholderEmail: "your@email.com",
      placeholderMessage: "How can I help you?",
      sending: "Sending...",
      send: "Send Message",
      success: "✓ Message sent! I'll get back to you soon.",
      error: "✗ Error sending message. Please try again.",
    },
    experiencesData: [
      {
        id: 1,
        role: "Web Developer (Academic/Personal Project)",
        company: "Independent Projects",
        period: "2023 - Present",
        description: "Development of web applications using technologies such as Laravel for the backend and HTML/CSS/JS for the frontend. Creation of login systems and responsive web pages."
      }
    ],
    projectsData: [
      {
        id: 3,
        name: "Smart Support Dashboard",
        description: "Full-stack management platform developed to optimize technical support workflows. Built with Spring Boot and TypeScript, it provides real-time data visualization and ticket management. Containerized with Docker and deployed via Vercel.",
        html_url: "https://github.com/YaxcheItz/SmartSupportDashboardApplication",
        live_url: "https://smartsupportdashboard.vercel.app/dashboard",
        image: "/projects/smart-support.jpg",
        techs: ["Spring Boot", "TypeScript"]
      },
      {
        id: 1,
        name: "RAPPI-SAFE",
        description: "Security monitoring application developed with Django and TailwindCSS. I implemented a real-time notification system via the Telegram API and designed an automated deployment flow on Render.",
        html_url: "https://github.com/YaxcheItz/RAPPI-SAFE",
        live_url: "https://rappisafe-mdo8.onrender.com/",
        image: "/projects/rappi-safe.jpg",
        techs: ["Python", "Tailwind CSS"]
      },
      {
        id: 2,
        name: "Universo Dev",
        description: "Web platform for development tournament management (Laravel/PHP). I architected a system with multiple roles, advanced search filters, and secure file uploading. Containerized with Docker and deployed on Render with PostgreSQL.",
        html_url: "https://github.com/YaxcheItz/universo_dev",
        live_url: "https://universo-dev.onrender.com/login",
        image: "/projects/universo-dev.jpg",
        techs: ["PHP", "Laravel", "SQL"]
      }
    ]
  }
};
