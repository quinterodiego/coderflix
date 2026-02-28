import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CRITICAL_CSS } from "./critical-styles";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Coderflix — Infraestructura digital estratégica",
  description:
    "Agencia boutique que construye activos digitales estratégicos para empresas en Argentina. Estrategia, arquitectura digital y desarrollo a medida.",
  metadataBase: new URL("https://coderflix.example.com"),
  openGraph: {
    title: "Coderflix — Infraestructura digital estratégica",
    description:
      "Infraestructura digital pensada para escalar empresas: estrategia, arquitectura y desarrollo con foco en negocio.",
    url: "https://coderflix.example.com",
    siteName: "Coderflix",
    type: "website",
    locale: "es_AR"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} page-shell`}>
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />
        {children}
      </body>
    </html>
  );
}

