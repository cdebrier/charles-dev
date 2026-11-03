import { ArrowUpRight, Calendar, Rocket } from 'lucide-react';
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
        borderColor: 'rgba(235, 68, 68, 0.4)',
        boxShadow: '0 16px 40px -12px rgba(8, 14, 28, 0.95)',
      }}
      className="group relative col-span-1 md:col-span-3 overflow-hidden rounded-3xl border transition-all duration-200 hover:border-[#EB4444] flex flex-col justify-between"
    >
      {/* Top Brand Accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-[#EB4444]" />

      <div className="p-6 sm:p-7">
        {/* Real App Header from Screenshot */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EB4444] shadow-md p-1.5">
              <img
                src="/apps/appnea-icon.svg"
                alt="Logo APPnea"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-black tracking-tight text-white">
                  APPNEA<span className="text-[#EB4444] font-bold text-xs">.club</span>
                </span>
                <kbd className="rounded border border-[#EB4444]/40 bg-[#EB4444]/15 px-1.5 py-0.2 font-mono-code text-[10px] text-[#F87171]">
                  #1
                </kbd>
              </div>
              <p className="font-mono-code text-[11px] text-zinc-400">
                👥 32 apnéistes actifs ces 30j · LIFRAS &amp; CMAS
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-0.5 font-mono-code text-[10px] font-semibold text-emerald-400 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live en prod
          </span>
        </div>

        {/* Real APPnea Activity & Training Specimen */}
        <div className="mt-5 space-y-3">
          {/* Greeting & Next Session Banner */}
          <div className="rounded-2xl border border-white/10 bg-[#121b2d] p-3.5 shadow-inner">
            <div className="flex items-center justify-between text-xs text-zinc-300">
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <Calendar className="h-3.5 w-3.5 text-[#EB4444]" />
                Prochaine séance : Piscine du Blocry
              </span>
              <span className="rounded-full bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 font-mono-code text-[10px] font-bold border border-emerald-500/30">
                ✓ Je viens
              </span>
            </div>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-400 font-mono-code">
              <span>Mercredi · 20:00 - 120 min</span>
              <span>Louvain-la-Neuve</span>
              <span className="text-zinc-300">12 inscrits · 2 encadrants</span>
            </div>
          </div>

          {/* Bottom Telemetry Strip matching real app metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono-code text-center text-xs">
            <div className="rounded-xl border border-white/5 bg-[#121b2d] p-2.5">
              <div className="text-[10px] text-zinc-400 uppercase">Palier</div>
              <div className="text-sm font-bold text-white mt-0.5 truncate">
                🦈 Requin (7454 pts)
              </div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#121b2d] p-2.5">
              <div className="text-[10px] text-zinc-400 uppercase">Volume Global</div>
              <div className="text-sm font-bold text-[#F87171] mt-0.5">
                220h (6h/m)
              </div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#121b2d] p-2.5">
              <div className="text-[10px] text-zinc-400 uppercase">Ratio Séances</div>
              <div className="text-xs font-bold text-cyan-400 mt-0.5 truncate">
                75 STA · 86 DYN · 55 PROF
              </div>
            </div>
            <div className="rounded-xl border border-white/5 bg-[#121b2d] p-2.5">
              <div className="text-[10px] text-zinc-400 uppercase">Certifications</div>
              <div className="text-xs font-bold text-purple-400 mt-0.5 truncate">
                Instructeur 1* / A4
              </div>
            </div>
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
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#EB4444] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#EB4444]/25 transition-all hover:bg-[#D93838] active:scale-[0.99]"
          >
            <Rocket className="h-4 w-4" />
            <span>Lancer APPnea.club</span>
            <ArrowUpRight className="h-4 w-4 ml-auto" />
          </a>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source GitHub de ${project.title}`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-[#EB4444] hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
