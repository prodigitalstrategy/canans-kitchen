import React from "react";
import { Coffee, Clock, Award, Heart } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Coffee,
      title: "Authentic Turkish Breakfast",
      description:
        "Experience the rich flavors of traditional Turkish breakfast, from freshly baked simit to homemade jams.",
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description:
        "Every dish is prepared fresh daily using carefully selected ingredients and time-honored recipes.",
    },
    {
      icon: Award,
      title: "Family Recipes",
      description:
        "Savor dishes crafted from cherished family recipes, passed down through generations.",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description:
        "Each plate is prepared with care and attention to detail, bringing the warmth of Turkish hospitality to California.",
    },
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
