type LogoProps = {
  layout?: "icon" | "horizontal" | "stacked";
  variant?: "dark" | "light";
  size?: number; // px for icon; wordmark scales automatically
};

const FX = {
  navy: "#0B1B3A",
  red: "#E5242A",
  gold: "#FDC500",
  ink: "#101418",
  white: "#FFFFFF",
};

function IconFE({ variant = "dark", size = 40 }: { variant?: "dark" | "light"; size?: number }) {
  const bg = variant === "dark" ? FX.navy : FX.white;
  const stroke = variant === "dark" ? FX.white : FX.navy;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Flokem-Excel emblem"
    >
      <defs>
        <linearGradient id="fxSlash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={FX.red} />
          <stop offset="100%" stopColor={FX.gold} />
        </linearGradient>
      </defs>
      {/* Rounded square background */}
      <rect x="2" y="2" width="44" height="44" rx="12" fill={bg} />
      {/* Diagonal accent slash */}
      <path d="M8 34 L34 8 L40 14 L14 40 Z" fill="url(#fxSlash)" opacity="0.95" />
      {/* FE monogram (geometry, not a font) */}
      {/* F */}
      <path
        d="M12 13 h14 a2 2 0 0 1 0 4 h-10 v5 h8 a2 2 0 0 1 0 4 h-8 v9 a2 2 0 0 1-4 0 V15 a2 2 0 0 1 2-2z"
        fill={stroke}
        opacity="0.95"
      />
      {/* E */}
      <path
        d="M26 17 h10 a2 2 0 1 1 0 4 h-10 v4 h8 a2 2 0 1 1 0 4 h-8 v4 h10 a2 2 0 1 1 0 4 h-12 a2 2 0 0 1-2-2 V19 a2 2 0 0 1 2-2z"
        fill={stroke}
        opacity="0.95"
      />
      {/* Subtle inner stroke for polish */}
      <rect x="2" y="2" width="44" height="44" rx="12" fill="none" stroke={variant === "dark" ? FX.white : FX.navy} strokeOpacity="0.1" />
    </svg>
  );
}

export default function Logo({ layout = "horizontal", variant = "dark", size = 40 }: LogoProps) {
  const word = variant === "dark" ? FX.navy : FX.white;
  const sub = variant === "dark" ? FX.ink : "rgba(255,255,255,0.8)";

  if (layout === "icon") {
    return <IconFE variant={variant} size={size} />;
  }

  if (layout === "stacked") {
    return (
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-3">
          <IconFE variant={variant} size={size} />
          <div>
            <div
              style={{ color: word }}
              className="text-xl font-extrabold tracking-tight"
            >
              FLOKEM·EXCEL
            </div>
            <div
              style={{ color: sub }}
              className="text-xs font-medium tracking-wide"
            >
              Computer Institute & Business Centre
            </div>
          </div>
        </div>
      </div>
    );
  }

  // horizontal
  return (
    <div className="flex items-center gap-3">
      <IconFE variant={variant} size={size} />
      <div className="flex flex-col">
        <div style={{ color: word }} className="text-lg md:text-xl font-extrabold tracking-tight">
          FLOKEM·EXCEL
        </div>
        <div style={{ color: sub }} className="text-[11px] md:text-xs font-medium tracking-wide">
          Computer Institute & Business Centre
        </div>
      </div>
    </div>
  );
}
