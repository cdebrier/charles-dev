import { ArrowUpRight, Gamepad2, MapPin } from 'lucide-react';
import type { Project } from '../../types/project';
import { GitHubIcon } from '../BrandIcons';

interface AppCardProps {
  project: Project;
}

export function StreetFinderCard({ project }: AppCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#0c0d10',
        borderColor: 'rgba(243, 222, 44, 0.35)',
        boxShadow: '0 10px 30px -10px rgba(12, 13, 16, 0.8)',
      }}
      className="group relative col-span-1 md:col-span-3 overflow-hidden rounded-3xl border transition-all duration-200 hover:border-[#F3DE2C]/70"
    >
      {/* Asphalt Texture & Belgian Road Marking Line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#20242c_1px,transparent_1px)] [background-size:16px_16px] opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#F3DE2C]/10 blur-3xl"
      />

      {/* Top Belgian Road Stripe */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[#F3DE2C] opacity-80" />

      <div className="relative z-10 flex flex-col justify-between p-6 sm:p-7 h-full">
        <div>
          {/* Header Row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#F3DE2C]/40 bg-[#F3DE2C]/15 shadow-sm p-2">
                <img
                  src="/apps/streetfinder-icon.svg"
                  alt="Logo StreetFinder"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <kbd className="rounded border border-[#F3DE2C]/30 bg-[#F3DE2C]/10 px-1.5 py-0.5 font-mono-code text-[10px] text-[#F3DE2C]">
                    #2
                  </kbd>
                </div>
                <p className="font-mono-code text-xs text-zinc-400">
                  {project.categoryLabel}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono-code text-[10px] font-semibold text-emerald-400 uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live · Production
              </span>
              <span className="font-mono-code text-[10px] text-[#FACC15]">
                581 Communes Belges
              </span>
            </div>
          </div>

          {/* Belgian Street Sign & Game UI Specimen */}
          <div className="mt-5 rounded-2xl border border-[#F3DE2C]/30 bg-[#16181f] p-4 shadow-inner">
            {/* Real Street Sign Plaque styling */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 rounded-xl border-2 border-white/80 bg-[#0d1424] px-4 py-2.5 shadow-md">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-5 w-5 text-[#F3DE2C] shrink-0" />
                <div>
                  <div className="font-display text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                    Rue de la Victoire · Zegestraat
                  </div>
                  <div className="font-mono-code text-[10px] text-[#F3DE2C]">
                    50°49&apos;38&quot;N 4°20&apos;55&quot;E · Ixelles 1050
                  </div>
                </div>
              </div>
              <span className="rounded-md bg-[#F3DE2C] px-2 py-0.5 font-mono-code text-[10px] font-black text-slate-950 uppercase">
                Bruxelles
              </span>
            </div>

            {/* Game Stats Row */}
            <div className="mt-3 grid grid-cols-3 gap-2 text-center font-mono-code text-xs">
              <div className="rounded-lg bg-black/40 p-2 border border-white/5">
                <div className="text-[10px] text-zinc-400 uppercase">Territoire</div>
                <div className="font-bold text-[#F3DE2C] mt-0.5">581 Communes</div>
              </div>
              <div className="rounded-lg bg-black/40 p-2 border border-white/5">
                <div className="text-[10px] text-zinc-400 uppercase">Moteur 360°</div>
                <div className="font-bold text-white mt-0.5">Street View</div>
              </div>
              <div className="rounded-lg bg-black/40 p-2 border border-white/5">
                <div className="text-[10px] text-zinc-400 uppercase">Mode Jeu</div>
                <div className="font-bold text-emerald-400 mt-0.5">Cartes Quartiers</div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-300">
            {project.description}
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex flex-wrap gap-1.5 mb-4">
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#F3DE2C] px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-[#F3DE2C]/20 transition-all hover:bg-[#e2ce23] active:scale-[0.99]"
            >
              <Gamepad2 className="h-4 w-4" />
              <span>Jouer sur StreetFinder</span>
              <span className="font-mono-code text-[11px] opacity-75 hidden sm:inline">
                (streetfinder.be)
              </span>
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
      </div>
    </article>
  );
}
