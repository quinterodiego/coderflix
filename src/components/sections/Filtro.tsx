import { Section } from "../layout/Section";

const trabajamosCon = [
  "Empresas que entienden que lo digital es inversión.",
  "Equipos que buscan posicionamiento real.",
  "Negocios con visión de crecimiento."
];

const noTrabajamosCon = [
  "Proyectos sin dirección clara.",
  "Negocios que compiten solo por precio.",
  "Clientes que buscan algo rápido y barato."
];

export function FiltroSection() {
  return (
    <Section id="con-quien">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Con quién trabajamos
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-16">
          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              Trabajamos con
            </p>
            <ul className="space-y-3">
              {trabajamosCon.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
              No trabajamos con
            </p>
            <ul className="space-y-3">
              {noTrabajamosCon.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
