import { Mail, MessageCircle } from "lucide-react";
import { BackToTopButton } from "./BackToTopButton";
import { Container } from "./Container";
import { GithubIcon, LinkedInIcon } from "./icons/BrandIcons";
import { email, getWhatsappLink, githubUrl, linkedinUrl } from "@/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 pb-24 pt-10 sm:flex-row sm:items-center sm:justify-between sm:pb-28">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink">
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
            className="text-muted transition-colors hover:text-brand-fg"
          >
            <Mail size={19} aria-hidden />
          </a>
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            aria-label="Escribir a Diego Quintero por WhatsApp"
            className="text-muted transition-colors hover:text-brand-fg"
          >
            <MessageCircle size={19} aria-hidden />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de Diego Quintero en LinkedIn"
            className="text-muted transition-colors hover:text-brand-fg"
          >
            <LinkedInIcon size={19} />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de Diego Quintero en GitHub"
            className="text-muted transition-colors hover:text-brand-fg"
          >
            <GithubIcon size={19} />
          </a>

          <BackToTopButton />
        </div>
      </Container>
    </footer>
  );
}
