import type { ProfileInfo, Project, ProjectCategory, ProjectIconName, ProjectStatus, ProjectTheme } from '../types/project';

/**
 * Helper minimaliste pour ajouter un nouveau projet en 3 lignes :
 * createProject('MonApp', 'Description courte...', { url: 'https://...', techStack: ['React'] })
 */
export function createProject(
  title: string,
  description: string,
  options: {
    id?: string;
    slug?: string;
    url?: string;
    githubUrl?: string;
    status?: ProjectStatus;
    category?: ProjectCategory;
    categoryLabel?: string;
    techStack?: string[];
    featured?: boolean;
    icon?: ProjectIconName;
    shortcutIndex?: number;
    highlight?: string;
    theme?: ProjectTheme;
  } = {}
): Project {
  const slug =
    options.slug ??
    title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  return {
    id: options.id ?? slug,
    title,
    slug,
    description,
    url: options.url,
    githubUrl: options.githubUrl,
    status: options.status ?? (options.url ? 'Live' : 'Private/Dev'),
    category: options.category ?? 'Data/IA',
    categoryLabel: options.categoryLabel,
    techStack: options.techStack ?? [],
    featured: options.featured ?? false,
    icon: options.icon ?? 'Terminal',
    shortcutIndex: options.shortcutIndex,
    highlight: options.highlight,
    theme: options.theme,
  };
}

export const PROFILE_DATA: ProfileInfo = {
  name: 'Charles De Brier',
  handle: 'charles.dev',
  role: 'Ingénieur · Data Scientist & AI Engineer',
  tagline: 'Architecte d’outils intelligents, d’applications web temps réel et de systèmes orientés données.',
  bio: 'Profil hybride à la croisée du Software Engineering, de la Data Science et de l’IA appliquée. Passionné par la conception d’outils sur-mesure, l’apnée (freediving) et la mobilité durable.',
  location: 'Bruxelles, Belgique',
  domains: ['AI & Agents', 'Full-Stack TypeScript', 'Freediving Tech', 'Smart Mobility'],
  socials: {
    github: 'https://github.com/cdebrier',
    linkedin: 'https://www.linkedin.com/in/charlesdebrier',
    email: 'mailto:charlesdebrier@gmail.com',
  },
};

