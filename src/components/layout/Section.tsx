"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionProps = {
  id?: string;
  align?: "left" | "center";
  children: ReactNode;
};

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
};

export function Section({ id, align = "left", children }: SectionProps) {
  return (
    <section id={id} className="section-padding">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={variants}
          className={align === "center" ? "text-center" : ""}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

