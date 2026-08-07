import type { Parcel } from "@/types/parcel";

export const parcels: Parcel[] = [
  {
    slug: "kotchi-mpo",
    name: "Kotchi-M'po",
    category: "terrains-agricoles",
    location: "Rubino, Agboville",
    zone: "Agboville / Agnéby-Tiassa",
    area: "7ha 20a 56ca",
    titleType: "Certificat Foncier Collectif n°00061",
    verificationStatus: "verifie",
    price: 3_500_000,
    images: [],
    featured: true,
    description:
      "Terrain sécurisé par Certificat Foncier Collectif à Rubino, dans la zone d'Agboville. Titre vérifié et disponible pour transaction via notaire partenaire.",
  },
  {
    slug: "aboude-mandeke",
    name: "Aboudé-Mandéké",
    category: "terrains-agricoles",
    location: "Aboudé, Agboville",
    zone: "Agboville / Agnéby-Tiassa",
    area: "26ha 99a 11ca",
    titleType: "Certificat Foncier Individuel n°00238",
    verificationStatus: "verifie",
    price: 3_500_000,
    images: [],
    featured: true,
    description:
      "Vaste parcelle à Aboudé sécurisée par Certificat Foncier Individuel. Idéale pour projet agricole ou d'investissement de grande superficie.",
  },
  {
    slug: "grand-yapo",
    name: "Grand-Yapo",
    category: "terrains-agricoles",
    location: "Axe Abidjan-Agboville",
    zone: "Axe Abidjan-Agboville",
    area: "20 hectares",
    titleType: "Certificat Foncier en cours de sécurisation",
    verificationStatus: "en_cours",
    price: null,
    priceNote: "Photos et prix à venir",
    images: [],
    featured: true,
    description:
      "Parcelle de 20 hectares sur l'axe Abidjan-Agboville, dossier de sécurisation foncière en cours. Photos et prix seront publiés dès finalisation du Certificat Foncier.",
  },
  {
    slug: "lots-route-jacqueville",
    name: "Lots route de Jacqueville",
    category: "lots-urbains",
    location: "Route de Jacqueville",
    zone: "Jacqueville",
    area: "Lots de 500m² (ACD global 12ha)",
    titleType: "Arrêté de Concession Définitive (ACD) — 12ha global",
    verificationStatus: "verifie",
    price: null,
    priceNote: "Deux tarifs selon l'emplacement du lot",
    lots: [
      { label: "Lot en bordure de route", size: "500m²", price: 20_000_000 },
      { label: "Lot proche de l'océan", size: "500m²", price: 25_000_000 },
    ],
    images: [],
    featured: true,
    description:
      "Lotissement de 500m² issu d'un Arrêté de Concession Définitive global de 12ha, sur la route de Jacqueville. Deux emplacements disponibles : bordure de route ou proximité immédiate de l'océan.",
  },
];

export function getParcelBySlug(slug: string): Parcel | undefined {
  return parcels.find((p) => p.slug === slug);
}

export const featuredParcels = parcels.filter((p) => p.featured);

export const siteStats = {
  totalParcels: parcels.length,
  verifiedPercent: Math.round(
    (parcels.filter((p) => p.verificationStatus === "verifie").length / parcels.length) * 100
  ),
  zonesCovered: Array.from(new Set(parcels.map((p) => p.zone))),
};
