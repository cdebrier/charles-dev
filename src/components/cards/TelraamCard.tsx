import { ArrowUpRight, Bike, Code2 } from 'lucide-react';
import type { Project } from '../../types/project';
import { GitHubIcon } from '../BrandIcons';

interface AppCardProps {
  project: Project;
}

export function TelraamCard({ project }: AppCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#f8fafc',
        borderColor: '#0d9488',
        boxShadow: '0 16px 40px -12px rgba(13, 148, 136, 0.2)',
      }}
      className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border-2 transition-all duration-200 hover:shadow-xl flex flex-col justify-between text-slate-900"
    >
      {/* Top Scientific Mint Stripe */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[#0d9488]" />

      <div className="p-6">
        {/* Real Telraam Scientific Mobility Header from Screenshot */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
          <div className="flex items-start justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 border border-teal-200 text-[#0d9488]">
                <Bike className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#0d9488]">
                  Observatoire Citoyen · Rixensart
                </div>
                <div className="font-display text-base font-bold text-slate-900">
                  Comptages Telraam S2
                </div>
              </div>
            </div>

            {/* Mode selection pills matching screenshot */}
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1 font-mono-code text-[9px]">
              <span className="px-2 py-0.5 text-slate-600">Voitures</span>
              <span className="px-2 py-0.5 text-slate-600">Vélos</span>
              <span className="rounded-full bg-[#0d9488] text-white px-2 py-0.5 font-bold shadow-2xs">
                Piétons
              </span>
            </div>
          </div>

          {/* Ridgeplot / Density Curves Simulation directly from Screenshot */}
          <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Left Insight Box */}
            <div className="sm:col-span-5 rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-xs font-mono-code flex flex-col justify-between">
              <div>
                <div className="text-[9px] font-bold uppercase tracking-wider text-teal-700">
                  Journée type · Vélos
                </div>
                <div className="mt-1 font-display text-xs font-bold text-slate-900 leading-snug">
                  Les vélos suivent le même rythme
                </div>
                <p className="mt-1 text-[10px] text-slate-600 leading-relaxed font-sans">
                  Pics à 8h-9h et 16h-17h. 809 vélos/j de semaine sur 12 rues.
                </p>
              </div>
              <div className="mt-2 text-[9px] text-slate-500">
                Nov. 2024 · 12 capteurs
              </div>
            </div>

            {/* Right Ridgeplot Density Waves */}
            <div className="sm:col-span-7 rounded-xl border border-slate-100 bg-white p-2.5 font-mono-code text-[10px]">
              <div className="space-y-1.5">
                {/* Ch. La Hulpe */}
                <div className="flex items-center justify-between gap-1 text-[9px]">
                  <span className="text-slate-700 w-20 truncate">Ch. La Hulpe</span>
                  <div className="flex-1 h-3 flex items-center px-1">
                    <svg viewBox="0 0 100 16" className="w-full h-full overflow-visible">
                      <path
                        d="M 0 14 Q 25 14 35 3 Q 45 14 65 14 Q 75 4 85 4 Q 95 14 100 14"
                        fill="rgba(45, 212, 191, 0.25)"
                        stroke="#0d9488"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-[#0d9488] shrink-0">285 / j</span>
                </div>

                {/* Rue de la Gare */}
                <div className="flex items-center justify-between gap-1 text-[9px]">
                  <span className="text-slate-700 w-20 truncate">Rue de la Gare</span>
                  <div className="flex-1 h-3 flex items-center px-1">
                    <svg viewBox="0 0 100 16" className="w-full h-full overflow-visible">
                      <path
                        d="M 0 14 Q 20 14 30 7 Q 50 14 70 8 Q 80 2 90 8 Q 96 14 100 14"
                        fill="rgba(45, 212, 191, 0.25)"
                        stroke="#0d9488"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-[#0d9488] shrink-0">202 / j</span>
                </div>

                {/* Place Communale */}
                <div className="flex items-center justify-between gap-1 text-[9px]">
                  <span className="text-slate-700 w-20 truncate">Pl. Communale</span>
                  <div className="flex-1 h-3 flex items-center px-1">
                    <svg viewBox="0 0 100 16" className="w-full h-full overflow-visible">
                      <path
                        d="M 0 14 Q 30 14 40 4 Q 55 12 70 4 Q 85 14 100 14"
                        fill="rgba(45, 212, 191, 0.25)"
                        stroke="#0d9488"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-[#0d9488] shrink-0">130 / j</span>
                </div>

                {/* Av. Albert 1er */}
                <div className="flex items-center justify-between gap-1 text-[9px]">
                  <span className="text-slate-700 w-20 truncate">Av. Albert 1er</span>
                  <div className="flex-1 h-3 flex items-center px-1">
                    <svg viewBox="0 0 100 16" className="w-full h-full overflow-visible">
                      <path
                        d="M 0 14 Q 20 14 30 9 Q 50 14 65 5 Q 85 14 100 14"
                        fill="rgba(45, 212, 191, 0.25)"
                        stroke="#0d9488"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="font-bold text-[#0d9488] shrink-0">109 / j</span>
                </div>
              </div>

              {/* Time axis */}
              <div className="mt-2 flex justify-between text-[8px] text-slate-500 border-t border-slate-200 pt-1">
                <span>6 h</span>
                <span>8 h (Pic)</span>
                <span>12 h</span>
                <span>16 h (Pic)</span>
                <span>18 h</span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700">
          {project.description}
        </p>
      </div>

      {/* Footer Area */}
      <div className="p-6 pt-0 border-t border-slate-200 mt-2">
        <div className="flex flex-wrap gap-1.5 my-3.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-300 bg-slate-100 px-2 py-0.5 font-mono-code text-[11px] font-medium text-slate-700"
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0d9488] px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#0d9488]/20 transition-all hover:bg-[#0f766e] active:scale-[0.99]"
            >
              <Code2 className="h-4 w-4" />
              <span>Consulter l&apos;Observatoire (Dev)</span>
              <ArrowUpRight className="h-4 w-4 ml-auto opacity-80" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source GitHub de ${project.title}`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition-colors hover:border-[#0d9488] hover:text-[#0d9488]"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
