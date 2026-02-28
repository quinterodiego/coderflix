import { Section } from "../layout/Section";

export function ElProblemaSection() {
  return (
    <Section id="el-problema">
      <div className="mx-auto max-w-2xl space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          La mayoría de los estudios tiene presencia, pero no estrategia.
        </h2>
        <div className="space-y-6 text-sm leading-relaxed text-muted sm:text-base">
          <p>
            Muchos profesionales cuentan con una web desactualizada, poco clara
            o sin estructura de conversión. Eso genera visitas, pero no
            consultas reales.
          </p>
          <p>
            Una presencia digital sin estrategia no construye autoridad ni
            genera oportunidades sostenidas.
          </p>
        </div>
      </div>
    </Section>
  );
}
