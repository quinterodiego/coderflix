"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { processSteps } from "@/data/process";

export function ProcessSection() {
  return (
    <section
      id="como-trabajo"
      className="section-padding bg-beige"
      aria-label="Forma de trabajo"
    >
      <Container>
        <SectionHeading
          title="Primero entiendo. Después propongo."
          description="No empiezo recomendando una herramienta. Primero quiero entender el problema, el objetivo y la forma en la que trabajás."
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              className="flex gap-5"
            >
              <span className="text-3xl font-extrabold tabular-nums text-brand">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
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
