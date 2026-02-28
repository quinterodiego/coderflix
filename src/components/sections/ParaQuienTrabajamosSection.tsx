import { Section } from "../layout/Section";

const items = [
  "Buscan proyectar autoridad real",
  "Quieren dejar atrás una web improvisada",
  "Entienden que la claridad genera confianza",
  "Valoran una estructura pensada, no plantillas rápidas"
];

export function ParaQuienTrabajamosSection() {
  return (
    <Section id="para-quien">
      <div className="mx-auto max-w-2xl space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Trabajamos con profesionales que:
        </h2>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
