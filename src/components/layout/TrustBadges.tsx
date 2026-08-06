import { COMPANY } from "@/lib/constants";

const ITEMS = [
  {
    title: "Structure enregistrée",
    detail: `RCCM ${COMPANY.rccm}`,
  },
  {
    title: "Titres vérifiés",
    detail: "Chaque dossier est vérifié avant mise en ligne",
  },
  {
    title: "Paiement sécurisé",
    detail: "Toujours via notaire partenaire, jamais d'argent encaissé directement",
  },
];

export function TrustBadges({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div
      className={`grid grid-cols-1 gap-6 sm:grid-cols-3 ${
        isDark ? "text-cream" : "text-forest"
      }`}
    >
      {ITEMS.map((item) => (
        <div key={item.title} className="flex items-start gap-3">
          <svg
            viewBox="0 0 24 24"
            className={`mt-0.5 h-6 w-6 flex-shrink-0 ${isDark ? "text-gold-light" : "text-gold"}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="9" strokeLinecap="round" />
          </svg>
          <div>
            <p className={`text-sm font-semibold ${isDark ? "text-white" : "text-forest"}`}>
              {item.title}
            </p>
            <p className={`text-sm ${isDark ? "text-cream/80" : "text-forest-light"}`}>
              {item.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
