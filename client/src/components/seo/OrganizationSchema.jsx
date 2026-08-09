function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "Organization",

    name: "TubeKit",

    url: "https://tubekitapp.in",

    logo: "https://tubekitapp.in/logo.png",

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