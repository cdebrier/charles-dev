# Swiss High-Craft Monochrome & App Cards Branding Implementation Plan

- **Date** : 2026-11-03
- **Statut** : Prêt pour exécution
- **Conception de référence** : [`docs/plans/2026-11-03-app-cards-branding-and-swiss-minimalism-design.md`](./2026-11-03-app-cards-branding-and-swiss-minimalism-design.md)

---

## Tâche 1 : Typage du Thème Déclaratif (`ProjectTheme`)
- **Fichiers modifiés** :
  - `src/types/project.ts`
- **Détails de l'implémentation** :
  - Définir l'interface `ProjectTheme` avec les propriétés chromatiques et de pattern :
    - `accentColor`, `accentGlow`, `surfaceTint`, `surfaceBorder`, `badgeBg`, `badgeText`, `buttonBg`, `buttonText`, `pattern` ('waves' | 'grid-map' | 'fintech' | 'radar' | 'mobility').
  - Ajouter `theme?: ProjectTheme` dans l'interface `Project`.
- **Méthode de test** :
  - `npm run build` (vérifier que TypeScript compile sans erreur).

---

## Tâche 2 : Données & Chartes Graphiques des 5 Applications
- **Fichiers modifiés** :
  - `src/data/projects.ts`
- **Détails de l'implémentation** :
  - Mettre à jour `createProject` pour accepter `theme`.
  - Configurer les thèmes complets pour les 5 projets :
    - **APPnea** : Cyan/Bleu Abysse (`#0ea5e9`), motif `'waves'`.
    - **StreetFinder** : Jaune Street View (`#eab308`), motif `'grid-map'`.
    - **Piggy** : Vert Menthe Fintech (`#10b981`), motif `'fintech'`.
    - **VigilXL** : Ambre Surveillance Radar (`#f59e0b`), motif `'radar'`.
    - **Telraam** : Vert Mobilité Cyclable (`#22c55e`), motif `'mobility'`.
- **Méthode de test** :
  - `npm run build` pour vérifier la validité des objets typés.

---

## Tâche 3 : Composant de Micro-Motifs Décoratifs en Filigrane
- **Fichiers modifiés** :
  - `src/components/ProjectBackgroundPattern.tsx` (création)
- **Détails de l'implémentation** :
  - Créer des SVG vectoriels légers et fluides pour chaque motif (`waves`, `grid-map`, `fintech`, `radar`, `mobility`).
  - Gérer l'opacité au repos (~5%) et l'éveil au survol (~14%) pour conserver la subtilité suisse sans perturber la lisibilité du texte.
- **Méthode de test** :
  - Vérification de l'export et intégration dans un composant test.

---

## Tâche 4 : Refonte Immersive de `ProjectCard`
- **Fichiers modifiés** :
  - `src/components/ProjectCard.tsx`
- **Détails de l'implémentation** :
  - Injecter le micro-motif SVG en arrière-plan.
  - Appliquer les styles dynamiques de bordure, halo ambiant (`accentGlow`) et fond teinté (`surfaceTint`).
  - Adapter le bouton principal "Lancer l'app" aux couleurs de l'application (bouton à fort contraste et personnalité propre).
  - Conserver les badges de statut et tags techniques dans une typographie suisse rigoureuse.
- **Méthode de test** :
  - Vérification visuelle sur `http://localhost:5173/` et contrôle de non-régression responsive.

---

## Tâche 5 : Épuration de la Vitrine (*Swiss High-Craft Monochrome*)
- **Fichiers modifiés** :
  - `src/index.css`
  - `src/components/Hero.tsx`
  - `src/components/Header.tsx`
- **Détails de l'implémentation** :
  - Remplacer les dégradés cyan globaux de la vitrine par une palette monochrome épurée (noir mat, nuances de gris titane/calcaire, blanc encre).
  - Conserver le switch Dark/Light natif avec mise à jour du canvas et des contrastes suisses.
  - Ajuster les espacements et la hiérarchie typographique du Hero.
- **Méthode de test** :
  - Contrôle visuel du contraste global et de la propreté du design sur desktop et mobile.

---

## Tâche 6 : Cohérence avec la Command Palette & Raccourcis
- **Fichiers modifiés** :
  - `src/components/CommandPalette.tsx`
- **Détails de l'implémentation** :
  - Afficher une pastille ou un trait de couleur correspondant au thème de chaque projet dans les résultats de recherche `⌘K`.
- **Méthode de test** :
  - Ouvrir la Command Palette (`⌘K`) et vérifier la navigation et les touches `1` à `5`.

---

## Tâche 7 : Build Final, Validation & Déploiement Vercel
- **Fichiers modifiés** :
  - Ensemble du repo
- **Détails de l'implémentation** :
  - Exécuter `npm run build` (`tsc -b && vite build`).
  - Commiter les changements et pousser vers GitHub (`origin main`).
  - Déclencher le déploiement sur Vercel et vérifier l'URL de production.
- **Méthode de test** :
  - Vérification du déploiement en ligne sur `https://charles-dev-three.vercel.app`.
