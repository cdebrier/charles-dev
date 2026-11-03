import type { Project } from '../types/project';
import { AppneaCard } from './cards/AppneaCard';
import { PiggyCard } from './cards/PiggyCard';
import { StreetFinderCard } from './cards/StreetFinderCard';
import { TelraamCard } from './cards/TelraamCard';
import { VigilXLCard } from './cards/VigilXLCard';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  switch (project.id) {
    case 'appnea':
      return <AppneaCard project={project} />;
    case 'streetfinder':
      return <StreetFinderCard project={project} />;
    case 'piggy':
      return <PiggyCard project={project} />;
    case 'vigilxl':
      return <VigilXLCard project={project} />;
    case 'telraam':
      return <TelraamCard project={project} />;
    default:
      return <AppneaCard project={project} />;
  }
}
