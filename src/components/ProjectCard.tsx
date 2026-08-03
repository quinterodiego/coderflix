import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const isPlaceholder = !project.projectUrl && !project.caseUrl;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-cream">
      <div className="relative aspect-[4/3] w-full bg-beige">
        <Image
          src={project.image}
          alt={`Vista previa del proyecto ${project.name}`}
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {project.category}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-ink">{project.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {project.technologies.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-5 flex items-center gap-4">
          {project.projectUrl ? (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
            >
              Ver proyecto
              <ArrowUpRight size={15} aria-hidden />
            </a>
          ) : null}
          {project.caseUrl ? (
            <a
              href={project.caseUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              Ver caso
              <ArrowUpRight size={15} aria-hidden />
            </a>
          ) : null}
          {isPlaceholder ? (
            <span className="rounded-full bg-beige px-3 py-1 text-xs font-medium text-muted">
              Próximamente
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
