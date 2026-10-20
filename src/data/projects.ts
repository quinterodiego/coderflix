export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  images: ProjectImage[];
  technologies: string[];
  url?: string;
  featured?: boolean;
};

// ARQ.O es el único proyecto real por ahora (featured: true lo muestra en el
// layout destacado vía FeaturedProjectCard, con galería si "images" tiene más
// de una entrada). Los otros tres son placeholders neutros solo para probar
// el layout de la grilla — reemplazar por proyectos reales cuando estén
// listos, sin tocar ningún componente.
export const projects: Project[] = [
  {
    slug: "arq-o",
    title: "ARQ.O",
    category: "Sitio institucional",
    description:
      "Diseño y desarrollo de un sitio para un estudio de arquitectura, pensado para presentar sus proyectos, experiencia y forma de trabajo.",
    images: [
      { src: "/images/projects/ARQ.O.png", alt: "Página principal de ARQ.O" }
      // Agregar más capturas acá cuando estén listas, por ejemplo:
      // { src: "/images/projects/ARQ.O-proyectos.png", alt: "Sección de proyectos de ARQ.O" },
      // { src: "/images/projects/ARQ.O-mobile.png", alt: "ARQ.O en dispositivos móviles" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    // TODO: reemplazar por la URL real del sitio publicado.
    url: "https://arq-o.vercel.app/",
    featured: true
  },
  {
    slug: "no-cazo-un-fulbo-app",
    title: "No Cazo Un Fulbo App",
    category: "Aplicación web",
    description:
      "App para llevar el fútbol entre amigos a otro nivel: organización de partidos, armado de equipos, resultados, rankings y estadísticas de cada jugador.",
    images: [
      { src: "/images/projects/No-Cazo-Un-Fulbo-App.png", alt: "Página principal de No Cazo Un Fulbo App" }
    ],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    url: "https://picadito-app-chi.vercel.app/"
  },
  {
    slug: "momentum",
    title: "Momentum",
    category: "Aplicación web",
    description:
      "Aplicación web para crear y sostener rutinas a partir de objetivos mínimos. Permite definir hábitos por tiempo o cantidad, elegir días, registrar avances y seguir rachas e historial de cumplimiento.",
    images: [{ src: "/images/projects/Momentum.png", alt: "Página principal de Momentum" }],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    url: "https://momentum-theta-teal.vercel.app/"
  },
  {
    slug: "findia",
    title: "FindIA",
    category: "Finanzas personales",
    description:
      "Aplicación web para organizar deudas, comparar estrategias de pago y seguir el progreso financiero, con asistencia de IA para orientar cada decisión.",
    images: [{ src: "/images/projects/FINDIA.png", alt: "Página principal de FindIA" }],
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    url: "https://findia.vercel.app/"
  }
];
