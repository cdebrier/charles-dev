import { useEffect, useState } from 'react';
import { Command, ExternalLink, Moon, Sun, Terminal } from 'lucide-react';
import type { Project } from '../types/project';
import { ProjectIcon } from './ProjectIcon';

interface HeaderProps {
  liveProjects: Project[];
  onOpenCommandPalette: () => void;
}

function getEffectiveDarkState(): boolean {
  if (typeof document === 'undefined') return true;
  const metaContent =
    document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]')?.content ??
    'light dark';
  if (metaContent === 'dark') return true;
  if (metaContent === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function Header({ liveProjects, onOpenCommandPalette }: HeaderProps) {
  const [isDark, setIsDark] = useState<boolean>(getEffectiveDarkState);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const syncState = () => {
      const stored = localStorage.getItem('color-scheme');
      const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
      if (meta) {
        meta.content = stored ?? 'light dark';
      }
      setIsDark(getEffectiveDarkState());
    };

    mediaQuery.addEventListener('change', syncState);
    window.addEventListener('storage', syncState);
    return () => {
      mediaQuery.removeEventListener('change', syncState);
      window.removeEventListener('storage', syncState);
    };
  }, []);

  const handleToggleColorScheme = () => {
    const currentlyDark = getEffectiveDarkState();
    const targetScheme = currentlyDark ? 'light' : 'dark';
    const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemScheme = systemIsDark ? 'dark' : 'light';

    const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');

    try {
      if (targetScheme === systemScheme) {
        localStorage.removeItem('color-scheme');
        if (meta) meta.content = 'light dark';
      } else {
        localStorage.setItem('color-scheme', targetScheme);
        if (meta) meta.content = targetScheme;
      }
    } catch {
      if (meta) meta.content = targetScheme;
    }

    setIsDark(targetScheme === 'dark');
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* Brand Identity */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 rounded-xl py-1 pr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-xs transition-transform group-hover:scale-105">
            <Terminal className="h-4 w-4" />
          </span>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-sm font-bold tracking-tight text-[var(--text-primary)]">
                charles<span className="text-cyan-500">.dev</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 font-mono-code text-[10px] font-medium text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                HUB
              </span>
            </div>
            <span className="hidden font-mono-code text-[11px] text-[var(--text-muted)] sm:inline">
              App Launcher &amp; Engineering Portal
            </span>
          </div>
        </a>

        {/* Quick 1-Tap Dock for Live Production Apps */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5">
          <span className="mr-1 hidden font-mono-code text-[11px] uppercase tracking-wider text-[var(--text-muted)] lg:inline">
            Accès 1-clic :
          </span>
          {liveProjects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Lancer ${project.title} (${project.url})`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 active:scale-95"
            >
              <ProjectIcon name={project.icon} className="h-3.5 w-3.5 text-cyan-500" />
              <span>{project.title}</span>
              <ExternalLink className="h-3 w-3 opacity-60" />
            </a>
          ))}
        </div>

        {/* Actions: Command Palette & Theme Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-cyan-500/40 hover:text-[var(--text-primary)] cursor-pointer"
            aria-label="Ouvrir le lanceur rapide (Cmd+K)"
          >
            <Command className="h-3.5 w-3.5 text-cyan-500" />
            <span className="hidden sm:inline">Launcher</span>
            <kbd className="rounded border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-1.5 py-0.5 font-mono-code text-[10px] text-[var(--text-muted)]">
              ⌘K
            </kbd>
          </button>

          <button
            type="button"
            onClick={handleToggleColorScheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] text-[var(--text-secondary)] transition-colors hover:border-cyan-500/40 hover:text-[var(--text-primary)] cursor-pointer"
            aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-sky-600" />}
          </button>
        </div>
      </div>
    </header>
  );
}
