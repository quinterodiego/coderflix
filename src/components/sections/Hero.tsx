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
      <div className="container pb-28 pt-16 sm:pb-36 sm:pt-24 lg:pb-40 lg:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.1]"
          >
            Presencia digital sólida para estudios y profesionales que buscan
            crecer.
          </motion.h1>
          <span
            className="mt-6 block h-0.5 w-12 bg-accent"
            aria-hidden
          />
          <motion.p
            variants={item}
            className="mt-8 text-lg leading-relaxed text-muted sm:text-xl"
          >
            Diseñamos y estructuramos plataformas digitales que transmiten
            autoridad, generan consultas calificadas y acompañan el crecimiento
            profesional.
          </motion.p>
          <motion.p
            variants={item}
            className="mt-4 text-sm text-muted"
          >
            No se trata de tener una web. Se trata de tener una estructura
            digital que respalde tu posicionamiento.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contacto"
              className="inline-block rounded-lg bg-accent px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-accent-dark"
            >
              Solicitar diagnóstico estratégico
            </a>
            <a
              href="#metodologia"
              className="inline-block rounded-lg border border-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-white"
            >
              Conocer metodología
            </a>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
