export interface PricingTier {
  label: string;
  description: string;
  price: number;
  highlight?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    label: "Certificat Foncier délivré",
    description:
      "Titre foncier finalisé et enregistré. Sécurisation maximale, transaction immédiate possible via notaire.",
    price: 3_500_000,
    highlight: true,
  },
  {
    label: "Certificat Foncier en cours",
    description:
      "Dossier de Certificat Foncier engagé et en cours de délivrance auprès des autorités compétentes.",
    price: 3_000_000,
  },
  {
    label: "Attestation villageoise",
    description:
      "Reconnaissance coutumière du droit foncier, éligible au parcours de sécurisation AFOR en 9 étapes.",
    price: 2_000_000,
  },
];
