import { useRef } from 'react';
import { Search, X } from 'lucide-react';
import type { FilterCategory, Project } from '../types/project';
import { projectService } from '../services/projectService';

export const FILTER_CATEGORIES: FilterCategory[] = [
  'Tous',
  'Production',
  'En développement',
  'Mobilité',
  'Finance',
  'Sport',
  'Data/IA',
];

interface ProjectFilterProps {
  projects: Project[];
  selectedCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  searchInputRef?: React.RefObject<HTMLInputElement | null>;
}

export function ProjectFilter({
  projects,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  searchInputRef,
}: ProjectFilterProps) {
  const fallbackRef = useRef<HTMLInputElement | null>(null);
  const inputRef = searchInputRef ?? fallbackRef;

  return (
    <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
      <div className="surface-card flex flex-col gap-3 rounded-2xl p-3 sm:flex-row sm:items-center sm:justify-between sm:p-3.5">
        {/* Category Filter Pills */}
        <div
          className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0"
          role="tablist"
          aria-label="Filtrer les projets par catégorie"
        >
          {FILTER_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            const count = projectService.getCategoryCount(projects, category);

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onSelectCategory(category)}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--text-primary)] text-[var(--bg-canvas)] font-semibold shadow-xs'
                    : 'bg-[var(--bg-pill)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 font-mono-code text-[10px] ${
                    isSelected
                      ? 'bg-[var(--bg-canvas)]/25 text-[var(--bg-canvas)]'
                      : 'bg-[var(--bg-surface-elevated)] text-[var(--text-muted)]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Fast Search Input */}
        <div className="relative flex items-center sm:w-72">
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-[var(--text-muted)]" />
          <input
            ref={inputRef}
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Filtrer (stack, nom, tag)..."
            aria-label="Rechercher un projet ou une technologie"
            className="w-full rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-pill)] py-2 pr-14 pl-9 text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--border-strong)] focus:outline-none"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => {
                onSearchChange('');
                inputRef.current?.focus();
              }}
              aria-label="Effacer la recherche"
              className="absolute right-2.5 rounded-md p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          ) : (
            <kbd className="pointer-events-none absolute right-2.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] px-1.5 py-0.5 font-mono-code text-[10px] text-[var(--text-muted)]">
              /
            </kbd>
          )}
        </div>
      </div>
    </div>
  );
}
