import React from 'react';

const Navbar = ({ activeSection, mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800" role="navigation" aria-label="Navegación principal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="text-xl font-bold text-white tracking-wider" aria-label="Ir al inicio">
            YaxcheItz<span className="text-cyan-400">.dev</span>
          </a>

          {/* Menú Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#sobre-mi" className={`hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'sobre-mi' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>Sobre Mí</a>
              <a href="#habilidades" className={`hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'habilidades' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>Habilidades</a>
              <a href="#experiencia" className={`hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'experiencia' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>Experiencia</a>
              <a href="#proyectos" className={`hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'proyectos' ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}>Proyectos</a>
            </div>
          </div>
          <a href="#contacto" className="hidden md:inline-flex bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Hablemos
          </a>

          {/* Botón Hamburguesa Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú Mobile Desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-1">
            <a href="#sobre-mi" onClick={() => setMobileMenuOpen(false)} className={`block hover:bg-gray-800 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-base font-medium ${activeSection === 'sobre-mi' ? 'bg-gray-800 text-cyan-400 border-l-4 border-cyan-400' : ''}`}>Sobre Mí</a>
            <a href="#habilidades" onClick={() => setMobileMenuOpen(false)} className={`block hover:bg-gray-800 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-base font-medium ${activeSection === 'habilidades' ? 'bg-gray-800 text-cyan-400 border-l-4 border-cyan-400' : ''}`}>Habilidades</a>
            <a href="#experiencia" onClick={() => setMobileMenuOpen(false)} className={`block hover:bg-gray-800 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-base font-medium ${activeSection === 'experiencia' ? 'bg-gray-800 text-cyan-400 border-l-4 border-cyan-400' : ''}`}>Experiencia</a>
            <a href="#proyectos" onClick={() => setMobileMenuOpen(false)} className={`block hover:bg-gray-800 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-base font-medium ${activeSection === 'proyectos' ? 'bg-gray-800 text-cyan-400 border-l-4 border-cyan-400' : ''}`}>Proyectos</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block bg-cyan-600 hover:bg-cyan-700 text-white text-center px-3 py-2 rounded-md text-base font-medium transition-colors mt-2">Hablemos</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;