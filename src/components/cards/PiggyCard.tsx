import { Lock, Sparkles, TrendingUp, Wifi } from 'lucide-react';
import type { Project } from '../../types/project';
import { GitHubIcon } from '../BrandIcons';

interface AppCardProps {
  project: Project;
}

export function PiggyCard({ project }: AppCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#090D16',
        borderColor: 'rgba(16, 185, 129, 0.3)',
        boxShadow: '0 10px 30px -10px rgba(9, 13, 22, 0.8)',
      }}
      className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border transition-all duration-200 hover:border-emerald-500/60 flex flex-col justify-between p-6"
    >
      {/* Neo-bank Ambient Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-transparent opacity-80" />

      <div className="relative z-10">
        {/* Header Row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-500/40 bg-emerald-500/15 p-1.5 shadow-md">
              <img
                src="/apps/piggy-icon.png"
                alt="Logo Piggy"
                className="h-full w-full object-contain rounded-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-xl font-bold tracking-tight text-white">
                  {project.title}
                </h3>
                <kbd className="rounded border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 font-mono-code text-[10px] text-emerald-400">
                  #3
                </kbd>
              </div>
              <p className="font-mono-code text-xs text-zinc-400">
                {project.categoryLabel}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/35 bg-amber-500/15 px-2.5 py-0.5 font-mono-code text-[10px] font-semibold text-amber-400 uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Beta Privée
          </span>
        </div>

        {/* Physical EMV Bank Card & Wallet Widget Specimen */}
        <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-br from-[#131926] to-[#090D16] p-4 shadow-xl">
          <div className="flex items-center justify-between">
            {/* Golden EMV Chip */}
            <div className="flex items-center gap-2">
              <div className="h-6 w-8 rounded-md bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 p-0.5 shadow-xs">
                <div className="h-full w-full rounded-xs border border-amber-800/40 grid grid-cols-2 gap-0.5 opacity-70" />
              </div>
              <Wifi className="h-4 w-4 text-zinc-400 rotate-90" />
            </div>
            <span className="font-mono-code text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
              PSD2 Open Banking
            </span>
          </div>

          <div className="mt-3 flex items-baseline justify-between">
            <div>
              <div className="text-[10px] font-mono-code text-zinc-400 uppercase">Solde Consolidé</div>
              <div className="font-display text-xl font-bold text-white mt-0.5">
                +2 450,00 €
              </div>
            </div>
            <span className="inline-flex items-center gap-1 font-mono-code text-[11px] font-bold text-emerald-400">
              <TrendingUp className="h-3 w-3" /> +14.2%
            </span>
          </div>

          {/* AI Categorization Status Strip */}
          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-[10px] font-mono-code text-zinc-400">
            <span className="flex items-center gap-1 text-emerald-300">
              <Sparkles className="h-3 w-3 text-emerald-400" /> Classifier IA Hybride
            </span>
            <span className="text-zinc-400">Gemini 2.5 Flash</span>
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
          <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-zinc-400 select-none">
            <Lock className="h-3.5 w-3.5 text-amber-400" />
            <span>Accès Beta Privé (Expo)</span>
          </span>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source GitHub de ${project.title}`}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:border-emerald-500 hover:text-white"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
