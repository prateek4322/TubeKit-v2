import SEO from "@/components/common/SEO";
function CookiePolicy() {
  const lastUpdated = "August 2026";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          Legal
        </span>

        <h1 className="mt-6 text-4xl font-black sm:text-5xl">
          Cookie Policy
        </h1>

        <p className="mt-3 text-slate-400">
          Last Updated: {lastUpdated}
        </p>

        <p className="mt-8 text-lg leading-8 text-slate-300">
          This Cookie Policy explains how TubeKit uses cookies and
          similar technologies to improve your browsing experience,
          analyze website traffic, and support advertising services.
        </p>

        <Section
          title="1. What Are Cookies?"
          content={[
            "Cookies are small text files stored on your device by your web browser.",
            "They help websites remember your preferences and improve user experience."
          ]}
        />

        <Section
          title="2. How We Use Cookies"
          content={[
            "Remember user preferences.",
            "Improve website performance.",
            "Analyze visitor traffic.",
            "Support website functionality."
          ]}
        />

        <Section
          title="3. Analytics Cookies"
          content={[
            "We may use Google Analytics to understand how visitors interact with TubeKit.",
            "Analytics cookies help us improve performance and user experience."
          ]}
        />

        <Section
          title="4. Advertising Cookies"
          content={[
            "Google AdSense may use cookies to display relevant advertisements.",
            "Google and its partners may personalize ads based on previous visits.",
            "You can manage ad personalization through your Google Ad Settings."
          ]}
        />

        <Section
          title="5. Third-Party Cookies"
          content={[
            "Some third-party services integrated with TubeKit may place cookies.",
            "These cookies are controlled by the respective third-party providers."
          ]}
        />

        <Section
          title="6. Managing Cookies"
          content={[
            "Most browsers allow you to manage, block, or delete cookies.",
            "Disabling cookies may affect certain website features."
          ]}
        />

        <Section
          title="7. Changes to This Policy"
          content={[
            "We may update this Cookie Policy periodically.",
            "The latest version will always be available on this page."
          ]}
        />

        <Section
          title="8. Contact"
          content={[
            "If you have questions about our Cookie Policy, please contact us through the Contact page."
          ]}
        />

      </div>
    </main>
  );
}

function Section({ title, content }) {
  return (
    <> <SEO
title="Cookie Policy | TubeKit"
description="TubeKit Cookie Policy."
url="/cookie-policy"
/>
    <section className="mt-12">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-300">

        {content.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}

      </ul>

    </section>
    </>
  );
}

export default CookiePolicy;