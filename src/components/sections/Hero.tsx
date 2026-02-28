"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Coderflix
          </span>
          <span className="text-xs text-muted">
            Consultora estratégica de crecimiento digital
          </span>
        </div>
      </div>
      <div className="container pb-32 pt-20 sm:pb-40 sm:pt-28 lg:pb-44 lg:pt-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.08]"
          >
            Escalamos negocios digitales con estrategia, tecnología y ejecución
            real.
          </motion.h1>
          <span
            className="mt-8 block h-0.5 w-12 bg-accent"
            aria-hidden
          />
          <motion.p
            variants={item}
            className="mt-8 text-lg leading-relaxed text-muted sm:text-xl"
          >
            Si ya facturás y querés crecer en serio, trabajamos contigo para
            diseñar y ejecutar el sistema digital que lo hace posible.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contacto"
              className="inline-block rounded-lg bg-accent px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-accent-dark"
            >
              Agendar Diagnóstico Estratégico
            </a>
            <a
              href="#proceso"
              className="inline-block rounded-lg border border-neutral-300 px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:border-foreground hover:bg-neutral-50"
            >
              Ver cómo trabajamos
            </a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
