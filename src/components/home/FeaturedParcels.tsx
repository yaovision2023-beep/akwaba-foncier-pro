import { featuredParcels } from "@/data/parcels";
import { ParcelCard } from "@/components/parcels/ParcelCard";
import { LinkButton } from "@/components/ui/Button";

export function FeaturedParcels() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold">
            Nos parcelles phares
          </p>
          <h2 className="mt-2 text-3xl font-bold text-forest sm:text-4xl">
            Des terrains sélectionnés et vérifiés
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredParcels.map((parcel) => (
            <ParcelCard key={parcel.slug} parcel={parcel} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <LinkButton href="/parcelles" variant="outline">
            Voir toutes les parcelles
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
