import React from "react";
import { Leaf, Wheat } from "lucide-react";

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
  return (
    <div className="group relative">
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
      <div className="absolute top-0 left-0 right-0 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50/80 transition-all duration-300 group-hover:shadow-xl">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-start gap-2 group-hover:scale-[1.15] transition-transform duration-300 origin-left">
            <h3 className="font-serif font-semibold text-lg text-primary group-hover:text-primary-dark transition-colors">
              {name}
            </h3>
            <div className="flex gap-1 mt-1">
              {isVegan && (
                <span title="Vegan" className="transform group-hover:scale-110 transition-transform duration-300">
                  <Leaf size={16} className="text-green-600" />
                </span>
              )}
              {isVegetarian && !isVegan && (
                <span title="Vegetarian" className="transform group-hover:scale-110 transition-transform duration-300">
                  <Wheat size={16} className="text-green-600" />
                </span>
              )}
            </div>
          </div>
          <span className="font-serif font-bold text-lg group-hover:scale-[1.15] transition-transform duration-300 origin-right">${price}</span>
        </div>
        <div className="relative group-hover:scale-[1.15] transition-transform duration-300 origin-left mt-4 max-w-[85%]">
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
    </div>
  );
}
