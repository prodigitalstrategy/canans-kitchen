import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
  locale?: string;
  noIndex?: boolean;
}

export function SEO({
  title = "Canan's Kitchen & Bakery - Authentic Turkish Breakfast in Fountain Valley, CA",
  description = "Experience authentic Turkish breakfast and homemade pastries in Fountain Valley. Fresh simit, menemen, Turkish tea & coffee. Family-owned restaurant with traditional recipes.",
  keywords = "Turkish breakfast, Turkish restaurant, Fountain Valley breakfast, simit, menemen, Turkish coffee, Turkish tea, Turkish pastries, authentic Turkish food, breakfast restaurant Orange County",
  canonical = "https://cananskitchen.com/",
  image = "/gallery/turkish-breakfast.jpg",
  type = "website",
  locale = "en_US",
  noIndex = false,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={canonical} />
      <link rel="canonical" href={canonical} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
}
