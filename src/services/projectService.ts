import { INITIAL_PROJECTS, PROFILE_DATA } from '../data/projects';
import type { FilterCategory, ProfileInfo, Project } from '../types/project';

export interface ProjectDataProvider {
  getProjects(): Promise<Project[]>;
  getProfile(): Promise<ProfileInfo>;
}

/**
 * Provider statique par défaut (Zéro DB, ultra-rapide au build & runtime).
 */
class StaticProjectProvider implements ProjectDataProvider {
  async getProjects(): Promise<Project[]> {
    return INITIAL_PROJECTS;
  }

  async getProfile(): Promise<ProfileInfo> {
    return PROFILE_DATA;
  }
}

/**
 * Point d'entrée unique (Service Layer).
 * Pour brancher Supabase ou Firebase plus tard, il suffit de remplacer
 * `new StaticProjectProvider()` par un `SupabaseProjectProvider` implémentant `ProjectDataProvider`.
 */
class ProjectService {
  private provider: ProjectDataProvider;

  constructor(provider: ProjectDataProvider = new StaticProjectProvider()) {
    this.provider = provider;
  }

  getInitialProjectsSync(): Project[] {
    return INITIAL_PROJECTS;
  }

  getProfileSync(): ProfileInfo {
    return PROFILE_DATA;
  }

  async fetchProjects(): Promise<Project[]> {
    return this.provider.getProjects();
  }

  filterProjects(
    projects: Project[],
    category: FilterCategory,
    searchQuery: string
  ): Project[] {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = (() => {
        switch (category) {
          case 'Tous':
            return true;
          case 'Production':
            return project.status === 'Live';
          case 'En développement':
            return project.status === 'Beta' || project.status === 'Private/Dev';
          case 'Sport':
          case 'Mobilité':
          case 'Finance':
          case 'Data/IA':
            return project.category === category;
          default:
            return true;
        }
      })();

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const searchableText = [
        project.title,
        project.description,
        project.category,
        project.categoryLabel ?? '',
        project.status,
        project.highlight ?? '',
        ...project.techStack,
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }

  getCategoryCount(projects: Project[], category: FilterCategory): number {
    return this.filterProjects(projects, category, '').length;
  }
}

export const projectService = new ProjectService();
