export function LogoIcon({ className = "w-8 h-8", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ledger grid block with forward arrow/pilot element */}
      {/* Outer rounded square - ledger book shape */}
      <rect x="2" y="4" width="24" height="24" rx="3" stroke={color} strokeWidth="2" fill="none" />
      {/* Horizontal ledger lines */}
      <line x1="6" y1="11" x2="22" y2="11" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="16" x2="22" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="21" x2="18" y2="21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Vertical column separator */}
      <line x1="15" y1="8" x2="15" y2="24" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      {/* Forward arrow - pilot/navigation element emerging from ledger */}
      <path d="M22 19l6-3-6-3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LogoFull({ className = "", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "#FFFFFF" : "#0B1726";
  const iconColor = variant === "light" ? "#FFFFFF" : "#0F766E";
  const accentColor = "#C8A24D";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoIcon className="w-8 h-8" color={iconColor} />
      <span className="text-xl font-bold" style={{ color: textColor }}>
        Ledger<span style={{ color: variant === "light" ? accentColor : "#0F766E" }}>Pilot</span>
      </span>
    </span>
  );
}
