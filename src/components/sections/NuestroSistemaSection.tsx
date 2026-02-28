"use client";

import { motion } from "framer-motion";
import { CoderflixGrowthSystemDiagram } from "../ui/CoderflixGrowthSystemDiagram";

const steps = [
  {
    code: "01",
    title: "Diagnóstico Estratégico",
    body: "Contexto de negocio, mercado y activos actuales. Identificamos brechas y oportunidades concretas."
  },
  {
    code: "02",
    title: "Arquitectura Digital",
    body: "Estructura, mensajes clave y recorridos de conversión. El mapa antes de la construcción."
  },
  {
    code: "03",
    title: "Implementación Técnica",
    body: "Diseño y desarrollo del sistema. Performance, SEO y escalabilidad técnica."
  },
  {
    code: "04",
    title: "Optimización de Conversión",
    body: "Ajuste fino de flujos, mensajes y métricas. Cada punto de contacto pensado para convertir."
  },
  {
    code: "05",
    title: "Escalamiento",
    body: "Medición continua, iteración y base para crecer. El activo digital como motor de negocio."
  }
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

export function NuestroSistemaSection() {
  return (
    <section
      id="nuestro-sistema"
      className="section-padding bg-neutral-900 text-white"
      aria-labelledby="sistema-title"
    >
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mx-auto max-w-4xl space-y-16"
        >
          <div className="space-y-4">
            <motion.h2
              id="sistema-title"
              variants={item}
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Nuestro Sistema
            </motion.h2>
            <motion.p
              variants={item}
              className="max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base"
            >
              Un framework probado para llevar la presencia digital de tu empresa
              de activo pasivo a motor de crecimiento.
            </motion.p>
          </div>

          <motion.div variants={item} className="py-4">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Coderflix Growth System
            </p>
            <CoderflixGrowthSystemDiagram />
          </motion.div>

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10">
            {steps.map((step, i) => (
              <motion.li
                key={step.code}
                variants={item}
                className="flex flex-col gap-2 border-b border-neutral-700 pb-6 last:border-0"
              >
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  {step.code}
                </span>
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {step.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}
