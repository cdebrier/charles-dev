import { useEffect, useMemo, useRef, useState } from 'react';
import { FolderSearch, RotateCcw } from 'lucide-react';
import { CommandPalette } from './components/CommandPalette';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectFilter } from './components/ProjectFilter';
import { projectService } from './services/projectService';
import type { FilterCategory, Project } from './types/project';

export function App() {
  const [projects] = useState<Project[]>(() =>
    projectService.getInitialProjectsSync()
  );
  const profile = useMemo(() => projectService.getProfileSync(), []);

  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const liveProjects = useMemo(
    () => projects.filter((p) => p.status === 'Live' && Boolean(p.url)),
    [projects]
  );

  const filteredProjects = useMemo(
    () =>
      projectService.filterProjects(projects, selectedCategory, searchQuery),
    [projects, selectedCategory, searchQuery]
  );

  // Global keyboard shortcuts: Cmd+K / Ctrl+K, '/', and '1'..'5' quick launch
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

      if (event.key === '/') {
        event.preventDefault();
        searchInputRef.current?.focus();
        return;
      }

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
      {/* Subtle Telemetry Grid Overlay */}
      <div
        aria-hidden="true"
        className="bg-telemetry-grid pointer-events-none fixed inset-0 -z-10"
      />

      <Header
        liveProjects={liveProjects}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <main className="flex-1">
        <Hero profile={profile} projects={projects} />

        <section aria-labelledby="launcher-heading" className="pb-12">
          <div className="mx-auto max-w-6xl px-4 pt-2 sm:px-6">
            <div className="flex items-center justify-between">
              <h2
                id="launcher-heading"
                className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]"
              >
                App Launcher &amp; Projets ({filteredProjects.length})
              </h2>
              <span className="font-mono-code text-[11px] text-[var(--text-muted)] hidden sm:inline">
                Cliquez sur « Lancer l&apos;app » ou appuyez sur 1–5
              </span>
            </div>
          </div>

          <ProjectFilter
            projects={projects}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            searchInputRef={searchInputRef}
          />

          <div className="mx-auto max-w-6xl px-4 pt-2 sm:px-6">
            {filteredProjects.length === 0 ? (
              <div className="surface-card flex flex-col items-center justify-center rounded-2xl p-12 text-center">
                <FolderSearch className="h-10 w-10 text-cyan-500/70" />
                <h3 className="font-display mt-3 text-base font-semibold text-[var(--text-primary)]">
                  Aucun projet ne correspond à ces filtres
                </h3>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                  Essayez une autre catégorie ou réinitialisez la recherche.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('Tous');
                    setSearchQuery('');
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-cyan-500 px-3.5 py-2 text-xs font-bold text-slate-950 transition-colors hover:bg-cyan-400 cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
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
