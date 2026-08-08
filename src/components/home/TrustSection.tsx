import { COMPANY } from "@/lib/constants";
import { Reveal } from "@/components/motion/Reveal";

const REASONS = [
  {
    title: "Structure enregistrée",
    detail: `Filiale de ${COMPANY.parentCompany}, RCCM ${COMPANY.rccm}.`,
  },
  {
    title: "Vérification systématique",
    detail: "Certificat foncier, ACD ou attestation villageoise contrôlés avant publication.",
  },
  {
    title: "Paiement via notaire",
    detail: "Aucun intermédiaire n'encaisse directement une somme.",
  },
  {
    title: "Accompagnement diaspora",
    detail: "Achat à distance encadré, étape par étape.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Notre engagement
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-forest">
            Pourquoi nous
            <br />
            faire confiance
          </h2>
          <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-forest-light">
            Chaque dossier est vérifié avant mise en ligne. Chaque paiement
            transite exclusivement par un notaire partenaire — jamais
            d&apos;argent encaissé directement.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-1 gap-px bg-forest/10 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <div key={reason.title} className="bg-cream p-8">
              <h3 className="font-serif text-lg text-forest">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-light">
                {reason.detail}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
