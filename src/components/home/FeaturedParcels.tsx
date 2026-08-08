import { featuredParcels } from "@/data/parcels";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { ParcelCarousel } from "@/components/home/ParcelCarousel";

export function FeaturedParcels() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Nos parcelles phares
          </p>
          <h2 className="mt-4 font-serif text-3xl text-forest sm:text-4xl">
            Des terrains sélectionnés et vérifiés
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ParcelCarousel parcels={featuredParcels} />
        </Reveal>

        <Reveal delay={0.15} className="mt-12 text-center">
          <LinkButton href="/parcelles" variant="outline">
            Voir toutes les parcelles
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}
