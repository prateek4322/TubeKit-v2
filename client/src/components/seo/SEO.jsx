import { Helmet } from "react-helmet-async";

import Breadcrumb from "./Breadcrumb";
import FAQSchema from "./FAQSchema";
import Schema from "./Schema";
import OrganizationSchema from "./OrganizationSchema";

function SEO({
  title = "TubeKit | Free AI Tools for YouTube Creators",

  description = "Free AI-powered YouTube tools for YouTube creators including title generator, description generator, tags generator, script writer, thumbnail tools and more.",

  keywords = "TubeKit, YouTube AI Tools, YouTube SEO, AI Title Generator, YouTube Tags Generator",

  image = "/og-image.png",

  canonical = "/",

  breadcrumbs = [],

  faqs = [],

  organization = false,

  schema = null,

  type = "website",
}) {
  const siteUrl = "https://www.tubekitapp.in";

  const canonicalUrl = canonical.startsWith("http")
    ? canonical
    : `${siteUrl}${canonical}`;

  const imageUrl = image.startsWith("http")
    ? image
    : `${siteUrl}${image}`;

  return (
    <>
      <Helmet>
        {/* =========================
            BASIC SEO
        ========================== */}

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

        {/* =========================
            OPEN GRAPH
        ========================== */}

        <meta
          property="og:type"
          content={type}
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

        {/* =========================
            CUSTOM JSON-LD SCHEMA
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

      {organization && <OrganizationSchema />}

      {/* =========================
          BREADCRUMB
      ========================== */}

      {breadcrumbs.length > 0 && (
        <Breadcrumb items={breadcrumbs} />
      )}

      {/* =========================
          FAQ SCHEMA
      ========================== */}

      {faqs.length > 0 && (
        <FAQSchema faqs={faqs} />
      )}
    </>
  );
}

export default SEO;