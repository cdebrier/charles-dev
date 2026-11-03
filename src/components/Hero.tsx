import { ArrowUpRight, Mail } from 'lucide-react';
import type { ProfileInfo, Project } from '../types/project';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

interface HeroProps {
  profile: ProfileInfo;
  projects: Project[];
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="top" className="relative pt-10 pb-8 sm:pt-16 sm:pb-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Minimalist Editorial Profile */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono-code text-xs text-[var(--text-muted)] uppercase tracking-wider">
              {profile.location} · {profile.role}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {profile.name}
          </h1>

          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {profile.bio}
          </p>

          {/* Clean Outbound Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
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
              className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)]"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
