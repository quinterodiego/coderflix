export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  // Ausentes = proyecto placeholder (todavía sin caso real para mostrar).
  projectUrl?: string;
  caseUrl?: string;
};

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
  },
  {
    slug: "proyecto-automatizacion",
    name: "Próximo proyecto",
    category: "Automatización",
    description:
      "Espacio reservado para un caso de automatización de procesos — reemplazar con un proyecto real.",
    image: "/images/project-placeholder.svg",
    technologies: []
  },
  {
    slug: "proyecto-sistema-a-medida",
    name: "Próximo proyecto",
    category: "Sistema a medida",
    description:
      "Espacio reservado para un caso de desarrollo a medida — reemplazar con un proyecto real.",
    image: "/images/project-placeholder.svg",
    technologies: []
  }
];
