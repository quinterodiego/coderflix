"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Container } from "./Container";
import { getWhatsappLink } from "@/data/contact";

export function FinalCTA() {
  return (
    <section
      id="contacto"
      className="section-padding border-t border-line"
      aria-label="Contacto"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-2xl rounded-2xl bg-brand px-8 py-7 text-center sm:px-16 sm:py-14"
        >
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-onBrand sm:text-3xl">
            ¿Tenés una idea o un problema que querés resolver?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-onBrand/80 sm:mt-4 sm:text-base">
            No hace falta que tengas clara la solución. Contame qué querés
            lograr y vemos cuál es la forma más simple de hacerlo.
          </p>
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-onBrand px-7 py-3.5 text-sm font-semibold text-brand transition-colors hover:bg-sun sm:mt-8"
          >
            Escribime por WhatsApp
            <ArrowRight size={16} aria-hidden />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-7 max-w-md sm:mt-9"
        >
          <p className="mb-4 text-center text-sm text-muted">
            O si preferís, dejame un mensaje.
          </p>
          <ContactForm />
        </motion.div>
      </Container>
    </section>
  );
}
