import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name='UVSP Buildcon', type='website' }) => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": type === 'article' ? 'Article' : 'RealEstateAgent',
    "name": name,
    "url": "https://uvspbuildcon.com",
    ...(type !== 'article' && {
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12, Prithviraj Road",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110011",
        "addressCountry": "IN"
      },
      "telephone": "+91-8800589785"
    })
  };

  return (
    <Helmet>
      <title>{title} | UVSP Buildcon</title>
      <meta name="description" content={description} />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={`${title} | UVSP Buildcon`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://uvspbuildcon.com" />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | UVSP Buildcon`} />
      <meta name="twitter:description" content={description} />
      
      {/* JSON-LD Schema for Google Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default SEO;
