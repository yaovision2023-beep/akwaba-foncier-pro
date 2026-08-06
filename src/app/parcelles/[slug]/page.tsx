import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { parcels, getParcelBySlug } from "@/data/parcels";
import { ParcelStatusBadge } from "@/components/parcels/ParcelStatusBadge";
import { ParcelPlaceholder } from "@/components/parcels/ParcelPlaceholder";
import { TrustBadges } from "@/components/layout/TrustBadges";
import { LinkButton } from "@/components/ui/Button";
import { formatFcfa, whatsappLink } from "@/lib/constants";

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
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/parcelles"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-gold"
        >
          ← Toutes les parcelles
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="h-72 overflow-hidden rounded-xl sm:h-96">
              <ParcelPlaceholder zone={parcel.zone} />
            </div>
            <div className="mt-8 rounded-xl border border-forest/10 bg-white p-6">
              <h2 className="text-lg font-bold text-forest">Description</h2>
              <p className="mt-3 text-sm leading-relaxed text-forest-light">
                {parcel.description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-xl border border-forest/10 bg-white p-6">
              <ParcelStatusBadge status={parcel.verificationStatus} />
              <h1 className="mt-3 text-2xl font-bold text-forest">{parcel.name}</h1>
              <p className="mt-1 text-sm text-forest-light">{parcel.location}</p>

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
                        <p className="font-bold text-gold">{formatFcfa(lot.price)}</p>
                      </div>
                    ))}
                  </div>
                ) : parcel.price ? (
                  <p className="text-3xl font-extrabold text-forest">
                    {formatFcfa(parcel.price)}
                  </p>
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

        <div className="mt-12 rounded-2xl border border-forest/10 bg-white p-6 sm:p-8">
          <TrustBadges />
        </div>
      </div>
    </div>
  );
}
