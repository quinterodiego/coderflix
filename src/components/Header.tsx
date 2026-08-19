"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { getWhatsappLink } from "@/data/contact";

const NAV_LINKS = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#como-trabajo", label: "Cómo trabajo" },
  { href: "#contacto", label: "Contacto" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const whatsappHref = getWhatsappLink();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-cream/80 backdrop-blur-md"
          : "border-b border-transparent bg-cream/0"
      }`}
    >
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center"
        >
          <Image
            src="/images/brand.png"
            alt="Diego Quintero"
            width={2200}
            height={512}
            priority
            className="h-8 w-auto dark:hidden sm:h-10"
          />
          <Image
            src="/images/brand-dark.png"
            alt="Diego Quintero"
            width={2200}
            height={512}
            priority
            className="hidden h-8 w-auto dark:block sm:h-10"
          />
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-onBrand transition-colors hover:bg-brand-dark"
          >
            Hablemos
            <ArrowRight size={16} aria-hidden />
          </a>
        </div>

        <MobileMenu links={NAV_LINKS} whatsappHref={whatsappHref} />
      </Container>
    </header>
  );
}
