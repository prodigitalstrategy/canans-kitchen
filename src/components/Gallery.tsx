import React from "react";

export function Gallery() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-primary">
          A Feast for Your Eyes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <div className="h-48 md:h-96 rounded-lg overflow-hidden">
              <img
                src="/gallery/breakfast-spread.jpg"
                alt="Turkish breakfast spread"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/gallery/simit.jpg"
                alt="Fresh baked simit"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/gallery/turkish-coffee.jpg"
                alt="Turkish coffee service"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-48 md:h-96 rounded-lg overflow-hidden">
              <img
                src="/gallery/menemen.jpg"
                alt="Traditional menemen"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="h-48 md:h-96 rounded-lg overflow-hidden">
              <img
                src="/gallery/pastries.jpg"
                alt="Assorted Turkish pastries"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/gallery/tea-party.jpg"
                alt="Tea party at Canan's"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="h-48 md:h-64 rounded-lg overflow-hidden">
              <img
                src="/gallery/baklava.jpg"
                alt="Fresh baklava"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-48 md:h-96 rounded-lg overflow-hidden">
              <img
                src="/gallery/interior.jpg"
                alt="Restaurant interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
