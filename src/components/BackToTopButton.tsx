"use client";

import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-onBrand/30 text-onBrand/70 transition-colors hover:border-onBrand hover:text-onBrand sm:ml-2"
    >
      <ArrowUp size={16} aria-hidden />
    </button>
  );
}
