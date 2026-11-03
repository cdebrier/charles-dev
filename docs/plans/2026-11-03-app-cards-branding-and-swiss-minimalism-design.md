# Conception Technique & Design : Swiss High-Craft Monochrome & App Cards Branding

- **Date** : 2026-11-03
- **Auteur** : Charles De Brier & Antigravity
- **Statut** : En cours de validation (Brainstorming)
- **Objectif** : Transformer la vitrine personnelle vers une esthétique *Swiss High-Craft Monochrome* épurée, et doter chaque carte d'application de sa propre charte graphique immersive (palette, textures subtiles, boutons dédiés et ambiances lumineuses).

---

## 1. Contexte & Intentions Design

### 1.1 La Vitrine Personnelle (*Showcase Deck*)
- **Direction esthétique** : *Swiss High-Craft Monochrome* (inspirée de Dieter Rams, Teenage Engineering et du graphisme suisse fonctionnel).
- **Philosophie** : Zéro artifice superflu, typographie architecturale forte (*Space Grotesk* + *Plus Jakarta Sans* + *JetBrains Mono*), contrastes nets (noir encre, blanc pur, nuances de titane et de calcaire).
- **Rôle de galerie** : La vitrine agit comme un cadre sobre et neutre qui met en valeur l'identité visuelle de chaque projet individuel sans saturation.

### 1.2 Les Cartes d'Applications (*Branded Micro-Worlds*)
- **Fusion des approches 1 & 2** :
  - **Au repos** : Rigueur géométrique, typographie suisse précise, icône et badge teintés aux couleurs exactes de l'app, fond subtilement teinté par un gradient d'ambiance à très basse opacité.
  - **Au survol & focus** : La carte s'illumine via un halo d'ambiance (*ambient glow*), une bordure accentuée et un micro-motif texturé en filigrane (ondes de profondeur, trame cartographique, etc.).
  - **Bouton d'action principal** : Adapté à la charte de l'application avec sa propre couleur d'accentuation et son style distinctif.

---

## 2. Spécifications Visuelles par Application

| Projet | Slug | Thème & Univers | Couleurs Clés | Détail Texturé / SVG en filigrane | Action Principale |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **APPnea** | `appnea` | Apnée, profondeur océanique, calme sous-marin | Cyan Abysse (`#0ea5e9`, `#0284c7`, fond `#031726`) | Courbe isobathe / onde hydrodynamique | Bouton Cyan Abysse vibrant avec texte contrasté |
| **StreetFinder** | `streetfinder` | Exploration géo, communes belges, Street View | Jaune Street View & Asphalte (`#eab308`, `#ca8a04`, fond `#1f1a08`) | Trame de carroyage cartographique & repère GPS | Bouton Jaune dynamique sur fond asphalte |
| **Piggy** | `piggy` | Finance personnelle, clarté budgétaire, IA | Vert Menthe / Émeraude Fintech (`#10b981`, `#059669`, fond `#06241a`) | Micro-histogramme / tendance financière fluide | Bouton Vert Menthe épuré |
| **VigilXL** | `vigilxl` | Veille marchés & subsides, scraping agentique | Ambre Radar & Data Surveillance (`#f59e0b`, `#d97706`, fond `#261603`) | Grille de balayage radar & flux de points data | Bouton Ambre technique |
| **Telraam** | `telraam` | Mobilité douce, analyse de trafic, vélo | Vert Mobilité Urbaine & Cobalt (`#22c55e`, `#16a34a`, fond `#072111`) | Lignes de flux de trajectoires / pistes cyclables | Bouton Vert Mobilité |

---

## 3. Architecture des Données & Types TypeScript

Dans [`src/types/project.ts`](../../src/types/project.ts), nous enrichissons le modèle `Project` avec une propriété optionnelle `theme` pour piloter le rendu visuel de façon déclarative :

```typescript
export interface ProjectTheme {
  accentColor: string;       // ex: "#0ea5e9"
  accentGlow: string;        // ex: "rgba(14, 165, 233, 0.22)"
  surfaceTint: string;       // ex: "rgba(14, 165, 233, 0.04)"
  surfaceBorder: string;     // ex: "rgba(14, 165, 233, 0.3)"
  badgeBg: string;           // ex: "rgba(14, 165, 233, 0.12)"
  badgeText: string;         // ex: "#38bdf8"
  buttonBg: string;          // ex: "#0ea5e9"
  buttonText: string;        // ex: "#02121e"
  pattern: 'waves' | 'grid-map' | 'fintech' | 'radar' | 'mobility';
}
```

Les projets dans [`src/data/projects.ts`](../../src/data/projects.ts) seront dotés de leur `theme` respectif.

---

## 4. Impacts UI/UX & Composants

1. **`Hero.tsx` & `Header.tsx`** :
   - Épuration suisse : réduction des effets "néon/cyan" globaux au profit d'un monochrome élégant (noir profond, gris titane, blanc pur).
   - Typographie agrandie avec espacements rigoureux.
2. **`ProjectCard.tsx`** :
   - Intégration du composant de texture en arrière-plan selon le `pattern`.
   - Application dynamique des styles CSS variables ou classes Tailwind custom pour chaque carte.
   - Refonte du bouton de lancement pour arborer l'identité exacte de l'app.
3. **`CommandPalette.tsx`** :
   - Les résultats de recherche reflètent également le code couleur discret de chaque application pour une reconnaissance immédiate.

---

## 5. Prochaines Étapes
Après validation de ce document, passage à la compétence `/planning` pour découper l'implémentation en micro-tâches testables.
