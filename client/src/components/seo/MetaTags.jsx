import { useEffect } from "react";

const SITE_URL = "https://tubekit.com";
const SITE_NAME = "TubeKit";

function MetaTags({
  title,
  description,
  path = "/",
  image = "/og-image.png",
}) {
  useEffect(() => {
    const fullTitle =
      title === SITE_NAME ? SITE_NAME : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    const canonicalUrl = `${SITE_URL}${path}`;

    const setMeta = (name, content) => {
      if (!content) return;

      let meta = document.querySelector(`meta[name="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      if (!content) return;

      let meta = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("robots", "index, follow");

    setProperty("og:title", fullTitle);
    setProperty("og:description", description);
    setProperty("og:type", "website");
    setProperty("og:url", canonicalUrl);
    setProperty("og:site_name", SITE_NAME);
    setProperty("og:image", `${SITE_URL}${image}`);

    setProperty("twitter:card", "summary_large_image");
    setProperty("twitter:title", fullTitle);
    setProperty("twitter:description", description);
    setProperty("twitter:image", `${SITE_URL}${image}`);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);

    return () => {
      document.title = SITE_NAME;
    };
  }, [title, description, path, image]);

  return null;
}

export default MetaTags;