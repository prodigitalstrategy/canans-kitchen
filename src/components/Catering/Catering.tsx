import React from "react";
import { Utensils, Users, Clock, Phone } from "lucide-react";

export function Catering() {
  return (
    <section id="catering" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-2 text-center text-primary">
          Catering Services
        </h2>
        <p className="text-center mb-12 text-gray-600">
          Bring the authentic taste of Turkish breakfast to your special events
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">
              Our Catering Offerings
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Users className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Group Sizes</h4>
                  <p className="text-gray-600">
                    Perfect for intimate gatherings of 10 to large events of
                    100+
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Utensils className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Menu Options</h4>
                  <p className="text-gray-600">
                    Customizable breakfast spreads featuring our signature
                    dishes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold">Service Types</h4>
                  <p className="text-gray-600">
                    Drop-off service or full-service catering available
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">
              Popular Catering Packages
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold">
                  Traditional Turkish Breakfast Spread
                </h4>
                <p className="text-gray-600 mb-2">
                  Selection of cheeses, olives, fresh bread, eggs, and spreads
                </p>
                <p className="text-sm text-gray-500">
                  Starting at $25 per person (minimum 10 people)
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Pastry & Coffee Package</h4>
                <p className="text-gray-600 mb-2">
                  Assorted pastries, simit, Turkish coffee, and tea service
                </p>
                <p className="text-sm text-gray-500">
                  Starting at $15 per person (minimum 15 people)
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Premium Feast Package</h4>
                <p className="text-gray-600 mb-2">
                  Full breakfast spread plus hot dishes including menemen
                </p>
                <p className="text-sm text-gray-500">
                  Starting at $35 per person (minimum 20 people)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Contact us to customize a catering package for your event
          </p>
          <a
            href="tel:+19493946318"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Phone size={20} />
            Call (949) 394-6318
          </a>
        </div>
      </div>
    </section>
  );
}
