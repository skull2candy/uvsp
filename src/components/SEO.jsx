import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://uvspbuildcon.com';
const SITE_NAME = 'UVSP Buildcon Pvt. Ltd.';
const DEFAULT_IMAGE = `${SITE_URL}/the-crown-new.webp`;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "UVSP Buildcon Pvt. Ltd.",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "image": DEFAULT_IMAGE,
  "description": "UVSP Buildcon — 18+ years of luxury real estate development in South Delhi. Premium builder floors, luxury homes, and bespoke residences in Vasant Kunj, Mehrauli, Jaunapur, Chattarpur, and Saket.",
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
  "areaServed": ["Vasant Kunj", "Mehrauli", "Jaunapur", "Chattarpur", "Saket", "South Delhi", "New Delhi"],
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
  property = null,
  faq = null,
  breadcrumbs = null,
  noindex = false,
}) => {
  // Prevent duplicate branding suffix
  const cleanTitle = title?.replace(/\s*\|\s*UVSP Buildcon.*$/i, '');
  const fullTitle = cleanTitle
    ? `${cleanTitle} | UVSP Buildcon`
    : 'Top Builders in South Delhi | UVSP Buildcon | Luxury Builder Floors';

  const metaDesc = description || 'UVSP Buildcon — The #1 choice for luxury builder floors and premium homes in South Delhi. 18+ years of excellence in Vasant Kunj, Mehrauli, Jaunapur, and Chattarpur.';
  const canonicalUrl = canonical ? `${SITE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}` : undefined;
  const ogImage = image ? (image.startsWith('http') ? image : `${SITE_URL}${image}`) : DEFAULT_IMAGE;

  // Article Schema
  const articleSchema = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": cleanTitle || title,
    "description": metaDesc,
    "image": ogImage,
    "mainEntityOfPage": canonicalUrl || SITE_URL,
    "author": { "@type": "Organization", "name": SITE_NAME },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` }
    }
  } : null;

  // RealEstateListing / Residence Schema for Project Details
  const residenceSchema = property ? {
    "@context": "https://schema.org",
    "@type": ["RealEstateListing", "SingleFamilyResidence"],
    "name": property.title,
    "description": property.description || metaDesc,
    "url": canonicalUrl || SITE_URL,
    "image": ogImage,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": property.locality || "South Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "numberOfRooms": 3,
    "numberOfBedrooms": 3,
    "offers": {
      "@type": "Offer",
      "price": property.price || "17500000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "businessFunction": "http://purl.org/goodrelations/v1#Sell"
    }
  } : null;

  // BreadcrumbList Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.url.startsWith('http') ? crumb.url : `${SITE_URL}${crumb.url}`
    }))
  } : null;

  // FAQPage Schema
  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Global Listing Schema
  const listingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Whispering Pines 3 BHK Luxury Society Jaunapur",
        "url": `${SITE_URL}/property/whispering-pines`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "The Crown 3 BHK Luxury Builder Floors in Vasant Kunj",
        "url": `${SITE_URL}/property/the-crown`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ryhan Square 3 BHK Independent Floors in South Delhi",
        "url": `${SITE_URL}/property/ryhan-square`
      }
    ]
  };

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content="builders in south delhi, luxury builder floors south delhi, premium properties south delhi, best real estate developers south delhi, buy property vasant kunj, 3 bhk jaunapur, builder floors jaunapur mandi road, builder floors saket, independent floors chattarpur, UVSP Buildcon" />
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

      {/* Structured Data Scripts */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(listingSchema)}
      </script>

      {residenceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(residenceSchema)}
        </script>
      )}

      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
