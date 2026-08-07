"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { TrustBadges } from "@/components/layout/TrustBadges";
import { CATEGORIES } from "@/data/categories";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const blobOneY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-forest-dark px-4 py-20 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 70%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px, 64px 64px",
        }}
        aria-hidden="true"
      />
      <motion.div
        style={{ y: blobOneY }}
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-forest-light/20 blur-3xl"
      />
      <motion.div
        style={{ y: blobTwoY }}
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light"
        >
          Filiale de CHIM IVOIRE GROUP SARL
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Votre terrain idéal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg"
        >
          Terrain agricole, lot à bâtir, entrepôt ou résidence : trouvez une
          opportunité foncière et immobilière sécurisée en Côte
          d&apos;Ivoire — titres vérifiés, transactions encadrées par
          notaire, accompagnement dédié à la diaspora comme aux acheteurs
          locaux.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          {CATEGORIES.map((cat) => (
            <span
              key={cat.slug}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-cream/80"
            >
              {cat.shortLabel}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <LinkButton href="/parcelles" variant="primary" className="px-8 py-3.5 text-base">
            Voir les parcelles disponibles
          </LinkButton>
          <LinkButton href="/comment-ca-marche" variant="ghost" className="px-8 py-3.5 text-base">
            Comment ça marche
          </LinkButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 w-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
        >
          <TrustBadges variant="dark" />
        </motion.div>
      </motion.div>
    </section>
  );
}
