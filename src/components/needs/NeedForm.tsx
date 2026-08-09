"use client";

import { useState, useTransition, type FormEvent } from "react";
import { FORMSPREE_ENDPOINT, FORMSPREE_FORM_ID } from "@/lib/constants";

const NEED_TYPES = [
  "Terrain agricole",
  "Lot urbain à bâtir",
  "Entrepôt",
  "Résidence",
  "Construction sur mesure",
];

const BUDGETS = [
  "Moins de 3 000 000 FCFA",
  "3 000 000 – 10 000 000 FCFA",
  "10 000 000 – 25 000 000 FCFA",
  "Plus de 25 000 000 FCFA",
  "Je ne sais pas encore",
];

const TIMELINES = [
  "Dès que possible",
  "Dans les 3 mois",
  "Dans les 6 mois",
  "Plus tard, je me renseigne",
];

const inputClass =
  "mt-1 w-full rounded-md border border-forest/20 bg-white px-3 py-2.5 text-sm text-forest placeholder:text-forest-light/50 focus:border-gold focus:outline-none";
const labelClass = "text-sm font-medium text-forest";

export function NeedForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          setStatus("success");
          (event.target as HTMLFormElement).reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    });
  }

  if (!FORMSPREE_FORM_ID) {
    return (
      <p className="rounded-lg border border-dashed border-forest/20 bg-white p-6 text-sm text-forest-light">
        Formulaire non configuré pour le moment — contactez-nous directement
        sur WhatsApp en attendant.
      </p>
    );
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-gold/30 bg-gold/5 p-8 text-center">
        <p className="font-serif text-xl text-forest">Merci !</p>
        <p className="mt-2 text-sm leading-relaxed text-forest-light">
          Votre demande a bien été envoyée. Notre équipe vous recontacte
          rapidement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="fullName">
          Nom et prénoms
        </label>
        <input id="fullName" name="fullName" type="text" required className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="phone">
          Téléphone / WhatsApp
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="+225 07 00 00 00 00"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="country">
          Pays de résidence actuel
        </label>
        <input id="country" name="country" type="text" required className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="needType">
          Type de besoin
        </label>
        <select id="needType" name="needType" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Sélectionner...
          </option>
          {NEED_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="zone">
          Zone souhaitée en Côte d&apos;Ivoire
        </label>
        <input
          id="zone"
          name="zone"
          type="text"
          required
          placeholder="Ex : Agboville, Bingerville, ou à conseiller"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="budget">
          Budget (fourchette)
        </label>
        <select id="budget" name="budget" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Sélectionner...
          </option>
          {BUDGETS.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="timeline">
          Délai souhaité
        </label>
        <select id="timeline" name="timeline" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Sélectionner...
          </option>
          {TIMELINES.map((timeline) => (
            <option key={timeline} value={timeline}>
              {timeline}
            </option>
          ))}
        </select>
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 text-sm text-red-600">
          Une erreur est survenue. Réessayez, ou contactez-nous sur WhatsApp.
        </p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-md bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gold-dark disabled:opacity-50 sm:w-auto"
        >
          {isPending ? "Envoi..." : "Envoyer ma demande"}
        </button>
      </div>
    </form>
  );
}
