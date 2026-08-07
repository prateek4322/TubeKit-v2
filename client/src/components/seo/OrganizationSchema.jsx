function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: "TubeKit",

    url: "https://tubekit.in",

    logo: "https://tubekit.in/logo.png",

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default OrganizationSchema;