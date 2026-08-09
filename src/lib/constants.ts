export const COMPANY = {
  name: "Akwaba Foncier Pro",
  parentCompany: "CHIM IVOIRE GROUP SARL (CIG)",
  rccm: "CI-ABJ-03-2024-B13-07254",
  whatsappNumber: "2250748897011", // +225 07 48 89 70 11 (le 0 est conservé depuis la réforme 2021)
  whatsappMessage: "Bonjour, je souhaite avoir des informations sur vos parcelles.",
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message ?? COMPANY.whatsappMessage);
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${text}`;
}

export function formatFcfa(amount: number) {
  return new Intl.NumberFormat("fr-FR").format(amount) + " FCFA";
}

export const FORMSPREE_FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "";
export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
