import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Clock, ChefHat, ArrowLeft, Heart, Share2, Users
} from "lucide-react";
import { useOrderModal } from "../Menu/OrderModalWrapper";
import { cateringItems } from "./cateringData";

export function CateringItemDetail() {
  const { id } = useParams<{ id: string }>();
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "nutrition" | "ordering">("overview");
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [quantity, setQuantity] = useState(10);

  const { openModal, modal } = useOrderModal();
  // Find the catering item by ID
  const cateringItem = cateringItems.find(item => item.id === id);
  
  // Get related items (same category)
  const relatedItems = cateringItem 
    ? cateringItems.filter(item => 
        item.category === cateringItem.category && item.id !== cateringItem.id
      ).slice(0, 3)
    : [];

  // Get appropriate image for the catering item
  const getItemImage = (category: string) => {
    switch(category) {
      case "pastries":
        return "/gallery/simit.jpg";
      case "mains":
        return "/gallery/menemen.jpg";
      case "desserts":
        return "/gallery/baklava.jpg";
      default:
        return "/gallery/turkish-breakfast.jpg";
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Reset quantity to minimum order when item changes
    if (cateringItem) {
      setQuantity(cateringItem.minOrder);
    }
  }, [id, cateringItem]);

  if (!cateringItem) {
    return (
      <div className="container mx-auto px-4 py-12 mt-4 text-center">
        <h1 className="text-2xl font-medium text-gray-800 mb-4">Catering item not found</h1>
        <p className="text-gray-600 mb-6">The catering item you're looking for doesn't exist or has been removed.</p>
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

  return (
    <div className="container mx-auto px-4 py-12 mt-8">
      {/* Breadcrumb */}
      <div className="mb-8 pt-4">
        <Link
          to="/#catering"
          className="inline-flex items-center text-gray-500 hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Catering Menu
        </Link>
      </div>

      {/* Item Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Image */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <img
            src={getItemImage(cateringItem.category)}
            alt={cateringItem.name}
            className="w-full h-80 object-cover"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-between items-start mb-4">
            <h1 className="font-display text-3xl text-primary">
              {cateringItem.name}
              {cateringItem.popular && (
                <span className="ml-2 inline-block">
                  <ChefHat size={24} className="text-primary-dark inline" />
                </span>
              )}
            </h1>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLiked(!liked)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart
                  size={24}
                  className={liked ? "fill-red-500 text-red-500" : "text-gray-400"}
                />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowShareOptions(!showShareOptions)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Share2 size={24} className="text-gray-400" />
                </button>
                {showShareOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-10">
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">
                      Copy Link
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">
                      Share on Facebook
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">
                      Share on Twitter
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {cateringItem.isVegan && (
              <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                Vegan
              </span>
            )}
            {cateringItem.isVegetarian && !cateringItem.isVegan && (
              <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">
                Vegetarian
              </span>
            )}
            {cateringItem.popular && (
              <span className="bg-primary-light/10 text-primary-dark text-xs px-3 py-1 rounded-full">
                Popular Choice
              </span>
            )}
          </div>

          <p className="text-gray-600 mb-6">
            {cateringItem.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock size={18} />
              <span>Prep Time: {cateringItem.preparationTime}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users size={18} />
              <span>Serving: {cateringItem.servingSize}</span>
            </div>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-display text-2xl text-primary-dark">
                ${cateringItem.pricePerPerson.toFixed(2)}
              </span>
              <span className="text-gray-500">per person</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Quantity (people)</label>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(cateringItem.minOrder, quantity - 1))}
                className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                -
              </button>
              <input
                type="number"
                min={cateringItem.minOrder}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(cateringItem.minOrder, parseInt(e.target.value) || cateringItem.minOrder))}
                className="w-16 text-center border-t border-b border-gray-300 py-1"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                +
              </button>
              <span className="ml-4 text-gray-500">
                Min. {cateringItem.minOrder} people
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+19493946318"
              className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              {modal}
              <button
                className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                onClick={() => cateringItem && openModal(cateringItem.name)}
              >
                Order Now
              </button>
            </a>
            <a
              href="#contact"
              className="flex-1 inline-flex justify-center items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary-light/10 transition-colors"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8 border-b border-gray-200">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`pb-4 font-medium transition-colors ${
              activeTab === "overview"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("nutrition")}
            className={`pb-4 font-medium transition-colors ${
              activeTab === "nutrition"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Nutrition
          </button>
          <button
            onClick={() => setActiveTab("ordering")}
            className={`pb-4 font-medium transition-colors ${
              activeTab === "ordering"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Ordering Info
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mb-12">
        {activeTab === "overview" && (
          <div>
            <h2 className="font-display text-2xl text-primary mb-4">About this item</h2>
            <p className="text-gray-600 mb-6">
              {cateringItem.description}
            </p>
            <div className="bg-warm-50 rounded-lg p-6 mb-6">
              <h3 className="font-medium text-gray-800 mb-2">Perfect for:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Corporate events and meetings</li>
                <li>Family gatherings and celebrations</li>
                <li>Weddings and special occasions</li>
                <li>Holiday parties</li>
              </ul>
            </div>
            <div className="bg-warm-50 rounded-lg p-6">
              <h3 className="font-medium text-gray-800 mb-2">Why our customers love it:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Made with authentic Turkish recipes</li>
                <li>Fresh, high-quality ingredients</li>
                <li>Prepared on the day of your event</li>
                <li>Accommodates dietary restrictions</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "nutrition" && (
          <div>
            <h2 className="font-display text-2xl text-primary mb-4">Nutrition Information</h2>
            <p className="text-gray-600 mb-6">
              Approximate nutritional values per serving:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-warm-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-medium text-primary mb-1">
                  {cateringItem.category === "desserts" ? "350-450" : 
                   cateringItem.category === "mains" ? "250-350" : "200-300"}
                </div>
                <div className="text-gray-500 text-sm">Calories</div>
              </div>
              <div className="bg-warm-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-medium text-primary mb-1">
                  {cateringItem.category === "desserts" ? "15-25g" : 
                   cateringItem.category === "mains" ? "12-18g" : "8-15g"}
                </div>
                <div className="text-gray-500 text-sm">Protein</div>
              </div>
              <div className="bg-warm-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-medium text-primary mb-1">
                  {cateringItem.category === "desserts" ? "30-45g" : 
                   cateringItem.category === "mains" ? "20-30g" : "25-35g"}
                </div>
                <div className="text-gray-500 text-sm">Carbs</div>
              </div>
              <div className="bg-warm-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-medium text-primary mb-1">
                  {cateringItem.category === "desserts" ? "18-25g" : 
                   cateringItem.category === "mains" ? "10-18g" : "8-15g"}
                </div>
                <div className="text-gray-500 text-sm">Fat</div>
              </div>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              * Nutritional information is approximate and may vary based on exact ingredients and preparation methods.
            </div>
          </div>
        )}

        {activeTab === "ordering" && (
          <div>
            <h2 className="font-display text-2xl text-primary mb-4">Ordering Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Minimum Order</h3>
                <p className="text-gray-600">
                  This item requires a minimum order for {cateringItem.minOrder} people.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Advance Notice</h3>
                <p className="text-gray-600">
                  Please place your order at least 48 hours in advance. For large events (50+ people), 
                  we recommend placing your order 5-7 days in advance.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Delivery</h3>
                <p className="text-gray-600">
                  We offer delivery within a 15-mile radius of our location. Delivery fees apply based on distance.
                  Free delivery for orders over $300 within 5 miles.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Payment</h3>
                <p className="text-gray-600">
                  We require a 50% deposit to secure your order, with the remaining balance due on delivery or pickup.
                  We accept all major credit cards, cash, and business checks.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Cancellation Policy</h3>
                <p className="text-gray-600">
                  Cancellations made 48+ hours before your event receive a full refund of the deposit.
                  Cancellations within 48 hours of the event will result in a 50% charge of the total order.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related Items */}
      {relatedItems.length > 0 && (
        <div>
          <h2 className="font-display text-2xl text-primary mb-6">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedItems.map((item) => (
              <Link
                key={item.id}
                to={`/catering/${item.id}`}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={getItemImage(item.category)}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-primary">
                      {item.name}
                      {item.popular && (
                        <span className="ml-1">
                          <ChefHat size={16} className="inline text-primary-dark" />
                        </span>
                      )}
                    </h3>
                    <span className="text-primary-dark font-medium">${item.pricePerPerson.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
