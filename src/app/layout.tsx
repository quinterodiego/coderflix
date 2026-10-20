import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { email, githubUrl, linkedinUrl, whatsappNumber } from "@/data/contact";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif"
});

// Con www: el dominio sin www redirige acá, así que el canonical tiene que coincidir.
const SITE_URL = "https://www.diegoquintero.com.ar";
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

// Datos estructurados para buscadores (schema.org).
const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Diego Quintero",
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/images/hero-image.png`,
  email: `mailto:${email}`,
  telephone: `+${whatsappNumber}`,
  areaServed: "AR",
  sameAs: [linkedinUrl, githubUrl],
  founder: { "@type": "Person", name: "Diego Quintero" }
};

const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${fraunces.variable} page-shell`}>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
