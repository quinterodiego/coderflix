import { Section } from "../layout/Section";

const yesItems = [
  "Empresas que quieren crecer con claridad de números y objetivos.",
  "Negocios que entienden el valor estratégico de sus activos digitales.",
  "Proyectos que buscan posicionamiento real, no solo presencia."
];

const noItems = [
  "Proyectos sin visión ni liderazgo definido.",
  "Negocios que compiten únicamente por precio.",
  "Clientes que buscan “algo rápido y barato” para salir del paso."
];

export function ParaQuienSection() {
  return (
    <Section id="para-quien">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Encaje
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Para quién es, y para quién no.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Trabajamos mejor con equipos que ya validaron su oferta y quieren
            que lo digital deje de ser un cuello de botella y pase a ser un
            motor de crecimiento.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-3 border border-neutral-200 bg-white/60 p-5">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
              Trabajamos con
            </p>
            <ul className="space-y-2 text-xs leading-relaxed text-muted">
              {yesItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[4px] h-1.5 w-1.5 rounded-full bg-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 border border-neutral-200 bg-neutral-50 p-5">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
              No trabajamos con
            </p>
            <ul className="space-y-2 text-xs leading-relaxed text-muted">
              {noItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[4px] h-1.5 w-1.5 rounded-full bg-neutral-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

