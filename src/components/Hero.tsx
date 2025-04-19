import React from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex overflow-x-hidden">
      {/* Full-width responsive background image */}
      <img
        src="/gallery/turkish-breakfast.jpg"
        srcSet="/gallery/turkish-breakfast.jpg 800w, /gallery/turkish-breakfast.jpg 1600w"
        sizes="100vw"
        alt="Turkish breakfast spread at Canan's Kitchen"
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading="lazy"
        draggable="false"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      />
      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/30 z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex items-center min-h-screen">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-[2.2rem] xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-normal mb-4 text-white drop-shadow-lg tracking-wide leading-tight text-center md:text-left">
            Canan's Kitchen
            <span className="block text-2xl xs:text-3xl md:text-4xl lg:text-5xl mt-2 font-serif italic">
              & Bakery
            </span>
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 text-white/90 max-w-2xl drop-shadow font-sans leading-relaxed mx-auto md:mx-0 text-center md:text-left">
            A Taste of Turkey in California – Experience authentic Turkish breakfast and homemade pastries in a warm, family atmosphere.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-center sm:items-start justify-center md:justify-start w-full">
            <a
              href="#menu"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-sans font-semibold bg-primary text-white rounded-full hover:bg-primary-dark active:scale-95 transition-all shadow-lg group tracking-wide focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
              style={{ minHeight: 56 }}
            >
              View Our Menu
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={22}
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-lg font-sans font-semibold bg-white/10 backdrop-blur text-white rounded-full hover:bg-white/20 active:scale-95 transition-all border border-white/40 tracking-wide focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              style={{ minHeight: 56 }}
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
