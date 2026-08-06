export function ParcelPlaceholder({ zone }: { zone: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-forest to-forest-dark">
      <svg
        viewBox="0 0 24 24"
        className="h-12 w-12 text-gold-light/80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path
          d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9" r="2.5" strokeLinecap="round" />
      </svg>
      <span className="absolute bottom-3 left-3 right-3 text-center text-xs font-medium text-cream/70">
        Photos disponibles sur demande · {zone}
      </span>
    </div>
  );
}
