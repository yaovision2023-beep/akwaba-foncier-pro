import type { Metadata } from "next";
import { NeedForm } from "@/components/needs/NeedForm";
import { TrustBar } from "@/components/layout/TrustBar";
import { whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Exprimez votre besoin — Akwaba Foncier Pro",
  description:
    "Décrivez votre projet foncier ou immobilier en Côte d'Ivoire, où que vous soyez dans le monde — notre équipe vous recontacte avec une sélection adaptée.",
};

export default function ExprimezVotreBesoinPage() {
  return (
    <div className="bg-cream">
      <section className="bg-forest-dark pb-16 pt-36 text-center sm:pt-40">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">
            Diaspora & investisseurs
          </p>
          <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            Exprimez votre besoin
          </h1>
          <p className="mt-5 text-cream/80">
            Où que vous soyez dans le monde, décrivez votre projet — nous
            revenons vers vous avec une sélection de parcelles vérifiées
            adaptée à votre budget et votre zone.
          </p>
        </div>
      </section>

      <TrustBar variant="dark" />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-forest/10 bg-white p-6 sm:p-10">
          <NeedForm />
        </div>

        <p className="mt-8 text-center text-sm text-forest-light">
          Vous préférez un échange direct ?{" "}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold hover:underline"
          >
            Discutez avec nous sur WhatsApp
          </a>
          .
        </p>
      </section>
    </div>
  );
}
