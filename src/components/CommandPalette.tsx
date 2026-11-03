import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, CornerDownLeft, Search, X } from 'lucide-react';
import type { ProfileInfo, Project } from '../types/project';
import { GitHubIcon } from './BrandIcons';
import { ProjectIcon } from './ProjectIcon';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  profile: ProfileInfo;
}

export function CommandPalette({
  isOpen,
  onClose,
  projects,
  profile,
}: CommandPaletteProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const titleId = useId();
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((p) =>
      [p.title, p.description, p.category, p.categoryLabel ?? '', ...p.techStack]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [projects, query]);

  // Open/close native <dialog> via showModal() / close()
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      setQuery('');
      setActiveIndex(0);
      requestAnimationFrame(() => {
        inputRef.current?.focus();
      });
    } else if (dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // Fallback for browsers without native <dialog closedby="any"> support
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleNativeClose = () => {
      dialog.returnValue = '';
      onClose();
    };

    dialog.addEventListener('close', handleNativeClose);

    let cleanupFallback: (() => void) | undefined;
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const isOutside = (e: PointerEvent) => {
        const rect = dialog.getBoundingClientRect();
        return (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        );
      };

      let pressedOutside = false;
      const onPointerDown = (e: PointerEvent) => {
        pressedOutside = isOutside(e);
      };
      const onPointerUp = (e: PointerEvent) => {
        if (pressedOutside && isOutside(e)) {
          dialog.close();
        }
      };

      dialog.addEventListener('pointerdown', onPointerDown);
      dialog.addEventListener('pointerup', onPointerUp);
      cleanupFallback = () => {
        dialog.removeEventListener('pointerdown', onPointerDown);
        dialog.removeEventListener('pointerup', onPointerUp);
      };
    }

    return () => {
      dialog.removeEventListener('close', handleNativeClose);
      cleanupFallback?.();
    };
  }, [onClose]);

  const handleTriggerProject = (project: Project) => {
    const targetUrl = project.url ?? project.githubUrl;
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) =>
        filteredProjects.length ? (prev + 1) % filteredProjects.length : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) =>
        filteredProjects.length
          ? (prev - 1 + filteredProjects.length) % filteredProjects.length
          : 0
      );
    } else if (e.key === 'Enter' && filteredProjects[activeIndex]) {
      e.preventDefault();
      handleTriggerProject(filteredProjects[activeIndex]);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: 'any' } as React.DialogHTMLAttributes<HTMLDialogElement>)}
      aria-labelledby={titleId}
      onKeyDown={handleKeyDown}
      className="m-auto w-[calc(100%-2rem)] max-w-xl rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-surface-elevated)] p-0 text-[var(--text-primary)] shadow-2xl open:flex open:flex-col"
    >
      <h2 id={titleId} className="sr-only">
        Lanceur d&apos;applications rapide
      </h2>

      {/* Search Header */}
      <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] px-4 py-3.5">
        <Search className="h-4 w-4 shrink-0 text-cyan-500" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveIndex(0);
          }}
          placeholder="Lancer une application ou rechercher une stack (ex: APPnea, StreetFinder, Python)..."
          className="w-full bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer la palette de commandes"
          className="rounded-lg p-1 text-[var(--text-muted)] hover:bg-[var(--bg-pill)] hover:text-[var(--text-primary)] cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Results List */}
      <div className="max-h-80 overflow-y-auto p-2">
        <div className="px-2.5 py-1.5 font-mono-code text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
          Applications &amp; Projets ({filteredProjects.length})
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-8 text-center text-xs text-[var(--text-muted)]">
            Aucun projet trouvé pour « {query} ».
          </div>
        ) : (
          <ul className="space-y-1">
            {filteredProjects.map((project, idx) => {
              const isSelected = idx === activeIndex;
              const targetUrl = project.url ?? project.githubUrl;

              return (
                <li key={project.id}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => handleTriggerProject(project)}
                    disabled={!targetUrl}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 ${
                      isSelected
                        ? 'bg-cyan-500/15 text-[var(--text-primary)]'
                        : 'hover:bg-[var(--bg-pill)]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] text-cyan-500">
                        <ProjectIcon name={project.icon} className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-sm font-semibold">
                            {project.title}
                          </span>
                          <span className="rounded-full border border-[var(--border-subtle)] px-1.5 py-0.2 font-mono-code text-[10px] text-[var(--text-muted)]">
                            {project.status}
                          </span>
                        </div>
                        <p className="truncate text-xs text-[var(--text-secondary)]">
                          {project.categoryLabel ?? project.category} ·{' '}
                          {project.techStack.slice(0, 3).join(', ')}
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 font-mono-code text-xs text-cyan-500">
                      {project.url ? (
                        <span className="inline-flex items-center gap-1">
                          Ouvrir <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      ) : project.githubUrl ? (
                        <span className="inline-flex items-center gap-1 text-[var(--text-secondary)]">
                          <GitHubIcon className="h-3.5 w-3.5" /> Repo
                        </span>
                      ) : (
                        <span className="text-[var(--text-muted)]">Beta Privée</span>
                      )}
                      {isSelected && targetUrl && (
                        <CornerDownLeft className="h-3.5 w-3.5" />
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Footer Quick Links */}
      <div className="flex items-center justify-between border-t border-[var(--border-subtle)] bg-[var(--bg-pill)] px-4 py-2.5 font-mono-code text-[11px] text-[var(--text-muted)]">
        <div className="flex items-center gap-3">
          <span>↑↓ Naviguer</span>
          <span>↵ Ouvrir</span>
          <span>Esc Fermer</span>
        </div>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[var(--text-secondary)] hover:text-cyan-500"
        >
          <GitHubIcon className="h-3 w-3" /> GitHub
        </a>
      </div>
    </dialog>
  );
}
