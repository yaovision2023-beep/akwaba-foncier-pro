import type { ParcelCategory } from "@/types/parcel";

export interface CategoryInfo {
  slug: ParcelCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: "terrains-agricoles",
    label: "Terrains agricoles",
    shortLabel: "Agricole",
    description: "Exploitation, plantation, projets ruraux.",
  },
  {
    slug: "lots-urbains",
    label: "Lots & îlots pour construction urbaine",
    shortLabel: "Lots urbains",
    description: "Résidentiel, immeubles, projets en SCI.",
  },
  {
    slug: "entrepots-industriels",
    label: "Entrepôts & locaux industriels",
    shortLabel: "Entrepôts",
    description: "Pour sociétés nationales et internationales.",
  },
  {
    slug: "residences-appartements",
    label: "Résidences & appartements",
    shortLabel: "Résidences",
    description: "Séjour court ou long, investissement locatif.",
  },
];

export function getCategoryInfo(slug: ParcelCategory): CategoryInfo {
  return CATEGORIES.find((c) => c.slug === slug)!;
}
