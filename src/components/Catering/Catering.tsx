import React from "react";
import { Link } from "react-router-dom";

export function Catering() {
  return (
    <section id="homepage-catering" className="py-12 xs:py-14 sm:py-16 bg-yellow-50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="font-display text-2xl xs:text-3xl md:text-4xl text-primary mb-5 xs:mb-6 text-center">Catering</h2>
        <p className="max-w-2xl mx-auto text-base xs:text-lg text-gray-700 mb-6 xs:mb-8 text-center">
          Let us bring the flavors of Turkey to your next event! We offer a variety of authentic Turkish dishes for parties, business meetings, and special occasions.
        </p>
        <div className="flex overflow-x-auto gap-4 px-1 mb-8 snap-x scrollbar-hide w-full max-w-md xs:max-w-2xl">
          <img src="/images/catering/potato-borek.jpg" alt="Potato Pastry" className="w-36 h-28 xs:w-40 xs:h-32 object-cover rounded-xl shadow-lg snap-center" loading="lazy" draggable="false" />
          <img src="/images/catering/grape-leaves.jpg" alt="Stuffed Grape Leaves" className="w-36 h-28 xs:w-40 xs:h-32 object-cover rounded-xl shadow-lg snap-center" loading="lazy" draggable="false" />
          <img src="/images/catering/cabbage-rolls.jpg" alt="Cabbage Rolls" className="w-36 h-28 xs:w-40 xs:h-32 object-cover rounded-xl shadow-lg snap-center" loading="lazy" draggable="false" />
        </div>
        <Link
          to="/catering"
          className="inline-flex items-center justify-center w-full max-w-xs xs:max-w-sm px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full shadow-lg hover:bg-primary-dark active:scale-95 transition-all mx-auto focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
          style={{ minHeight: 56 }}
        >
          See Catering Menu
        </Link>
      </div>
    </section>
  );
}
