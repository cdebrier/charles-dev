import { ArrowUpRight, Trees } from 'lucide-react';
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
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 p-5 sm:p-6 transition-all duration-200 hover:shadow-lg hover:shadow-[#008784]/15 text-slate-900"
    >
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#008784] bg-white text-[#008784] shadow-2xs">
              <Trees className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-bold text-slate-900 tracking-tight">
                  VigilXL
                </h3>
                <span className="rounded bg-teal-50 px-1.5 py-0.2 font-mono-code text-[10px] text-[#008784] border border-[#008784]/30 font-bold">
                  #4
                </span>
              </div>
              <p className="font-mono-code text-[11px] text-slate-500">
                Commune d&apos;Ixelles · Gemeente Elsene
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-2 py-0.5 font-mono-code text-[10px] font-bold text-[#008784] border border-[#008784]/30">
            29 Appels
          </span>
        </div>

        {/* Minimalist Signature Element: Key Municipal Subsidy KPIs */}
        <div className="my-4 rounded-xl border border-slate-200 bg-slate-50/80 p-3 text-xs font-mono-code">
          <div className="flex items-center justify-between">
            <span className="text-slate-600">À vérifier</span>
            <span className="font-bold text-[#008784]">24 opportunités</span>
          </div>
          <div className="mt-1.5 flex items-center justify-between text-[11px] text-slate-600 border-t border-slate-200 pt-1.5">
            <span className="truncate">Fonds Suzanne Matelart</span>
            <span className="font-bold text-emerald-700 bg-emerald-100/70 px-1 rounded">25 k€ · Éligible</span>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-slate-700">
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded bg-slate-100 px-2 py-0.5 font-mono-code text-[10px] text-slate-600"
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
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:text-[#008784] hover:border-[#008784] transition-colors"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#008784] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#00706d] transition-colors"
            >
              <span>Consulter</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
