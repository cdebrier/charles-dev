import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types/project';
import { GitHubIcon } from '../BrandIcons';

interface AppCardProps {
  project: Project;
}

export function AppneaCard({ project }: AppCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#0c1322',
        borderColor: 'rgba(235, 68, 68, 0.3)',
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 sm:p-6 transition-all duration-200 hover:border-[#EB4444] hover:shadow-lg hover:shadow-[#EB4444]/10"
    >
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EB4444] p-1.5 shadow-xs">
              <img
                src="/apps/appnea-icon.svg"
                alt="Logo APPnea"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-bold text-white tracking-tight">
                  APPNEA<span className="text-[#EB4444] font-normal text-xs">.club</span>
                </h3>
                <span className="rounded bg-[#EB4444]/15 px-1.5 py-0.2 font-mono-code text-[10px] text-[#F87171] border border-[#EB4444]/30">
                  #1
                </span>
              </div>
              <p className="font-mono-code text-[11px] text-zinc-400">
                Club d&apos;apnée · LIFRAS &amp; CMAS
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono-code text-[10px] font-medium text-emerald-400 border border-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>

        {/* Minimalist Signature Element: Next Session & Apnea Level */}
        <div className="my-4 rounded-xl border border-white/5 bg-[#121b2d] p-3 text-xs font-mono-code">
          <div className="flex items-center justify-between text-zinc-300">
            <span className="text-white font-medium truncate">Piscine du Blocry · Mercredi 20h</span>
            <span className="text-emerald-400 font-bold text-[10px] shrink-0">✓ Je viens</span>
          </div>
          <div className="mt-1.5 flex items-center justify-between text-[11px] text-zinc-400 border-t border-white/5 pt-1.5">
            <span>🦈 Palier Requin (7454 pts)</span>
            <span className="text-zinc-500">220h volume</span>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-zinc-300">
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded bg-white/5 px-2 py-0.5 font-mono-code text-[10px] text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Code source GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-colors"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#EB4444] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#d93838] transition-colors"
          >
            <span>Lancer</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
