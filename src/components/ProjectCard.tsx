import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-cream transition-colors hover:border-brand-fg">
      <div className="relative aspect-[4/3] w-full bg-beige">
        <Image
          src={project.image}
          alt={`Vista previa del proyecto ${project.title}`}
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
        <h3 className="mt-2 text-lg font-semibold text-ink">{project.title}</h3>
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

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-fg transition-colors hover:text-ink"
          >
            Ver proyecto
            <ArrowUpRight size={15} aria-hidden />
          </a>
        ) : null}
      </div>
    </article>
  );
}
