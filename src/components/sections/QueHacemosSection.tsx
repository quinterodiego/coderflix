import { Section } from "../layout/Section";

const pilares = [
  {
    title: "Estrategia",
    body: "Diagnóstico, modelo de crecimiento, funnel, posicionamiento."
  },
  {
    title: "Tecnología",
    body: "Webs optimizadas para conversión, automatización, integración."
  },
  {
    title: "Escalamiento",
    body: "Optimización, métricas, CRO, mejora continua."
  }
];

export function QueHacemosSection() {
  return (
    <Section id="que-hacemos">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-14 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          No diseñamos páginas. Construimos sistemas de crecimiento.
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {pilares.map((p) => (
            <div
              key={p.title}
              className="flex flex-col border border-neutral-200 bg-white p-6 transition-colors hover:border-neutral-300"
            >
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Pilar
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
