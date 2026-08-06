import { COMPANY } from "@/lib/constants";

const REASONS = [
  {
    title: "Structure légalement enregistrée",
    detail: `Akwaba Foncier Pro est une filiale de ${COMPANY.parentCompany}, enregistrée sous le RCCM ${COMPANY.rccm}.`,
  },
  {
    title: "Vérification systématique des titres",
    detail:
      "Chaque parcelle est contrôlée — certificat foncier, attestation villageoise ou ACD — avant toute mise en ligne sur le site.",
  },
  {
    title: "Paiement exclusivement via notaire",
    detail:
      "Aucune somme n'est jamais encaissée directement par un intermédiaire : chaque transaction transite par un notaire partenaire.",
  },
  {
    title: "Accompagnement diaspora",
    detail:
      "Achat à distance encadré étape par étape, pour sécuriser votre investissement même sans être présent en Côte d'Ivoire.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Notre engagement
          </p>
          <h2 className="mt-2 text-3xl font-bold text-forest sm:text-4xl">
            Pourquoi nous faire confiance
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 rounded-xl border border-forest/10 bg-cream/50 p-6"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 flex-shrink-0 text-gold"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path
                  d="M12 3l7 3.5v5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-5L12 3z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <h3 className="font-semibold text-forest">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-forest-light">
                  {reason.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
