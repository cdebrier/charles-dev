import { useEffect, useMemo, useState } from 'react';
import { CommandPalette } from './components/CommandPalette';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { projectService } from './services/projectService';
import type { Project } from './types/project';

export function App() {
  const [projects] = useState<Project[]>(() =>
    projectService.getInitialProjectsSync()
  );
  const profile = useMemo(() => projectService.getProfileSync(), []);

  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Global keyboard shortcuts: Cmd+K / Ctrl+K and '1'..'5' quick launch
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
        return;
      }

      const target = event.target as HTMLElement | null;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;

      if (isTyping || isCommandPaletteOpen) return;

      // Direct numeric shortcut 1-9 to launch app in 1 keystroke
      if (
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        /^[1-9]$/.test(event.key)
      ) {
        const index = Number(event.key);
        const match = projects.find((p) => p.shortcutIndex === index);
        const destination = match?.url ?? match?.githubUrl;
        if (destination) {
          window.open(destination, '_blank', 'noopener,noreferrer');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [projects, isCommandPaletteOpen]);

  return (
    <div className="relative min-h-dvh flex flex-col">
      {/* Subtle Swiss Architectural Grid Overlay */}
      <div
        aria-hidden="true"
        className="bg-swiss-grid pointer-events-none fixed inset-0 -z-10"
      />

      <Header
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <main className="flex-1">
        <Hero profile={profile} projects={projects} />

        <section aria-labelledby="launcher-heading" className="pb-16">
          <div className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
              <h2
                id="launcher-heading"
                className="font-mono-code text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]"
              >
                Applications &amp; Projets
              </h2>
              <span className="font-mono-code text-[11px] text-[var(--text-muted)] hidden sm:inline">
                Raccourcis 1–5
              </span>
            </div>
          </div>

          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer profile={profile} />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        projects={projects}
        profile={profile}
      />
    </div>
  );
}
export default App;
