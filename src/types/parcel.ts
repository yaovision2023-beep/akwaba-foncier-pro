export type VerificationStatus = "verifie" | "en_cours";

export type ParcelCategory =
  | "terrains-agricoles"
  | "lots-urbains"
  | "entrepots-industriels"
  | "residences-appartements";

export interface ParcelLot {
  label: string;
  size: string;
  price: number;
}

export interface Parcel {
  slug: string;
  name: string;
  category: ParcelCategory;
  location: string;
  zone: string;
  area: string;
  titleType: string;
  verificationStatus: VerificationStatus;
  price: number | null;
  priceNote?: string;
  lots?: ParcelLot[];
  images: string[];
  video: string | null;
  featured: boolean;
  description: string;
}
