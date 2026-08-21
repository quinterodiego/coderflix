"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="proyectos"
      className="section-padding border-t border-line"
      aria-label="Proyectos destacados"
    >
      <Container>
        <SectionHeading title="Proyectos seleccionados" />

        {featuredProject ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-16"
          >
            <FeaturedProjectCard project={featuredProject} />
          </motion.div>
        ) : null}

        {otherProjects.length > 0 ? (
          <div
            className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ${
              featuredProject ? "mt-8" : "mt-16"
            }`}
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
