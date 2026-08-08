import type { Metadata } from "next";
import { TrustBar } from "@/components/layout/TrustBar";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Comment ça marche — Akwaba Foncier Pro",
  description:
    "Le guide pour acheter un terrain à distance en Côte d'Ivoire : vérification du titre, rôle du notaire, étapes jusqu'à la remise du titre.",
};

const STEPS = [
  {
    title: "Exprimez votre besoin",
    description:
      "Contactez-nous via le site ou WhatsApp avec vos critères : zone souhaitée, budget, type de terrain (nu ou bâti), usage prévu.",
  },
  {
    title: "Recevez une sélection vérifiée",
    description:
      "Nous vous présentons uniquement des parcelles dont le titre a déjà été contrôlé (Certificat Foncier, Titre Foncier, ACD ou attestation villageoise reconnue), avec photos, GPS et statut de sécurisation.",
  },
  {
    title: "Validez votre choix à distance",
    description:
      "Toutes les informations (dossier, prix, statut) vous sont transmises pour que vous puissiez décider sans être physiquement présent en Côte d'Ivoire.",
  },
  {
    title: "Réservation sécurisée",
    description:
      "Une fois votre choix fait, vous versez uniquement des frais de réservation (50 000 à 200 000 FCFA selon le dossier) via un compte de paiement dédié — jamais directement à un intermédiaire.",
  },
  {
    title: "Vérification finale et signature",
    description:
      "Notre équipe accompagne la vérification finale du dossier auprès du notaire partenaire, qui encadre l'ensemble de la transaction.",
  },
  {
    title: "Transfert de propriété",
    description:
      "Le paiement final et la remise du titre se font exclusivement par l'intermédiaire du notaire, garantissant la sécurité juridique de votre acquisition, où que vous soyez dans le monde.",
  },
];

export default function CommentCaMarchePage() {
  return (
    <div className="bg-cream">
      <section className="bg-forest-dark pb-16 pt-36 text-center sm:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-light">
            Guide diaspora
          </p>
          <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            Comment ça marche
          </h1>
          <p className="mt-5 text-cream/80">
            Acheter un terrain sécurisé en Côte d&apos;Ivoire, à distance,
            étape par étape.
          </p>
        </div>
      </section>

      <TrustBar variant="dark" />

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <ol className="relative space-y-10 border-l-2 border-forest/15 pl-8 sm:pl-10">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-gold font-serif text-sm text-white sm:-left-[49px] sm:h-9 sm:w-9">
                {index + 1}
              </span>
              <Reveal delay={Math.min(index * 0.06, 0.24)}>
                <h2 className="font-serif text-xl text-forest">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-forest-light">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-sm border border-gold/30 bg-gold/5 p-8">
          <h2 className="font-serif text-xl text-forest">
            Notre engagement envers vous
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-forest-light">
            CIG n&apos;encaisse jamais directement les fonds liés à une
            vente. Chaque étape est documentée et vérifiable, pour que vous
            puissiez investir en toute confiance, même à distance.
          </p>
        </div>
      </section>
    </div>
  );
}
