"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 }
};

export function Hero() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="container">
        <div className="flex items-center justify-between py-6 text-sm text-muted">
          <span className="tracking-[0.2em] uppercase text-xs text-muted">
            Coderflix
          </span>
          <span className="text-xs text-muted">
            Infraestructura digital estratégica
          </span>
        </div>
      </div>
      <div className="container pb-20 pt-8 sm:pb-28 sm:pt-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end"
        >
          <div>
            <motion.h1
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
            >
              Construimos activos digitales que escalan empresas.
            </motion.h1>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
              className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base"
            >
              Estrategia, diseño y desarrollo para compañías que entienden que
              lo digital es inversión, no gasto.
            </motion.p>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contacto"
                className="inline-flex items-center rounded-full bg-foreground px-6 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-accent"
              >
                Solicitar diagnóstico estratégico
              </a>
              <span className="text-xs text-muted">
                Sin compromiso. 30 minutos para entender si tiene sentido
                avanzar.
              </span>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-4 border border-neutral-200 bg-neutral-50 px-6 py-6 text-xs text-muted sm:px-8 sm:py-7"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-foreground">
                Infraestructura, no “páginas”.
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
                Boutique
              </span>
            </div>
            <p>
              Diseñamos sistemas digitales pensados para una sola cosa: hacer
              que tu marca atraiga mejores oportunidades.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-4">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  Foco
                </p>
                <p className="mt-1 text-sm text-foreground">
                  Estrategia, arquitectura y conversión.
                </p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                  Ubicación
                </p>
                <p className="mt-1 text-sm text-foreground">
                  Empresas que operan en Argentina y la región.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

