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
    : 'UVSP Buildcon Pvt. Ltd. | Luxury Builder Floors & Premium Properties in South Delhi';
  const metaDesc = description || 'Discover luxury builder floors, premium homes, and trusted real estate development in South Delhi with UVSP Buildcon. 18+ years of excellence.';
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

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content="luxury builder floors South Delhi, premium properties South Delhi, luxury homes Delhi, buy property Vasant Kunj, builder floors Saket, premium floors Chattarpur, UVSP Buildcon, real estate developer South Delhi, luxury real estate New Delhi" />
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

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      {/* Article Schema (blog posts) */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
