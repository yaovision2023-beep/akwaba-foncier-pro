import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { MotionProvider } from "@/components/motion/MotionProvider";

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
      <body
        className={`${inter.variable} ${fraunces.variable} flex min-h-screen flex-col antialiased`}
      >
        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppWidget />
        </MotionProvider>
      </body>
    </html>
  );
}
