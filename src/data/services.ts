export type ServiceGroup = {
  icon: "presencia" | "automatizacion" | "medida";
  title: string;
  items: string[];
};

export const services: ServiceGroup[] = [
  {
    icon: "presencia",
    title: "Presencia digital",
    items: [
      "Landing pages",
      "Sitios institucionales",
      "Portfolios",
      "Sitios para profesionales",
      "Optimización de sitios existentes"
    ]
  },
  {
    icon: "automatizacion",
    title: "Automatización",
    items: [
      "Formularios",
      "Emails automáticos",
      "Google Sheets",
      "Integraciones",
      "WhatsApp",
      "Procesos repetitivos",
      "Notificaciones"
    ]
  },
  {
    icon: "medida",
    title: "Desarrollo a medida",
    items: [
      "Sistemas internos",
      "Paneles administrativos",
      "Herramientas para clientes",
      "Reservas",
      "Gestión de información",
      "Aplicaciones web"
    ]
  }
];
