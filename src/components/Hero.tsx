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
          {/* Main Bio Card (8 cols) - Swiss High-Craft Architecture */}
          <div className="surface-card relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:col-span-8">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-pill)] px-2.5 py-0.5 font-mono-code font-medium text-[var(--text-primary)]">
                <Cpu className="h-3 w-3 text-[var(--text-muted)]" />
                {profile.role}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2.5 py-0.5 font-mono-code text-[11px] text-[var(--text-secondary)]">
                <MapPin className="h-3 w-3 text-[var(--text-muted)]" />
                {profile.location}
              </span>
            </div>

            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              {profile.name}
              <span className="block text-[var(--text-muted)] font-normal text-2xl sm:text-3xl mt-1">
                Portail Personnel &amp; App Launcher
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
              {profile.bio}
            </p>

            {/* Domain Pills & Direct Outbound Links */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-subtle)] pt-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2.5 py-1 font-mono-code text-[11px] text-[var(--text-secondary)]">
                  <Waves className="h-3.5 w-3.5 text-[var(--text-primary)]" /> Apnée / Freediving
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2.5 py-1 font-mono-code text-[11px] text-[var(--text-secondary)]">
                  <Compass className="h-3.5 w-3.5 text-[var(--text-primary)]" /> Mobilité Douce
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2.5 py-1 font-mono-code text-[11px] text-[var(--text-secondary)]">
                  <Activity className="h-3.5 w-3.5 text-[var(--text-primary)]" /> IA &amp; Data Engineering
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                >
                  <GitHubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 opacity-50" />
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 opacity-50" />
                </a>
                <a
                  href={profile.socials.email}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-strong)] bg-[var(--text-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--bg-canvas)] transition-opacity hover:opacity-90"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Bento Telemetry & Quick Status Card (4 cols) */}
          <div className="surface-card flex flex-col justify-between rounded-2xl p-6 lg:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  Hub Status
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono-code text-[11px] text-emerald-500 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] p-3.5">
                  <div className="font-display text-3xl font-bold text-[var(--text-primary)]">
                    {liveCount}
                  </div>
                  <div className="mt-0.5 font-mono-code text-[11px] text-[var(--text-muted)]">
                    Production Apps
                  </div>
                </div>
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] p-3.5">
                  <div className="font-display text-3xl font-bold text-[var(--text-secondary)]">
                    {devCount}
                  </div>
                  <div className="mt-0.5 font-mono-code text-[11px] text-[var(--text-muted)]">
                    Labs &amp; Beta
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] p-3.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-[var(--text-primary)]">Commandes Rapides</span>
                <span className="font-mono-code text-[10px] text-[var(--text-muted)]">Clavier</span>
              </div>
              <div className="mt-2.5 grid grid-cols-2 gap-1.5 font-mono-code text-[11px] text-[var(--text-secondary)]">
                <div className="flex items-center justify-between rounded bg-[var(--bg-surface-elevated)] px-2.5 py-1 border border-[var(--border-subtle)]">
                  <span>Palette</span>
                  <kbd className="text-[var(--text-primary)] font-semibold">⌘K</kbd>
                </div>
                <div className="flex items-center justify-between rounded bg-[var(--bg-surface-elevated)] px-2.5 py-1 border border-[var(--border-subtle)]">
                  <span>Recherche</span>
                  <kbd className="text-[var(--text-primary)] font-semibold">/</kbd>
                </div>
                <div className="col-span-2 flex items-center justify-between rounded bg-[var(--bg-surface-elevated)] px-2.5 py-1 border border-[var(--border-subtle)]">
                  <span>Lancer Directement</span>
                  <kbd className="text-[var(--text-primary)] font-semibold">Touches 1 à 5</kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
