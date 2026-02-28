import { Section } from "../layout/Section";

const bullets = [
  "Pensamos en negocio antes que en diseño.",
  "Cada proyecto parte de un diagnóstico real.",
  "No trabajamos con volumen, trabajamos con impacto."
];

export function AutoridadSection() {
  return (
    <section
      id="autoridad"
      className="section-padding bg-[#f7f7f7]"
      aria-labelledby="autoridad-title"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl space-y-10">
          <div className="space-y-6">
            <h2
              id="autoridad-title"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              No somos una agencia más.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Nuestro enfoque es estratégico, no estético. Lo que construimos
              está pensado para mover números, no solo para verse bien.
            </p>
          </div>
          <ul className="space-y-4 border-t border-neutral-200 pt-8">
            {bullets.map((text) => (
              <li key={text} className="flex gap-3 text-sm text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
