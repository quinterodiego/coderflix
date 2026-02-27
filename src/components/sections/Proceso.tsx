import { Section } from "../layout/Section";

const steps = [
  {
    code: "01",
    title: "Diagnóstico",
    body: "Levantamos contexto de negocio, oferta, mercado y activos actuales. Identificamos brechas y oportunidades concretas."
  },
  {
    code: "02",
    title: "Arquitectura",
    body: "Definimos la estructura, los mensajes clave y los recorridos que tienen que vivir tus leads antes de hablar con vos."
  },
  {
    code: "03",
    title: "Construcción",
    body: "Diseñamos y desarrollamos el sistema completo sobre Next.js, cuidando performance, SEO y escalabilidad."
  },
  {
    code: "04",
    title: "Escalado",
    body: "Medimos, ajustamos y preparamos la base para futuras campañas, contenidos y nuevas líneas de negocio."
  }
];

export function ProcesoSection() {
  return (
    <Section id="metodologia">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Proceso
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Nuestra metodología.
          </h2>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            Un proceso deliberadamente simple, diseñado para tomar decisiones
            rápidas y reducir la fricción entre estrategia y ejecución.
          </p>
        </div>
        <ol className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.code}
              className="flex flex-col justify-between border border-neutral-200 bg-white/60 p-5"
            >
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                  {step.code}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted">
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

