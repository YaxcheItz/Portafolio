import React from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Contact = ({ handleSubmit, formStatus }) => {
  return (
    <footer id="contacto" className="bg-gray-950 border-t border-gray-800 pt-20 pb-12" role="contentinfo" aria-labelledby="contacto-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="contacto-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">¿Trabajamos juntos?</h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Actualmente estoy buscando nuevas oportunidades. Si tienes alguna pregunta, una propuesta de proyecto o simplemente quieres saludar, envíame un mensaje.
        </p>
        
        {/* Formulario de Contacto */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl max-w-xl mx-auto mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl"></div>
          
          <form onSubmit={handleSubmit} className="text-left relative z-10">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre</label>
                <input type="text" id="name" name="from_name" required disabled={formStatus.sending} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors disabled:opacity-50" placeholder="Tu nombre" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Correo Electrónico</label>
                <input type="email" id="email" name="from_email" required disabled={formStatus.sending} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors disabled:opacity-50" placeholder="tu@correo.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                <textarea id="message" name="message" rows="4" required disabled={formStatus.sending} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none disabled:opacity-50" placeholder="¿En qué te puedo ayudar?"></textarea>
              </div>

              {formStatus.success && (
                <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                  ✓ ¡Mensaje enviado con éxito! Te responderé pronto.
                </div>
              )}
              {formStatus.error && (
                <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                  ✗ Error al enviar el mensaje. Por favor, intenta de nuevo.
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus.sending}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {formStatus.sending ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </div>
          </form>
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-10" role="navigation" aria-label="Enlaces de redes sociales">
          <a href="https://github.com/YaxcheItz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all flex flex-col items-center gap-2" aria-label="Visitar mi perfil de GitHub">
            <GithubIcon />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/yaxche-itzamna-ramirez-garcia-b7556a177/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] transform hover:scale-110 transition-all flex flex-col items-center gap-2" aria-label="Visitar mi perfil de LinkedIn">
            <LinkedinIcon />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;