export const INITIAL_PROJECTS: Project[] = [
  createProject(
    'APPnea',
    'Progressive Web App dédiée aux clubs d’apnée et apnéistes : carnet d’entraînement (statique, dynamique, profondeur), import de montres via Web Bluetooth / fichiers FIT et gestion de club.',
    {
      id: 'appnea',
      slug: 'appnea',
      url: 'https://appnea.club',
      githubUrl: 'https://github.com/cdebrier/appnea',
      status: 'Live',
      category: 'Sport',
      categoryLabel: 'Sport / Web App',
      techStack: ['React 19', 'TypeScript', 'Tailwind', 'Supabase', 'Vite'],
      featured: true,
      icon: 'Waves',
      shortcutIndex: 1,
      highlight: 'PWA · Web Bluetooth & FIT Telemetry',
      theme: {
        accentColor: '#0ea5e9',
        accentGlow: 'rgba(14, 165, 233, 0.22)',
        surfaceTint: 'rgba(14, 165, 233, 0.05)',
        surfaceBorder: 'rgba(14, 165, 233, 0.35)',
        badgeBg: 'rgba(14, 165, 233, 0.12)',
        badgeText: '#38bdf8',
        buttonBg: '#0ea5e9',
        buttonText: '#02121e',
        pattern: 'waves',
      },
    }
  ),
  createProject(
    'StreetFinder',
    'Jeu d’exploration géographique centré sur les communes belges avec intégration Google Street View et système de collection de cartes par quartiers.',
    {
      id: 'streetfinder',
      slug: 'streetfinder',
      url: 'https://streetfinder.be',
      githubUrl: 'https://github.com/cdebrier/streetfinder',
      status: 'Live',
      category: 'Mobilité',
      categoryLabel: 'Jeu / Géographie',
      techStack: ['React', 'Firebase', 'Google Maps API', 'Tailwind'],
      featured: true,
      icon: 'MapPinned',
      shortcutIndex: 2,
      highlight: 'Street View Engine · Communes Belges',
      theme: {
        accentColor: '#eab308',
        accentGlow: 'rgba(234, 179, 8, 0.20)',
        surfaceTint: 'rgba(234, 179, 8, 0.04)',
        surfaceBorder: 'rgba(234, 179, 8, 0.35)',
        badgeBg: 'rgba(234, 179, 8, 0.12)',
        badgeText: '#fde047',
        buttonBg: '#eab308',
        buttonText: '#181202',
        pattern: 'grid-map',
      },
    }
  ),
  createProject(
    'Piggy',
    'Application de gestion budgétaire et finances personnelles avec synchronisation bancaire automatisée (PSD2) et classification intelligente des transactions par IA.',
    {
      id: 'piggy',
      slug: 'piggy',
      status: 'Beta',
      category: 'Finance',
      categoryLabel: 'Finance / Mobile',
      techStack: ['React Native (Expo)', 'Supabase', 'Gemini Embeddings', 'GoCardless API'],
      featured: false,
      icon: 'PiggyBank',
      shortcutIndex: 3,
      highlight: 'Open Banking PSD2 · AI Categorization',
      theme: {
        accentColor: '#10b981',
        accentGlow: 'rgba(16, 185, 129, 0.20)',
        surfaceTint: 'rgba(16, 185, 129, 0.04)',
        surfaceBorder: 'rgba(16, 185, 129, 0.32)',
        badgeBg: 'rgba(16, 185, 129, 0.12)',
        badgeText: '#34d399',
        buttonBg: '#10b981',
        buttonText: '#021811',
        pattern: 'fintech',
      },
    }
  ),
  createProject(
    'VigilXL',
    'Tableau de bord automatisé de veille et de suivi des subsides publics utilisant du web scraping agentique et de l’extraction structurée.',
    {
      id: 'vigilxl',
      slug: 'vigilxl',
      githubUrl: 'https://github.com/cdebrier/vigilxl',
      status: 'Private/Dev',
      category: 'Data/IA',
      categoryLabel: 'Data & IA / Public',
      techStack: ['Python', 'Crawl4AI', 'Pydantic', 'Dashboard UI'],
      featured: false,
      icon: 'Radar',
      shortcutIndex: 4,
      highlight: 'Agentic Scraping · Extraction Structurée',
      theme: {
        accentColor: '#f59e0b',
        accentGlow: 'rgba(245, 158, 11, 0.20)',
        surfaceTint: 'rgba(245, 158, 11, 0.04)',
        surfaceBorder: 'rgba(245, 158, 11, 0.32)',
        badgeBg: 'rgba(245, 158, 11, 0.12)',
        badgeText: '#fbbf24',
        buttonBg: '#f59e0b',
        buttonText: '#1c1001',
        pattern: 'radar',
      },
    }
  ),
  createProject(
    'Telraam',
    'Outil d’analyse et de visualisation des données de comptage de trafic et de mobilité douce locale pour appuyer les aménagements cyclables.',
    {
      id: 'telraam',
      slug: 'telraam',
      githubUrl: 'https://github.com/cdebrier/telraam-analytics',
      status: 'Private/Dev',
      category: 'Mobilité',
      categoryLabel: 'Mobilité / Data',
      techStack: ['Python', 'API Telraam', 'Data Viz'],
      featured: false,
      icon: 'Bike',
      shortcutIndex: 5,
      highlight: 'Comptage Trafic · Mobilité Douce',
      theme: {
        accentColor: '#22c55e',
        accentGlow: 'rgba(34, 197, 94, 0.20)',
        surfaceTint: 'rgba(34, 197, 94, 0.04)',
        surfaceBorder: 'rgba(34, 197, 94, 0.32)',
        badgeBg: 'rgba(34, 197, 94, 0.12)',
        badgeText: '#4ade80',
        buttonBg: '#22c55e',
        buttonText: '#03190a',
        pattern: 'mobility',
      },
    }
  ),
];
