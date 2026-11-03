import { useEffect, useState } from 'react';
import { Command, Moon, Sun, Terminal } from 'lucide-react';

interface HeaderProps {
  onOpenCommandPalette: () => void;
}

function getEffectiveDarkState(): boolean {
  if (typeof document === 'undefined') return true;
  const metaContent =
    document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]')?.content ??
    'light dark';
  if (metaContent === 'dark') return true;
  if (metaContent === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function Header({ onOpenCommandPalette }: HeaderProps) {
  const [isDark, setIsDark] = useState<boolean>(getEffectiveDarkState);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const syncState = () => {
      const stored = localStorage.getItem('color-scheme');
      const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');
      if (meta) {
        meta.content = stored ?? 'light dark';
      }
      setIsDark(getEffectiveDarkState());
    };

    mediaQuery.addEventListener('change', syncState);
    window.addEventListener('storage', syncState);
    return () => {
      mediaQuery.removeEventListener('change', syncState);
      window.removeEventListener('storage', syncState);
    };
  }, []);

  const handleToggleColorScheme = () => {
    const currentlyDark = getEffectiveDarkState();
    const targetScheme = currentlyDark ? 'light' : 'dark';
    const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemScheme = systemIsDark ? 'dark' : 'light';

    const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]');

    try {
      if (targetScheme === systemScheme) {
        localStorage.removeItem('color-scheme');
        if (meta) meta.content = 'light dark';
      } else {
        localStorage.setItem('color-scheme', targetScheme);
        if (meta) meta.content = targetScheme;
      }
    } catch {
      if (meta) meta.content = targetScheme;
    }

    setIsDark(targetScheme === 'dark');
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* Brand Identity */}
        <a
          href="#top"
          className="group flex items-center gap-2 rounded-lg py-1 pr-2 focus:outline-none"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] text-[var(--text-primary)] shadow-2xs">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-[var(--text-primary)]">
            charles<span className="text-[var(--text-muted)] font-normal">.dev</span>
          </span>
        </a>

        {/* Actions: Command Palette & Theme Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] cursor-pointer"
            aria-label="Ouvrir le lanceur rapide (Cmd+K)"
          >
            <Command className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Launcher</span>
            <kbd className="rounded border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-1.5 py-0.5 font-mono-code text-[10px] text-[var(--text-muted)]">
              ⌘K
            </kbd>
          </button>

          <button
            type="button"
            onClick={handleToggleColorScheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] cursor-pointer"
            aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            title={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
