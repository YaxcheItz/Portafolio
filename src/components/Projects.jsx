import React from 'react';
import { GithubIcon } from './Icons';

const Projects = ({ repos, loading }) => {
  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-800" aria-labelledby="proyectos-heading">
      <div className="flex justify-between items-end mb-12">
        <h2 id="proyectos-heading" className="text-3xl font-bold text-white flex items-center">
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
                  <div className="flex gap-4">
                    {repo.html_url && (
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Ver código en GitHub">
                        <GithubIcon />
                      </a>
                    )}
                    {repo.live_url && (
                      <a href={repo.live_url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors" title="Ver proyecto en vivo">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
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
  );
};

export default Projects;