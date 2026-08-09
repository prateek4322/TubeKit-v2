function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "TubeKit",

    url: "https://tubekitapp.in",

    description:
      "Free AI Tools for YouTube Creators.",

    potentialAction: {
      "@type": "SearchAction",

      target:
        "https://tubekitapp.in/search?q={search_term_string}",

      "query-input":
        "required name=search_term_string",
    },
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

export default Schema;