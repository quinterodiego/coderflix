export type ServiceGroup = {
  icon: "presencia" | "automatizacion" | "medida";
  title: string;
  benefit: string;
  examples: string;
};

export const services: ServiceGroup[] = [
  {
    icon: "presencia",
    title: "Presencia digital",
    benefit: "Mostrá mejor lo que hacés y convertí visitas en oportunidades.",
    examples: "Landing pages · Sitios institucionales · Portfolios"
  },
  {
    icon: "automatizacion",
    title: "Automatización",
    benefit: "Ahorrá tiempo eliminando tareas manuales y repetitivas.",
    examples: "Formularios · Integraciones · Procesos automáticos"
  },
  {
    icon: "medida",
    title: "Desarrollo a medida",
    benefit:
      "Cuando una herramienta genérica no alcanza, construyo la que necesitás.",
    examples: "Sistemas internos · Paneles administrativos · Aplicaciones web"
  }
];
