import { Section } from "../layout/Section";

const blocks = [
  {
    title: "Negocios con web pero sin conversión",
    body: "La web existe pero no genera consultas calificadas ni cierra oportunidades."
  },
  {
    title: "Embudos mal diseñados",
    body: "El recorrido del visitante al cliente no está pensado ni medido."
  },
  {
    title: "Tráfico sin estrategia",
    body: "Se invierte en visibilidad sin alinearla con objetivos de negocio."
  },
  {
    title: "Falta de automatización",
    body: "Procesos manuales que no escalan y consumen tiempo."
  },
  {
    title: "Escalabilidad limitada",
    body: "La estructura actual no soporta el crecimiento que buscás."
  }
];

function IconMinimal() {
  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-white text-accent"
      aria-hidden
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
    </span>
  );
}

export function ElProblemaSection() {
  return (
    <Section id="el-problema">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-14 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          El problema no es tu web. Es tu sistema.
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.slice(0, 3).map((block) => (
            <div
              key={block.title}
              className="flex gap-4 border-b border-neutral-200 pb-8"
            >
              <IconMinimal />
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {block.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {block.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 grid gap-8 sm:grid-cols-2">
          {blocks.slice(3).map((block) => (
            <div
              key={block.title}
              className="flex gap-4 border-b border-neutral-200 pb-8"
            >
              <IconMinimal />
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {block.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {block.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
