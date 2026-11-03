export type ProjectStatus = 'Live' | 'Beta' | 'Private/Dev';

export type ProjectCategory =
  | 'Sport'
  | 'Mobilité'
  | 'Finance'
  | 'Data/IA';

export type FilterCategory =
  | 'Tous'
  | 'Production'
  | 'En développement'
  | 'Mobilité'
  | 'Finance'
  | 'Sport'
  | 'Data/IA';

export type ProjectIconName =
  | 'Waves'
  | 'MapPinned'
  | 'PiggyBank'
  | 'Radar'
  | 'Bike'
  | 'Sparkles'
  | 'Terminal'
  | 'Cpu'
  | 'Globe'
  | 'Database';

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  url?: string;
  githubUrl?: string;
  status: ProjectStatus;
  category: ProjectCategory;
  /** Sous-catégorie affichée sur la carte (ex: "Sport / Web App", "Jeu / Géographie") */
  categoryLabel?: string;
  techStack: string[];
  featured?: boolean;
  icon: ProjectIconName;
  /** Raccourci numérique rapide (1-9) pour lancer l'application au clavier */
  shortcutIndex?: number;
  /** Point fort / métrique clé affichée dans le Bento */
  highlight?: string;
}

export interface ProfileInfo {
  name: string;
  handle: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  domains: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}
