import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "tBRL | Real Brasileiro na Web3",
  description:
    "A stablecoin 100% lastreada em real que conecta o Pix à Web3, liberando liquidez instantânea para exchanges, fintechs, bancos digitais e corporações globais.",
  keywords:
    "tBRL, stablecoin, real brasileiro, pix, web3, blockchain, fintech, crypto, payments",
  openGraph: {
    title: "tBRL | Real Brasileiro na Web3",
    description: "A stablecoin 100% lastreada em real que conecta o Pix à Web3",
    images: [{ url: "/og-image.png" }],
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
