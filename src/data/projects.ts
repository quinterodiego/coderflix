export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  url?: string;
  featured?: boolean;
};

// ARQ.O es el único proyecto real por ahora (featured: true lo muestra en el
// layout destacado vía FeaturedProjectCard). Los otros tres son placeholders
// neutros solo para probar el layout de la grilla — reemplazar por proyectos
// reales cuando estén listos, sin tocar ningún componente.
export const projects: Project[] = [
  {
    slug: "arq-o",
    title: "ARQ.O",
    category: "Sitio institucional",
    description:
      "Diseño y desarrollo de un sitio para un estudio de arquitectura, pensado para presentar sus proyectos, experiencia y forma de trabajo.",
    image: "/images/project-placeholder.svg",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    // TODO: reemplazar por la URL real del sitio publicado.
    url: "#",
    featured: true
  },
  {
    slug: "proyecto-2",
    title: "Proyecto 2",
    category: "Categoría",
    description: "Breve descripción del proyecto.",
    image: "/images/project-placeholder.svg",
    technologies: ["Tecnología", "Tecnología", "Tecnología"],
    url: "#"
  },
  {
    slug: "proyecto-3",
    title: "Proyecto 3",
    category: "Categoría",
    description: "Breve descripción del proyecto.",
    image: "/images/project-placeholder.svg",
    technologies: ["Tecnología", "Tecnología", "Tecnología"],
    url: "#"
  },
  {
    slug: "proyecto-4",
    title: "Proyecto 4",
    category: "Categoría",
    description: "Breve descripción del proyecto.",
    image: "/images/project-placeholder.svg",
    technologies: ["Tecnología", "Tecnología", "Tecnología"],
    url: "#"
  }
];
