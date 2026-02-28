"use client";

import Image from "next/image";

type ImagenVisualProps = {
  src: string;
  alt: string;
  aspect?: "3/4" | "4/3" | "1/1";
  className?: string;
};

export function ImagenVisual({
  src,
  alt,
  aspect = "3/4",
  className = ""
}: ImagenVisualProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-neutral-900 transition-shadow duration-300 ease-out hover:shadow-xl hover:shadow-foreground/15 ${className}`}
      style={{ aspectRatio: aspect.replace("/", " / ") }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {/* Overlay oscuro + acento verde */}
      <div
        className="pointer-events-none absolute inset-0 bg-foreground/50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-emerald-950/25 mix-blend-multiply"
        aria-hidden
      />
    </div>
  );
}
