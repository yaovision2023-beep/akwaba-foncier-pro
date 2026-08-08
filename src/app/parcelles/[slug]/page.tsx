import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { parcels, getParcelBySlug } from "@/data/parcels";
import { ParcelStatusBadge } from "@/components/parcels/ParcelStatusBadge";
import { ParcelPlaceholder } from "@/components/parcels/ParcelPlaceholder";
import { TrustBar } from "@/components/layout/TrustBar";
import { LinkButton } from "@/components/ui/Button";
import { formatFcfa, whatsappLink } from "@/lib/constants";
import { getCategoryInfo } from "@/data/categories";

export function generateStaticParams() {
  return parcels.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const parcel = getParcelBySlug(params.slug);
  if (!parcel) return {};
  return {
    title: `${parcel.name} — Akwaba Foncier Pro`,
    description: parcel.description,
  };
}

export default function ParcelDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const parcel = getParcelBySlug(params.slug);
  if (!parcel) notFound();

  return (
    <div className="bg-cream">
      <section className="bg-forest-dark pb-10 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/parcelles"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cream/70 hover:text-gold-light"
          >
            ← Toutes les parcelles
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">
            {getCategoryInfo(parcel.category).label}
          </p>
          <h1 className="mt-3 font-serif text-4xl text-white sm:text-5xl">{parcel.name}</h1>
          <p className="mt-2 text-cream/70">{parcel.location}</p>
        </div>
      </section>

      <TrustBar variant="dark" />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="h-72 overflow-hidden rounded-sm sm:h-96">
              <ParcelPlaceholder zone={parcel.zone} />
            </div>
            <div className="mt-8 rounded-xl border border-forest/10 bg-white p-6">
              <h2 className="font-serif text-xl text-forest">Description</h2>
              <p className="mt-3 text-sm leading-relaxed text-forest-light">
                {parcel.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-forest/10 bg-white p-6">
              <ParcelStatusBadge status={parcel.verificationStatus} />

              <dl className="mt-6 space-y-4 border-t border-forest/10 pt-6">
                <div className="flex justify-between text-sm">
                  <dt className="text-forest-light">Superficie</dt>
                  <dd className="text-right font-medium text-forest">{parcel.area}</dd>
                </div>
                <div className="flex justify-between gap-4 text-sm">
                  <dt className="flex-shrink-0 text-forest-light">Titre</dt>
                  <dd className="text-right font-medium text-forest">{parcel.titleType}</dd>
                </div>
                <div className="flex justify-between text-sm">
                  <dt className="text-forest-light">Zone</dt>
                  <dd className="text-right font-medium text-forest">{parcel.zone}</dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-forest/10 pt-6">
                {parcel.lots?.length ? (
                  <div className="space-y-3">
                    {parcel.lots.map((lot) => (
                      <div
                        key={lot.label}
                        className="flex items-center justify-between rounded-lg bg-cream px-4 py-3"
                      >
                        <div>
                          <p className="text-sm font-medium text-forest">{lot.label}</p>
                          <p className="text-xs text-forest-light">{lot.size}</p>
                        </div>
                        <p className="font-serif text-lg text-gold">{formatFcfa(lot.price)}</p>
                      </div>
                    ))}
                  </div>
                ) : parcel.price ? (
                  <p className="font-serif text-4xl text-forest">{formatFcfa(parcel.price)}</p>
                ) : (
                  <p className="text-sm font-medium italic text-forest-light">
                    {parcel.priceNote}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <LinkButton
                  href={whatsappLink(`Bonjour, je suis intéressé(e) par la parcelle ${parcel.name}.`)}
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuter de cette parcelle sur WhatsApp
                </LinkButton>
                <LinkButton href="/contact" variant="outline">
                  Être contacté par notre équipe
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
