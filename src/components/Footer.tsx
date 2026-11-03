import type { ProfileInfo } from '../types/project';

interface FooterProps {
  profile: ProfileInfo;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="mt-16 border-t border-[var(--border-subtle)] py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center text-xs text-[var(--text-muted)] font-mono-code">
          <div>
            {profile.name} · {new Date().getFullYear()}
          </div>
          <div>
            Dock macOS &amp; iOS PWA supporté
          </div>
        </div>
      </div>
    </footer>
  );
}
