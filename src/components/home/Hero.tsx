"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { CATEGORIES } from "@/data/categories";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";

export interface HeroStats {
  totalParcels: number;
  verifiedPercent: number;
}

export function Hero({ stats }: { stats: HeroStats }) {
  const STATS = [
    { value: stats.totalParcels, suffix: "", label: "Terrains vérifiés en ligne" },
    { value: stats.verifiedPercent, suffix: "%", label: "Dossiers déjà sécurisés" },
    { value: CATEGORIES.length, suffix: "", label: "Catégories d'opportunités" },
  ];
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
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden bg-forest-dark px-4 pb-16 pt-32 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(212,165,55,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 100%",
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
        className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
      >
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-light"
          >
            Filiale de CHIM IVOIRE GROUP SARL
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-[52px] leading-[0.98] tracking-tight text-white sm:text-7xl lg:text-[84px]"
          >
            Votre terrain
            <br />
            idéal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 max-w-[46ch] text-base leading-relaxed text-cream/80 sm:text-lg"
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
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <LinkButton href="/parcelles" variant="primary" className="px-8 py-3.5 text-base">
              Voir les parcelles disponibles
            </LinkButton>
            <LinkButton href="/comment-ca-marche" variant="ghost" className="px-8 py-3.5 text-base">
              Comment ça marche
            </LinkButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gold/30 pt-8 lg:justify-self-end lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
        >
          {STATS.map((stat, index) => (
            <div key={stat.label} className={index > 0 ? "mt-8" : ""}>
              <p className="font-serif text-5xl leading-none text-gold-light sm:text-6xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-cream/60">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
