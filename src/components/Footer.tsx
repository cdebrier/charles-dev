import { Laptop, Smartphone, Terminal } from 'lucide-react';
import type { ProfileInfo } from '../types/project';

interface FooterProps {
  profile: ProfileInfo;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="mt-12 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-500">
              <Terminal className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-[var(--text-primary)]">
                {profile.name} · <span className="text-cyan-500">{profile.handle}</span>
              </p>
              <p className="font-mono-code text-xs text-[var(--text-muted)]">
                Propulsé par React 19, TypeScript, Tailwind CSS &amp; Vite · Déployé sur Vercel
              </p>
            </div>
          </div>

          {/* PWA Web App Tip */}
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-3.5 py-2 text-xs text-[var(--text-secondary)]">
            <Smartphone className="h-4 w-4 text-cyan-500 shrink-0" />
            <Laptop className="h-4 w-4 text-emerald-500 shrink-0" />
            <span>
              <strong className="text-[var(--text-primary)]">Astuce PWA :</strong> Installez{' '}
              <code className="font-mono-code text-cyan-500">charles.dev</code> sur votre écran
              d&apos;accueil iOS ou dans le Dock macOS (Partager → Ajouter au Dock).
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
