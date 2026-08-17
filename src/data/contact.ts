// Datos de contacto centralizados. Los marcados como TODO son placeholders a reemplazar.
export const whatsappNumber = "5491151762371";
export const whatsappMessage =
  "Hola Diego, estuve viendo tu web y quería contarte sobre un proyecto.";

// TODO: reemplazar con el email real.
export const email = "hola@diegoquintero.com.ar";
export const linkedinUrl = "https://www.linkedin.com/in/diego-quintero-34165ab8";
// TODO: reemplazar con el usuario real de GitHub (o quitar el link si no aplica).
export const githubUrl = "https://github.com/diegoquintero";
export const web3FormsAccessKey = "35c00497-f195-4545-a00f-d309409c09f4";

export function getWhatsappLink(message: string = whatsappMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
