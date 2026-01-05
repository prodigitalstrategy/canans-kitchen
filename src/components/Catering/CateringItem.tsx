import { Clock, Users, ChefHat, ChevronRight, Leaf, Wheat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CateringItem as CateringItemType } from './types';

interface CateringItemProps {
  item: CateringItemType;
}

export function CateringItem({ item }: CateringItemProps) {
  return (
    <Link 
      to={`/catering/${item.id}`}
      className="group relative block cursor-pointer bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`
        p-6
        ${item.popular ? 'ring-2 ring-accent/30' : ''}
      `}>
        {/* Popular badge */}
        {item.popular && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-accent text-charcoal text-xs font-medium rounded-full">
              <ChefHat size={12} />
              Popular
            </span>
          </div>
        )}

        <div className="flex items-start gap-3 mb-3">
          <h3 className="font-display text-xl text-charcoal group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {item.isVegan && (
              <span className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center" title="Vegan">
                <Leaf size={12} className="text-secondary" />
              </span>
            )}
            {item.isVegetarian && !item.isVegan && (
              <span className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center" title="Vegetarian">
                <Wheat size={12} className="text-secondary" />
              </span>
            )}
          </div>
        </div>

        <p className="text-charcoal-light text-sm leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center gap-4 text-xs text-charcoal-light mb-4">
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-charcoal-light/60" />
            <span>{item.preparationTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={14} className="text-charcoal-light/60" />
            <span>{item.servingSize}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-charcoal/5">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-display text-lg text-primary">
                ${item.pricePerPerson.toFixed(2)}
              </span>
              <span className="text-charcoal-light text-sm ml-1">per person</span>
            </div>
            <span className="text-charcoal-light/60 text-xs">
              Min. {item.minOrder}
            </span>
          </div>
        </div>
        
        {/* View details indicator */}
        <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center text-primary text-sm font-medium">
            <span>Details</span>
            <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
