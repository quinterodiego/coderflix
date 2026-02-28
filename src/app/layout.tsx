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
  title: "Consultora Estratégica de Crecimiento Digital | Coderflix",
  description:
    "Ayudamos a negocios que ya facturan a escalar mediante estrategia, tecnología y ejecución digital de alto impacto.",
  metadataBase: new URL("https://coderflix.example.com"),
  openGraph: {
    title: "Consultora Estratégica de Crecimiento Digital | Coderflix",
    description:
      "Ayudamos a negocios que ya facturan a escalar mediante estrategia, tecnología y ejecución digital de alto impacto.",
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

