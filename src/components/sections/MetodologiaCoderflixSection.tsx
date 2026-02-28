import { Section } from "../layout/Section";

const blocks = [
  {
    number: "01",
    title: "Diagnóstico estratégico",
    body: "Analizamos negocio, mercado, competencia y estructura digital actual."
  },
  {
    number: "02",
    title: "Arquitectura de crecimiento",
    body: "Definimos estructura, embudos, jerarquía de contenido y objetivos medibles."
  },
  {
    number: "03",
    title: "Construcción orientada a métricas",
    body: "Desarrollamos infraestructura digital optimizada para conversión, rendimiento y escalabilidad."
  },
  {
    number: "04",
    title: "Optimización continua",
    body: "Medimos, ajustamos y refinamos en base a datos reales."
  }
];

export function MetodologiaCoderflixSection() {
  return (
    <Section id="metodologia">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Metodología Coderflix™
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Un proceso estructurado orientado a crecimiento real.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {blocks.map((block) => (
            <div
              key={block.number}
              className="flex flex-col gap-3 border-b border-neutral-200 pb-8 last:border-0 sm:pb-0"
            >
              <span className="text-3xl font-bold tabular-nums text-accent sm:text-4xl">
                {block.number}
              </span>
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
