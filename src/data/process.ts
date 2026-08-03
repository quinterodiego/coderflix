export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Entender",
    body: "Hablamos sobre tu proyecto, tu necesidad y lo que hoy te está complicando."
  },
  {
    number: "02",
    title: "Proponer",
    body: "Defino una solución clara, con alcance, tiempos y costos entendibles."
  },
  {
    number: "03",
    title: "Construir",
    body: "Diseño y desarrollo la herramienta cuidando cada detalle."
  },
  {
    number: "04",
    title: "Acompañar",
    body: "La solución se publica, se prueba y puede seguir mejorando con el tiempo."
  }
];
