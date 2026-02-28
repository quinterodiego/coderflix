import { Section } from "../layout/Section";

export function CTAFinalSection() {
  return (
    <Section id="contacto" align="center">
      <div className="mx-auto max-w-xl space-y-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Si tu empresa está lista para crecer con estructura, conversemos.
        </h2>
        <p className="text-sm leading-relaxed text-muted">
          El primer paso no es un presupuesto. Es un diagnóstico.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:coderflixarg@gmail.com?subject=Diagn%C3%B3stico%20estrat%C3%A9gico"
            className="inline-block rounded-lg bg-accent px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-accent-dark"
          >
            Solicitar diagnóstico estratégico
          </a>
        </div>
      </div>
    </Section>
  );
}
