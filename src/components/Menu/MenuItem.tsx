import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  name: string;
  price: number;
  description: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  hasAllergens?: boolean;
  adjustments?: string[];
  onOrder?: (itemName: string) => void;
}

import { menuItemDetails } from "./menuData";

export function MenuItem({
  name,
  price,
  description,
  isVegetarian,
  isVegan,
  hasAllergens,
  adjustments,
  onOrder,
}: MenuItemProps) {
  // Generate slug for the detail page URL
  const slug = name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
  const image = menuItemDetails[slug]?.images?.[0];

  return (
    <Link 
      to={`/menu/${slug}`}
      className="group relative block cursor-pointer bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 mb-4"
    >
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover object-center mb-4 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      )}
      <div className="p-6 transition-all duration-300">
        {/* Header with name and dietary info */}
        {/* Header with name and dietary info */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-display text-xl text-primary group-hover:text-primary-dark transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            {isVegan && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Vegan
              </span>
            )}
            {isVegetarian && !isVegan && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Vegetarian
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        {/* Order Now Button */}
        {onOrder && (
          <button
            className="w-full mb-4 px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition font-semibold"
            onClick={(e) => {
              e.preventDefault();
              onOrder(name);
            }}
          >
            Order Now
          </button>
        )}

        {/* Allergen warning if applicable */}
        {hasAllergens && (
          <p className="text-amber-600 text-xs mb-2">⚠️ Contains allergens</p>
        )}
        
        {/* Adjustments if available */}
        {adjustments && adjustments.length > 0 && (
          <div className="mb-4">
            <p className="text-gray-500 text-sm">
              <span className="font-medium">Adjustments available:</span>
              {adjustments.map((adjustment, index) => (
                <span key={adjustment} className="ml-1">
                  {index > 0 ? ", " : " "}
                  {adjustment}
                </span>
              ))}
            </p>
          </div>
        )}

        {/* Price section */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="font-medium text-primary-dark">
              ${price.toFixed(2)}
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
