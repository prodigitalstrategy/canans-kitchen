import { Leaf, Wheat, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  name: string;
  price: number;
  description: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  hasAllergens?: boolean;
  adjustments?: string[];
}

export function MenuItem({
  name,
  price,
  description,
  isVegetarian,
  isVegan,
  hasAllergens,
  adjustments,
}: MenuItemProps) {
  // Generate slug for the detail page URL
  const slug = name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
  return (
    <Link to={`/menu/${slug}`} className="group relative block cursor-pointer">
      {/* Spacer div to maintain layout */}
      <div className="p-4 border-b border-gray-100 last:border-0 invisible">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-start gap-2">
            <h3 className="font-serif font-semibold text-lg">{name}</h3>
            <div className="flex gap-1 mt-1">
              {(isVegan || isVegetarian) && (
                <span className="w-4 h-4" />
              )}
            </div>
          </div>
          <span className="font-serif font-bold text-lg">${price}</span>
        </div>
        <p className="text-sm mb-1">{description}</p>
        {hasAllergens && <p className="text-xs">⚠️ Contains allergens</p>}
        {adjustments && adjustments.length > 0 && (
          <div className="mt-2">
            <p className="text-xs">
              Adjustments available:
              {adjustments.map((adjustment, index) => (
                <span key={adjustment}>
                  {index > 0 ? ", " : " "}
                  {adjustment}
                </span>
              ))}
            </p>
          </div>
        )}
      </div>

      {/* Actual content with hover effects */}
      <div className="absolute top-0 left-0 right-0 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/80 transition-all duration-300 group-hover:shadow-lg">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-start gap-2">
            <h3 className="font-serif font-semibold text-lg text-primary group-hover:text-primary-dark transition-colors">
              {name}
            </h3>
            <div className="flex gap-1 mt-1">
              {isVegan && (
                <span title="Vegan">
                  <Leaf size={16} className="text-green-600" />
                </span>
              )}
              {isVegetarian && !isVegan && (
                <span title="Vegetarian">
                  <Wheat size={16} className="text-green-600" />
                </span>
              )}
            </div>
          </div>
          <span className="font-serif font-bold text-lg">${price}</span>
        </div>
        <div className="relative mt-4 max-w-[95%]">
          <p className="text-gray-600 text-sm mb-1">{description}</p>
          {hasAllergens && (
            <p className="text-amber-600 text-xs">⚠️ Contains allergens</p>
          )}
          {adjustments && adjustments.length > 0 && (
            <div className="mt-2">
              <p className="text-gray-500 text-xs">
                Adjustments available:
                {adjustments.map((adjustment, index) => (
                  <span key={adjustment}>
                    {index > 0 ? ", " : " "}
                    {adjustment}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* View details indicator */}
      <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center text-primary-dark text-sm font-medium bg-white/80 px-2 py-1 rounded-full shadow-sm">
          <span>View details</span>
          <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
