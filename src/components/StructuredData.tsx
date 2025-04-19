import React from "react";

export function StructuredData() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Restaurant',
          name: "Canan's Kitchen & Bakery",
          image: "https://cananskitchen.com/og-image.jpg",
          '@id': "https://cananskitchen.com/",
          url: "https://cananskitchen.com/",
          telephone: "+1-949-394-6318",
          address: {
            '@type': 'PostalAddress',
            streetAddress: '16937 Bushard St',
            addressLocality: 'Fountain Valley',
            addressRegion: 'CA',
            postalCode: '92708',
            addressCountry: 'US',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 33.721,
            longitude: -117.954,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
              ],
              opens: '08:30',
              closes: '14:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Saturday', 'Sunday'
              ],
              opens: '09:00',
              closes: '15:00',
            },
          ],
          servesCuisine: [
            'Turkish', 'Breakfast', 'Bakery', 'Cafe', 'Vegetarian', 'Pastries'
          ],
          priceRange: '$$'
        })
      }} />

      {/* Organization Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: "Canan's Kitchen & Bakery",
          url: "https://cananskitchen.com/",
          logo: "https://cananskitchen.com/og-image.jpg",
          sameAs: [
            "https://www.instagram.com/canansktchen/",
            "https://www.yelp.com/biz/canans-kitchen-and-bakery-fountain-valley",
            "https://maps.google.com/?q=16937+Bushard+St,+Fountain+Valley,+CA+92708"
          ]
        })
      }} />

      {/* FAQPage/Review/Other schemas can be added per page as needed */}
    </>
  );
}
