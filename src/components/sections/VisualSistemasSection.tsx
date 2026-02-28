"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80";

export function VisualSistemasSection() {
  return (
    <section
      id="sistemas"
      className="section-padding bg-[#f7f7f7]"
      aria-labelledby="sistemas-title"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            className="group relative aspect-[4/3] min-h-[260px] overflow-hidden rounded-lg bg-neutral-900 transition-shadow duration-300 hover:shadow-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={IMAGE_SRC}
              alt="Dashboard de métricas"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-foreground/40"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-accent/15 mix-blend-multiply"
              aria-hidden
            />
          </motion.div>
          <div className="space-y-6">
            <h2
              id="sistemas-title"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Sistemas que se miden
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              Cada proyecto se apoya en métricas de base y objetivos claros. La
              infraestructura digital que construimos está pensada para
              convertirse en dato, no en decoración.
            </p>
            <p className="max-w-lg text-sm leading-relaxed text-muted">
              Sin medición no hay optimización. Sin datos no hay escalamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
