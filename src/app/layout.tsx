import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const SITE_URL = "https://diegoquintero.com.ar";
const TITLE = "Diego Quintero | Soluciones tecnológicas";
const DESCRIPTION =
  "Sitios web, automatizaciones y herramientas digitales para profesionales, negocios y proyectos.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Diego Quintero",
    type: "website",
    locale: "es_AR"
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION
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
      <body className={`${plusJakartaSans.variable} page-shell`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
