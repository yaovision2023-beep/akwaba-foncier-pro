import type { Metadata } from "next";
import { parcels } from "@/data/parcels";
import { ParcelCategoryFilter } from "@/components/parcels/ParcelCategoryFilter";
import { TrustBadges } from "@/components/layout/TrustBadges";

export const metadata: Metadata = {
  title: "Nos parcelles — Akwaba Foncier Pro",
  description:
    "Terrains agricoles, lots urbains, entrepôts industriels et résidences vérifiés en Côte d'Ivoire — Akwaba Foncier Pro intervient sur tout le territoire.",
};

export default function ParcellesPage() {
  return (
    <div className="bg-cream">
      <section className="bg-forest-dark py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-light">
            Opportunités disponibles
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Nos parcelles
          </h1>
          <p className="mt-4 text-cream/80">
            Chaque parcelle listée ci-dessous a fait l&apos;objet d&apos;une
            vérification de son titre avant publication. Notre stock actuel
            se situe à Agboville, Bingerville et Jacqueville — nous
            intervenons cependant partout en Côte d&apos;Ivoire, où le
            besoin se présente.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ParcelCategoryFilter parcels={parcels} />

        <div className="mt-16 rounded-2xl border border-forest/10 bg-white p-6 sm:p-8">
          <TrustBadges />
        </div>
      </section>
    </div>
  );
}
