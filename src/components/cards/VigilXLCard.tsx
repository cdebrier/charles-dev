import { ArrowUpRight, Code2, Radar, ShieldCheck } from 'lucide-react';
import type { Project } from '../../types/project';
import { GitHubIcon } from '../BrandIcons';

interface AppCardProps {
  project: Project;
}

export function VigilXLCard({ project }: AppCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#141719',
        borderColor: 'rgba(62, 184, 174, 0.35)',
        boxShadow: '0 10px 30px -10px rgba(20, 23, 25, 0.8)',
      }}
      className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border transition-all duration-200 hover:border-[#3EB8AE]/70 flex flex-col justify-between p-6"
    >
      {/* Ixelles Institutional Teal Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#008784]/15 blur-3xl"
      />
      <div className="absolute inset-x-0 top-0 h-1 bg-[#3EB8AE] opacity-80" />

      <div className="relative z-10">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#3EB8AE]/40 bg-[#008784]/20 text-[#3EB8AE] shadow-sm">
              <Radar className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  {project.title}
                </h3>
                <kbd className="rounded border border-[#3EB8AE]/30 bg-[#008784]/20 px-1.5 py-0.5 font-mono-code text-[10px] text-[#3EB8AE]">
                  #4
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
            <span className="font-mono-code text-[10px] text-[#5EEAD4] font-medium">
              Commune d&apos;Ixelles
            </span>
          </div>
        </div>

        {/* Live Intelligence Terminal Feed Specimen */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-[#0e1012] p-3.5 font-mono-code shadow-inner">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/70" />
              <span className="h-2 w-2 rounded-full bg-amber-500/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
              <span className="ml-2 text-zinc-400 font-semibold">vigilxl@ixelles:~$</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[#3EB8AE] text-[9px]">
              <ShieldCheck className="h-3 w-3" /> Pipeline actif
            </span>
          </div>

          <div className="mt-2.5 space-y-1 text-[11px] leading-relaxed">
            <div className="text-zinc-400">
              <span className="text-[#3EB8AE]">&gt;</span> veille --sources=bpl,frb,equal
            </div>
            <div className="text-emerald-400 text-[10px]">
              ✓ 76 appels d&apos;offres &amp; primes indexés
            </div>
            <div className="text-zinc-300 text-[10px] truncate">
              ● Match: FWB, Bruxelles Environnement
            </div>
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
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#3EB8AE]/40 bg-[#008784]/25 px-4 py-2.5 text-xs font-semibold text-[#5EEAD4] transition-colors hover:bg-[#008784]/40"
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
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-[#3EB8AE] hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
