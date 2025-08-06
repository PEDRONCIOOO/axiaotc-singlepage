import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TranslationProvider from "@/components/TranslationProvider";
import LanguageToggle from "@/components/LanguageToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Geist_Mono({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Axia | OTC",
  description:
    "Para investidores e empresas que precisam de agilidade, segurança e um parceiro especialista para movimentar a partir de R$20.000 sem impactar o mercado e sem as travas do sistema tradicional.",
  keywords:
    "Axia, OTC, stablecoin, real brasileiro, pix, web3, blockchain, fintech, crypto, payments",
  openGraph: {
    title: "Axia | OTC",
    description: "Para investidores e empresas que precisam de agilidade, segurança e um parceiro especialista para movimentar a partir de R$20.000 sem impactar o mercado e sem as travas do sistema tradicional.",
    images: [{ url: "/axialogo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistMono.variable} antialiased`}
      >
        <TranslationProvider>
          <LanguageToggle />
          <Header />
          {children}
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
