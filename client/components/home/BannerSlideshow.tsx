"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type BannerSlide = {
  id: string;
  src: string;
  alt: string;
};

export const defaultSlides: BannerSlide[] = [
  { id: "1", src: "/banner/slide-1.png", alt: "Sri Lankan couple at their wedding" },
  { id: "2", src: "/banner/slide-2.png", alt: "Bride and groom portrait" },
  { id: "3", src: "/banner/slide-3.png", alt: "Family celebrating the wedding" },
];

const AUTOPLAY_MS = 5000;

type BannerSlideshowProps = {
  slides?: BannerSlide[];
  children?: React.ReactNode;
};

export default function BannerSlideshow({ slides = defaultSlides, children }: BannerSlideshowProps) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
 
  const goTo = useCallback(
    (index: number) => {
      setActive(((index % slides.length) + slides.length) % slides.length);
    },
    [slides.length]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, AUTOPLAY_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  function pauseAndResume(action: () => void) {
    action();
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  }

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/60 to-plum/10" />
      </div>

      {/* Content overlay (headline / search bar) stays fixed across slides */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        {children}
      </div>

      {/* Arrow controls */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => pauseAndResume(prev)}
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/30 sm:left-6"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => pauseAndResume(next)}
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-colors hover:bg-white/30 sm:right-6"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
            onClick={() => pauseAndResume(() => goTo(index))}
            className={`h-2 rounded-pill transition-all ${
              index === active ? "w-6 bg-gold" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
