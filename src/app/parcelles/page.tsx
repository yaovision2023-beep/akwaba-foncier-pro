import type { Metadata } from "next";
import { parcels } from "@/data/parcels";
import { ParcelCategoryFilter } from "@/components/parcels/ParcelCategoryFilter";
import { TrustBar } from "@/components/layout/TrustBar";

export const metadata: Metadata = {
  title: "Nos parcelles — Akwaba Foncier Pro",
  description:
    "Terrains agricoles, lots urbains, entrepôts industriels et résidences vérifiés en Côte d'Ivoire — Akwaba Foncier Pro intervient sur tout le territoire.",
};

export default function ParcellesPage({
  searchParams,
}: {
  searchParams: { categorie?: string };
}) {
  return (
    <div className="bg-cream">
      <section className="bg-forest-dark pb-16 pt-36 text-center sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">
            Opportunités disponibles
          </p>
          <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            Nos parcelles
          </h1>
          <p className="mt-5 text-cream/80">
            Chaque parcelle listée ci-dessous a fait l&apos;objet d&apos;une
            vérification de son titre avant publication. Notre stock actuel
            se situe à Agboville, Bingerville et Jacqueville — nous
            intervenons cependant partout en Côte d&apos;Ivoire, où le
            besoin se présente.
          </p>
        </div>
      </section>

      <TrustBar variant="dark" />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ParcelCategoryFilter parcels={parcels} initialCategory={searchParams.categorie} />
      </section>
    </div>
  );
}
