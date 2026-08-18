"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { getWhatsappLink } from "@/data/contact";

export function WhatsAppFloatingButton() {
  // Por debajo de 640px la foto del Hero se reduce y queda bajo este botón
  // fijo (superposición real, confirmada) — se oculta solo en ese rango
  // mientras el Hero está en pantalla. Tablet/desktop no se tocan.
  const [hideForHero, setHideForHero] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    const mobileQuery = window.matchMedia("(max-width: 639px)");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHideForHero(mobileQuery.matches && entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(heroEl);

    const onQueryChange = () => setHideForHero(mobileQuery.matches && heroEl.getBoundingClientRect().top < window.innerHeight);
    mobileQuery.addEventListener("change", onQueryChange);

    return () => {
      observer.disconnect();
      mobileQuery.removeEventListener("change", onQueryChange);
    };
  }, []);

  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir a Diego Quintero por WhatsApp"
      aria-hidden={hideForHero}
      tabIndex={hideForHero ? -1 : 0}
      className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-onBrand shadow-lg transition-all duration-200 hover:scale-105 hover:bg-brand-dark focus-visible:scale-105 ${
        hideForHero ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <MessageCircle size={26} aria-hidden />
    </a>
  );
}
