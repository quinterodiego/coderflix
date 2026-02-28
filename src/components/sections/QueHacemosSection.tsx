import { Section } from "../layout/Section";

const blocks = [
  {
    title: "Diagnóstico de posicionamiento",
    body: "Analizamos tu situación actual y detectamos oportunidades reales de mejora."
  },
  {
    title: "Arquitectura digital",
    body: "Definimos estructura, jerarquía de contenido y experiencia enfocada en claridad y confianza."
  },
  {
    title: "Implementación técnica sólida",
    body: "Desarrollo optimizado en rendimiento, velocidad y buenas prácticas."
  },
  {
    title: "Optimización continua",
    body: "Ajustes estratégicos orientados a mejorar captación y claridad."
  }
];

export function QueHacemosSection() {
  return (
    <Section id="que-hacemos">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Construimos estructura, no solo diseño.
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
          {blocks.map((block) => (
            <div
              key={block.title}
              className="flex flex-col gap-3 border-b border-neutral-200 pb-8 last:border-0 sm:pb-0"
            >
              <h3 className="text-base font-semibold text-foreground sm:text-lg">
                {block.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
