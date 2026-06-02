import React from 'react';
import { motion } from 'motion/react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Navbar = ({ activeSection, mobileMenuOpen, setMobileMenuOpen, lang, setLang, theme, setTheme, t }) => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md shadow-sm border-b border-zinc-200 dark:border-zinc-800/50 transition-colors" role="navigation" aria-label="Navegación principal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <a href="#inicio" className="text-lg font-bold text-zinc-900 dark:text-white tracking-wider flex items-center gap-2 group" aria-label="Ir al inicio">
              <span className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 px-1.5 py-0.5 rounded font-black group-hover:bg-zinc-700 dark:group-hover:bg-zinc-200 transition-colors">Y</span>
              Yaxche<span className="text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">.dev</span>
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
                  className={`hover:text-zinc-900 dark:hover:text-white transition-colors px-1 py-2 text-xs font-bold uppercase tracking-wider relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white rounded-sm ${
                    activeSection === item.id ? 'text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-white rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-white/50 transition-all text-zinc-600 dark:text-zinc-400"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/50 hover:border-zinc-400 dark:hover:border-white/50 transition-all text-[10px] font-black text-zinc-600 dark:text-zinc-400"
              aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <span className={lang === 'es' ? 'text-zinc-900 dark:text-white' : ''}>ES</span>
              <span className="text-zinc-400 dark:text-zinc-600">|</span>
              <span className={lang === 'en' ? 'text-zinc-900 dark:text-white' : ''}>EN</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none transition-colors"
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
          <div className="md:hidden pb-6 pt-2 space-y-2 border-t border-zinc-200 dark:border-zinc-800 mt-2 bg-white/95 dark:bg-zinc-950/95 shadow-lg rounded-b-xl px-2">
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
                  activeSection === item.id ? 'bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white border border-zinc-200 dark:border-white/20' : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Toggle for Mobile */}
            <div className="pt-4 mt-2 border-t border-zinc-200 dark:border-zinc-800 flex justify-center">
               <button
                onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); setMobileMenuOpen(false); }}
                className="flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/80 active:scale-95 transition-transform text-xs font-black text-zinc-600 dark:text-zinc-400 w-full justify-center"
              >
                <span className={lang === 'es' ? 'text-zinc-900 dark:text-white' : ''}>ESPAÑOL</span>
                <span className="text-zinc-400 dark:text-zinc-600 px-2">-</span>
                <span className={lang === 'en' ? 'text-zinc-900 dark:text-white' : ''}>ENGLISH</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;