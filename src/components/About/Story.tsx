import React from "react";

export function Story() {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold mb-12 text-center text-primary">
          From Dream to Reality: Canan's Kitchen
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Canan's Kitchen is more than just a café—it's a heartfelt
                journey that began with my childhood memories, my mother's
                inspiration, and my own lovingly crafted recipes. Here, I share
                the warmth of a true Turkish breakfast, along with handmade
                pastries and simit that feel like home. Every dish tells a
                story; every plate carries a piece of my heart.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The kind words from my customers have been my greatest source of
                motivation. Whenever someone says, "You can taste the love in
                your food," I know I'm right where I'm meant to be.
              </p>
              <h3 className="text-2xl font-display font-semibold text-primary mt-10 mb-4">
                A Journey That Started at Home
              </h3>
              <p className="text-gray-700 leading-relaxed">
                What began as cooking for friends and family slowly grew into a
                joyful profession. In those early days, I worked out of my own
                kitchen, carefully preparing each meal from scratch before
                packing it up and sending it off. It wasn't just about
                cooking—it was about sharing stories through food.
              </p>
              <h3 className="text-2xl font-display font-semibold text-primary mt-10 mb-4">
                Canan's Door to the Kitchen
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I've been drawn to the kitchen since I was ten years old. In my
                eyes, cooking has never been just a task; it's a passion. I
                would watch my mother cook with awe and admiration, soaking up
                her gentle touches, thoughtful details, and the love she poured
                into every meal. It was from her that I first learned to cook.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over time, I added my own twist to her recipes. My earliest
                dishes were inspired by her recipe notebook, but the years I
                spent in the kitchen taught me far more than just technique.
                They taught me how food can bring happiness to the people I
                cherish.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/canan-cooking.jpg"
                alt="Canan in her kitchen"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full bg-primary/5 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
