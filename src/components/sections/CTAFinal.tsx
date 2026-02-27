import { Section } from "../layout/Section";

export function CTAFinalSection() {
  return (
    <Section id="contacto" align="center">
      <div className="mx-auto max-w-2xl space-y-6">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          Próximo paso
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Si tu empresa está lista para jugar en serio, hablemos.
        </h2>
        <p className="text-sm leading-relaxed text-muted sm:text-base">
          Un diagnóstico estratégico para entender dónde estás parado hoy, qué
          frena tu crecimiento digital y qué tendría que hacer tu infraestructura
          para acompañar los próximos años.
        </p>
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="mailto:contacto@coderflix.agency?subject=Diagn%C3%B3stico%20estrat%C3%A9gico"
            className="inline-flex items-center rounded-full bg-foreground px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-accent"
          >
            Agendar diagnóstico
          </a>
          <span className="text-xs text-muted">
            También podés escribirnos por WhatsApp si preferís coordinar por ahí.
          </span>
        </div>
      </div>
    </Section>
  );
}

