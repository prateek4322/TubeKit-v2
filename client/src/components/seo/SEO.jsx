import { Helmet } from "react-helmet-async";

import Breadcrumb from "./Breadcrumb";
import FAQSchema from "./FAQSchema";
import Schema from "./Schema";
import OrganizationSchema from "./OrganizationSchema";

function SEO({
  title = "TubeKit | Free AI Tools for YouTube Creators",

  description =
    "Free AI-powered YouTube tools for YouTube creators including title generator, description generator, tags generator, script writer, thumbnail tools and more.",

  keywords =
    "TubeKit, YouTube AI Tools, YouTube SEO, AI Title Generator, YouTube Tags Generator",

  image = "/og-image.png",

  canonical = "/",

  breadcrumbs = [],

  faqs = [],

  organization = false,

  schema = null,

  type = "website",

  // Article SEO
  author = "TubeKit",

  publishedDate = "",

  modifiedDate = "",

  // Optional article section
  articleSection = "",

  // Prevent accidental indexing if needed
  noIndex = false,
}) {
  const siteUrl = "https://www.tubekitapp.in";

  const normalizeUrl = (value) => {
    if (!value) return siteUrl;

    if (value.startsWith("http://") || value.startsWith("https://")) {
      return value;
    }

    return `${siteUrl}${
      value.startsWith("/") ? value : `/${value}`
    }`;
  };

  const canonicalUrl = normalizeUrl(canonical);

  const imageUrl = normalizeUrl(image);

  const isArticle = type === "article";

  return (
    <>
      <Helmet>

        {/* =========================
            BASIC SEO
        ========================== */}

        <html lang="en" />

        <title>{title}</title>

        <meta
          name="description"
          content={description}
        />

        {keywords && (
          <meta
            name="keywords"
            content={keywords}
          />
        )}

        <meta
          name="robots"
          content={
            noIndex
              ? "noindex, nofollow"
              : "index, follow"
          }
        />

        <meta
          name="googlebot"
          content={
            noIndex
              ? "noindex, nofollow"
              : "index, follow"
          }
        />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        {/* =========================
            OPEN GRAPH
        ========================== */}

        <meta
          property="og:type"
          content={isArticle ? "article" : "website"}
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
          property="og:image:alt"
          content={title}
        />

        <meta
          property="og:site_name"
          content="TubeKit"
        />

        <meta
          property="og:locale"
          content="en_IN"
        />

        {/* =========================
            ARTICLE META
        ========================== */}

        {isArticle && author && (
          <meta
            property="article:author"
            content={author}
          />
        )}

        {isArticle && articleSection && (
          <meta
            property="article:section"
            content={articleSection}
          />
        )}

        {isArticle && publishedDate && (
          <meta
            property="article:published_time"
            content={publishedDate}
          />
        )}

        {isArticle && modifiedDate && (
          <meta
            property="article:modified_time"
            content={modifiedDate}
          />
        )}

        {/* =========================
            TWITTER / X
        ========================== */}

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

        <meta
          name="twitter:image:alt"
          content={title}
        />

        {/* =========================
            JSON-LD
        ========================== */}

        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}

      </Helmet>

      {/* =========================
          WEBSITE SCHEMA
      ========================== */}

      <Schema />

      {/* =========================
          ORGANIZATION SCHEMA
      ========================== */}

      {organization && (
        <OrganizationSchema />
      )}

      {/* =========================
          BREADCRUMB
      ========================== */}

      {breadcrumbs.length > 0 && (
        <Breadcrumb
          items={breadcrumbs}
        />
      )}

      {/* =========================
          FAQ SCHEMA
      ========================== */}

      {faqs.length > 0 && (
        <FAQSchema
          faqs={faqs}
        />
      )}
    </>
  );
}

export default SEO;