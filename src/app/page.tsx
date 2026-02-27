import { Hero } from "@/components/sections/Hero";
import { EnfoqueSection } from "@/components/sections/Enfoque";
import { ProcesoSection } from "@/components/sections/Proceso";
import { ParaQuienSection } from "@/components/sections/ParaQuien";
import { CTAFinalSection } from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <EnfoqueSection />
        <ProcesoSection />
        <ParaQuienSection />
        <CTAFinalSection />
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="container flex flex-col gap-4 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="tracking-[0.18em] uppercase">
            Coderflix — Infraestructura digital estratégica
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:coderflixarg@gmail.com"
              className="hover:text-foreground"
            >
              coderflixarg@gmail.com
            </a>
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

