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
      { /* Standard metadata tags */ }
      <title>{title} | UVSP Buildcon Pvt. Ltd.</title>
      <meta name='description' content={description} />
      
      { /* OpenGraph tags */ }
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      { /* Twitter tags */ }
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      { /* JSON-LD Schema for Google Rich Snippets */ }
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};

export default SEO;
