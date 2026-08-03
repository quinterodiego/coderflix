"use client";

import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brand hover:text-brand"
    >
      <ArrowUp size={16} aria-hidden />
    </button>
  );
}
