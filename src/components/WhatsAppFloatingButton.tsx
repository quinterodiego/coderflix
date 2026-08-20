"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { getWhatsappLink } from "@/data/contact";

export function WhatsAppFloatingButton() {
  // Por debajo de 640px este botón fijo puede superponerse con la foto del
  // Hero y con el botón "Enviar mensaje" (full-width) de Contacto — se oculta
  // solo en ese rango mientras cualquiera de esas dos secciones está en
  // pantalla. Tablet/desktop no se tocan.
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    const contactEl = document.getElementById("contacto");
    const mobileQuery = window.matchMedia("(max-width: 639px)");
    if (!heroEl || !contactEl) return;

    let heroVisible = false;
    let contactVisible = false;
    const update = () => setHidden(mobileQuery.matches && (heroVisible || contactVisible));

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0.15 }
    );
    heroObserver.observe(heroEl);

    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        contactVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0.15 }
    );
    contactObserver.observe(contactEl);

    mobileQuery.addEventListener("change", update);

    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
      mobileQuery.removeEventListener("change", update);
    };
  }, []);

  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir a Diego Quintero por WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-onBrand shadow-lg transition-all duration-200 hover:scale-105 hover:bg-brand-dark focus-visible:scale-105 sm:h-14 sm:w-14 ${
        hidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <MessageCircle className="h-[22px] w-[22px] sm:h-[26px] sm:w-[26px]" aria-hidden />
    </a>
  );
}
