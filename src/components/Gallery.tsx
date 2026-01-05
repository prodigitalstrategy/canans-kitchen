import { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/dir/?api=1&destination=Canan's+Kitchen+%26+Bakery,+16937+Bushard+St,+Fountain+Valley,+CA+92708";

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-cream focus:outline-none z-10 bg-charcoal/50 hover:bg-charcoal/70 p-2 rounded-full backdrop-blur-sm transition-colors"
        >
          <X size={24} />
        </button>
        
        {hasPrevious && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-cream focus:outline-none transition-colors z-10 bg-charcoal/50 hover:bg-charcoal/70 p-2 rounded-full backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        {hasNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-cream focus:outline-none transition-colors z-10 bg-charcoal/50 hover:bg-charcoal/70 p-2 rounded-full backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        )}

        <div className="relative">
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/80 to-transparent p-6">
            <p className="text-white text-lg font-display">{alt}</p>
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
      src: "/gallery/breakfast-spread.jpg",
      alt: "Turkish breakfast spread",
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
      src: "/gallery/turkish-coffee.jpg",
      alt: "Turkish coffee service",
      link: "#menu",
      category: "Beverages"
    },
    {
      src: "/gallery/menemen.jpg",
      alt: "Traditional menemen",
      link: "#menu",
      category: "Eggs & Omelettes"
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
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-dark rounded-full text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            A Feast for Your Eyes
          </h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
            Glimpses of authentic Turkish breakfast culture and our warm atmosphere
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`
                ${index === 0 || index === 3 ? 'md:row-span-2' : ''}
                rounded-2xl overflow-hidden cursor-pointer group relative bg-cream shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1
              `}
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className={`relative overflow-hidden ${index === 0 || index === 3 ? 'h-64 md:h-full' : 'h-48 md:h-56'}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium mb-1">{image.alt}</p>
                    <span className="inline-block px-2 py-1 bg-primary/90 text-white text-xs font-medium rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA after gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-cream-dark rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-3">
              Come Experience It In Person
            </h3>
            <p className="text-charcoal-light mb-6">
              Pictures can only tell part of the story. Visit us to experience the aromas, flavors, and warm hospitality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:9493946318"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors shadow-warm hover:shadow-warm-lg"
              >
                <Phone size={18} />
                Call to Reserve
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-medium rounded-full hover:bg-secondary-dark transition-colors"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
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
