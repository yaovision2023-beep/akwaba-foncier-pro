import type { VerificationStatus } from "@/types/parcel";

const STYLES: Record<VerificationStatus, string> = {
  verifie: "bg-forest/10 text-forest",
  en_cours: "bg-gold/15 text-gold-dark",
};

const LABELS: Record<VerificationStatus, string> = {
  verifie: "Titre vérifié",
  en_cours: "Sécurisation en cours",
};

export function ParcelStatusBadge({ status }: { status: VerificationStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${STYLES[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {LABELS[status]}
    </span>
  );
}
