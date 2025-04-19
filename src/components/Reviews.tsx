import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Best Turkish breakfast in Orange County! The Menemen is absolutely authentic and delicious.",
    author: "Sarah M.",
    rating: 5
  },
  {
    text: "Such a cozy atmosphere and the Turkish coffee is perfect. Love the family-run feel!",
    author: "John D.",
    rating: 5
  },
  {
    text: "The pastries are heavenly and Canan is the sweetest host. A must-visit!",
    author: "Emily R.",
    rating: 5
  }
];

export function Reviews() {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-2 text-center text-orange-900">What Our Guests Say</h2>
        <p className="text-center mb-12 text-gray-600">Join our happy customers</p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <p className="font-semibold text-orange-800">{review.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.yelp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 font-semibold"
          >
            Leave us a review →
          </a>
        </div>
      </div>
    </section>
  );
}