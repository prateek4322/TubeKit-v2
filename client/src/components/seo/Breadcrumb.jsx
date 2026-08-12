import React from "react";

const SITE_URL = "https://www.tubekitapp.in";

function normalizeUrl(value = "/") {
  if (
    value.startsWith("http://") ||
    value.startsWith("https://")
  ) {
    return value;
  }

  return `${SITE_URL}${
    value.startsWith("/") ? value : `/${value}`
  }`;
}

function Breadcrumb({ items = [] }) {
  if (!items.length) return null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: normalizeUrl(item.url || item.path || "/"),
    })),
  };

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mb-6 text-sm text-slate-400"
      >
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => {
            const itemUrl =
              item.url || item.path || "/";

            return (
              <React.Fragment
                key={`${item.name}-${index}`}
              >
                {index > 0 && (
                  <li
                    aria-hidden="true"
                    className="text-slate-600"
                  >
                    /
                  </li>
                )}

                <li>
                  {index === items.length - 1 ? (
                    <span className="text-white">
                      {item.name}
                    </span>
                  ) : (
                    <a
                      href={itemUrl}
                      className="transition-colors hover:text-blue-400"
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}

export default Breadcrumb;