import { Activity, ArrowUpRight, Compass, Cpu, Mail, MapPin, Waves } from 'lucide-react';
import type { ProfileInfo, Project } from '../types/project';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

interface HeroProps {
  profile: ProfileInfo;
  projects: Project[];
}

export function Hero({ profile, projects }: HeroProps) {
  const liveCount = projects.filter((p) => p.status === 'Live').length;
  const devCount = projects.length - liveCount;

  return (
    <section id="top" className="relative pt-6 pb-4 sm:pt-10 sm:pb-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Main Bio Card (8 cols) */}
          <div className="surface-card relative overflow-hidden rounded-2xl p-5 sm:p-7 lg:col-span-8">
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-0.5 font-mono-code font-medium text-cyan-500">
                <Cpu className="h-3 w-3" />
                {profile.role}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2.5 py-0.5 font-mono-code text-[11px] text-[var(--text-secondary)]">
                <MapPin className="h-3 w-3 text-cyan-500" />
                {profile.location}
              </span>
            </div>

            <h1 className="font-display mt-3.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              {profile.name}{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                — Portail &amp; App Launcher
              </span>
            </h1>

            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {profile.bio}
            </p>

            {/* Domain Tags & Social Quick Links */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center gap-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2 py-1 font-mono-code text-[11px] text-[var(--text-secondary)]">
                  <Waves className="h-3 w-3 text-cyan-500" /> Apnée / Freediving
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2 py-1 font-mono-code text-[11px] text-[var(--text-secondary)]">
                  <Compass className="h-3 w-3 text-emerald-500" /> Mobilité &amp; Géo
                </span>
                <span className="inline-flex items-center gap-1 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2 py-1 font-mono-code text-[11px] text-[var(--text-secondary)]">
                  <Activity className="h-3 w-3 text-sky-500" /> IA &amp; Outils Sur-Mesure
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-cyan-500/50 hover:text-cyan-500"
                >
                  <GitHubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-cyan-500/50 hover:text-cyan-500"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
                <a
                  href={profile.socials.email}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-500 transition-colors hover:bg-cyan-500/20"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Bento Telemetry & Quick Status Card (4 cols) */}
          <div className="surface-card flex flex-col justify-between rounded-2xl p-5 sm:p-6 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Télémétrie du Hub
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono-code text-[11px] text-emerald-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  Opérationnel
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] p-3">
                  <div className="font-display text-2xl font-bold text-emerald-500">
                    {liveCount}
                  </div>
                  <div className="mt-0.5 font-mono-code text-[11px] text-[var(--text-secondary)]">
                    Apps en Prod
                  </div>
                </div>
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] p-3">
                  <div className="font-display text-2xl font-bold text-cyan-500">
                    {devCount}
                  </div>
                  <div className="mt-0.5 font-mono-code text-[11px] text-[var(--text-secondary)]">
                    Labs &amp; Beta
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] p-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-[var(--text-primary)]">Raccourcis Clavier</span>
                <span className="font-mono-code text-[10px] text-cyan-500">macOS / iOS</span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-1.5 font-mono-code text-[11px] text-[var(--text-secondary)]">
                <div className="flex items-center justify-between rounded bg-[var(--bg-surface-elevated)] px-2 py-1">
                  <span>Palette</span>
                  <kbd className="text-[var(--text-primary)]">⌘K</kbd>
                </div>
                <div className="flex items-center justify-between rounded bg-[var(--bg-surface-elevated)] px-2 py-1">
                  <span>Recherche</span>
                  <kbd className="text-[var(--text-primary)]">/</kbd>
                </div>
                <div className="col-span-2 flex items-center justify-between rounded bg-[var(--bg-surface-elevated)] px-2 py-1">
                  <span>Lancer App #1–#5</span>
                  <kbd className="text-cyan-500">Touches 1 à 5</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
