import { Section } from "../layout/Section";

const pillars = [
  {
    title: "Estrategia",
    body: "Partimos del modelo de negocio, no del diseño. Definimos qué tiene que lograr tu activo digital y cómo se integra con tu operación."
  },
  {
    title: "Arquitectura digital",
    body: "Diseñamos la estructura, los flujos y la lógica para que cada página tenga un rol claro en adquisición, consideración y cierre."
  },
  {
    title: "Desarrollo a medida",
    body: "Implementamos sobre tecnología moderna, sin plantillas genéricas, cuidando velocidad, escalabilidad y mantenibilidad."
  }
];

export function EnfoqueSection() {
  return (
    <Section id="enfoque">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-start">
        <div className="space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
            Enfoque
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            No diseñamos sitios. Construimos sistemas.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Cada proyecto existe para resolver tres frentes: crecimiento,
            conversión y posicionamiento. Todo lo demás es decoración. Nuestro
            trabajo es alinear tu presencia digital con los números que querés
            mover.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col justify-between border border-neutral-200 bg-white/60 px-5 py-6"
            >
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                  Pilar
                </p>
                <h3 className="mt-2 text-sm font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

