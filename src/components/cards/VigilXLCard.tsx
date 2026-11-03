import { ArrowUpRight, Check, Download, Trees, X } from 'lucide-react';
import type { Project } from '../../types/project';
import { GitHubIcon } from '../BrandIcons';

interface AppCardProps {
  project: Project;
}

export function VigilXLCard({ project }: AppCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#ffffff',
        borderColor: '#008784',
        boxShadow: '0 16px 40px -12px rgba(0, 135, 132, 0.25)',
      }}
      className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border-2 transition-all duration-200 hover:shadow-xl flex flex-col justify-between text-slate-900"
    >
      {/* Top Ixelles Teal Stripe */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[#008784]" />

      <div className="p-6">
        {/* Real Ixelles Elsene Official Municipal Header */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-xs">
          <div className="flex items-start justify-between gap-2 border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#008784] bg-white text-[#008784] shadow-xs">
                <Trees className="h-6 w-6" />
              </div>
              <div>
                <div className="text-[10px] font-mono-code font-bold uppercase tracking-wider text-[#008784]">
                  Commune d&apos;Ixelles · Gemeente Elsene
                </div>
                <div className="font-display text-base font-bold text-slate-900">
                  VigilXL · Veille des subsides
                </div>
                <div className="text-[10px] text-slate-500 font-mono-code">
                  29 opportunités ouvertes pour la commune
                </div>
              </div>
            </div>

            {/* Segmented Theme Pill from screenshot */}
            <div className="flex items-center rounded-full border border-slate-300 bg-white p-0.5 text-[9px] font-mono-code shrink-0">
              <span className="rounded-full bg-[#008784] text-white px-2 py-0.5 font-bold shadow-2xs">
                ☀️ Clair
              </span>
              <span className="px-1.5 py-0.5 text-slate-500">🌙</span>
            </div>
          </div>

          {/* 4 Stat KPI boxes matching the real screenshot */}
          <div className="mt-3 grid grid-cols-4 gap-1.5 font-mono-code text-center">
            <div className="rounded-xl bg-white p-2 border border-slate-200 shadow-2xs">
              <div className="text-base font-bold text-slate-800">0</div>
              <div className="text-[8px] sm:text-[9px] text-slate-500 truncate">Nouveaux</div>
            </div>
            <div className="rounded-xl bg-white p-2 border border-slate-200 shadow-2xs">
              <div className="text-base font-bold text-rose-600">0</div>
              <div className="text-[8px] sm:text-[9px] text-slate-500 truncate">Prioritaires</div>
            </div>
            <div className="rounded-xl bg-white p-2 border border-slate-200 shadow-2xs">
              <div className="text-base font-bold text-slate-700">0</div>
              <div className="text-[8px] sm:text-[9px] text-slate-500 truncate">Presse</div>
            </div>
            <div className="rounded-xl bg-emerald-50/60 p-2 border-2 border-[#008784] shadow-xs">
              <div className="text-base font-bold text-[#008784]">24</div>
              <div className="text-[8px] sm:text-[9px] text-[#008784] font-bold truncate">À vérifier</div>
            </div>
          </div>

          {/* Subside Opportunities Table matching the screenshot */}
          <div className="mt-3 space-y-1.5 font-mono-code text-[11px] border-t border-slate-200 pt-2.5">
            <div className="flex items-center justify-between gap-1.5 rounded-lg bg-white p-2 border border-slate-200 shadow-2xs">
              <div className="truncate">
                <span className="font-semibold text-slate-800">Isolement social adultes</span>
                <span className="ml-1 text-[9px] text-amber-700 bg-amber-100 rounded px-1">⚠ 2</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="font-bold text-[#008784]">7,5 k€</span>
                <span className="text-[9px] text-amber-700 bg-amber-50 rounded px-1 border border-amber-200">
                  Incertaine
                </span>
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-300 text-slate-400">
                  <X className="h-2.5 w-2.5" />
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-1.5 rounded-lg bg-white p-2 border border-slate-200 shadow-2xs">
              <div className="truncate">
                <span className="font-semibold text-slate-800">Fonds Suzanne Matelart</span>
                <span className="ml-1 text-[9px] text-amber-700 bg-amber-100 rounded px-1">⚠ 1</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="font-bold text-emerald-700">25 k€</span>
                <span className="text-[9px] text-emerald-700 bg-emerald-50 rounded px-1 border border-emerald-300 font-bold">
                  Éligible
                </span>
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-emerald-500 bg-emerald-50 text-emerald-700">
                  <Check className="h-2.5 w-2.5" />
                </span>
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#008784] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-[#008784]/20 transition-all hover:bg-[#00706d] active:scale-[0.99]"
            >
              <Download className="h-4 w-4" />
              <span>Exporter validations.json</span>
              <ArrowUpRight className="h-4 w-4 ml-auto opacity-80" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source GitHub de ${project.title}`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition-colors hover:border-[#008784] hover:text-[#008784]"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
