import { ArrowUpRight, Code2, Lock, Rocket, Sparkles } from 'lucide-react';
import type { Project, ProjectStatus } from '../types/project';
import { GitHubIcon } from './BrandIcons';
import { ProjectBackgroundPattern } from './ProjectBackgroundPattern';
import { ProjectIcon } from './ProjectIcon';

interface ProjectCardProps {
  project: Project;
}

function getStatusBadge(status: ProjectStatus, accentColor?: string) {
  switch (status) {
    case 'Live':
      return {
        label: 'Production · Live',
        dotColor: accentColor ?? '#10B981',
      };
    case 'Beta':
      return {
        label: 'Beta Privée',
        dotColor: '#F59E0B',
      };
    case 'Private/Dev':
      return {
        label: 'En développement',
        dotColor: accentColor ?? '#38BDF8',
      };
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const theme = project.theme;
  const statusInfo = getStatusBadge(project.status, theme?.accentColor);

  return (
    <article
      style={{
        backgroundColor: theme?.surfaceBg ?? 'var(--bg-surface)',
        borderColor: theme?.surfaceBorder ?? 'var(--border-subtle)',
        boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.25)',
      }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 sm:p-6 transition-colors duration-200 hover:border-zinc-500/50 ${
        project.featured ? 'md:col-span-3' : 'md:col-span-2'
      }`}
    >
      {/* Target App Background Filigree Texture */}
      {theme && (
        <ProjectBackgroundPattern
          pattern={theme.pattern}
          accentColor={theme.accentColor}
        />
      )}

      {/* Subtle Top Accent Ribbon */}
      {theme && (
        <div
          style={{ backgroundColor: theme.accentColor }}
          className="pointer-events-none absolute inset-x-0 top-0 h-1 opacity-70 transition-opacity duration-200 group-hover:opacity-100"
        />
      )}

      <div className="relative z-10">
        {/* Card Header: Brand Identity & Target Logo */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3.5">
            {theme?.logoUrl ? (
              <div
                style={{
                  borderColor: `${theme.accentColor}40`,
                  backgroundColor: `${theme.accentColor}12`,
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border p-2 shadow-xs"
              >
                <img
                  src={theme.logoUrl}
                  alt={project.title}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : (
              <div
                style={{
                  borderColor: theme ? `${theme.accentColor}40` : undefined,
                  backgroundColor: theme ? `${theme.accentColor}14` : undefined,
                  color: theme?.accentColor,
                }}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] text-[var(--text-primary)]"
              >
                <ProjectIcon name={project.icon} className="h-6 w-6" />
              </div>
            )}

            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {project.title}
                </h2>
                {project.shortcutIndex && (
                  <kbd
                    title={`Appuyez sur la touche ${project.shortcutIndex} pour ouvrir`}
                    className="hidden rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono-code text-[10px] text-zinc-400 sm:inline-block"
                  >
                    #{project.shortcutIndex}
                  </kbd>
                )}
              </div>
              <p className="font-mono-code text-xs text-zinc-400">
                {project.categoryLabel ?? project.category}
              </p>
            </div>
          </div>

          {/* Org & Status Capsule */}
          <div className="flex flex-col items-end gap-1">
            <span
              style={{
                borderColor: theme ? `${theme.accentColor}35` : undefined,
                backgroundColor: theme ? theme.badgeBg : undefined,
                color: theme ? theme.badgeText : undefined,
              }}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono-code text-[10px] font-semibold uppercase tracking-wider"
            >
              <span
                style={{ backgroundColor: statusInfo.dotColor }}
                className="h-1.5 w-1.5 rounded-full"
              />
              {statusInfo.label}
            </span>
            {theme?.orgBadge && (
              <span className="font-mono-code text-[10px] text-zinc-400">
                {theme.orgBadge}
              </span>
            )}
          </div>
        </div>

        {/* Micro-UI Dedicated Widget specific to Target App */}
        {theme?.metrics && theme.metrics.length > 0 && (
          <div
            style={{
              borderColor: `${theme.accentColor}25`,
              backgroundColor: 'rgba(0, 0, 0, 0.35)',
            }}
            className="mt-4 rounded-xl border p-2.5 backdrop-blur-md"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-1.5 text-[10px] font-mono-code text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
                <Sparkles style={{ color: theme.accentColor }} className="h-3 w-3" />
                {theme.metricBadge ?? 'Spécifications'}
              </span>
              <span className="text-zinc-500">Live Context</span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center font-mono-code">
              {theme.metrics.map((m, i) => (
                <div key={i} className="rounded-lg bg-white/5 px-2 py-1.5">
                  <div
                    style={{ color: theme.accentColor }}
                    className="font-bold text-xs truncate"
                  >
                    {m.value}
                  </div>
                  <div className="text-[10px] text-zinc-400 truncate mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <p className="mt-3.5 text-sm leading-relaxed text-zinc-300">
          {project.description}
        </p>
      </div>

      {/* Bottom Area: Tech Stack Tags + Action Bar */}
      <div className="relative z-10 mt-5 pt-4 border-t border-white/10">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Stack technique">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono-code text-[11px] font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons: Heavy target app styling */}
        <div className="flex items-center gap-2.5">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: theme?.buttonBg ?? '#FFFFFF',
                color: theme?.buttonText ?? '#000000',
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold shadow-md transition-opacity hover:opacity-90 active:scale-[0.99] sm:text-sm"
            >
              <Rocket className="h-4 w-4" />
              <span>Lancer l&apos;application</span>
              <ArrowUpRight className="h-4 w-4 ml-auto" />
            </a>
          ) : project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                borderColor: `${theme?.accentColor ?? '#FFFFFF'}50`,
                backgroundColor: `${theme?.accentColor ?? '#FFFFFF'}14`,
                color: theme?.accentColor ?? '#FFFFFF',
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-opacity hover:opacity-90 sm:text-sm"
            >
              <Code2 className="h-4 w-4" />
              <span>Explorer le projet (Dev)</span>
              <ArrowUpRight className="h-4 w-4 ml-auto opacity-70" />
            </a>
          ) : (
            <span
              style={{
                borderColor: `${theme?.accentColor ?? '#FFFFFF'}30`,
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-medium text-zinc-400 sm:text-sm select-none"
            >
              <Lock
                style={{ color: theme?.accentColor }}
                className="h-3.5 w-3.5"
              />
              <span>Accès Beta Privé (Expo)</span>
            </span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source GitHub de ${project.title}`}
              title={`Voir le dépôt GitHub de ${project.title}`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
