import SEO from "@/components/common/SEO";
function PrivacyPolicy() {
  const lastUpdated = "August 2026";

  return ( <> <SEO
title="Privacy Policy | TubeKit"
description="TubeKit Privacy Policy."
url="/privacy-policy"
/>
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          Legal
        </span>

        <h1 className="mt-6 text-4xl font-black sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-3 text-slate-400">
          Last Updated: {lastUpdated}
        </p>

        <p className="mt-8 text-lg leading-8 text-slate-300">
          TubeKit respects your privacy. This Privacy Policy explains
          what information we collect, how we use it, and the choices
          you have regarding your information while using our website.
        </p>

        <Section
          title="1. Information We Collect"
          content={[
            "Information you voluntarily provide through contact forms.",
            "Anonymous usage information such as browser type, device information and pages visited.",
            "Technical information collected automatically for security and analytics."
          ]}
        />

        <Section
          title="2. How We Use Your Information"
          content={[
            "To improve our AI tools and website performance.",
            "To respond to support requests.",
            "To monitor security and prevent abuse.",
            "To analyze website traffic and user experience."
          ]}
        />

        <Section
          title="3. Cookies"
          content={[
            "TubeKit may use cookies to remember preferences, improve performance and analyze traffic.",
            "You can disable cookies in your browser at any time."
          ]}
        />

        <Section
          title="4. Google Analytics"
          content={[
            "We may use Google Analytics to understand how visitors use our website.",
            "Analytics data is aggregated and does not personally identify individual users."
          ]}
        />

        <Section
          title="5. Google AdSense"
          content={[
            "TubeKit may display advertisements provided by Google AdSense.",
            "Google may use cookies to deliver personalized or non-personalized advertisements according to applicable regulations."
          ]}
        />

        <Section
          title="6. Third-Party Services"
          content={[
            "Some tools may communicate with third-party APIs including AI providers and YouTube APIs.",
            "Those services are governed by their own privacy policies."
          ]}
        />

        <Section
          title="7. Data Security"
          content={[
            "We take reasonable measures to protect our systems and user information.",
            "However, no internet transmission or storage method is completely secure."
          ]}
        />

        <Section
          title="8. Children's Privacy"
          content={[
            "TubeKit is not intended for children under the age required by applicable law.",
            "We do not knowingly collect personal information from children."
          ]}
        />

        <Section
          title="9. Changes to this Policy"
          content={[
            "We may update this Privacy Policy from time to time.",
            "The updated version will always be published on this page."
          ]}
        />

        <Section
          title="10. Contact"
          content={[
            "If you have questions regarding this Privacy Policy, please visit our Contact page."
          ]}
        />

      </div>
    </main>
    </>
  );
}

function Section({ title, content }) {
  return (
    <section className="mt-12">

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <ul className="mt-5 list-disc space-y-3 pl-6 text-slate-300">
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

    </section>
  );
}

export default PrivacyPolicy;