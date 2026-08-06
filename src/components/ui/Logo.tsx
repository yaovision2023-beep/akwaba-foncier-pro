export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 4C15.163 4 8 11.163 8 20c0 12.5 16 24 16 24s16-11.5 16-24c0-8.837-7.163-16-16-16z"
        fill="#1B4332"
      />
      <path d="M16 21.5L24 14l8 7.5" stroke="#B8860B" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 20v9a1 1 0 001 1h9a1 1 0 001-1v-9" fill="#FAF7F2" />
      <rect x="21.5" y="24" width="5" height="6" fill="#1B4332" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-tight text-forest">
          Akwaba Foncier <span className="text-gold">Pro</span>
        </span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-forest-light">
          Filiale de CIG
        </span>
      </span>
    </span>
  );
}
