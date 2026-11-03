# Charles.dev — Portail Personnel & App Launcher

Portail personnel et **App Launcher** ultra-rapide conçu avec **React 19**, **TypeScript**, **Tailwind CSS v4** et **Vite**, pensé pour un déploiement instantané sur **Vercel** (domaine `.dev`) et une utilisation en **PWA (Web App)** sur mobile (iOS/Android) et macOS Dock.

---

## ✨ Fonctionnalités

- **Double vocation** :
  1. **Vitrine Ingénieur / Data Scientist & AI Engineer** : Présentation concise, domaines de prédilection (IA, Apnée/Freediving, Mobilité) et liens rapides.
  2. **Hub de lancement (App Launcher)** : Accès en **1 seconde** aux applications en production (`APPnea`, `StreetFinder`) et aux projets Labs/Beta (`Piggy`, `VigilXL`, `Telraam`).
- **Ergonomie & Raccourcis Clavier (inspiré de Raycast / Linear)** :
  - `⌘K` / `Ctrl+K` : Ouvre la **Command Palette** modale native (`<dialog closedby="any">`).
  - `/` : Focus immédiat sur la barre de filtrage rapide.
  - Touches `1` à `5` : Lance directement l'application associée dans un nouvel onglet.
  - **Dock 1-clic** dans le Header pour lancer les applications `Live` dès le haut de l'écran sur mobile ou desktop.
- **Thème Dark / Light natif sans FOUC** : Basé sur `color-scheme: light dark`, `light-dark()` et synchronisation `<meta name="color-scheme">`.
- **PWA Ready (`public/manifest.json`)** : Installable sur l'écran d'accueil iOS/Android ou dans le Dock macOS avec raccourcis d'applications intégrés (`shortcuts`).

---

## 🚀 Démarrage rapide en local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement Vite
npm run dev

# Vérifier le typage TypeScript et générer le build de production
npm run build
```

---

## ➕ Ajouter un nouveau projet en 3 lignes

Ouvrez [`src/data/projects.ts`](./src/data/projects.ts) et ajoutez une entrée dans le tableau `INITIAL_PROJECTS` à l'aide du helper `createProject` :

```ts
createProject(
  'NomDuProjet',
  'Description courte en 1 à 2 phrases.',
  { url: 'https://mon-projet.dev', category: 'Data/IA', techStack: ['React', 'Python'], icon: 'Sparkles' }
),
```

### Options disponibles (`Project`)
- `status` : `'Live'` (par défaut si `url` est fourni) | `'Beta'` | `'Private/Dev'`
- `category` : `'Sport'` | `'Mobilité'` | `'Finance'` | `'Data/IA'`
- `categoryLabel` : Libellé affiché sur la carte (ex. `'Sport / Web App'`)
- `featured` : `true` (carte large 3 colonnes en haut du Bento) | `false` (carte 2 colonnes)
- `icon` : `'Waves'` | `'MapPinned'` | `'PiggyBank'` | `'Radar'` | `'Bike'` | `'Sparkles'` | `'Terminal'` | `'Cpu'` | `'Globe'` | `'Database'`
- `shortcutIndex` : Touche numérique (`1` à `9`) pour ouvrir l'application au clavier.

---

## 🔌 Brancher Supabase ou Firebase plus tard

L'architecture sépare les composants UI des données via [`src/services/projectService.ts`](./src/services/projectService.ts).
Pour remplacer le fichier statique par une base de données distante, implémentez simplement l'interface `ProjectDataProvider` :

```ts
class SupabaseProjectProvider implements ProjectDataProvider {
  async getProjects(): Promise<Project[]> {
    const { data } = await supabase.from('projects').select('*').order('shortcutIndex');
    return data ?? [];
  }
  async getProfile(): Promise<ProfileInfo> {
    return PROFILE_DATA;
  }
}
```

---

## 🌐 Déployer sur Vercel (`.dev`)

1. Poussez ce dépôt sur **GitHub**.
2. Sur [vercel.com/new](https://vercel.com/new), importez le dépôt :
   - **Framework Preset** : `Vite` (détecté automatiquement)
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
3. Dans **Settings → Domains**, ajoutez votre domaine personnalisé en `.dev`.

---

## 📱 Installer en « Web App » (Mobile & Mac)

- **Sur iPhone / iPad (Safari)** : Touchez **Partager** → **Sur l'écran d'accueil**.
- **Sur Mac (Safari / Chrome)** :
  - Safari : **Fichier** → **Ajouter au Dock…**
  - Chrome : Icône **Installer l'application** dans la barre d'adresse.
