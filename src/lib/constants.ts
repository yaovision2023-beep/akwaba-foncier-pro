export const COMPANY = {
  name: "Akwaba Foncier Pro",
  parentCompany: "CHIM IVOIRE GROUP SARL (CIG)",
  rccm: "CI-ABJ-03-2024-B13-07254",
  whatsappNumber: "225556735146", // +225 05 56 73 51 46
  whatsappMessage: "Bonjour, je souhaite avoir des informations sur vos parcelles.",
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? COMPANY.whatsappMessage);
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`;
}

export function formatFcfa(amount: number) {
  return new Intl.NumberFormat("fr-FR").format(amount) + " FCFA";
}
