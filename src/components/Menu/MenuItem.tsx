import { ChevronRight, Leaf, Wheat, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  name: string;
  price: number;
  description: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  hasAllergens?: boolean;
  adjustments?: string[];
  isChefPick?: boolean;
}

export function MenuItem({
  name,
  price,
  description,
  isVegetarian,
  isVegan,
  hasAllergens,
  adjustments,
  isChefPick,
}: MenuItemProps) {
  // Generate slug for the detail page URL
  const slug = name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
  
  return (
    <Link 
      to={`/menu/${slug}`}
      className="group relative block cursor-pointer bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-6">
        {/* Header with name and dietary info */}
        <div className="flex justify-between items-start gap-3 mb-3">
          <h3 className="font-display text-xl text-charcoal group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {isChefPick && (
              <span className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center" title="Chef's Pick">
                <ChefHat size={14} className="text-primary" />
              </span>
            )}
            {isVegan && (
              <span className="w-7 h-7 bg-secondary/10 rounded-full flex items-center justify-center" title="Vegan">
                <Leaf size={14} className="text-secondary" />
              </span>
            )}
            {isVegetarian && !isVegan && (
              <span className="w-7 h-7 bg-secondary/10 rounded-full flex items-center justify-center" title="Vegetarian">
                <Wheat size={14} className="text-secondary" />
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-charcoal-light text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Allergen warning if applicable */}
        {hasAllergens && (
          <p className="text-amber-600 text-xs mb-3 flex items-center gap-1">
            <span>⚠️</span> Contains allergens
          </p>
        )}
        
        {/* Adjustments if available */}
        {adjustments && adjustments.length > 0 && (
          <div className="mb-4">
            <p className="text-charcoal-light/70 text-xs">
              <span className="font-medium">Can be adjusted:</span>
              {adjustments.slice(0, 2).map((adjustment, index) => (
                <span key={adjustment} className="ml-1">
                  {index > 0 ? ", " : " "}
                  {adjustment}
                </span>
              ))}
              {adjustments.length > 2 && <span className="ml-1">+{adjustments.length - 2} more</span>}
            </p>
          </div>
        )}

        {/* Price section */}
        <div className="mt-auto pt-4 border-t border-charcoal/5">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg text-primary">
              ${price.toFixed(2)}
            </span>
            <span className="flex items-center text-charcoal-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              View details
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
