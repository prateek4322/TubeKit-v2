import React from "react";

const SITE_URL = "https://YOUR-DOMAIN.com";

function Breadcrumb({ items = [] }) {
  if (!items.length) return null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mb-6 text-sm text-gray-500"
      >
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <React.Fragment key={item.path}>
              {index > 0 && <li>/</li>}

              <li>
                {index === items.length - 1 ? (
                  <span className="text-gray-900">
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.path}
                    className="hover:text-blue-600"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            </React.Fragment>
          ))}
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