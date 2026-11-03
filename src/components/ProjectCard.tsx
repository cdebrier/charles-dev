import { ArrowUpRight, Code2, Lock, Rocket, Sparkles } from 'lucide-react';
import type { Project, ProjectStatus } from '../types/project';
import { GitHubIcon } from './BrandIcons';
import { ProjectIcon } from './ProjectIcon';

interface ProjectCardProps {
  project: Project;
}

function getStatusBadgeStyle(status: ProjectStatus) {
  switch (status) {
    case 'Live':
      return {
        label: 'Live',
        badgeClass:
          'border-emerald-500/35 bg-emerald-500/12 text-emerald-500',
        dotClass: 'bg-emerald-500 animate-pulse',
      };
    case 'Beta':
      return {
        label: 'En dév · Beta',
        badgeClass:
          'border-amber-500/35 bg-amber-500/12 text-amber-500',
        dotClass: 'bg-amber-500',
      };
    case 'Private/Dev':
      return {
        label: 'En développement',
        badgeClass:
          'border-sky-500/30 bg-sky-500/10 text-sky-400',
        dotClass: 'bg-sky-400',
      };
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusInfo = getStatusBadgeStyle(project.status);
  const isLive = Boolean(project.url);

  return (
    <article
      className={`surface-card group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 ${
        project.featured ? 'md:col-span-3' : 'md:col-span-2'
      }`}
    >
      {/* Top Glow Accent for Featured Live Apps */}
      {project.featured && (
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      )}

      <div>
        {/* Card Header: Icon + Title + Category + Status Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3.5">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-transform duration-200 group-hover:scale-105 ${
                isLive
                  ? 'border-cyan-500/35 bg-cyan-500/12 text-cyan-400 shadow-sm shadow-cyan-500/10'
                  : 'border-[var(--border-subtle)] bg-[var(--bg-pill)] text-[var(--text-secondary)]'
              }`}
            >
              <ProjectIcon name={project.icon} className="h-6 w-6" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-lg font-bold tracking-tight text-[var(--text-primary)] sm:text-xl">
                  {project.title}
                </h2>
                {project.shortcutIndex && (
                  <kbd
                    title={`Appuyez sur la touche ${project.shortcutIndex} pour ouvrir`}
                    className="hidden rounded border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-1.5 py-0.5 font-mono-code text-[10px] text-[var(--text-muted)] sm:inline-block"
                  >
                    #{project.shortcutIndex}
                  </kbd>
                )}
              </div>
              <p className="font-mono-code text-xs text-[var(--text-muted)]">
                {project.categoryLabel ?? project.category}
              </p>
            </div>
          </div>

          {/* Status Pill */}
          <span
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono-code text-[11px] font-medium ${statusInfo.badgeClass}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${statusInfo.dotClass}`} />
            {statusInfo.label}
          </span>
        </div>

        {/* Highlight Telemetry Strip */}
        {project.highlight && (
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2.5 py-1 font-mono-code text-[11px] text-[var(--text-secondary)]">
            <Sparkles className="h-3 w-3 text-cyan-500" />
            <span>{project.highlight}</span>
          </div>
        )}

        {/* Description */}
        <p className="mt-3.5 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>
      </div>

      {/* Bottom Area: Tech Stack Tags + Action Bar */}
      <div className="mt-5 pt-4 border-t border-[var(--border-subtle)]">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Stack technique">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2 py-0.5 font-mono-code text-[11px] font-medium text-[var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-sm shadow-cyan-500/20 transition-all hover:bg-cyan-400 active:scale-[0.99] sm:text-sm"
            >
              <Rocket className="h-4 w-4" />
              <span>Lancer l&apos;app</span>
              <span className="font-mono-code text-[11px] opacity-75 hidden sm:inline">
                ({project.url.replace(/^https?:\/\//, '')})
              </span>
              <ArrowUpRight className="h-4 w-4 ml-auto" />
            </a>
          ) : project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 sm:text-sm"
            >
              <Code2 className="h-4 w-4 text-cyan-500" />
              <span>Explorer le projet (Dev)</span>
              <ArrowUpRight className="h-4 w-4 ml-auto opacity-70" />
            </a>
          ) : (
            <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-4 py-2.5 text-xs font-medium text-[var(--text-muted)] sm:text-sm select-none">
              <Lock className="h-3.5 w-3.5 text-amber-500" />
              <span>Build privé · Accès Beta</span>
            </span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source GitHub de ${project.title}`}
              title={`Voir le dépôt GitHub de ${project.title}`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] text-[var(--text-secondary)] transition-colors hover:border-cyan-500/40 hover:text-[var(--text-primary)]"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
