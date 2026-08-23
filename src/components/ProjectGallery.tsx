"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, type KeyboardEvent, type TouchEvent } from "react";
import type { ProjectImage } from "@/data/projects";

type ProjectGalleryProps = {
  images: ProjectImage[];
  projectTitle: string;
  className?: string;
};

export function ProjectGallery({ images, projectTitle, className }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const hasMultiple = images.length > 1;

  function goTo(next: number) {
    setIndex((current) => {
      const total = images.length;
      return next < 0 ? total - 1 : next % total;
    });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!hasMultiple) return;
    if (event.key === "ArrowLeft") goTo(index - 1);
    if (event.key === "ArrowRight") goTo(index + 1);
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (!hasMultiple || !touchStart.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      goTo(deltaX > 0 ? index - 1 : index + 1);
    }
  }

  return (
    <div
      className={className}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          unoptimized
          className={`object-cover transition-opacity duration-300 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      ))}

      {hasMultiple ? (
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-ink/60 px-2 py-1 text-onBrand backdrop-blur-sm">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label={`Imagen anterior de ${projectTitle}`}
            className="flex h-6 w-6 items-center justify-center rounded-full transition-opacity hover:opacity-70 focus-visible:opacity-70"
          >
            <ChevronLeft size={14} aria-hidden />
          </button>
          <span className="text-xs tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label={`Imagen siguiente de ${projectTitle}`}
            className="flex h-6 w-6 items-center justify-center rounded-full transition-opacity hover:opacity-70 focus-visible:opacity-70"
          >
            <ChevronRight size={14} aria-hidden />
          </button>
        </div>
      ) : null}
    </div>
  );
}
