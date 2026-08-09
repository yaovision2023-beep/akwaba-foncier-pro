import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Akwaba Foncier Pro",
  description:
    "Contactez Akwaba Foncier Pro par WhatsApp ou via notre formulaire pour toute question sur nos parcelles.",
};

export default function ContactPage() {
  return (
    <div className="bg-cream">
      <section className="bg-forest-dark pb-16 pt-36 text-center sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">
            Parlons de votre projet
          </p>
          <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">Contact</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-forest/10 bg-white p-6 sm:p-8">
            <h2 className="font-serif text-xl text-forest">Envoyez-nous un message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Link
              href="/exprimez-votre-besoin"
              className="flex items-center gap-4 rounded-xl border border-gold/30 bg-gold/5 p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                  <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-forest">
                  Vous êtes loin du pays ?
                </p>
                <p className="text-sm text-forest-light">
                  Décrivez votre projet en détail, où que vous soyez
                </p>
              </div>
            </Link>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-forest/10 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-forest text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 004.62 1.14h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2zm5.8 14.05c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.09-4.85-4.28-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09 1-2.37.26-.29.57-.36.76-.36h.55c.18 0 .41-.07.64.49.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.47-.15.17-.31.37-.44.5-.15.14-.3.3-.13.59.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.05.17-.19.72-.85.92-1.14.19-.29.38-.24.64-.15.26.1 1.65.78 1.94.92.29.14.48.22.55.34.07.13.07.72-.17 1.4z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold text-forest">Discuter sur WhatsApp</p>
                <p className="text-sm text-forest-light">Réponse rapide, aux heures ouvrées</p>
              </div>
            </a>

            <div className="rounded-xl border-2 border-gold/30 bg-gold/5 p-6">
              <h3 className="font-serif text-lg text-forest">
                Votre sécurité, notre priorité
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest-light">
                Toute transaction foncière transite exclusivement par un
                notaire partenaire. Akwaba Foncier Pro n&apos;encaisse
                <strong> jamais</strong> de paiement directement — méfiez-vous
                de toute personne se présentant en notre nom pour réclamer un
                virement ou un dépôt d&apos;espèces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
