import React from 'react';
import { motion } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Navbar = ({ activeSection, mobileMenuOpen, setMobileMenuOpen, lang, setLang, t }) => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800" role="navigation" aria-label="Navegación principal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <a href="#inicio" className="text-lg font-bold text-white tracking-wider flex items-center gap-2 group" aria-label="Ir al inicio">
              <span className="bg-cyan-500 text-gray-900 px-1.5 py-0.5 rounded font-black group-hover:bg-white transition-colors">Y</span>
              Yaxche<span className="text-cyan-400 group-hover:text-white transition-colors">.dev</span>
            </a>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-baseline space-x-5 ml-4">
              {[
                { id: 'sobre-mi', label: t.about },
                { id: 'habilidades', label: t.skills },
                { id: 'experiencia', label: t.experience },
                { id: 'proyectos', label: t.projects },
                { id: 'contacto', label: t.contact },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`hover:text-cyan-400 transition-colors px-1 py-2 text-xs font-bold uppercase tracking-wider relative group ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-700 bg-gray-800/50 hover:border-cyan-500/30 transition-all text-[10px] font-black text-gray-400"
              aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <span className={lang === 'es' ? 'text-cyan-400' : ''}>ES</span>
              <span className="text-gray-700">|</span>
              <span className={lang === 'en' ? 'text-cyan-400' : ''}>EN</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Abrir menú principal"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú Mobile Desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2 space-y-2 border-t border-gray-800 mt-2 bg-gray-900/95 shadow-2xl rounded-b-xl px-2">
            {[
              { id: 'sobre-mi', label: t.about },
              { id: 'habilidades', label: t.skills },
              { id: 'experiencia', label: t.experience },
              { id: 'proyectos', label: t.projects },
              { id: 'contacto', label: t.contact },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-bold tracking-wider uppercase transition-colors ${
                  activeSection === item.id ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Toggle for Mobile */}
            <div className="pt-4 mt-2 border-t border-gray-800 flex justify-center">
               <button
                onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); setMobileMenuOpen(false); }}
                className="flex items-center gap-2 px-6 py-2 rounded-full border border-gray-700 bg-gray-800/80 active:scale-95 transition-transform text-xs font-black text-gray-400 w-full justify-center"
              >
                <span className={lang === 'es' ? 'text-cyan-400' : ''}>ESPAÑOL</span>
                <span className="text-gray-600 px-2">-</span>
                <span className={lang === 'en' ? 'text-cyan-400' : ''}>ENGLISH</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
