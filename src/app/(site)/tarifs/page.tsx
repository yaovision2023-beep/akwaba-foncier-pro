import type { Metadata } from "next";
import { PricingTable } from "@/components/pricing/PricingTable";
import { TrustBar } from "@/components/layout/TrustBar";

export const metadata: Metadata = {
  title: "Grille tarifaire — Akwaba Foncier Pro",
  description:
    "Tarifs selon le niveau de sécurisation foncière : Certificat Foncier délivré, en cours, ou Attestation villageoise (parcours AFOR).",
};

export default function TarifsPage() {
  return (
    <div className="bg-cream">
      <section className="bg-forest-dark pb-16 pt-36 text-center sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">
            Tarification transparente
          </p>
          <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            Grille tarifaire
          </h1>
          <p className="mt-5 text-cream/80">
            Le prix dépend du niveau de sécurisation juridique du terrain au
            moment de la transaction.
          </p>
        </div>
      </section>

      <TrustBar variant="dark" />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <PricingTable />

        <div className="mt-14 rounded-xl border border-forest/10 bg-white p-8">
          <h2 className="font-serif text-xl text-forest">
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
      </section>
    </div>
  );
}
