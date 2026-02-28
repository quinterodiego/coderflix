import { Section } from "../layout/Section";

const steps = [
  {
    code: "01",
    title: "Diagnóstico estratégico",
    body: "Contexto de negocio, oferta y activos actuales. Identificamos brechas y oportunidades."
  },
  {
    code: "02",
    title: "Arquitectura digital",
    body: "Estructura, mensajes clave y recorridos que tienen que vivir tus leads."
  },
  {
    code: "03",
    title: "Construcción",
    body: "Diseño y desarrollo del sistema. Performance, SEO y escalabilidad."
  },
  {
    code: "04",
    title: "Escalado y optimización",
    body: "Medición, ajustes y base para futuras campañas y líneas de negocio."
  }
];

export function ProcesoSection() {
  return (
    <Section id="metodologia">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Metodología
        </h2>
        <ol className="mt-12 flex flex-col gap-8 sm:gap-10">
          {steps.map((step) => (
            <li
              key={step.code}
              className="flex gap-6 border-b border-neutral-200 pb-8 last:border-0 last:pb-0 sm:gap-8"
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                {step.code}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
