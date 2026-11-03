import { ArrowUpRight, Bluetooth, Rocket, Waves } from 'lucide-react';
import type { Project } from '../../types/project';
import { GitHubIcon } from '../BrandIcons';

interface AppCardProps {
  project: Project;
}

export function AppneaCard({ project }: AppCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#0a1128',
        borderColor: 'rgba(235, 68, 68, 0.35)',
        boxShadow: '0 10px 30px -10px rgba(10, 17, 40, 0.8)',
      }}
      className="group relative col-span-1 md:col-span-3 overflow-hidden rounded-3xl border transition-all duration-200 hover:border-[#EB4444]/70"
    >
      {/* Oceanic Ambient Water Gradient & Wave Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0c1938] via-[#0a1128] to-[#050914] opacity-90"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#EB4444]/15 blur-3xl"
      />

      {/* Top Brand Stripe */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#EB4444] via-[#F87171] to-transparent opacity-80" />

      <div className="relative z-10 flex flex-col justify-between p-6 sm:p-7 h-full">
        <div>
          {/* Header Row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#EB4444]/40 bg-[#EB4444]/15 shadow-sm">
                <img
                  src="/apps/appnea-icon.svg"
                  alt="Logo APPnea"
                  className="h-7 w-7 object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <kbd className="rounded border border-[#EB4444]/30 bg-[#EB4444]/10 px-1.5 py-0.5 font-mono-code text-[10px] text-[#F87171]">
                    #1
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
              <span className="font-mono-code text-[10px] text-zinc-400">
                LIFRAS · NELOS · CMAS
              </span>
            </div>
          </div>

          {/* Dive Computer / Apnea Telemetry Centerpiece with App Mockup */}
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-12 items-center">
            {/* Left Telemetry Dial */}
            <div className="sm:col-span-7 rounded-2xl border border-white/10 bg-black/40 p-3.5 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] font-mono-code text-zinc-400">
                <span className="flex items-center gap-1.5 text-zinc-200 font-semibold">
                  <Waves className="h-3.5 w-3.5 text-[#EB4444]" />
                  Télémétrie d&apos;Apnée
                </span>
                <span className="flex items-center gap-1 text-[#F87171]">
                  <Bluetooth className="h-3 w-3" /> Garmin FIT Sync
                </span>
              </div>

              <div className="mt-2.5 grid grid-cols-3 gap-2 text-center font-mono-code">
                <div className="rounded-xl bg-white/5 p-2">
                  <div className="text-[10px] text-zinc-400 uppercase">Statique</div>
                  <div className="text-sm sm:text-base font-bold text-[#F87171] mt-0.5">
                    4&apos;15&quot;
                  </div>
                  <div className="text-[9px] text-zinc-400">STA Breath-hold</div>
                </div>
                <div className="rounded-xl bg-white/5 p-2">
                  <div className="text-[10px] text-zinc-400 uppercase">Dynamique</div>
                  <div className="text-sm sm:text-base font-bold text-cyan-400 mt-0.5">
                    100m
                  </div>
                  <div className="text-[9px] text-zinc-400">DYN Bipalmes</div>
                </div>
                <div className="rounded-xl bg-white/5 p-2">
                  <div className="text-[10px] text-zinc-400 uppercase">Profondeur</div>
                  <div className="text-sm sm:text-base font-bold text-sky-400 mt-0.5">
                    -35m
                  </div>
                  <div className="text-[9px] text-zinc-400">CWT Poids constant</div>
                </div>
              </div>
            </div>

            {/* Right Mini App Screenshot Preview */}
            <div className="hidden sm:flex sm:col-span-5 justify-end">
              <div className="relative w-36 h-28 overflow-hidden rounded-xl border border-white/15 bg-black/50 shadow-2xl transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/apps/appnea-preview.webp"
                  alt="Aperçu écran APPnea"
                  className="w-full h-full object-cover object-top opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-1.5 left-2 rounded bg-black/70 px-1.5 py-0.5 font-mono-code text-[9px] text-white">
                  PWA Mobile
                </span>
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#EB4444] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#EB4444]/25 transition-all hover:bg-[#D93838] active:scale-[0.99]"
            >
              <Rocket className="h-4 w-4" />
              <span>Lancer APPnea</span>
              <span className="font-mono-code text-[11px] opacity-75 hidden sm:inline">
                (appnea.club)
              </span>
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
      </div>
    </article>
  );
}
