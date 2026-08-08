import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || projectId === "your-project-id") {
  throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID manquant ou non renseigné dans .env.local");
}
if (!token || token === "your-write-token") {
  throw new Error("SANITY_API_WRITE_TOKEN manquant ou non renseigné dans .env.local");
}

const client = createClient({
  projectId,
  dataset: dataset || "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const parcels = [
  {
    _type: "parcel",
    name: "Kotchi-M'po",
    slug: { _type: "slug", current: "kotchi-mpo" },
    category: "terrains-agricoles",
    location: "Rubino, Agboville",
    zone: "Agboville / Agnéby-Tiassa",
    area: "7ha 20a 56ca",
    titleType: "Certificat Foncier Collectif n°00061",
    verificationStatus: "verifie",
    price: 3_500_000,
    featured: true,
    description:
      "Terrain sécurisé par Certificat Foncier Collectif à Rubino, dans la zone d'Agboville. Titre vérifié et disponible pour transaction via notaire partenaire.",
  },
  {
    _type: "parcel",
    name: "Aboudé-Mandéké",
    slug: { _type: "slug", current: "aboude-mandeke" },
    category: "terrains-agricoles",
    location: "Aboudé, Agboville",
    zone: "Agboville / Agnéby-Tiassa",
    area: "26ha 99a 11ca",
    titleType: "Certificat Foncier Individuel n°00238",
    verificationStatus: "verifie",
    price: 3_500_000,
    featured: true,
    description:
      "Vaste parcelle à Aboudé sécurisée par Certificat Foncier Individuel. Idéale pour projet agricole ou d'investissement de grande superficie.",
  },
  {
    _type: "parcel",
    name: "Grand-Yapo",
    slug: { _type: "slug", current: "grand-yapo" },
    category: "terrains-agricoles",
    location: "Axe Abidjan-Agboville",
    zone: "Axe Abidjan-Agboville",
    area: "20 hectares",
    titleType: "Certificat Foncier en cours de sécurisation",
    verificationStatus: "en_cours",
    priceNote: "Photos et prix à venir",
    featured: true,
    description:
      "Parcelle de 20 hectares sur l'axe Abidjan-Agboville, dossier de sécurisation foncière en cours. Photos et prix seront publiés dès finalisation du Certificat Foncier.",
  },
  {
    _type: "parcel",
    name: "Lots route de Jacqueville",
    slug: { _type: "slug", current: "lots-route-jacqueville" },
    category: "lots-urbains",
    location: "Route de Jacqueville",
    zone: "Jacqueville",
    area: "Lots de 500m² (ACD global 12ha)",
    titleType: "Arrêté de Concession Définitive (ACD) — 12ha global",
    verificationStatus: "verifie",
    priceNote: "Deux tarifs selon l'emplacement du lot",
    lots: [
      { _type: "object", _key: "bordure-route", label: "Lot en bordure de route", size: "500m²", price: 20_000_000 },
      { _type: "object", _key: "proche-ocean", label: "Lot proche de l'océan", size: "500m²", price: 25_000_000 },
    ],
    featured: true,
    description:
      "Lotissement de 500m² issu d'un Arrêté de Concession Définitive global de 12ha, sur la route de Jacqueville. Deux emplacements disponibles : bordure de route ou proximité immédiate de l'océan.",
  },
];

for (const parcel of parcels) {
  const documentId = `parcel-${parcel.slug.current}`;
  await client.createOrReplace({ _id: documentId, ...parcel });
  console.log(`✓ ${parcel.name}`);
}

console.log(`\n${parcels.length} parcelles migrées vers Sanity (dataset "${dataset || "production"}").`);
