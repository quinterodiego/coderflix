"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mouse } from "lucide-react";
import { Container } from "./Container";
import { getWhatsappLink } from "@/data/contact";

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
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Sitios web · Automatizaciones · Sistemas a medida
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              Herramientas <span className="text-brand-fg">digitales</span> para
              hacer crecer{" "}
              <span className="underline decoration-sun decoration-4 underline-offset-4">
                tu negocio
              </span>
              .
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            >
              Si sentís que tu forma de trabajar ya no acompaña el crecimiento
              de tu negocio, puedo ayudarte a encontrar una solución simple,
              útil y pensada para vos.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-8 max-w-lg border-l-2 border-brand-fg py-1 pl-4 text-base italic leading-relaxed text-ink sm:text-lg"
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
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-onBrand transition-colors hover:bg-brand-dark"
              >
                Escribime, sin compromiso
                <ArrowRight size={16} aria-hidden />
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand-fg"
              >
                Ver proyectos
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-16 flex items-center gap-2 text-xs text-muted"
            >
              <Mouse size={16} aria-hidden />
              <span>Deslizá para conocer más</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="overflow-hidden bg-beige p-3 [border-radius:30%_70%_70%_30%/30%_30%_70%_70%]"
          >
            <div className="group relative aspect-[4/5] w-full overflow-hidden [border-radius:30%_70%_70%_30%/30%_30%_70%_70%]">
              <Image
                src="/images/hero-image.png"
                alt="Diego Quintero trabajando en su escritorio, frente a dos monitores"
                fill
                priority
                style={{ filter: "sepia(0.18) saturate(1.08) contrast(1.03) brightness(1.03)" }}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
