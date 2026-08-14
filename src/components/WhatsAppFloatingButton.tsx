import { MessageCircle } from "lucide-react";
import { getWhatsappLink } from "@/data/contact";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={getWhatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir a Diego Quintero por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-onBrand shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-brand-dark focus-visible:scale-105"
    >
      <MessageCircle size={26} aria-hidden />
    </a>
  );
}
