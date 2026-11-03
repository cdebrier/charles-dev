import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types/project';
import { GitHubIcon } from '../BrandIcons';

interface AppCardProps {
  project: Project;
}

export function StreetFinderCard({ project }: AppCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#111317',
        borderColor: 'rgba(243, 222, 44, 0.35)',
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 sm:p-6 transition-all duration-200 hover:border-[#F3DE2C] hover:shadow-lg hover:shadow-[#F3DE2C]/10"
    >
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1a1d26] p-1.5 border border-white/10 shadow-xs">
              <img
                src="/apps/streetfinder-icon.svg"
                alt="StreetFinder Icon"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-black italic text-white tracking-wide">
                  STREET<span className="text-[#F3DE2C]">FINDER</span>
                </h3>
                <span className="rounded bg-[#F3DE2C] px-1.5 py-0.2 font-mono-code text-[10px] font-black text-slate-950">
                  #2
                </span>
              </div>
              <p className="font-mono-code text-[11px] text-zinc-400">
                Jeu Géo · 581 Communes Belges
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono-code text-[10px] font-medium text-emerald-400 border border-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        </div>

        {/* Minimalist Signature Element: Explore Rixensart */}
        <div className="my-4 rounded-xl border border-[#F3DE2C]/25 bg-[#171a22] p-3 text-xs font-mono-code">
          <div className="flex items-center justify-between">
            <span className="font-display font-black italic uppercase tracking-tight text-white text-sm">
              Explore <span className="text-[#F3DE2C]">Rixensart</span>
            </span>
            <span className="rounded bg-orange-500 px-2 py-0.5 font-display text-[10px] font-bold text-white uppercase">
              The Right Street!
            </span>
          </div>
          <div className="mt-1.5 flex items-center justify-between text-[11px] text-zinc-400 border-t border-white/5 pt-1.5">
            <span>0 / 318 Rues validées</span>
            <span className="text-emerald-400">● Online</span>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-zinc-300">
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
        <span className="font-mono-code text-[11px] text-zinc-400">
          streetfinder.be
        </span>

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
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#F3DE2C] px-3.5 py-1.5 text-xs font-bold text-slate-950 hover:bg-[#e2ce23] transition-colors"
          >
            <span>Jouer</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
