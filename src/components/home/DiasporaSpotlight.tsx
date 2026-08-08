import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function DiasporaSpotlight() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gradient-to-br from-forest to-forest-dark">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="h-20 w-20 text-gold-light/80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden="true"
            >
              <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Diaspora
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-forest">
            Achetez à distance,
            <br />
            en toute sérénité
          </h2>
          <p className="mt-6 max-w-[42ch] text-sm leading-relaxed text-forest-light">
            De la sélection vérifiée jusqu&apos;à la remise du titre par le
            notaire, chaque étape est documentée — même à des milliers de
            kilomètres d&apos;Abidjan.
          </p>
          <div className="mt-8">
            <LinkButton href="/comment-ca-marche" variant="outline">
              Découvrir le parcours
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
