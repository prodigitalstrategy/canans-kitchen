import React from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex">
      {/* Full-width background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-normal mb-4 text-white drop-shadow-lg tracking-wide">
            Canan's Kitchen
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 font-serif italic">
              & Bakery
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/90 max-w-2xl drop-shadow font-sans leading-relaxed">
            A Taste of Turkey in California - Experience authentic Turkish
            breakfast and homemade pastries in a warm, family atmosphere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-sans font-medium bg-[#B75C9D] text-white rounded hover:bg-[#9d4e86] transition-all shadow-lg group tracking-wide"
            >
              View Our Menu
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-sans font-medium bg-white/10 backdrop-blur text-white rounded hover:bg-white/20 transition-all border border-white/40 tracking-wide"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
