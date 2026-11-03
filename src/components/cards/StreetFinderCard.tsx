import { ArrowUpRight, Flame, Play, Trophy } from 'lucide-react';
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
        borderColor: 'rgba(243, 222, 44, 0.45)',
        boxShadow: '0 16px 40px -12px rgba(12, 13, 16, 0.95)',
      }}
      className="group relative col-span-1 md:col-span-3 overflow-hidden rounded-3xl border transition-all duration-200 hover:border-[#F3DE2C] flex flex-col justify-between"
    >
      {/* Top Belgian Road Yellow Stripe */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[#F3DE2C]" />

      <div className="p-6 sm:p-7">
        {/* Real StreetFinder Top Bar */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#1a1d26] px-3.5 py-2 shadow-inner">
            <img
              src="/apps/streetfinder-icon.svg"
              alt="StreetFinder Icon"
              className="h-5 w-5 object-contain"
            />
            <span className="font-display font-black italic tracking-wide text-white text-base">
              STREET<span className="text-[#F3DE2C]">FINDER</span>
            </span>
            <kbd className="rounded bg-[#F3DE2C] px-1.5 py-0.2 font-mono-code text-[10px] font-black text-slate-950">
              #2
            </kbd>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F3DE2C]/40 bg-[#F3DE2C]/15 px-3 py-1 font-mono-code text-[10px] font-bold text-[#F3DE2C] uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            581 Communes Belges
          </span>
        </div>

        {/* Real Comic Hero Section with "EXPLORE RIXENSART" & Smurf Lake */}
        <div className="relative mt-5 overflow-hidden rounded-2xl border-2 border-[#F3DE2C]/40 bg-[#161922] p-5 shadow-2xl">
          {/* Subtle Comic Illustration Background Overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
            style={{
              backgroundImage: 'url(/apps/streetfinder-bg.png)',
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#161922] via-[#161922]/80 to-transparent" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-xs">
              <Flame className="h-3 w-3" /> Daily Briefing
            </div>

            <div className="mt-2.5">
              <div className="font-display text-2xl sm:text-4xl font-black italic tracking-tight text-white leading-none uppercase">
                Explore <br />
                <span className="text-[#F3DE2C] drop-shadow-md">Rixensart</span>
              </div>
              <p className="mt-2 font-mono-code text-xs text-zinc-300 max-w-md uppercase tracking-wide">
                Trouvez les plus belles rues et communes belges à 360°.
              </p>
            </div>

            {/* Game Buttons matching screenshot */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-orange-500 px-3 py-1.5 font-display text-xs font-black uppercase text-white shadow-sm">
                The Right Street!
              </span>
              <span className="rounded-lg border border-white/20 bg-black/60 px-3 py-1.5 font-display text-xs font-bold text-zinc-300">
                Closest Possible!
              </span>
              <span className="flex items-center gap-1 rounded-lg border border-white/20 bg-black/40 px-2.5 py-1.5 text-xs text-amber-300 font-mono-code ml-auto">
                <Trophy className="h-3.5 w-3.5" /> Rankings
              </span>
            </div>
          </div>

          {/* Bottom Game Quest Bar */}
          <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/10 pt-2.5 text-[10px] font-mono-code text-zinc-400">
            <span>EXPLORATION: RIXENSART · 0/318 RUES</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> SYSTEM ONLINE
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-300">
          {project.description}
        </p>
      </div>

      {/* Footer Area */}
      <div className="p-6 sm:p-7 pt-0 border-t border-white/10 mt-2">
        <div className="flex flex-wrap gap-1.5 my-3.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono-code text-[11px] font-medium text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F3DE2C] px-4 py-2.5 text-xs sm:text-sm font-black uppercase tracking-wider text-slate-950 shadow-lg shadow-[#F3DE2C]/20 transition-all hover:bg-[#e2ce23] active:scale-[0.99]"
          >
            <Play className="h-4 w-4 fill-slate-950" />
            <span>Jouer sur StreetFinder.be</span>
            <ArrowUpRight className="h-4 w-4 ml-auto" />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source GitHub de ${project.title}`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-[#F3DE2C] hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
