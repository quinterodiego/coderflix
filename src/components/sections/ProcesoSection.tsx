import { Section } from "../layout/Section";
import { MetodologiaDiagram } from "../ui/MetodologiaDiagram";

const fases = [
  {
    number: "01",
    title: "Diagnóstico estratégico",
    body: "Entendemos tu negocio, mercado y situación digital actual."
  },
  {
    number: "02",
    title: "Diseño del sistema",
    body: "Definimos estructura, funnel y arquitectura de crecimiento."
  },
  {
    number: "03",
    title: "Implementación técnica",
    body: "Ejecutamos con foco en conversión, rendimiento y buenas prácticas."
  },
  {
    number: "04",
    title: "Optimización y escalamiento",
    body: "Medimos, ajustamos y preparamos la base para crecer."
  }
];

export function ProcesoSection() {
  return (
    <Section id="proceso">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Cómo trabajamos
        </h2>
        <p className="mb-14 max-w-xl text-sm leading-relaxed text-muted">
          Un proceso claro, sin atajos.
        </p>
        <div className="mb-14">
          <MetodologiaDiagram />
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          {fases.map((fase) => (
            <div
              key={fase.number}
              className="flex flex-col gap-2 border-b border-neutral-200 pb-8 last:border-0 sm:pb-0"
            >
              <span className="text-3xl font-bold tabular-nums text-accent sm:text-4xl">
                {fase.number}
              </span>
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                {fase.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {fase.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
