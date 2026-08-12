function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.tubekitapp.in/#website",

    name: "TubeKit",

    url: "https://www.tubekitapp.in/",

    description:
      "TubeKit provides free AI-powered tools for YouTube creators, including title generators, script generators, tags, hashtags, keywords, thumbnails and more.",

    inLanguage: "en-IN",

    publisher: {
      "@type": "Organization",
      "@id": "https://www.tubekitapp.in/#organization",
      name: "TubeKit",
      url: "https://www.tubekitapp.in/",
    },

    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://www.tubekitapp.in/?q={search_term_string}",
      },
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