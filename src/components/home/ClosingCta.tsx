import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function ClosingCta() {
  return (
    <section className="bg-forest-dark py-28 text-center">
      <Reveal className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl text-white sm:text-5xl">
          Prêt à sécuriser votre terrain ?
        </h2>
        <p className="mt-5 text-cream/75">
          Parlez-nous de votre projet — nous vous répondons rapidement, où
          que vous soyez.
        </p>
        <div className="mt-9">
          <LinkButton href="/contact" variant="primary" className="px-8 py-3.5 text-base">
            Parler à notre équipe
          </LinkButton>
        </div>
      </Reveal>
    </section>
  );
}
