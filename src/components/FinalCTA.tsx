"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { getWhatsappLink } from "@/data/contact";

export function FinalCTA() {
  return (
    <section id="contacto" className="section-padding" aria-label="Contacto">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl rounded-2xl bg-brand px-8 py-16 text-center sm:px-16"
        >
          <h2 className="text-2xl font-bold tracking-tight text-cream sm:text-3xl">
            ¿Tenés una idea o un problema que querés resolver?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/80 sm:text-base">
            No hace falta que tengas clara la solución. Contame qué querés
            lograr y vemos cuál es la forma más simple de hacerlo.
          </p>
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-brand transition-colors hover:bg-sun"
          >
            Hablemos de tu proyecto
            <ArrowRight size={16} aria-hidden />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
