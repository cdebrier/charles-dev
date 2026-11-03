import { Lock, Shield } from 'lucide-react';
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
        borderColor: 'rgba(16, 185, 129, 0.35)',
        boxShadow: '0 16px 40px -12px rgba(9, 13, 22, 0.95)',
      }}
      className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl border transition-all duration-200 hover:border-emerald-500/70 flex flex-col justify-between"
    >
      {/* Top Emerald Stripe */}
      <div className="absolute inset-x-0 top-0 h-1 bg-emerald-500" />

      <div className="p-6">
        {/* Real Mobile Phone Frame from Screenshot */}
        <div className="rounded-3xl border-2 border-white/10 bg-[#0d131f] p-4 shadow-2xl relative">
          {/* Phone Top Notch Bar / Dynamic Island */}
          <div className="flex items-center justify-between text-[11px] font-mono-code text-zinc-400 border-b border-white/5 pb-2">
            <span className="font-semibold text-zinc-300">5:08</span>
            <div className="h-4 w-20 rounded-full bg-black border border-white/15 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-zinc-900 border border-zinc-700 mr-2" />
              <div className="h-1.5 w-1.5 rounded-full bg-blue-950" />
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400">
              <span className="text-[10px] font-bold">5G</span>
              <div className="h-2.5 w-5 rounded-xs border border-zinc-500 p-0.5 flex items-center">
                <div className="h-full w-full bg-emerald-400 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* Real Piggy Net Worth Header from Screenshot */}
          <div className="mt-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10 shrink-0 overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-1 shadow-md">
                <img
                  src="/apps/piggy-icon.png"
                  alt="Piggy Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <div className="text-[9px] font-mono-code text-emerald-400 font-bold uppercase tracking-wider">
                  Démo Anonyme
                </div>
                <div className="font-display text-lg font-bold text-white leading-tight">
                  Net Worth
                </div>
              </div>
            </div>
            <span className="rounded-lg border border-amber-500/40 bg-amber-500/15 px-2.5 py-0.5 font-mono-code text-[10px] font-bold text-amber-400 flex items-center gap-1">
              <Shield className="h-3 w-3" /> DÉMO
            </span>
          </div>

          {/* Consolidated Wealth Display */}
          <div className="mt-3">
            <div className="text-[10px] font-mono-code text-zinc-400 uppercase">
              Total Consolidated Wealth (EUR)
            </div>
            <div className="font-display text-2xl font-black text-white tracking-tight mt-0.5">
              €68.450,00
            </div>

            <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs font-mono-code">
              <div className="rounded-xl bg-black/40 p-2.5 border border-white/5">
                <div className="text-[9px] text-zinc-400">Cash &amp; Pockets</div>
                <div className="font-bold text-emerald-400 text-sm mt-0.5">€8.250,00</div>
              </div>
              <div className="rounded-xl bg-black/40 p-2.5 border border-white/5">
                <div className="text-[9px] text-zinc-400">Investissements</div>
                <div className="font-bold text-sky-400 text-sm mt-0.5">€60.200,00</div>
              </div>
            </div>
          </div>

          {/* "Budget en Billes" Breakdown from screenshot */}
          <div className="mt-3 border-t border-white/5 pt-2.5 text-xs font-mono-code">
            <div className="flex justify-between text-[11px] text-zinc-300">
              <span className="font-semibold text-white">Budget en Billes</span>
              <span className="text-emerald-400">30.6 / 42.0 billes</span>
            </div>
            <div className="mt-1 h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
              <div style={{ width: '72%' }} className="h-full bg-emerald-400 rounded-full" />
            </div>

            {/* Warning Pill from screenshot */}
            <div className="mt-2.5 flex items-center justify-between rounded-lg border border-rose-500/30 bg-rose-500/10 px-2 py-1 text-[10px] text-rose-300">
              <span>⚠️ 1 dépassement (+0.5 bille)</span>
              <span className="font-bold text-rose-400">Radar &gt;</span>
            </div>

            <div className="mt-2.5 space-y-1 text-[10px] text-zinc-300">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  Logement &amp; Prêt
                </span>
                <span className="font-bold text-white">€1.400,00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Courses &amp; Alimentation
                </span>
                <span className="font-bold text-white">€680,00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
                  Factures &amp; Énergie
                </span>
                <span className="font-bold text-white">€310,00</span>
              </div>
            </div>
          </div>

          {/* Mobile Bottom Tab Bar Mockup */}
          <div className="mt-3 flex items-center justify-around border-t border-white/10 pt-2 text-[9px] font-mono-code text-zinc-400">
            <span className="text-emerald-400 font-bold">● Overview</span>
            <span>Budget</span>
            <span>Transactions</span>
            <span>Banks</span>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-300">
          {project.description}
        </p>
      </div>

      {/* Footer Area */}
      <div className="p-6 pt-0 border-t border-white/10 mt-2">
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
