import type { ProjectThemePattern } from '../types/project';

interface ProjectBackgroundPatternProps {
  pattern: ProjectThemePattern;
  accentColor: string;
}

export function ProjectBackgroundPattern({
  pattern,
  accentColor,
}: ProjectBackgroundPatternProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-40 transition-opacity duration-300 group-hover:opacity-100"
    >
      {pattern === 'waves' && (
        <svg
          className="absolute -right-4 -bottom-4 h-48 w-64 text-current transition-transform duration-500 group-hover:scale-105"
          viewBox="0 0 240 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 130C40 115 80 145 120 130C160 115 200 140 240 125"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          <path
            d="M0 95C45 80 85 110 130 95C175 80 205 105 240 90"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeOpacity="0.25"
          />
          <path
            d="M0 60C50 45 90 75 140 60C190 45 210 70 240 55"
            stroke={accentColor}
            strokeWidth="1.2"
            strokeOpacity="0.18"
            strokeDasharray="4 4"
          />
          <circle cx="180" cy="40" r="14" stroke={accentColor} strokeWidth="1" strokeOpacity="0.2" />
          <circle cx="180" cy="40" r="4" fill={accentColor} fillOpacity="0.3" />
        </svg>
      )}

      {pattern === 'grid-map' && (
        <svg
          className="absolute -right-4 -bottom-4 h-48 w-64 text-current transition-transform duration-500 group-hover:scale-105"
          viewBox="0 0 240 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Map Grid Matrix */}
          <line x1="40" y1="0" x2="40" y2="160" stroke={accentColor} strokeWidth="1" strokeOpacity="0.15" />
          <line x1="100" y1="0" x2="100" y2="160" stroke={accentColor} strokeWidth="1" strokeOpacity="0.2" />
          <line x1="160" y1="0" x2="160" y2="160" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3 3" />
          <line x1="220" y1="0" x2="220" y2="160" stroke={accentColor} strokeWidth="1" strokeOpacity="0.15" />
          <line x1="0" y1="50" x2="240" y2="50" stroke={accentColor} strokeWidth="1" strokeOpacity="0.15" />
          <line x1="0" y1="110" x2="240" y2="110" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="3 3" />
          {/* Crossroads Pin Node */}
          <rect x="154" y="104" width="12" height="12" rx="3" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.6" />
          <circle cx="160" cy="110" r="2.5" fill={accentColor} fillOpacity="0.8" />
        </svg>
      )}

      {pattern === 'fintech' && (
        <svg
          className="absolute -right-4 -bottom-4 h-48 w-64 text-current transition-transform duration-500 group-hover:scale-105"
          viewBox="0 0 240 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ascending Growth Trendline */}
          <path
            d="M20 140L70 115L120 125L170 80L220 50"
            stroke={accentColor}
            strokeWidth="2"
            strokeOpacity="0.4"
          />
          {/* Shaded Area under curve */}
          <path
            d="M20 140L70 115L120 125L170 80L220 50V160H20Z"
            fill={accentColor}
            fillOpacity="0.04"
          />
          {/* Trend checkpoints */}
          <circle cx="70" cy="115" r="3" fill={accentColor} fillOpacity="0.5" />
          <circle cx="120" cy="125" r="3" fill={accentColor} fillOpacity="0.5" />
          <circle cx="170" cy="80" r="3.5" fill={accentColor} fillOpacity="0.7" />
          <circle cx="220" cy="50" r="5" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.9" fill={accentColor} fillOpacity="0.3" />
        </svg>
      )}

      {pattern === 'radar' && (
        <svg
          className="absolute -right-6 -bottom-6 h-52 w-52 text-current transition-transform duration-500 group-hover:scale-105"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Radar Rings */}
          <circle cx="130" cy="130" r="85" stroke={accentColor} strokeWidth="1" strokeOpacity="0.12" />
          <circle cx="130" cy="130" r="55" stroke={accentColor} strokeWidth="1.2" strokeOpacity="0.22" strokeDasharray="3 3" />
          <circle cx="130" cy="130" r="25" stroke={accentColor} strokeWidth="1.5" strokeOpacity="0.35" />
          {/* Crosshairs */}
          <line x1="130" y1="30" x2="130" y2="190" stroke={accentColor} strokeWidth="1" strokeOpacity="0.2" />
          <line x1="30" y1="130" x2="190" y2="130" stroke={accentColor} strokeWidth="1" strokeOpacity="0.2" />
          {/* Detected Target Blips */}
          <circle cx="155" cy="105" r="3" fill={accentColor} fillOpacity="0.8" />
          <circle cx="105" cy="148" r="2.5" fill={accentColor} fillOpacity="0.6" />
        </svg>
      )}

      {pattern === 'mobility' && (
        <svg
          className="absolute -right-4 -bottom-4 h-48 w-64 text-current transition-transform duration-500 group-hover:scale-105"
          viewBox="0 0 240 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Smooth Mobility Arcs & Cycleways */}
          <path
            d="M0 140C90 140 130 90 240 85"
            stroke={accentColor}
            strokeWidth="2"
            strokeOpacity="0.35"
          />
          <path
            d="M20 160C110 160 140 110 240 105"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeOpacity="0.25"
            strokeDasharray="4 4"
          />
          <path
            d="M0 100C80 95 140 40 240 30"
            stroke={accentColor}
            strokeWidth="1.5"
            strokeOpacity="0.2"
          />
          {/* Counting Sensor Node */}
          <circle cx="170" cy="88" r="4" fill={accentColor} fillOpacity="0.8" />
          <circle cx="170" cy="88" r="10" stroke={accentColor} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 2" />
        </svg>
      )}
    </div>
  );
}
