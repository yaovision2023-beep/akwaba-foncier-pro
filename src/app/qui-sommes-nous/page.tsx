import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous — Akwaba Foncier Pro",
  description:
    "Découvrez Akwaba Foncier Pro, filiale de CHIM IVOIRE GROUP SARL : notre histoire, notre vision, notre mission, notre ancrage et notre engagement.",
};

const SECTIONS: { id: string; title: string; paragraphs: string[] | null }[] = [
  {
    id: "qui-sommes-nous",
    title: "Qui sommes-nous",
    paragraphs: [
      "Akwaba Foncier Pro est la plateforme d'intermédiation foncière de CHIM IVOIRE GROUP SARL (CIG), structure enregistrée à Abidjan, Cocody, sous le RCCM CI-ABJ-03-2024-B13-07254. Nous accompagnons la diaspora ivoirienne et les investisseurs locaux dans l'acquisition de terrains, lots et îlots sécurisés à Agboville, Bingerville et leurs environs. Au-delà de la vente et de la location, nous structurons également des projets de construction sur mesure — immeubles et résidences en copropriété, montés en SCI selon les besoins du client. Notre différence : chaque dossier est vérifié avant d'être présenté, et chaque paiement transite exclusivement par un notaire partenaire.",
    ],
  },
  {
    id: "histoire",
    title: "Notre histoire",
    paragraphs: [
      "Akwaba Foncier Pro est né d'un constat de terrain : trop de familles et d'investisseurs, en particulier au sein de la diaspora, se retrouvaient démunis face à des transactions foncières informelles, sans garantie ni accompagnement. Ce qui a commencé comme une activité de courtage foncier de proximité, portée par Yao Manyali Jean-Nicaise, s'est progressivement structuré pour donner naissance à une véritable plateforme professionnelle — capable de répondre avec rigueur et transparence à un besoin réel de sécurisation sur le marché foncier ivoirien.",
    ],
  },
  {
    id: "vision",
    title: "Notre vision",
    paragraphs: [
      "Nous imaginons un avenir où l'accès à la terre en Côte d'Ivoire ne dépend plus de la proximité géographique ni du bouche-à-oreille, mais d'une information fiable, vérifiée et accessible à tous — d'Abidjan à la diaspora.",
      "Notre vision est de bâtir une plateforme de référence en Afrique de l'Ouest, qui connecte les communautés, encourage des pratiques foncières responsables, et soutient un avenir où chacun peut investir en toute sérénité.",
    ],
  },
  {
    id: "mission",
    title: "Notre mission",
    paragraphs: [
      "Notre mission est de rendre l'acquisition d'un terrain simple, transparente et sereine, en Côte d'Ivoire comme depuis l'étranger. En combinant vérification documentaire rigoureuse et outils modernes, nous aidons chaque client à trouver un bien qui correspond réellement à ses besoins et son budget.",
      "Notre mission est d'accompagner chaque acheteur avec clarté et confiance, à chaque étape — en misant sur la précision, le suivi personnalisé et la sécurité, pour que le parcours reste toujours transparent et rassurant.",
    ],
  },
  {
    id: "ancrage",
    title: "Notre ancrage",
    paragraphs: [
      "Implantés à Abidjan, nous couvrons progressivement les zones foncières stratégiques de Côte d'Ivoire — Agboville, Bingerville, et au-delà. Notre réseau grandit pour connecter la diaspora ivoirienne et les investisseurs internationaux à des opportunités foncières vérifiées, où qu'ils se trouvent dans le monde.",
    ],
  },
  {
    id: "engagement",
    title: "Notre engagement",
    paragraphs: [
      "Nous nous engageons à ne publier que des dossiers vérifiés — titre foncier, ACD, certificat foncier ou attestation villageoise — pour que chaque décision soit prise en toute clarté et en toute sécurité.",
      "Notre plateforme repose sur des pratiques transparentes pour acheteurs, locataires et propriétaires. Nous croyons qu'un investissement foncier responsable commence par l'honnêteté et l'accès à l'information.",
      "Nous travaillons continuellement à renforcer la confiance entre propriétaires terriens, notaires et investisseurs, et à encourager des choix réfléchis — parce qu'un achat foncier sûr construit aussi l'avenir du pays.",
    ],
  },
];

export default function QuiSommesNousPage() {
  return (
    <div className="bg-cream">
      <section className="bg-forest-dark py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gold-light">
            Akwaba Foncier Pro
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Qui sommes-nous
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-14 px-4 py-16 sm:px-6 lg:px-8">
        {SECTIONS.map((section) => (
          <div key={section.id} id={section.id}>
            <h2 className="text-2xl font-bold text-forest">{section.title}</h2>
            {section.paragraphs ? (
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-forest-light">
                    {p}
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm italic leading-relaxed text-forest-light/60">
                Contenu en attente de rédaction.
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
