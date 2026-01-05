import { Star, Quote } from 'lucide-react';

interface ReviewCardProps {
  author: string;
  rating: number;
  text: string;
  date?: string;
}

export function ReviewCard({ author, rating, text, date }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      {/* Quote icon */}
      <div className="mb-4">
        <Quote size={24} className="text-primary/30" />
      </div>
      
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-accent fill-accent' : 'text-charcoal/20'}
          />
        ))}
      </div>
      
      {/* Review text */}
      <p className="text-charcoal-light flex-grow mb-4 leading-relaxed">
        "{text}"
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-charcoal/5">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-medium text-sm">
            {author?.charAt(0)?.toUpperCase() || '?'}
          </span>
        </div>
        <div>
          <p className="font-medium text-charcoal">{author || 'Guest'}</p>
          {date && (
            <p className="text-xs text-charcoal-light">{date}</p>
          )}
        </div>
      </div>
    </div>
  );
}
