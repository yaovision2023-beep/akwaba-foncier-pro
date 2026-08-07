"use client";

import { useMemo, useState } from "react";
import type { Parcel, ParcelCategory } from "@/types/parcel";
import { CATEGORIES } from "@/data/categories";
import { ParcelCard } from "@/components/parcels/ParcelCard";
import { whatsappLink } from "@/lib/constants";

type FilterValue = ParcelCategory | "toutes";

export function ParcelCategoryFilter({ parcels }: { parcels: Parcel[] }) {
  const [active, setActive] = useState<FilterValue>("toutes");

  const counts = useMemo(() => {
    const map = new Map<FilterValue, number>();
    map.set("toutes", parcels.length);
    for (const cat of CATEGORIES) {
      map.set(cat.slug, parcels.filter((p) => p.category === cat.slug).length);
    }
    return map;
  }, [parcels]);

  const filtered =
    active === "toutes" ? parcels : parcels.filter((p) => p.category === active);

  const activeCategory = active === "toutes" ? null : CATEGORIES.find((c) => c.slug === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => setActive("toutes")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            active === "toutes"
              ? "bg-forest text-white"
              : "bg-white text-forest hover:bg-forest/10"
          }`}
        >
          Toutes ({counts.get("toutes")})
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setActive(cat.slug)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === cat.slug
                ? "bg-forest text-white"
                : "bg-white text-forest hover:bg-forest/10"
            }`}
          >
            {cat.shortLabel} ({counts.get(cat.slug)})
          </button>
        ))}
      </div>

      <div className="mt-10">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((parcel) => (
              <ParcelCard key={parcel.slug} parcel={parcel} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-forest/20 bg-white p-10 text-center">
            <p className="font-semibold text-forest">
              Aucune parcelle en ligne dans « {activeCategory?.label} » pour le moment
            </p>
            <p className="mt-2 text-sm text-forest-light">
              Nous intervenons aussi sur cette catégorie partout en Côte
              d&apos;Ivoire — parlez-nous de votre besoin et nous vous
              accompagnons.
            </p>
            <a
              href={whatsappLink(
                `Bonjour, je recherche une opportunité dans la catégorie "${activeCategory?.label}".`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-white hover:bg-gold-dark"
            >
              Décrire mon besoin sur WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
