import { Section } from "../layout/Section";

const items = [
  "Plataformas web estratégicas",
  "Arquitectura de conversión",
  "Optimización de rendimiento",
  "Automatización de captación",
  "Reestructuración digital empresarial"
];

export function QueConstruimosSection() {
  return (
    <Section id="que-construimos">
      <div className="mx-auto max-w-2xl space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Qué construimos
        </h2>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Cada proyecto es una pieza dentro de un sistema de crecimiento.
        </p>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
