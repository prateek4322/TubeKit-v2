function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: "TubeKit",

    url: "https://www.tubekitapp.in/",

    description:
      "Free AI Tools for YouTube Creators.",
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