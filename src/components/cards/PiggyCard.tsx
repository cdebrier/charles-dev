import { Lock } from 'lucide-react';
import type { Project } from '../../types/project';

interface AppCardProps {
  project: Project;
}

export function PiggyCard({ project }: AppCardProps) {
  return (
    <article
      style={{
        backgroundColor: '#0a0e17',
        borderColor: 'rgba(16, 185, 129, 0.3)',
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-5 sm:p-6 transition-all duration-200 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10"
    >
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 p-1 border border-emerald-500/30 shadow-xs">
              <img
                src="/apps/piggy-icon.png"
                alt="Piggy Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-bold text-white tracking-tight">
                  Piggy
                </h3>
                <span className="rounded bg-emerald-500/15 px-1.5 py-0.2 font-mono-code text-[10px] text-emerald-400 border border-emerald-500/30">
                  #3
                </span>
              </div>
              <p className="font-mono-code text-[11px] text-zinc-400">
                Finance &amp; Mobile (Expo)
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2 py-0.5 font-mono-code text-[10px] font-medium text-amber-400 border border-amber-500/30">
            Beta privée
          </span>
        </div>

        {/* Minimalist Signature Element: Net Worth & Marble Budget */}
        <div className="my-4 rounded-xl border border-white/5 bg-[#0f1522] p-3 text-xs font-mono-code">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400 text-[10px] uppercase">Net Worth (Démo)</span>
            <span className="font-display text-sm font-bold text-white">€68.450,00</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px]">
            <span className="text-emerald-400">Cash: €8.250</span>
            <span className="text-sky-400">Invest: €60.200</span>
          </div>
          <div className="mt-2 border-t border-white/5 pt-2">
            <div className="flex justify-between text-[10px] text-zinc-400 mb-1">
              <span>Budget en Billes</span>
              <span>30.6 / 42.0 billes</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-zinc-800 overflow-hidden">
              <div style={{ width: '72%' }} className="h-full bg-emerald-400 rounded-full" />
            </div>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-zinc-300">
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
        <span className="font-mono-code text-[11px] text-zinc-400">
          Mobile · Expo
        </span>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="mailto:charlesdebrier@gmail.com?subject=Code%20Piggy%20-%20Demande%20d'acc%C3%A8s%20recruteur"
            title="Dépôt privé — Demander un accès invité au code"
            className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors cursor-pointer"
          >
            <Lock className="h-3 w-3 text-amber-400" />
            <span>Code sur demande</span>
          </a>
        </div>
      </div>
    </article>
  );
}
