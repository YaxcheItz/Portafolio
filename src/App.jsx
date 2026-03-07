import React, { useState, useEffect } from 'react';

// Componentes de Iconos (SVG)
const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lista de habilidades con sus iconos (Devicons)
  const skills = [
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" }
  ];

  // Datos de experiencia
  const experiences = [
    {
      id: 1,
      role: "Desarrollador Web (Proyecto Académico/Personal)",
      company: "Proyectos Independientes",
      period: "2023 - Presente",
      description: "Desarrollo de aplicaciones web utilizando tecnologías como Laravel para el backend y HTML/CSS/JS para el frontend. Creación de sistemas de login y páginas web responsivas."
    }
  ];

  useEffect(() => {
    fetch('https://api.github.com/users/YaxcheItz/repos?sort=updated')
      .then(response => response.json())
      .then(data => {
        const filteredRepos = data.filter(repo => repo.name !== 'YaxcheItz');
        setRepos(filteredRepos);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching repos:", error);
        setLoading(false);
      });
  }, []);

  // Manejador del formulario (simulado por ahora)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! (Nota: Para recibir correos reales, conectaremos esto a un servicio como Formspree o EmailJS más adelante).");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-gray-900 font-sans text-gray-300 selection:bg-cyan-500 selection:text-white">
      
      {/* Navegación Fija */}
      <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-white tracking-wider">YaxcheItz<span className="text-cyan-400">.dev</span></span>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#sobre-mi" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Sobre Mí</a>
                <a href="#habilidades" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Habilidades</a>
                <a href="#experiencia" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Experiencia</a>
                <a href="#proyectos" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Proyectos</a>
              </div>
            </div>
            <a href="#contacto" className="hidden md:inline-flex bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Hablemos
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center text-center">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium tracking-wide">
            Disponible para nuevas oportunidades
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">YaxcheItz</span>
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mb-10">
            Desarrollador de Software apasionado por crear experiencias web modernas, rápidas y escalables. Transformo ideas en código estructurado y funcional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#proyectos" className="px-8 py-3 rounded-lg bg-white text-gray-900 font-bold hover:bg-gray-100 transition-colors">
              Ver Proyectos
            </a>
            <a href="#contacto" className="px-8 py-3 rounded-lg border border-gray-700 text-white font-bold hover:bg-gray-800 transition-colors">
              Contactar
            </a>
          </div>
        </section>

        {/* Sobre Mí Section */}
        <section id="sobre-mi" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-8 h-[2px] bg-cyan-500 mr-4"></span> Sobre Mí
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-lg text-gray-400 space-y-4">
              <p>
                Soy un desarrollador enfocado en construir soluciones tecnológicas eficientes. Me gusta el aprendizaje continuo y mantenerme al día con las nuevas tecnologías del ecosistema web.
              </p>
              <p>
                A lo largo de mi formación, he trabajado en proyectos utilizando tecnologías tanto de Frontend como de Backend, desarrollando desde interfaces atractivas hasta la lógica del lado del servidor y bases de datos.
              </p>
              <p>
                Cuando no estoy programando, disfruto aprendiendo nuevas herramientas y mejorando mis habilidades analíticas para resolver problemas complejos.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 relative flex items-center justify-center min-h-[300px]">
                <span className="text-gray-500 text-center">
                  [ Aquí puedes colocar tu foto en el futuro ] <br/><br/>
                  Edita el archivo <code className="text-cyan-400">App.jsx</code> para añadir tu imagen.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Habilidades Section */}
        <section id="habilidades" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center justify-center md:justify-start">
             <span className="w-8 h-[2px] bg-cyan-500 mr-4 hidden md:block"></span> Tecnologías y Herramientas
          </h2>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-800 border border-gray-700 text-gray-300 px-5 py-3 rounded-lg text-lg font-medium hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-500/10 transition-all cursor-default group">
                <img src={skill.icon} alt={skill.name} className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-cyan-400 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experiencia Section */}
        <section id="experiencia" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
            <span className="w-8 h-[2px] bg-cyan-500 mr-4"></span> Experiencia
          </h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-gray-900 text-cyan-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800 border border-gray-700 p-6 rounded-xl shadow-lg hover:border-cyan-500/50 transition-colors">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-cyan-400 text-sm font-medium bg-cyan-500/10 px-3 py-1 rounded-full mt-2 sm:mt-0">{exp.period}</span>
                  </div>
                  <div className="text-gray-400 font-medium mb-4">{exp.company}</div>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos Section */}
        <section id="proyectos" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <span className="w-8 h-[2px] bg-cyan-500 mr-4"></span> Proyectos Destacados
            </h2>
            <a href="https://github.com/YaxcheItz" target="_blank" rel="noopener noreferrer" className="hidden sm:flex text-cyan-400 hover:text-cyan-300 font-medium items-center transition-colors">
              Ver todos en GitHub <span className="ml-2">&rarr;</span>
            </a>
          </div>
          
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map(repo => (
                <div key={repo.id} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full group">
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-gray-900 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                      </div>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <GithubIcon />
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {repo.name}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                      {repo.description || "Proyecto almacenado en mi repositorio de GitHub. Haz clic en el icono superior para ver el código fuente y más detalles."}
                    </p>
                  </div>
                  <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-700 mt-auto flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-cyan-500 mr-2"></span>
                      <span className="text-sm font-medium text-gray-300">{repo.language || 'Código'}</span>
                    </div>
                    <span className="text-xs text-gray-500">{new Date(repo.updated_at).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="mt-8 text-center sm:hidden">
             <a href="https://github.com/YaxcheItz" target="_blank" rel="noopener noreferrer" className="inline-flex text-cyan-400 hover:text-cyan-300 font-medium items-center transition-colors">
              Ver todos en GitHub <span className="ml-2">&rarr;</span>
            </a>
          </div>
        </section>
      </main>

      {/* Contacto & Footer */}
      <footer id="contacto" className="bg-gray-950 border-t border-gray-800 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Trabajamos juntos?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Actualmente estoy buscando nuevas oportunidades. Si tienes alguna pregunta, una propuesta de proyecto o simplemente quieres saludar, envíame un mensaje.
          </p>
          
          {/* Formulario de Contacto */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl max-w-xl mx-auto mb-16 relative overflow-hidden">
            {/* Elemento decorativo */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl"></div>
            
            <form onSubmit={handleSubmit} className="text-left relative z-10">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                  <input type="text" id="name" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico</label>
                  <input type="email" id="email" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="tu@correo.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                  <textarea id="message" rows="4" required className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none" placeholder="¿En qué te puedo ayudar?"></textarea>
                </div>
                <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-1">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>

          {/* Redes Sociales */}
          <div className="flex justify-center space-x-10">
            <a href="https://github.com/YaxcheItz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all flex flex-col items-center gap-2">
              <GithubIcon />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/yaxche-itzamna-ramirez-garcia-b7556a177/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transform hover:scale-110 transition-all flex flex-col items-center gap-2">
              <LinkedinIcon />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;