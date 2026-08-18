"use client";

import { Clock, Lightbulb, Monitor, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const PROBLEMS = [
  {
    title: "Necesitás mostrar mejor tu trabajo",
    icon: Monitor
  },
  {
    title: "Perdés tiempo con tareas repetitivas",
    icon: Clock
  },
  {
    title: "Tenés una idea y no sabés cómo llevarla adelante",
    icon: Lightbulb
  },
  {
    title: "Tu trabajo creció, pero tus herramientas no",
    icon: TrendingUp
  }
];

export function ProblemsSection() {
  return (
    <section
      className="section-padding border-t border-line bg-beige py-16 sm:py-[90px]"
      aria-label="Situaciones frecuentes"
    >
      <Container>
        <SectionHeading
          align="center"
          title="Tal vez hoy estés en alguna de estas situaciones"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            >
              <problem.icon className="text-brand-fg" size={26} strokeWidth={1.5} aria-hidden />
              <h3 className="mt-4 text-base font-semibold leading-snug text-ink">
                {problem.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
