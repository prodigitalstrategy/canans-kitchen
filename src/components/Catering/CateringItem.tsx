import { Clock, Users, ChefHat, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CateringItem as CateringItemType } from './types';

interface CateringItemProps {
  item: CateringItemType;
  onOrder?: (itemName: string) => void;
}

export function CateringItem({ item, onOrder }: CateringItemProps) {
  return (
    <Link 
      to={`/catering/${item.id}`}
      className="group relative block cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className={`
        p-6 transition-all duration-300
        ${item.popular ? 'border-2 border-primary/10' : ''}
      `}>
      {item.imageUrl && (
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-40 object-cover rounded-lg mb-4"
          loading="lazy"
        />
      )}
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-display text-xl text-primary group-hover:text-primary-dark transition-colors">
            {item.name}
            {item.popular && (
              <span className="ml-2 inline-block">
                <ChefHat size={20} className="text-primary-dark inline" />
              </span>
            )}
          </h3>
          <div className="flex items-center gap-2">
            {item.isVegan && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Vegan
              </span>
            )}
            {item.isVegetarian && !item.isVegan && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Vegetarian
              </span>
            )}
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          {item.description}
        </p>

        {/* Order Now Button */}
        {onOrder && (
          <button
            className="w-full mb-4 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition font-semibold"
            onClick={(e) => {
              e.preventDefault();
              onOrder(item.name);
            }}
          >
            Order Now
          </button>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>{item.preparationTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} />
            <span>{item.servingSize}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="font-medium text-primary-dark">
              ${item.pricePerPerson.toFixed(2)} per person
            </span>
            <span className="text-gray-500 text-sm">
              Min. {item.minOrder} people
            </span>
          </div>
        </div>
        
        {/* View details indicator */}
        <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center text-primary-dark text-sm font-medium bg-white/80 px-2 py-1 rounded-full shadow-sm">
            <span>View details</span>
            <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
