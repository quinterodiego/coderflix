import { Section } from "../layout/Section";

const si = [
  "Negocios que ya facturan",
  "Empresas que quieren escalar",
  "Marcas personales con ambición"
];

const no = [
  "No trabajamos con proyectos sin validación",
  "No hacemos trabajos low-budget",
  "No competimos por precio"
];

export function ParaQuienTrabajamosSection() {
  return (
    <Section id="para-quien">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Esto no es para todos.
        </h2>
        <div className="grid gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <ul className="space-y-3">
              {si.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-0.5 shrink-0 font-medium text-accent">
                    ✔
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <ul className="space-y-3">
              {no.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="mt-0.5 shrink-0 font-medium">✘</span>
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
