"use client";

import { Globe, Workflow, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { services, type ServiceGroup } from "@/data/services";

const ICONS: Record<ServiceGroup["icon"], typeof Globe> = {
  presencia: Globe,
  automatizacion: Workflow,
  medida: LayoutDashboard
};

export function ServicesSection() {
  return (
    <section
      className="section-padding border-t border-line py-14 sm:py-20"
      aria-label="Qué puedo hacer por vos"
    >
      <Container>
        <SectionHeading
          eyebrow="Qué puedo hacer por vos"
          title="Herramientas pensadas para problemas reales"
          description="La solución puede ser una página web, una automatización o un sistema a medida. Lo importante es entender primero qué necesitás resolver."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((group, index) => {
            const Icon = ICONS[group.icon];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className="rounded-xl border border-line p-7 transition-colors hover:border-brand-fg"
              >
                <Icon className="text-brand-fg" size={28} strokeWidth={1.5} aria-hidden />
                <h3 className="mt-4 text-sm font-semibold text-ink/70">
                  {group.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink">
                  {group.benefit}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted/70">
                  {group.examples}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
