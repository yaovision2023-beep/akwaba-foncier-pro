import type { Metadata } from "next";
import { PricingTable } from "@/components/pricing/PricingTable";
import { TrustBadges } from "@/components/layout/TrustBadges";

export const metadata: Metadata = {
  title: "Grille tarifaire — Akwaba Foncier Pro",
  description:
    "Tarifs selon le niveau de sécurisation foncière : Certificat Foncier délivré, en cours, ou Attestation villageoise (parcours AFOR).",
};

export default function TarifsPage() {
  return (
    <div className="bg-cream">
      <section className="bg-forest-dark py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-light">
            Tarification transparente
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Grille tarifaire
          </h1>
          <p className="mt-4 text-cream/80">
            Le prix dépend du niveau de sécurisation juridique du terrain au
            moment de la transaction.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <PricingTable />

        <div className="mt-12 rounded-xl border border-forest/10 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-forest">
            Qu&apos;est-ce que le parcours AFOR ?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-forest-light">
            L&apos;Agence Foncière Rurale (AFOR) encadre un parcours en 9
            étapes permettant de faire reconnaître et sécuriser
            progressivement un droit foncier coutumier, depuis
            l&apos;attestation villageoise jusqu&apos;au Certificat Foncier.
            Plus une parcelle est avancée dans ce parcours, plus sa
            sécurisation juridique est forte — d&apos;où la différence de
            tarif entre les trois niveaux.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-forest/10 bg-white p-6 sm:p-8">
          <TrustBadges />
        </div>
      </section>
    </div>
  );
}
