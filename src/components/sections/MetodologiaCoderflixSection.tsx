import { Section } from "../layout/Section";
import { MetodologiaDiagram } from "../ui/MetodologiaDiagram";

const blocks = [
  {
    number: "01",
    title: "Evaluación estratégica",
    body: "Revisamos tu situación actual, mensaje y posicionamiento para definir el punto de partida."
  },
  {
    number: "02",
    title: "Planificación estructural",
    body: "Definimos arquitectura de contenido, jerarquía y flujo orientado a claridad y conversión."
  },
  {
    number: "03",
    title: "Desarrollo con foco en posicionamiento",
    body: "Implementación técnica que refleja autoridad y transmite confianza."
  },
  {
    number: "04",
    title: "Ajustes y mejora continua",
    body: "Refinamos en base a datos y feedback para sostener el crecimiento."
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
            Un proceso claro para construir presencia con fundamento.
          </p>
        </div>
        <div className="mb-14">
          <MetodologiaDiagram />
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:gap-12">
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
