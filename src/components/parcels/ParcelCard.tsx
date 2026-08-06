import Link from "next/link";
import Image from "next/image";
import type { Parcel } from "@/types/parcel";
import { formatFcfa } from "@/lib/constants";
import { ParcelStatusBadge } from "./ParcelStatusBadge";
import { ParcelPlaceholder } from "./ParcelPlaceholder";

function PriceDisplay({ parcel }: { parcel: Parcel }) {
  if (parcel.lots?.length) {
    const min = Math.min(...parcel.lots.map((l) => l.price));
    return (
      <p className="text-lg font-bold text-forest">
        À partir de {formatFcfa(min)}
      </p>
    );
  }
  if (parcel.price) {
    return <p className="text-lg font-bold text-forest">{formatFcfa(parcel.price)}</p>;
  }
  return <p className="text-sm font-medium italic text-forest-light">{parcel.priceNote}</p>;
}

export function ParcelCard({ parcel }: { parcel: Parcel }) {
  return (
    <Link
      href={`/parcelles/${parcel.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-forest/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-48 w-full">
        {parcel.images[0] ? (
          <Image
            src={parcel.images[0]}
            alt={parcel.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <ParcelPlaceholder zone={parcel.zone} />
        )}
        <div className="absolute left-3 top-3">
          <ParcelStatusBadge status={parcel.verificationStatus} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold text-forest">{parcel.name}</h3>
        <p className="text-sm text-forest-light">{parcel.location}</p>
        <p className="text-sm text-forest-light">{parcel.area}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <PriceDisplay parcel={parcel} />
          <span className="text-sm font-semibold text-gold group-hover:underline">
            Voir la fiche →
          </span>
        </div>
      </div>
    </Link>
  );
}
