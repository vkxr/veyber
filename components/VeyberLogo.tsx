interface VeyberLogoProps {
  /** Height in px — width scales proportionally */
  height?: number;
  /** Accent color for the V shape */
  accentColor?: string;
}

/**
 * Veyber brand logo — inline SVG V + HTML text.
 * "EYBER" uses text-on-surface so it adapts automatically in dark/light mode.
 */
export default function VeyberLogo({
  height = 30,
  accentColor = '#4f8eff',
}: VeyberLogoProps) {
  const vW = Math.round((height * 42) / 36);
  const gap = Math.round(height * 0.2);
  const fontSize = Math.round(height * 0.75);

  return (
    <span
      className="inline-flex items-center select-none"
      style={{ gap }}
      aria-label="Veyber"
    >
      {/* Geometric V */}
      <svg
        width={vW}
        height={height}
        viewBox="0 0 42 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon points="0,1 11,1 21,35 10,35" fill={accentColor} />
        <polygon points="21,35 31,1 42,1 32,35" fill={accentColor} />
      </svg>

      {/* EYBER — color inherits from text-on-surface CSS variable */}
      <span
        className="font-headline font-extrabold tracking-tight leading-none text-on-surface"
        style={{ fontSize }}
      >
        EYBER
      </span>
    </span>
  );
}
