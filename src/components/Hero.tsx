"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mouse } from "lucide-react";
import { Container } from "./Container";
import { getWhatsappLink } from "@/data/contact";

const NOTE_ITEMS = ["Entender", "Proponer", "Resolver", "Acompañar"];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function Hero() {
  return (
    <section className="section-padding" aria-label="Presentación">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="h-px w-8 bg-muted" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Así trabajo yo
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              Soluciones <span className="text-brand">tecnológicas</span>{" "}
              pensadas para{" "}
              <span className="underline decoration-sun decoration-4 underline-offset-4">
                tu proyecto
              </span>
              .
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            >
              Sitios web, automatizaciones y herramientas digitales que te
              ayudan a ahorrar tiempo, trabajar mejor y hacer crecer tu
              proyecto.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg border-l-2 border-brand py-1 pl-4 text-sm font-medium leading-relaxed text-ink sm:text-base"
            >
              No se trata de usar la última tecnología. Se trata de elegir la
              que tenga más sentido para vos.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-brand-dark"
              >
                Hablemos de tu proyecto
                <ArrowRight size={16} aria-hidden />
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand"
              >
                Ver proyectos
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-14 flex items-center gap-2 text-xs text-muted"
            >
              <Mouse size={16} aria-hidden />
              <span>Deslizá para conocer más</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-beige sm:aspect-[6/5] lg:aspect-[4/5]">
              <Image
                src="/images/diego-hero-placeholder.svg"
                alt="Diego Quintero trabajando en su escritorio"
                fill
                priority
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -right-3 top-6 w-44 rotate-2 rounded-md border border-line bg-cream/95 p-4 shadow-sm sm:-right-6 sm:top-10 sm:w-52">
              <ul className="space-y-1.5 text-sm font-medium text-ink">
                {NOTE_ITEMS.map((label) => (
                  <li key={label} className="flex items-center gap-2">
                    <span className="text-brand" aria-hidden>
                      ✓
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
