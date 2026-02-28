import { Section } from "../layout/Section";

const bullets = [
  "No vendemos horas. Diseñamos sistemas.",
  "No ejecutamos sin diagnóstico. Medimos antes de construir.",
  "No trabajamos por estética. Trabajamos por impacto."
];

export function PosicionamientoSection() {
  return (
    <Section id="posicionamiento">
      <div className="mx-auto max-w-2xl space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          No somos una agencia. Somos consultora estratégica.
        </h2>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Trabajamos con empresas que entienden que su presencia digital es un
          activo. Nuestro enfoque combina análisis, arquitectura y ejecución
          con una sola meta: crecimiento sostenible.
        </p>
        <ul className="space-y-3 border-t border-neutral-200 pt-8">
          {bullets.map((text) => (
            <li key={text} className="flex gap-3 text-sm text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
