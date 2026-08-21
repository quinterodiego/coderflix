import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="grid overflow-hidden rounded-xl border border-line bg-cream transition-colors hover:border-brand-fg lg:grid-cols-2">
      <div className="relative aspect-[4/3] w-full bg-beige lg:aspect-auto">
        <Image
          src={project.image}
          alt={`Vista previa del proyecto ${project.title}`}
          fill
          unoptimized
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {project.category}
        </span>
        <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
          {project.description}
        </p>

        {project.technologies.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2">
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
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-fg transition-colors hover:text-ink"
          >
            Ver proyecto
            <ArrowUpRight size={15} aria-hidden />
          </a>
        ) : null}
      </div>
    </article>
  );
}
