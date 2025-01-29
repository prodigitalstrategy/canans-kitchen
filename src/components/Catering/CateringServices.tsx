import React from 'react';
import { Users, UtensilsCrossed, Clock } from 'lucide-react';

interface CateringPackage {
  title: string;
  description: string;
  pricePerPerson: number;
  minimumPeople: number;
}

const packages: CateringPackage[] = [
  {
    title: 'Traditional Turkish Breakfast Spread',
    description: 'Selection of cheeses, olives, fresh bread, eggs, and spreads',
    pricePerPerson: 25,
    minimumPeople: 10
  },
  {
    title: 'Pastry & Coffee Package',
    description: 'Assorted pastries, simit, Turkish coffee, and tea service',
    pricePerPerson: 15,
    minimumPeople: 15
  },
  {
    title: 'Premium Feast Package',
    description: 'Full breakfast spread plus hot dishes including menemen',
    pricePerPerson: 35,
    minimumPeople: 20
  }
];

export function CateringServices() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-center text-4xl md:text-5xl font-display text-primary mb-4">
        Catering Services
      </h1>
      <p className="text-center text-gray-600 mb-16">
        Bring the authentic taste of Turkish breakfast to your special events
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Offerings */}
        <div>
          <h2 className="text-2xl font-display text-primary-dark mb-8">
            Our Catering Offerings
          </h2>

          {/* Group Sizes */}
          <div className="flex gap-4 mb-8">
            <Users className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-1">Group Sizes</h3>
              <p className="text-gray-600">
                Perfect for intimate gatherings of 10 to large events of 100+
              </p>
            </div>
          </div>

          {/* Menu Options */}
          <div className="flex gap-4 mb-8">
            <UtensilsCrossed className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-1">Menu Options</h3>
              <p className="text-gray-600">
                Customizable breakfast spreads featuring our signature dishes
              </p>
            </div>
          </div>

          {/* Service Types */}
          <div className="flex gap-4">
            <Clock className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-medium mb-1">Service Types</h3>
              <p className="text-gray-600">
                Drop-off service or full-service catering available
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Packages */}
        <div>
          <h2 className="text-2xl font-display text-primary-dark mb-8">
            Popular Catering Packages
          </h2>

          <div className="space-y-8">
            {packages.map((pkg) => (
              <div key={pkg.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-lg mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-3">{pkg.description}</p>
                <p className="text-sm text-gray-500">
                  Starting at ${pkg.pricePerPerson} per person (minimum {pkg.minimumPeople} people)
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-600 mb-6">
          Contact us to customize a catering package for your event
        </p>
        <a
          href="tel:+19493946318"
          className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-300"
        >
          Call (949) 394-6318
        </a>
      </div>
    </div>
  );
}
