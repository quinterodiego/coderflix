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
  title: "Coderflix — Consultora Estratégica de Crecimiento",
  description:
    "Consultora estratégica de crecimiento. Diagnóstico, arquitectura digital, implementación y escalamiento para empresas que quieren crecer con datos y método.",
  metadataBase: new URL("https://coderflix.example.com"),
  openGraph: {
    title: "Coderflix — Consultora Estratégica de Crecimiento",
    description:
      "Sistema de crecimiento digital: diagnóstico, arquitectura, implementación, optimización y escalamiento. Enfoque en negocio y resultados.",
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

