import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { BackToTopButton } from "./BackToTopButton";
import { Container } from "./Container";
import { GithubIcon, LinkedInIcon } from "./icons/BrandIcons";
import { email, getWhatsappLink, githubUrl, linkedinUrl } from "@/data/contact";

// Fondo verde sólido (bg-brand, el mismo verde de marca) en lugar del claro
// original. Para volver al footer claro: quitar bg-brand del <footer> y las
// clases text-onBrand/* de sus hijos, y restaurar text-ink/text-muted.
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-9">
        <div>
          <Image
            src="/images/brand-dark.png"
            alt="Diego Quintero"
            width={2200}
            height={512}
            className="h-8 w-auto sm:h-10"
          />
          <p className="mt-3 text-sm text-onBrand/80">
            Tecnología simple para resolver problemas reales.
          </p>
          <p className="mt-2 hidden text-xs text-onBrand/60 sm:block">
            © {year} Diego Quintero. Todos los derechos reservados.
          </p>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={`mailto:${email}`}
              aria-label="Enviar un email a Diego Quintero"
              className="text-onBrand/70 transition-colors hover:text-onBrand"
            >
              <Mail size={19} aria-hidden />
            </a>
            <a
              href={getWhatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="Escribir a Diego Quintero por WhatsApp"
              className="text-onBrand/70 transition-colors hover:text-onBrand"
            >
              <MessageCircle size={19} aria-hidden />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil de Diego Quintero en LinkedIn"
              className="text-onBrand/70 transition-colors hover:text-onBrand"
            >
              <LinkedInIcon size={19} />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil de Diego Quintero en GitHub"
              className="text-onBrand/70 transition-colors hover:text-onBrand"
            >
              <GithubIcon size={19} />
            </a>

            <BackToTopButton />
          </div>

          <p className="mt-3 text-xs text-onBrand/60 sm:hidden">
            © {year} Diego Quintero. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
