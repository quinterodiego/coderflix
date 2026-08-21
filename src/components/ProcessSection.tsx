"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section
      id="como-trabajo"
      className="section-padding border-t border-line bg-beige py-16 sm:py-[90px]"
      aria-label="Forma de trabajo"
    >
      <Container>
        <SectionHeading
          title="Primero entiendo. Después propongo."
          description="No empiezo recomendando una herramienta. Primero quiero entender el problema, el objetivo y la forma en la que trabajás."
        />

        <div className="mt-9 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              className="flex items-start gap-5 lg:block"
            >
              <div className="flex items-center">
                <span className="text-3xl font-bold tabular-nums text-brand-fg lg:shrink-0 lg:leading-none">
                  {step.number}
                </span>
                {index < processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="ml-3 -mr-8 hidden h-px flex-1 bg-line/60 lg:block"
                  />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink lg:mt-4">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
