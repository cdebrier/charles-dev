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
    <div className="mx-auto max-w-5xl px-4 pb-6 sm:px-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-[var(--border-subtle)] pb-4">
        {/* Category Filter Tabs */}
        <div
          className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0"
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
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[var(--text-primary)] text-[var(--bg-canvas)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-pill)]'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`font-mono-code text-[10px] ${
                    isSelected ? 'opacity-70' : 'text-[var(--text-muted)]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Minimal Search Input */}
        <div className="relative flex items-center sm:w-60">
          <Search className="pointer-events-none absolute left-2.5 h-3.5 w-3.5 text-[var(--text-muted)]" />
          <input
            ref={inputRef}
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher..."
            aria-label="Rechercher un projet"
            className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-pill)] py-1.5 pr-8 pl-8 text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--border-strong)] focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                onSearchChange('');
                inputRef.current?.focus();
              }}
              aria-label="Effacer la recherche"
              className="absolute right-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] cursor-pointer"
            >
              <X className="h-3 w-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
