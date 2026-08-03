"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

type NavLink = { href: string; label: string };

type MobileMenuProps = {
  links: NavLink[];
  whatsappHref: string;
};

export function MobileMenu({ links, whatsappHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-beige"
      >
        {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
      </button>

      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-line bg-cream px-5 pb-6 pt-2 shadow-sm"
        >
          <nav aria-label="Navegación principal" className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-beige"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-dark"
          >
            Hablemos
            <ArrowRight size={16} aria-hidden />
          </a>
        </div>
      ) : null}
    </div>
  );
}
