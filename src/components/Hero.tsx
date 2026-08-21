"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
    <section
      id="hero"
      className="section-padding pt-10 sm:pt-28"
      aria-label="Presentación"
    >
      <Container>
        <div className="grid gap-9 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
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
              className="mt-5 font-serif text-[2rem] font-black leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              Tecnología para que tu negocio funcione mejor.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:mt-8 sm:text-lg"
            >
              Soluciones digitales simples para resolver problemas concretos
              de tu negocio.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-6 flex flex-col items-start gap-3.5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6"
            >
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-onBrand transition-colors hover:bg-brand-dark"
              >
                Hablemos
                <ArrowRight size={16} aria-hidden />
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand-fg"
              >
                Ver proyectos
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="mx-auto w-4/5 overflow-hidden bg-beige p-1 [border-radius:44%_56%_54%_46%/62%_40%_58%_44%] sm:mx-0 sm:w-full"
          >
            <div className="group relative aspect-[4/5] w-full overflow-hidden [border-radius:44%_56%_54%_46%/62%_40%_58%_44%]">
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
