"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const FACTS = [
  { value: "20 años", label: "programando" },
  { value: "Quilmes", label: "Buenos Aires, Argentina" },
  { value: "1 a 1", label: "trato directo, sin intermediarios" }
];

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="section-padding border-t border-line"
      aria-label="Sobre mí"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading eyebrow="Sobre mí" title="Hola, soy Diego." />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
              className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-muted"
            >
              <p>
                Programo hace 20 años. En todo ese tiempo aprendí que la mejor
                tecnología es la que no se nota: la que te ahorra tiempo, ordena
                tu trabajo y simplemente funciona.
              </p>
              <p>
                Trabajo desde Quilmes, Buenos Aires. Cada proyecto lo llevo yo
                de principio a fin, así que hablás siempre conmigo: el que te
                escucha es el mismo que después lo construye.
              </p>
              <p>
                Y cuando no estoy trabajando para alguien, sigo creando
                herramientas propias, como las que vas a ver más abajo.
              </p>
            </motion.div>
          </div>

          <dl className="grid gap-8 border-t border-line pt-8 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            {FACTS.map((fact, index) => (
              <motion.div
                key={fact.value}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className="flex flex-col-reverse"
              >
                <dt className="mt-1 text-sm text-muted">{fact.label}</dt>
                <dd className="font-serif text-3xl font-semibold tracking-tight text-brand-fg">
                  {fact.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
