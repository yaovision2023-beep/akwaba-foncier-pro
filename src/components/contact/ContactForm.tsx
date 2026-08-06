"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/constants";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Bonjour, je m'appelle ${name} (${phone}).\n\n${message}`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-forest">Nom complet</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border border-forest/20 bg-white px-3 py-2.5 text-sm text-forest placeholder:text-forest-light/50 focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-forest">
          Téléphone / WhatsApp
        </label>
        <input
          type="tel"
          required
          placeholder="+225 07 00 00 00 00"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-md border border-forest/20 bg-white px-3 py-2.5 text-sm text-forest placeholder:text-forest-light/50 focus:border-gold focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-forest">Message</label>
        <textarea
          required
          rows={4}
          placeholder="Parlez-nous de votre projet foncier..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-md border border-forest/20 bg-white px-3 py-2.5 text-sm text-forest placeholder:text-forest-light/50 focus:border-gold focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-dark"
      >
        Envoyer via WhatsApp
      </button>
      <p className="text-xs text-forest-light">
        Ce formulaire ouvre WhatsApp avec votre message pré-rempli — aucune
        donnée n&apos;est stockée sur ce site.
      </p>
    </form>
  );
}
