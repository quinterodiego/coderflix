export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  // Contado como caso: qué problema había y cómo se resolvió. Sin métricas
  // ni clientes que no se puedan respaldar.
  challenge: string;
  solution: string;
  // Lo que resuelve el proyecto, en palabras de cliente (no el stack técnico).
  highlights: string[];
  images: ProjectImage[];
  url?: string;
  featured?: boolean;
};

// featured: true muestra el proyecto en el layout destacado vía
// FeaturedProjectCard, con galería si "images" tiene más de una entrada.
export const projects: Project[] = [
  {
    slug: "arq-o",
    title: "ARQ.O",
    category: "Sitio institucional",
    challenge:
      "Un estudio de arquitectura necesita mostrar sus obras con la misma calidad con la que las diseña, y contar cómo trabaja a quien está por contratarlo.",
    solution:
      "Un sitio sobrio, con las imágenes como protagonistas, que presenta los proyectos, la experiencia y la forma de trabajo del estudio.",
    highlights: ["Portfolio de obras", "Diseño a medida", "Adaptado a mobile"],
    images: [
      { src: "/images/projects/ARQ.O.png", alt: "Página principal de ARQ.O" }
      // Agregar más capturas acá cuando estén listas, por ejemplo:
      // { src: "/images/projects/ARQ.O-proyectos.png", alt: "Sección de proyectos de ARQ.O" },
      // { src: "/images/projects/ARQ.O-mobile.png", alt: "ARQ.O en dispositivos móviles" }
    ],
    // TODO: reemplazar por la URL real del sitio publicado.
    url: "https://arq-o.vercel.app/",
    featured: true
  },
  {
    slug: "no-cazo-un-fulbo-app",
    title: "No Cazo Un Fulbo App",
    category: "Aplicación web",
    challenge:
      "Organizar el fútbol con amigos era un ida y vuelta de mensajes: quién juega, cómo se arman los equipos y quién viene ganando.",
    solution:
      "Una app para organizar los partidos, armar los equipos y cargar los resultados. Los rankings y las estadísticas de cada jugador se actualizan solos.",
    highlights: ["Armado de equipos", "Rankings", "Estadísticas por jugador"],
    images: [
      { src: "/images/projects/No-Cazo-Un-Fulbo-App.png", alt: "Página principal de No Cazo Un Fulbo App" }
    ],
    url: "https://picadito-app-chi.vercel.app/"
  },
  {
    slug: "momentum",
    title: "Momentum",
    category: "Aplicación web",
    challenge:
      "Sostener un hábito cuesta más que empezarlo, sobre todo cuando el objetivo es demasiado ambicioso desde el primer día.",
    solution:
      "Una app que parte de objetivos mínimos: hábitos por tiempo o cantidad, días a elección, registro de avances y rachas para ver la constancia.",
    highlights: ["Hábitos a medida", "Rachas", "Historial de avances"],
    images: [{ src: "/images/projects/Momentum.png", alt: "Página principal de Momentum" }],
    url: "https://momentum-theta-teal.vercel.app/"
  },
  {
    slug: "findia",
    title: "FindIA",
    category: "Finanzas personales",
    challenge:
      "Con varias deudas al mismo tiempo, es difícil saber cuál conviene pagar primero y si realmente se está avanzando.",
    solution:
      "Una app para organizar las deudas, comparar estrategias de pago y seguir el progreso, con asistencia de IA para orientar cada decisión.",
    highlights: ["Estrategias de pago", "Seguimiento del progreso", "Asistente con IA"],
    images: [{ src: "/images/projects/FINDIA.png", alt: "Página principal de FindIA" }],
    url: "https://findia.vercel.app/"
  }
];
