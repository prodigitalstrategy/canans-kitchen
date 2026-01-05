import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-lg mb-4 text-gray-700">
              Welcome to Canan's Kitchen & Bakery, where authentic Turkish flavors meet California's warm hospitality. As a woman-owned business, we take pride in bringing the rich traditions of Turkish breakfast culture to Fountain Valley.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Our owner, Canan, brings decades of culinary expertise and family recipes passed down through generations. Every dish is crafted with love and attention to detail, ensuring an authentic taste of Türkiye in every bite.
            </p>
            <p className="text-lg text-gray-700">
              From our signature Menemen to freshly baked simit, each item on our menu tells a story of tradition, family, and passion for good food.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80" 
              alt="Turkish Breakfast Spread" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );