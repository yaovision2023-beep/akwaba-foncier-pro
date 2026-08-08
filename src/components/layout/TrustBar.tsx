import { COMPANY } from "@/lib/constants";

const ITEMS = [`RCCM ${COMPANY.rccm}`, "Notaire partenaire", "Titres vérifiés avant publication"];

export function TrustBar({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div
      className={`border-b ${
        isDark ? "border-white/10 bg-forest-dark" : "border-forest/10 bg-cream"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-3 text-center text-[11px] font-medium uppercase tracking-wider sm:px-6 lg:px-8 ${
          isDark ? "text-cream/70" : "text-forest-light"
        }`}
      >
        {ITEMS.map((item, index) => (
          <span key={item} className="flex items-center gap-x-3">
            {index > 0 && <span className="text-gold">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
