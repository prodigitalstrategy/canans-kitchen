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
    <div className="p-4 border-b border-gray-100 last:border-0">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-start gap-2">
          <h3 className="font-serif font-semibold text-lg text-primary">
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
      <p className="text-gray-600 text-sm mb-1">{description}</p>
      {hasAllergens && (
        <p className="text-amber-600 text-xs">⚠️ Contains allergens</p>
      )}
      {adjustments && adjustments.length > 0 && (
        <div className="mt-2">
          <p className="text-gray-500 text-xs">
            Adjustments: {adjustments.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}
