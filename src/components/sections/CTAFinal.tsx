import { Section } from "../layout/Section";

export function CTAFinalSection() {
  return (
    <Section id="contacto" align="center">
      <div className="mx-auto max-w-xl space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Si tu empresa está lista para jugar en serio, hablemos.
        </h2>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="mailto:coderflixarg@gmail.com?subject=Diagn%C3%B3stico%20estrat%C3%A9gico"
            className="inline-block rounded-full bg-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent"
          >
            Agendar diagnóstico
          </a>
        </div>
      </div>
    </Section>
  );
}
