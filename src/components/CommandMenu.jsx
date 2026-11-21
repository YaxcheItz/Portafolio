import { useEffect } from 'react';
import { Command } from 'cmdk';
import { toast } from 'sonner';

const CommandMenu = ({
  open,
  setOpen,
  t,
  navT,
  projects,
  onSelectProject,
  toggleTheme,
  currentTheme,
  toggleLang,
  currentLang,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setOpen]);

  const runCommand = (action) => {
    setOpen(false);
    action();
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Paleta de comandos"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[15vh] sm:pt-[18vh]"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Command palette container */}
      <div className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl transition-all dark:bg-zinc-900">
        <Command
          label="Comandos del portafolio"
          className="flex flex-col"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
          }}
        >
          {/* Search input */}
          <div className="flex items-center border-b border-line px-4">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted shrink-0"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <Command.Input
              autoFocus
              placeholder={t.searchPlaceholder || 'Escribe un comando o busca...'}
              className="w-full bg-transparent px-3.5 py-4 text-sm text-ink placeholder:text-muted focus:outline-none"
            />
            <kbd className="rounded border border-line bg-panel px-1.5 py-0.5 text-[10px] font-semibold text-muted">
              ESC
            </kbd>
          </div>

          {/* List items */}
          <Command.List className="max-h-72 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-xs text-muted">
              {t.empty || 'No se encontraron resultados.'}
            </Command.Empty>

            {/* Navigation group */}
            <Command.Group
              heading={t.navigation || 'Navegación'}
              className="px-2 py-1.5 text-[11px] font-semibold text-muted uppercase tracking-wider"
            >
              <Command.Item
                onSelect={() => runCommand(() => scrollTo('inicio'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-panel aria-selected:bg-panel"
              >
                <span className="text-muted">#</span>
                <span>{navT.home || 'Inicio'}</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => scrollTo('sobre-mi'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-panel aria-selected:bg-panel"
              >
                <span className="text-muted">#</span>
                <span>{navT.about || 'Perfil / Sobre mí'}</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => scrollTo('habilidades'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-panel aria-selected:bg-panel"
              >
                <span className="text-muted">#</span>
                <span>{navT.skills || 'Tecnologías'}</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => scrollTo('experiencia'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-panel aria-selected:bg-panel"
              >
                <span className="text-muted">#</span>
                <span>{navT.experience || 'Trayectoria'}</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => scrollTo('proyectos'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-panel aria-selected:bg-panel"
              >
                <span className="text-muted">#</span>
                <span>{navT.projects || 'Proyectos'}</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => scrollTo('contacto'))}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-panel aria-selected:bg-panel"
              >
                <span className="text-muted">#</span>
                <span>{navT.contact || 'Contacto'}</span>
              </Command.Item>
            </Command.Group>

            {/* Quick Actions group */}
            <Command.Group
              heading={t.actions || 'Acciones Rápidas'}
              className="mt-2 px-2 py-1.5 text-[11px] font-semibold text-muted uppercase tracking-wider"
            >
              <Command.Item
                onSelect={() => runCommand(toggleTheme)}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-panel aria-selected:bg-panel"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
                <span>{t.toggleTheme || 'Cambiar tema'} ({currentTheme === 'dark' ? 'Oscuro' : 'Claro'})</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(toggleLang)}
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-panel aria-selected:bg-panel"
              >
                <span className="font-mono text-[11px] font-bold">ES/EN</span>
                <span>{t.switchLanguage || 'Cambiar idioma'} ({currentLang.toUpperCase()})</span>
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  runCommand(() => {
                    const link = document.createElement('a');
                    link.href = '/CV_YaxcheItz.pdf';
                    link.download = 'CV_YaxcheItz.pdf';
                    link.click();
                  })
                }
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-panel aria-selected:bg-panel"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 16v4h16v-4M12 4v12m-4-4 4 4 4-4" />
                </svg>
                <span>{t.downloadCV || 'Descargar CV'}</span>
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  runCommand(async () => {
                    await navigator.clipboard.writeText('yaxtibla1@gmail.com');
                    toast.success(t.copyEmailSuccess || 'yaxtibla1@gmail.com', {
                      description: 'Copiado al portapapeles',
                    });
                  })
                }
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-panel aria-selected:bg-panel"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                </svg>
                <span>{t.copyEmail || 'Copiar correo'}</span>
              </Command.Item>
            </Command.Group>

            {/* Projects group */}
            <Command.Group
              heading={t.projects || 'Proyectos'}
              className="mt-2 px-2 py-1.5 text-[11px] font-semibold text-muted uppercase tracking-wider"
            >
              {projects.map((project) => (
                <Command.Item
                  key={project.id}
                  value={`${project.name} ${project.techs.join(' ')}`}
                  onSelect={() =>
                    runCommand(() => {
                      scrollTo('proyectos');
                      if (onSelectProject) onSelectProject(project);
                    })
                  }
                  className="flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-panel aria-selected:bg-panel"
                >
                  <span className="truncate">{project.name}</span>
                  <span className="text-[10px] text-muted">{project.techs.slice(0, 2).join(', ')}</span>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>

          {/* Footer help */}
          <div className="flex items-center justify-between border-t border-line bg-panel px-4 py-2 text-[11px] text-muted">
            <span>Navega con ↑ ↓ y selecciona con ↵</span>
            <span className="font-mono">Ctrl + K</span>
          </div>
        </Command>
      </div>
    </div>
  );
};

export default CommandMenu;
