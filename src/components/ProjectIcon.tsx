import {
  Bike,
  Cpu,
  Database,
  Globe,
  MapPinned,
  PiggyBank,
  Radar,
  Sparkles,
  Terminal,
  Waves,
  type LucideProps,
} from 'lucide-react';
import type { ProjectIconName } from '../types/project';

const ICON_MAP: Record<ProjectIconName, React.ComponentType<LucideProps>> = {
  Waves,
  MapPinned,
  PiggyBank,
  Radar,
  Bike,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Database,
};

interface ProjectIconProps extends LucideProps {
  name: ProjectIconName;
}

export function ProjectIcon({ name, ...props }: ProjectIconProps) {
  const IconComponent = ICON_MAP[name] ?? Terminal;
  return <IconComponent {...props} />;
}
