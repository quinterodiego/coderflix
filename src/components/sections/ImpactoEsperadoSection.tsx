import { Section } from "../layout/Section";

const bullets = [
  "Aumento de consultas calificadas",
  "Mejora en tasa de conversión",
  "Reducción de fricción en el proceso comercial",
  "Mayor claridad estratégica en decisiones digitales",
  "Escalabilidad técnica sin rehacer todo"
];

export function ImpactoEsperadoSection() {
  return (
    <Section id="impacto">
      <div className="mx-auto max-w-2xl space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Impacto esperado
        </h2>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Cuando la infraestructura digital está bien diseñada, los resultados
          dejan de ser aleatorios.
        </p>
        <ul className="space-y-3 border-t border-neutral-200 pt-8">
          {bullets.map((text) => (
            <li key={text} className="flex gap-3 text-sm text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="leading-relaxed">{text}</span>
            </li>
          ))}
        </ul>
        <p className="pt-4 text-xs text-muted">
          Sin promesas numéricas falsas. Solo impacto estructural.
        </p>
      </div>
    </Section>
  );
}
