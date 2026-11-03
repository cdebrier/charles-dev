import { ArrowUpRight, Bike } from 'lucide-react';
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
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 p-5 sm:p-6 transition-all duration-200 hover:shadow-lg hover:shadow-[#0d9488]/15 text-slate-900"
    >
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 border border-teal-200 text-[#0d9488] shadow-2xs">
              <Bike className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-bold text-slate-900 tracking-tight">
                  Telraam S2
                </h3>
                <span className="rounded bg-teal-50 px-1.5 py-0.2 font-mono-code text-[10px] text-[#0d9488] border border-teal-200 font-bold">
                  #5
                </span>
              </div>
              <p className="font-mono-code text-[11px] text-slate-500">
                Observatoire Mobilité · Rixensart
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2 py-0.5 font-mono-code text-[10px] font-bold text-[#0d9488] border border-teal-200">
            Citoyen
          </span>
        </div>

        {/* Minimalist Signature Element: Single Clean Ridge Wave Curve */}
        <div className="my-4 rounded-xl border border-slate-200 bg-white p-3 text-xs font-mono-code">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">Comptages Vélos</span>
            <span className="font-bold text-[#0d9488]">809 / jour</span>
          </div>

          {/* Clean Ridgeplot wave */}
          <div className="my-2 h-7 w-full">
            <svg viewBox="0 0 200 24" className="w-full h-full">
              <path
                d="M 0 20 Q 35 20 50 6 Q 65 20 95 18 Q 120 4 140 4 Q 165 20 200 20"
                fill="rgba(45, 212, 191, 0.2)"
                stroke="#0d9488"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-1.5">
            <span>Ch. La Hulpe (285/j)</span>
            <span>Pics à 8h et 16h</span>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-slate-700">
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between gap-3">
        <span className="font-mono-code text-[11px] text-slate-500">
          Analytics &amp; Capteurs S2
        </span>

        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0d9488] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[#0f766e] transition-colors"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              <span>Dépôt GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
