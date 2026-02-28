"use client";

import { motion } from "framer-motion";
import { Section } from "../layout/Section";

const bullets = [
  "Aumento de consultas calificadas",
  "Mejora en tasa de conversión",
  "Reducción de fricción en el proceso comercial",
  "Mayor claridad estratégica en decisiones digitales",
  "Escalabilidad técnica sin rehacer todo"
];

function GrowthChartMini() {
  return (
    <div className="flex items-end justify-center rounded-lg bg-neutral-900 p-6">
      <svg
        viewBox="0 0 200 70"
        className="h-20 w-full max-w-[240px] sm:h-24"
        fill="none"
      >
        <path
          d="M 10 55 L 40 48 L 70 40 L 100 32 L 130 22 L 160 14 L 190 8"
          stroke="#059669"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function ImpactoEsperadoSection() {
  return (
    <Section id="impacto">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <GrowthChartMini />
          </motion.div>
          <div className="space-y-8">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Impacto esperado
            </h2>
            <p className="text-sm leading-relaxed text-muted sm:text-base">
              Cuando la infraestructura digital está bien diseñada, los
              resultados dejan de ser aleatorios.
            </p>
            <ul className="space-y-3">
              {bullets.map((text) => (
                <li key={text} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted">
              Sin promesas numéricas falsas. Solo impacto estructural.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
