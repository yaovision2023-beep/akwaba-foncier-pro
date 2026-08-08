import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Akwaba Foncier Pro — Votre terrain idéal en Côte d'Ivoire",
  description:
    "Plateforme d'intermédiation foncière en Côte d'Ivoire, filiale de CHIM IVOIRE GROUP SARL. Titres vérifiés, transactions sécurisées via notaire, accompagnement diaspora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>{children}</body>
    </html>
  );
}
