import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  text: string;
  author: string;
  rating: number;
}

export function ReviewCard({ text, author, rating }: ReviewCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={20} className="fill-primary text-primary" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 line-clamp-4">{text}</p>
      <p className="font-semibold text-primary-dark">{author}</p>
    </div>
  );
}