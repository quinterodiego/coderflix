export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  projectUrl?: string;
  caseUrl?: string;
};

// Con un solo proyecto, ProjectsSection lo muestra como featured (ver
// FeaturedProjectCard). En cuanto haya dos o más, vuelve automáticamente
// a la grilla con ProjectCard — no hace falta tocar el componente.
export const projects: Project[] = [
  {
    slug: "arq-o",
    name: "ARQ.O",
    category: "Sitio institucional",
    description:
      "Diseño y desarrollo de un sitio para un estudio de arquitectura, pensado para presentar sus proyectos, experiencia y forma de trabajo.",
    image: "/images/project-placeholder.svg",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    // TODO: reemplazar por la URL real del sitio publicado.
    projectUrl: "#"
  }
];
