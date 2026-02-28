"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Mockup dashboard con métricas
const IMAGE_SRC =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80";

export function EstrategiaSection() {
  return (
    <section
      id="estrategia"
      className="section-padding bg-white"
      aria-labelledby="estrategia-title"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            className="group relative aspect-[3/4] min-h-[320px] overflow-hidden rounded-lg bg-neutral-900 transition-shadow duration-300 ease-out hover:shadow-xl hover:shadow-foreground/15"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={IMAGE_SRC}
              alt="Dashboard de métricas"
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-foreground/50"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-accent/20 mix-blend-multiply"
              aria-hidden
            />
          </motion.div>
          <motion.div
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2
              id="estrategia-title"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Estrategia
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              Antes de diseñar, mapeamos. Arquitectura de información, flujos de
              conversión y mensajes clave. Cada proyecto parte de un esquema que
              después se construye.
            </p>
            <p className="max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              Sin blueprint no hay escala. Sin estructura no hay resultado.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
