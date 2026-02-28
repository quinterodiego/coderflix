import { Hero } from "@/components/sections/Hero";
import { ElProblemaSection } from "@/components/sections/ElProblemaSection";
import { QueHacemosSection } from "@/components/sections/QueHacemosSection";
import { VisualSistemasSection } from "@/components/sections/VisualSistemasSection";
import { ParaQuienTrabajamosSection } from "@/components/sections/ParaQuienTrabajamosSection";
import { ProcesoSection } from "@/components/sections/ProcesoSection";
import { CTAFinalSection } from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <ElProblemaSection />
        <QueHacemosSection />
        <VisualSistemasSection />
        <ParaQuienTrabajamosSection />
        <ProcesoSection />
        <CTAFinalSection />
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="container flex flex-col gap-4 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="tracking-[0.18em] uppercase">
            Coderflix — Consultora estratégica de crecimiento digital
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:coderflixarg@gmail.com"
              className="transition-colors duration-300 hover:text-accent"
            >
              coderflixarg@gmail.com
            </a>
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-accent"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
