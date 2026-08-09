import { client } from "./client";
import type { Parcel } from "@/types/parcel";

const PARCEL_PROJECTION = `{
  "slug": slug.current,
  name,
  category,
  location,
  zone,
  area,
  titleType,
  verificationStatus,
  price,
  priceNote,
  lots,
  "images": coalesce(images[].asset->url, []),
  "video": video.asset->url,
  featured,
  description
}`;

export async function getAllParcels(): Promise<Parcel[]> {
  return client.fetch(
    `*[_type == "parcel"] | order(_createdAt desc) ${PARCEL_PROJECTION}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getFeaturedParcels(): Promise<Parcel[]> {
  return client.fetch(
    `*[_type == "parcel" && featured == true] | order(_createdAt desc) ${PARCEL_PROJECTION}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getParcelBySlug(slug: string): Promise<Parcel | null> {
  return client.fetch(
    `*[_type == "parcel" && slug.current == $slug][0] ${PARCEL_PROJECTION}`,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getAllParcelSlugs(): Promise<string[]> {
  const slugs: string[] = await client.fetch(
    `*[_type == "parcel"].slug.current`,
    {},
    { next: { revalidate: 60 } }
  );
  return slugs;
}

export async function getSiteStats() {
  const parcels = await getAllParcels();
  return {
    totalParcels: parcels.length,
    verifiedPercent: parcels.length
      ? Math.round(
          (parcels.filter((p) => p.verificationStatus === "verifie").length /
            parcels.length) *
            100
        )
      : 0,
    zonesCovered: Array.from(new Set(parcels.map((p) => p.zone))),
  };
}
