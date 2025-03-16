import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Clock, UtensilsCrossed, ChefHat, Wheat, Leaf, 
  ArrowLeft, Heart, Share2, Info, Star, AlertTriangle,
  CircleDot, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { menuItems, menuItemDetails } from "./menuData";
import { MenuItem } from "./MenuItem";

export function MenuItemDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "recipe" | "nutrition">("overview");
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Directly access the details using the slug parameter
  const details = slug ? menuItemDetails[slug] : undefined;
  
  // Find the corresponding menu item
  const menuItem = menuItems.find(item => {
    const itemSlug = item.name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
    return itemSlug === slug;
  });

  const relatedMenuItems = details?.relatedItems
    ? menuItems.filter((item) => {
        const itemSlug = item.name.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        return details.relatedItems.includes(itemSlug);
      })
    : [];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  if (!menuItem || !details) {
    return (
      <div className="container mx-auto px-4 py-12 mt-4 text-center">
        <h1 className="text-2xl font-medium text-gray-800 mb-4">Menu item not found</h1>
        <p className="text-gray-600 mb-6">The menu item you're looking for doesn't exist or has been removed.</p>
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Menu
        </Link>
      </div>
    );
  }

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="bg-warm-50 py-16 mt-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 pt-4">
          <nav className="flex text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/#menu" className="text-gray-500 hover:text-primary">Menu</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-primary">{menuItem.name}</span>
          </nav>
        </div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-white p-4 rounded-xl shadow-md">
              {details.images && details.images.length > 0 && (
                <img
                  src={details.images[0]}
                  alt={menuItem.name}
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
              
              {/* Action buttons */}
              <div className="absolute top-8 right-8 flex space-x-2">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`p-2 rounded-full ${
                    liked ? "bg-red-100 text-red-500" : "bg-white/90 text-gray-600"
                  } shadow-md transition-colors duration-300`}
                >
                  <Heart
                    size={20}
                    className={liked ? "fill-current" : ""}
                  />
                </button>
                
                <div className="relative">
                  <button
                    onClick={() => setShowShareOptions(!showShareOptions)}
                    className="p-2 rounded-full bg-white/90 text-gray-600 shadow-md hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Share2 size={20} />
                  </button>
                  
                  {showShareOptions && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                      <div className="py-1">
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Copy Link
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Share on Facebook
                        </button>
                        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Share on Twitter
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {menuItem.isVegan && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Leaf size={12} className="mr-1" /> Vegan
                  </span>
                )}
                {menuItem.isVegetarian && !menuItem.isVegan && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Wheat size={12} className="mr-1" /> Vegetarian
                  </span>
                )}
                {details.difficulty === "Easy" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <CircleDot size={12} className="mr-1" /> Easy
                  </span>
                )}
                {details.difficulty === "Medium" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    <CircleDot size={12} className="mr-1" /> Medium
                  </span>
                )}
                {details.difficulty === "Complex" && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    <CircleDot size={12} className="mr-1" /> Complex
                  </span>
                )}
                {menuItem.hasAllergens && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    <AlertTriangle size={12} className="mr-1" /> Contains Allergens
                  </span>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Details */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <h1 className="font-display text-3xl lg:text-4xl text-primary mb-3">
              {menuItem.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-amber-400">
                <Star className="fill-current" size={18} />
                <Star className="fill-current" size={18} />
                <Star className="fill-current" size={18} />
                <Star className="fill-current" size={18} />
                <Star className="fill-current stroke-amber-400 fill-amber-100" size={18} />
              </div>
              <span className="ml-2 text-sm text-gray-600">4.8 (24 reviews)</span>
            </div>
            
            <p className="text-gray-700 mb-6">
              {menuItem.description}
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {details.preparationTime && (
                <div className="flex items-center">
                  <Clock size={18} className="text-primary mr-2" />
                  <span className="text-sm text-gray-600">{details.preparationTime}</span>
                </div>
              )}
              {details.servingSize && (
                <div className="flex items-center">
                  <UtensilsCrossed size={18} className="text-primary mr-2" />
                  <span className="text-sm text-gray-600">{details.servingSize}</span>
                </div>
              )}
              {details.difficulty && (
                <div className="flex items-center">
                  <ChefHat size={18} className="text-primary mr-2" />
                  <span className="text-sm text-gray-600">{details.difficulty}</span>
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <div className="text-xl font-medium text-primary-dark mb-2">
                ${(menuItem.price * quantity).toFixed(2)}
              </div>
              
              {/* Quantity selector */}
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-gray-700">Quantity:</span>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="w-10 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Adjustments */}
              {menuItem.adjustments && menuItem.adjustments.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Available Adjustments:</h3>
                  <div className="flex flex-wrap gap-2">
                    {menuItem.adjustments.map((adjustment, index) => (
                      <div key={index} className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                        {adjustment}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button className="py-3 px-6 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors duration-300 flex-1">
                  Order Now
                </button>
                <button className="py-3 px-6 bg-white border border-primary text-primary font-medium rounded-lg hover:bg-primary-50 transition-colors duration-300 flex-1">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Tabs for more info */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "overview"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Overview
              </button>
              {details.recipe && (
                <button
                  onClick={() => setActiveTab("recipe")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "recipe"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Recipe
                </button>
              )}
              {details.nutrition && (
                <button
                  onClick={() => setActiveTab("nutrition")}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === "nutrition"
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Nutrition
                </button>
              )}
            </nav>
          </div>
        </div>
        
        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-16"
        >
          {activeTab === "overview" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-display text-2xl text-primary mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {details.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <CircleDot size={12} className="text-primary mr-2" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="font-display text-2xl text-primary mb-4">Fun Facts</h2>
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                  {details.funFacts.map((fact, index) => (
                    <div 
                      key={index} 
                      className={`flex items-start ${index < details.funFacts.length - 1 ? 'mb-3 pb-3 border-b border-gray-100' : ''}`}
                    >
                      <Info size={18} className="text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "recipe" && details.recipe && (
            <div className="prose max-w-none prose-primary">
              <h2 className="font-display text-2xl text-primary mb-4">Recipe</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="whitespace-pre-line">
                  {details.recipe}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "nutrition" && details.nutrition && (
            <div>
              <h2 className="font-display text-2xl text-primary mb-4">Nutrition Information</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {details.nutrition.calories && (
                    <div className="flex flex-col items-center p-4 border border-gray-100 rounded-lg">
                      <span className="text-primary mb-2 font-bold">Cal</span>
                      <span className="text-xl font-medium">{details.nutrition.calories}</span>
                      <span className="text-gray-500 text-sm">calories</span>
                    </div>
                  )}
                  {details.nutrition.protein && (
                    <div className="flex flex-col items-center p-4 border border-gray-100 rounded-lg">
                      <span className="text-primary mb-2">P</span>
                      <span className="text-xl font-medium">{details.nutrition.protein}g</span>
                      <span className="text-gray-500 text-sm">protein</span>
                    </div>
                  )}
                  {details.nutrition.carbs && (
                    <div className="flex flex-col items-center p-4 border border-gray-100 rounded-lg">
                      <span className="text-primary mb-2">C</span>
                      <span className="text-xl font-medium">{details.nutrition.carbs}g</span>
                      <span className="text-gray-500 text-sm">carbs</span>
                    </div>
                  )}
                  {details.nutrition.fat && (
                    <div className="flex flex-col items-center p-4 border border-gray-100 rounded-lg">
                      <span className="text-primary mb-2">F</span>
                      <span className="text-xl font-medium">{details.nutrition.fat}g</span>
                      <span className="text-gray-500 text-sm">fat</span>
                    </div>
                  )}
                  {details.nutrition.fiber && (
                    <div className="flex flex-col items-center p-4 border border-gray-100 rounded-lg">
                      <span className="text-primary mb-2">Fi</span>
                      <span className="text-xl font-medium">{details.nutrition.fiber}g</span>
                      <span className="text-gray-500 text-sm">fiber</span>
                    </div>
                  )}
                  {details.nutrition.sugar && (
                    <div className="flex flex-col items-center p-4 border border-gray-100 rounded-lg">
                      <span className="text-primary mb-2">S</span>
                      <span className="text-xl font-medium">{details.nutrition.sugar}g</span>
                      <span className="text-gray-500 text-sm">sugar</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
        
        {/* Related items */}
        {relatedMenuItems.length > 0 && (
          <div className="mb-16">
            <h2 className="font-display text-2xl text-primary mb-6">You Might Also Like</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedMenuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MenuItem {...item} />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link
                to="/#menu"
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
              >
                View Full Menu
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
