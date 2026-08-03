import { ArrowUp, Mail, MessageCircle } from "lucide-react";
import { Container } from "./Container";
import { GithubIcon, LinkedInIcon } from "./icons/BrandIcons";
import { email, getWhatsappLink, githubUrl, linkedinUrl } from "@/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink">
            Diego Quintero
          </p>
          <p className="mt-1 text-sm text-muted">
            Soluciones tecnológicas para profesionales, negocios y proyectos.
          </p>
          <p className="mt-3 text-xs text-muted">
            © {year} Diego Quintero. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href={`mailto:${email}`}
            aria-label="Enviar un email a Diego Quintero"
            className="text-muted transition-colors hover:text-brand"
          >
            <Mail size={19} aria-hidden />
          </a>
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="Escribir a Diego Quintero por WhatsApp"
            className="text-muted transition-colors hover:text-brand"
          >
            <MessageCircle size={19} aria-hidden />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de Diego Quintero en LinkedIn"
            className="text-muted transition-colors hover:text-brand"
          >
            <LinkedInIcon size={19} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de Diego Quintero en GitHub"
            className="text-muted transition-colors hover:text-brand"
          >
            <GithubIcon size={19} />
          </a>

          <a
            href="#top"
            aria-label="Volver arriba"
            className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brand hover:text-brand"
          >
            <ArrowUp size={16} aria-hidden />
          </a>
        </div>
      </Container>
    </footer>
  );
}
