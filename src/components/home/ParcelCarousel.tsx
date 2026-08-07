"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { Parcel } from "@/types/parcel";
import { ParcelCard } from "@/components/parcels/ParcelCard";

export function ParcelCarousel({ parcels }: { parcels: Parcel[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { root: track, threshold: 0.6 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [parcels.length]);

  function scrollToIndex(index: number) {
    const card = cardRefs.current[index];
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  function scrollBy(direction: 1 | -1) {
    const next = Math.min(Math.max(activeIndex + direction, 0), parcels.length - 1);
    scrollToIndex(next);
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {parcels.map((parcel, index) => (
          <div
            key={parcel.slug}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="w-[82%] flex-shrink-0 snap-center sm:w-[45%] lg:w-[30%]"
          >
            <ParcelCard parcel={parcel} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollBy(-1)}
          disabled={activeIndex === 0}
          aria-label="Parcelle précédente"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-forest/20 text-forest transition-colors hover:bg-forest hover:text-white disabled:opacity-30"
        >
          ←
        </motion.button>

        <div className="flex items-center gap-2">
          {parcels.map((parcel, index) => (
            <button
              key={parcel.slug}
              type="button"
              onClick={() => scrollToIndex(index)}
              aria-label={`Aller à la parcelle ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? "w-6 bg-gold" : "w-2 bg-forest/20"
              }`}
            />
          ))}
        </div>

        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollBy(1)}
          disabled={activeIndex === parcels.length - 1}
          aria-label="Parcelle suivante"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-forest/20 text-forest transition-colors hover:bg-forest hover:text-white disabled:opacity-30"
        >
          →
        </motion.button>
      </div>
    </div>
  );
}
