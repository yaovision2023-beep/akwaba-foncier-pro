export type VerificationStatus = "verifie" | "en_cours";

export interface ParcelLot {
  label: string;
  size: string;
  price: number;
}

export interface Parcel {
  slug: string;
  name: string;
  location: string;
  zone: string;
  area: string;
  titleType: string;
  verificationStatus: VerificationStatus;
  price: number | null;
  priceNote?: string;
  lots?: ParcelLot[];
  images: string[];
  featured: boolean;
  description: string;
}
