import { defineField, defineType } from "sanity";

export const parcel = defineType({
  name: "parcel",
  title: "Parcelle",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Terrains agricoles", value: "terrains-agricoles" },
          { title: "Lots & îlots urbains", value: "lots-urbains" },
          { title: "Entrepôts industriels", value: "entrepots-industriels" },
          { title: "Résidences & appartements", value: "residences-appartements" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Localisation",
      type: "string",
      description: "Ex : Rubino, Agboville",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "zone",
      title: "Zone",
      type: "string",
      description: "Ex : Agboville / Agnéby-Tiassa",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "area",
      title: "Superficie",
      type: "string",
      description: "Ex : 7ha 20a 56ca, ou Lots de 500m²",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleType",
      title: "Type de titre",
      type: "string",
      description: "Ex : Certificat Foncier Collectif n°00061",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "verificationStatus",
      title: "Statut du titre",
      type: "string",
      options: {
        list: [
          { title: "Vérifié", value: "verifie" },
          { title: "En cours de sécurisation", value: "en_cours" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Prix (FCFA)",
      type: "number",
      description: "Laisser vide si le prix n'est pas encore fixé, ou si des lots ont des prix différents",
    }),
    defineField({
      name: "priceNote",
      title: "Mention de prix (si pas de prix fixe)",
      type: "string",
      description: "Ex : Photos et prix à venir",
    }),
    defineField({
      name: "lots",
      title: "Lots à prix différents (optionnel)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Libellé", type: "string" },
            { name: "size", title: "Taille", type: "string" },
            { name: "price", title: "Prix (FCFA)", type: "number" },
          ],
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Photos",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Parcelle phare (affichée sur l'accueil)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "location", media: "images.0" },
  },
});
