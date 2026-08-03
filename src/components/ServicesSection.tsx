"use client";

import { Check, Globe, Workflow, LayoutDashboard } from "lucide-react";
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
    <section className="section-padding" aria-label="Qué puedo hacer por vos">
      <Container>
        <SectionHeading
          eyebrow="Qué puedo hacer por vos"
          title="Herramientas pensadas para problemas reales"
          description="La solución puede ser una página web, una automatización o un sistema a medida. Lo importante es entender primero qué necesitás resolver."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((group, index) => {
            const Icon = ICONS[group.icon];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                className="rounded-xl border border-line bg-cream p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-beige text-brand">
                  <Icon size={20} strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <Check
                        size={15}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-brand"
                        aria-hidden
                      />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
