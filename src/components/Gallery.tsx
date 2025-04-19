import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ImageModalProps {
  src: string;
  alt: string;
  link: string;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

function ImageModal({ src, alt, link, onClose, onNext, onPrevious, hasNext, hasPrevious }: ImageModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowLeft":
        if (hasPrevious) onPrevious();
        break;
      case "ArrowRight":
        if (hasNext) onNext();
        break;
      case "Escape":
        onClose();
        break;
    }
  }, [onNext, onPrevious, onClose, hasNext, hasPrevious]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={onClose}>
      <div className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none z-10"
        >
          <X size={32} />
        </button>
        
        {hasPrevious && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none transition-colors z-10 bg-black/20 hover:bg-black/40 p-2 rounded-full backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>
        )}

        {hasNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 focus:outline-none transition-colors z-10 bg-black/20 hover:bg-black/40 p-2 rounded-full backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>
        )}

        <div className="relative">
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <div className="flex items-center justify-between">
              <p className="text-white text-lg font-medium">
                {alt}
              </p>
              {link && (
                <Link
                  to={link}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Details
                  <ExternalLink size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

   const images = [
    {
      src: "/gallery/breakfast_spread.jpeg",
      alt: "Turkish breakfast spread",
      link: "#menu",
      category: "Breakfast Platters"
    },
    {
      src: "/gallery/turkish-breakfast.jpg",
      alt: "Traditional Turkish breakfast",
      link: "#menu",
      category: "Breakfast Platters"
    },
    {
      src: "/gallery/simit.jpg",
      alt: "Fresh baked simit",
      link: "#menu",
      category: "Pastries"
    },
    {
      src: "/gallery/Potato_Pastry.jpeg",
      alt: "Potato Börek (Pastry)",
      link: "#menu",
      category: "Pastries"
    },
    {
      src: "/gallery/Spinach_Pastry.jpeg",
      alt: "Spinach Börek (Pastry)",
      link: "#menu",
      category: "Pastries"
    },
    {
      src: "/gallery/Ground_Beef_Pastry.jpeg",
      alt: "Ground Beef Börek (Pastry)",
      link: "#menu",
      category: "Pastries"
    },
    {
      src: "/gallery/menemen.jpg",
      alt: "Traditional menemen",
      link: "#menu",
      category: "Eggs & Omelettes"
    },
    {
      src: "/gallery/mushroom_omlette.jpeg",
      alt: "Mushroom Omelette",
      link: "#menu",
      category: "Eggs & Omelettes"
    },
    {
      src: "/gallery/su-boregi.jpeg",
      alt: "Su Böreği (Water Pastry)",
      link: "#menu",
      category: "Pastries"
    },
    {
      src: "/gallery/pastries.jpg",
      alt: "Assorted Turkish pastries",
      link: "#menu",
      category: "Pastries"
    },
    {
      src: "/gallery/tea-party.jpg",
      alt: "Tea party at Canan's",
      link: "/catering",
      category: "Catering Services"
    },
    {
      src: "/gallery/baklava.jpg",
      alt: "Fresh baklava",
      link: "#menu",
      category: "Desserts"
    },
    {
      src: "/gallery/san_sebastian_cheesecake.jpeg",
      alt: "San Sebastian Cheesecake",
      link: "#menu",
      category: "Desserts"
    },
    {
      src: "/gallery/turkish-coffee.jpg",
      alt: "Turkish coffee service",
      link: "#menu",
      category: "Beverages"
    },
    {
      src: "/gallery/interior.jpg",
      alt: "Restaurant interior",
      link: "#contact",
      category: "Visit Us"
    },
  ];

  const handleNext = useCallback(() => {
    setSelectedImageIndex(current => 
      current !== null && current < images.length - 1 ? current + 1 : current
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setSelectedImageIndex(current => 
      current !== null && current > 0 ? current - 1 : current
    );
  }, []);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-primary">
          A Feast for Your Eyes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="grid gap-6">
            {[images[0], images[1]].map((image, index) => (
              <div
                key={index}
                className={`h-48 md:h-${index === 0 ? "96" : "64"} rounded-xl overflow-hidden cursor-pointer group relative bg-white p-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative h-full overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1">
                      <p className="text-white text-sm font-medium">
                        {image.alt}
                      </p>
                      <span className="inline-block px-2 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-6">
            {[images[2], images[3]].map((image, index) => (
              <div
                key={index}
                className={`h-48 md:h-${index === 0 ? "64" : "96"} rounded-xl overflow-hidden cursor-pointer group relative bg-white p-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                onClick={() => setSelectedImageIndex(index + 2)}
              >
                <div className="relative h-full overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1">
                      <p className="text-white text-sm font-medium">
                        {image.alt}
                      </p>
                      <span className="inline-block px-2 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-6">
            {[images[4], images[5]].map((image, index) => (
              <div
                key={index}
                className={`h-48 md:h-${index === 0 ? "96" : "64"} rounded-xl overflow-hidden cursor-pointer group relative bg-white p-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                onClick={() => setSelectedImageIndex(index + 4)}
              >
                <div className="relative h-full overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1">
                      <p className="text-white text-sm font-medium">
                        {image.alt}
                      </p>
                      <span className="inline-block px-2 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid gap-6">
            {[images[6], images[7]].map((image, index) => (
              <div
                key={index}
                className={`h-48 md:h-${index === 0 ? "64" : "96"} rounded-xl overflow-hidden cursor-pointer group relative bg-white p-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                onClick={() => setSelectedImageIndex(index + 6)}
              >
                <div className="relative h-full overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1">
                      <p className="text-white text-sm font-medium">
                        {image.alt}
                      </p>
                      <span className="inline-block px-2 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <ImageModal
          src={images[selectedImageIndex].src}
          alt={images[selectedImageIndex].alt}
          link={images[selectedImageIndex].link}
          onClose={() => setSelectedImageIndex(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          hasNext={selectedImageIndex < images.length - 1}
          hasPrevious={selectedImageIndex > 0}
        />
      )}
    </section>
  );
}
