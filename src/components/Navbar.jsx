import React from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Navbar = ({ activeSection, mobileMenuOpen, setMobileMenuOpen, lang, setLang, t }) => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800" role="navigation" aria-label="Navegación principal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <a href="#inicio" className="text-lg font-bold text-white tracking-wider flex items-center gap-2 group" aria-label="Ir al inicio">
              <span className="bg-cyan-500 text-gray-900 px-1.5 py-0.5 rounded font-black group-hover:bg-white transition-colors">Y</span>
              YaxcheItz<span className="text-cyan-400 group-hover:text-white transition-colors">.dev</span>
            </a>

            {/* Menú Desktop */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-5">
                {[
                  { id: 'sobre-mi', label: t.about },
                  { id: 'habilidades', label: t.skills },
                  { id: 'experiencia', label: t.experience },
                  { id: 'proyectos', label: t.projects },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`hover:text-cyan-400 transition-colors px-1 py-2 text-xs font-bold uppercase tracking-wider relative group ${
                      activeSection === item.id ? 'text-cyan-400' : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Social Links Desktop */}
            <div className="hidden sm:flex items-center gap-3 mr-3 pr-3 border-r border-gray-800">
              <a href="https://github.com/YaxcheItz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors scale-90" title="GitHub">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/yaxche-itzamna-ramirez-garcia-b7556a177/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors scale-90" title="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-700 bg-gray-800/50 hover:border-cyan-500/30 transition-all text-[10px] font-black text-gray-400"
            >
              <span className={lang === 'es' ? 'text-cyan-400' : ''}>ES</span>
              <span className="text-gray-700">|</span>
              <span className={lang === 'en' ? 'text-cyan-400' : ''}>EN</span>
            </button>

            <a href="#contacto" className="hidden md:inline-flex bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-lg shadow-cyan-900/10">
              {t.contact}
            </a>

            {/* Botón Hamburguesa Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2"
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
        </div>

        {/* Menú Mobile Desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-2 border-t border-gray-800 mt-2">
            {[
              { id: 'sobre-mi', label: t.about },
              { id: 'habilidades', label: t.skills },
              { id: 'experiencia', label: t.experience },
              { id: 'proyectos', label: t.projects },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id ? 'bg-cyan-500/10 text-cyan-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            <div className="flex items-center justify-between px-4 pt-4 mt-4 border-t border-gray-800">
              <div className="flex gap-6">
                <a href="https://github.com/YaxcheItz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/yaxche-itzamna-ramirez-garcia-b7556a177/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                  <LinkedinIcon />
                </a>
              </div>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors">
                {t.contact}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;