import { Activity, ArrowUpRight, Bike, Code2, Gauge } from 'lucide-react';
import type { Project } from '../../types/project';
import { GitHubIcon } from '../BrandIcons';

interface AppCardProps {
  project: Project;
}

export function TelraamCard({ project }: AppCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#0B0F14',
        borderColor: 'rgba(90, 169, 255, 0.35)',
        boxShadow: '0 10px 30px -10px rgba(11, 15, 20, 0.8)',
      }}
      className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border transition-all duration-200 hover:border-[#5AA9FF]/70 flex flex-col justify-between p-6"
    >
      {/* Mobility Cobalt Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#5AA9FF]/15 blur-3xl"
      />
      <div className="absolute inset-x-0 top-0 h-1 bg-[#5AA9FF] opacity-80" />

      <div className="relative z-10">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#5AA9FF]/40 bg-[#5AA9FF]/15 text-[#5AA9FF] shadow-sm">
              <Bike className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  {project.title}
                </h3>
                <kbd className="rounded border border-[#5AA9FF]/30 bg-[#5AA9FF]/10 px-1.5 py-0.5 font-mono-code text-[10px] text-[#5AA9FF]">
                  #5
                </kbd>
              </div>
              <p className="font-mono-code text-xs text-zinc-400">
                {project.categoryLabel}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/35 bg-sky-500/15 px-2.5 py-0.5 font-mono-code text-[10px] font-semibold text-sky-400 uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              En développement
            </span>
            <span className="font-mono-code text-[10px] text-[#93C5FD] font-medium">
              Commune de Rixensart
            </span>
          </div>
        </div>

        {/* Traffic Sensor Telemetry & V85 Speed Specimen */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-[#121821] p-3.5 shadow-inner font-mono-code">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
            <span className="flex items-center gap-1.5 text-zinc-300 font-semibold">
              <Activity className="h-3.5 w-3.5 text-[#5AA9FF]" />
              Capteurs Telraam S2
            </span>
            <span className="text-emerald-400 font-bold">27M Détections</span>
          </div>

          {/* Multimodal Modal Split Bar */}
          <div className="mt-2.5">
            <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
              <span>🚶 12% Piétons</span>
              <span>🚲 18% Vélos</span>
              <span>🚗 70% Autos</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800 flex">
              <div style={{ width: '12%' }} className="bg-emerald-400" title="12% Piétons" />
              <div style={{ width: '18%' }} className="bg-[#5AA9FF]" title="18% Vélos" />
              <div style={{ width: '70%' }} className="bg-zinc-600" title="70% Voitures" />
            </div>
          </div>

          {/* V85 Speed Radar Gauge */}
          <div className="mt-3 flex items-center justify-between rounded-xl bg-black/40 px-3 py-2 border border-white/5 text-[10px]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <Gauge className="h-3.5 w-3.5 text-emerald-400" />
              <span>Vitesse réelle V85 :</span>
            </div>
            <span className="font-bold text-white bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md border border-emerald-500/30">
              48 km/h (Zone 50)
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          {project.description}
        </p>
      </div>

      {/* Bottom Area */}
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

        <div className="flex items-center gap-2.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#5AA9FF]/40 bg-[#2563EB]/25 px-4 py-2.5 text-xs font-semibold text-[#93C5FD] transition-colors hover:bg-[#2563EB]/40"
            >
              <Code2 className="h-4 w-4" />
              <span>Explorer le projet (Dev)</span>
              <ArrowUpRight className="h-4 w-4 ml-auto opacity-70" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source GitHub de ${project.title}`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-[#5AA9FF] hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
