import { Helmet } from "react-helmet-async";

function SEO({
  title = "TubeKit | Free AI Tools for YouTube Creators",
  description = "Free AI-powered YouTube tools including title generator, tags generator, script writer, monetization checker, thumbnail downloader and more.",
  keywords = "TubeKit, YouTube AI Tools, YouTube SEO, AI Title Generator, Tags Generator, Script Writer",
  image = "/og-image.png",
  url = "https://tubekit.in",
}) {
  return (
    <Helmet>

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
        href={url}
      />

      {/* Open Graph */}

      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta
        property="og:description"
        content={description}
      />

      <meta property="og:image" content={image} />

      <meta property="og:url" content={url} />

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
        content={image}
      />

    </Helmet>
  );
}

export default SEO;