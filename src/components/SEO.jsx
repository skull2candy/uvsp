import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://uvspbuildcon.com';
const SITE_NAME = 'UVSP Buildcon Pvt. Ltd.';
const DEFAULT_IMAGE = `${SITE_URL}/the-crown-new.png`;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "UVSP Buildcon Pvt. Ltd.",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "image": DEFAULT_IMAGE,
  "description": "UVSP Buildcon — 18+ years of luxury real estate development in South Delhi. Premium builder floors, luxury homes, and bespoke residences in Vasant Kunj, Mehrauli, Chattarpur, and Saket.",
  "telephone": "+91-8800589785",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12, Prithviraj Road",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110011",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6139",
    "longitude": "77.2090"
  },
  "openingHours": "Mo-Sa 10:00-18:00",
  "priceRange": "₹₹₹₹",
  "areaServed": ["Vasant Kunj", "Mehrauli", "Chattarpur", "Saket", "South Delhi", "New Delhi"],
  "sameAs": [
    "https://www.instagram.com/uvspbuildcon",
    "https://www.99acres.com/the-crown-vasant-kunj-south-delhi-npxid-r457857"
  ]
};

const SEO = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  article = false,
  noindex = false,
}) => {
  const fullTitle = title
    ? `${title} | UVSP Buildcon`
    : 'Top Builders in South Delhi | UVSP Buildcon | Luxury Builder Floors';
  const metaDesc = description || 'UVSP Buildcon — The #1 choice for luxury builder floors and premium homes in South Delhi. 18+ years of excellence in Vasant Kunj, Mehrauli, Saket, and Chattarpur.';
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : undefined;
  const ogImage = image || DEFAULT_IMAGE;

  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": metaDesc,
    "image": ogImage,
    "author": { "@type": "Organization", "name": SITE_NAME },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` }
    }
  } : null;

  // Add RealEstateListing Schema for broader search impact
  const listingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Luxury Builder Floors in Vasant Kunj",
        "url": `${SITE_URL}/property/the-crown`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Premium Independent Floors in Mehrauli",
        "url": `${SITE_URL}/property/ryhan-square`
      }
    ]
  };

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content="builders in south delhi, luxury builder floors south delhi, premium properties south delhi, best real estate developers south delhi, luxury houses delhi, buy property vasant kunj, builder floors saket, independent floors chattarpur, UVSP Buildcon, royal builders delhi" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonicalUrl || SITE_URL} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(listingSchema)}
      </script>

      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
