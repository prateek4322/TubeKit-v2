import { Helmet } from "react-helmet-async";

function SEO({
  title = "TubeKit | Free AI Tools for YouTube Creators",

  description = "Free AI-powered YouTube tools for YouTube creators including title generator, description generator, tags generator, script writer, thumbnail tools and more.",

  keywords = "TubeKit, YouTube AI Tools, YouTube SEO, AI Title Generator, YouTube Tags Generator",

  image = "/og-image.png",

  canonical = "/",
}) {
  const siteUrl = "https://tubekitapp.in";

  const canonicalUrl = canonical.startsWith("http")
    ? canonical
    : `${siteUrl}${canonical}`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic SEO */}

      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="robots"
        content="index, follow"
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      <meta
        property="og:site_name"
        content="TubeKit"
      />

      {/* Twitter */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />
    </Helmet>
  );
}

export default SEO;