import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-line bg-cream transition-colors hover:border-brand-fg">
      <div className="relative aspect-[4/3] w-full bg-beige">
        <Image
          src={project.images[0].src}
          alt={project.images[0].alt}
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
        <div className="mt-2 flex-1 space-y-2 text-sm leading-relaxed text-muted">
          <p>
            <span className="font-semibold text-ink">Desafío.</span> {project.challenge}
          </p>
          <p>
            <span className="font-semibold text-ink">Solución.</span> {project.solution}
          </p>
        </div>

        {project.highlights.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
              >
                {highlight}
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
