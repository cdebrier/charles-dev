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
      categoryLabel: 'Club & Apnée / PWA',
      techStack: ['React 19', 'TypeScript', 'Tailwind', 'Supabase', 'Web Bluetooth'],
      featured: true,
      icon: 'Waves',
      shortcutIndex: 1,
      highlight: 'PWA · Web Bluetooth & FIT Telemetry',
      theme: {
        accentColor: '#EB4444',
        accentGlow: 'rgba(235, 68, 68, 0.28)',
        surfaceBg: '#0a1128',
        surfaceBorder: 'rgba(235, 68, 68, 0.3)',
        accentBorderHover: 'rgba(235, 68, 68, 0.8)',
        badgeBg: 'rgba(235, 68, 68, 0.16)',
        badgeText: '#F87171',
        buttonBg: '#EB4444',
        buttonText: '#FFFFFF',
        pattern: 'waves',
        logoUrl: '/apps/appnea-icon.svg',
        orgBadge: 'LIFRAS · NELOS · CMAS',
        metricBadge: 'STA · DYN · CWT',
        metrics: [
          { label: 'Apnée Statique', value: '4\'15"' },
          { label: 'Dynamique', value: '100m DYN' },
          { label: 'Profondeur', value: '-35m CWT' },
        ],
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
      categoryLabel: 'Jeu Géo / Communes Belges',
      techStack: ['React', 'Firebase', 'Google Street View', 'Tailwind'],
      featured: true,
      icon: 'MapPinned',
      shortcutIndex: 2,
      highlight: 'Street View Engine · 581 Communes',
      theme: {
        accentColor: '#F3DE2C',
        accentGlow: 'rgba(243, 222, 44, 0.25)',
        surfaceBg: '#0c0d10',
        surfaceBorder: 'rgba(243, 222, 44, 0.3)',
        accentBorderHover: 'rgba(243, 222, 44, 0.85)',
        badgeBg: 'rgba(243, 222, 44, 0.16)',
        badgeText: '#FACC15',
        buttonBg: '#F3DE2C',
        buttonText: '#09090b',
        pattern: 'grid-map',
        logoUrl: '/apps/streetfinder-icon.svg',
        orgBadge: '581 Communes Belges',
        metricBadge: 'Street View · Quêtes & Quartiers',
        metrics: [
          { label: 'Territoire', value: 'Belgique Intégrale' },
          { label: 'Moteur', value: 'Google Street View' },
          { label: 'Collection', value: 'Cartes par quartier' },
        ],
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
      categoryLabel: 'Finance / Mobile (Expo)',
      techStack: ['React Native (Expo)', 'Supabase', 'pgvector', 'Gemini AI', 'PSD2'],
      featured: false,
      icon: 'PiggyBank',
      shortcutIndex: 3,
      highlight: 'Open Banking PSD2 · AI Classifier',
      theme: {
        accentColor: '#10B981',
        accentGlow: 'rgba(16, 185, 129, 0.25)',
        surfaceBg: '#090D16',
        surfaceBorder: 'rgba(16, 185, 129, 0.28)',
        accentBorderHover: 'rgba(16, 185, 129, 0.75)',
        badgeBg: 'rgba(16, 185, 129, 0.15)',
        badgeText: '#34D399',
        buttonBg: '#10B981',
        buttonText: '#021811',
        pattern: 'fintech',
        logoUrl: '/apps/piggy-icon.png',
        orgBadge: 'GoCardless PSD2',
        metricBadge: 'Classification Hybride Gemini',
        metrics: [
          { label: 'Banques', value: 'Sync Automatisée' },
          { label: 'Classifier', value: 'Gemini 2.5 Flash' },
          { label: 'Vecteurs', value: 'pgvector HNSW' },
        ],
      },
    }
  ),
  createProject(
    'VigilXL',
    'Tableau de bord automatisé de veille et de suivi des subsides publics pour la Commune d’Ixelles utilisant du web scraping agentique et de l’extraction structurée.',
    {
      id: 'vigilxl',
      slug: 'vigilxl',
      githubUrl: 'https://github.com/cdebrier/vigilxl',
      status: 'Private/Dev',
      category: 'Data/IA',
      categoryLabel: 'Veille & Subsides / Ixelles',
      techStack: ['Python', 'Crawl4AI', 'Pydantic', 'Gemini', 'Ixelles'],
      featured: false,
      icon: 'Radar',
      shortcutIndex: 4,
      highlight: 'Agentic Scraping · Commune d’Ixelles',
      theme: {
        accentColor: '#3EB8AE',
        accentGlow: 'rgba(62, 184, 174, 0.25)',
        surfaceBg: '#141719',
        surfaceBorder: 'rgba(62, 184, 174, 0.28)',
        accentBorderHover: 'rgba(62, 184, 174, 0.75)',
        badgeBg: 'rgba(62, 184, 174, 0.15)',
        badgeText: '#5EEAD4',
        buttonBg: '#008784',
        buttonText: '#FFFFFF',
        pattern: 'radar',
        orgBadge: 'Commune d’Ixelles',
        metricBadge: 'Appels à Projets & Primes',
        metrics: [
          { label: 'Sources', value: 'BPL · FRB · Equal · BruEnv' },
          { label: 'Agent', value: 'Crawl4AI + Gemini' },
          { label: 'Schéma', value: 'Pydantic Structuré' },
        ],
      },
    }
  ),
  createProject(
    'Telraam',
    'Observatoire Citoyen de la Mobilité de Rixensart : analyse et visualisation des comptages multimodaux (piétons, vélos, voitures) et vitesse V85 pour aménagements cyclables.',
    {
      id: 'telraam',
      slug: 'telraam',
      githubUrl: 'https://github.com/cdebrier/telraam-analytics',
      status: 'Private/Dev',
      category: 'Mobilité',
      categoryLabel: 'Observatoire Mobilité / Rixensart',
      techStack: ['Python', 'API Telraam S2', 'Leaflet', 'D3.js', 'V85'],
      featured: false,
      icon: 'Bike',
      shortcutIndex: 5,
      highlight: '13 Capteurs S2 · 27M Détections',
      theme: {
        accentColor: '#5AA9FF',
        accentGlow: 'rgba(90, 169, 255, 0.25)',
        surfaceBg: '#0B0F14',
        surfaceBorder: 'rgba(90, 169, 255, 0.28)',
        accentBorderHover: 'rgba(90, 169, 255, 0.75)',
        badgeBg: 'rgba(90, 169, 255, 0.15)',
        badgeText: '#93C5FD',
        buttonBg: '#2563EB',
        buttonText: '#FFFFFF',
        pattern: 'mobility',
        orgBadge: 'Commune de Rixensart',
        metricBadge: 'Comptages Multimodaux S2',
        metrics: [
          { label: 'Détections', value: '27 Millions' },
          { label: 'Modes', value: '🚶 Piétons · 🚲 Vélos · 🚗 Autos' },
          { label: 'Cinématique', value: 'Vitesse V85' },
        ],
      },
    }
  ),
];
