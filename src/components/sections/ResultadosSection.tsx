"use client";

import { motion } from "framer-motion";

// Gráfico de crecimiento ascendente minimalista (SVG propio)
function GrowthChartSVG() {
  return (
    <div className="flex items-end justify-center gap-1 rounded-lg bg-neutral-900 p-6">
      <svg
        viewBox="0 0 200 80"
        className="h-24 w-full max-w-xs sm:h-28"
        fill="none"
      >
        <path
          d="M 10 60 L 45 48 L 80 42 L 115 28 L 150 22 L 185 12 L 190 12"
          stroke="#059669"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function ResultadosSection() {
  return (
    <section
      id="resultados"
      className="section-padding bg-[#f7f7f7]"
      aria-labelledby="resultados-title"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-6">
            <h2
              id="resultados-title"
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Resultados
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              Medimos lo que importa: tráfico cualificado, conversión, ritmo de
              crecimiento. Los proyectos se entregan con métricas de base y un
              plan para escalarlas.
            </p>
            <p className="max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              No vendemos entregables aislados. Entregamos sistemas que se
              monitorean y mejoran en el tiempo.
            </p>
          </div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <GrowthChartSVG />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
