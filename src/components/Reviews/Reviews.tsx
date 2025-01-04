import React from 'react';
import { ReviewCard } from './ReviewCard';
import { reviews } from './reviewsData';

export function Reviews() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-2 text-center text-primary">What Our Guests Say</h2>
        <p className="text-center mb-12 text-gray-600">Join our happy customers</p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.yelp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark font-semibold"
          >
            Leave us a review →
          </a>
        </div>
      </div>
    </section>
  );
}