import SEO from "@/components/common/SEO";
function Terms() {
  const lastUpdated = "August 2026";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">

        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          Legal
        </span>

        <h1 className="mt-6 text-4xl font-black sm:text-5xl">
          Terms & Conditions
        </h1>

        <p className="mt-3 text-slate-400">
          Last Updated: {lastUpdated}
        </p>

        <p className="mt-8 text-lg leading-8 text-slate-300">
          By accessing and using TubeKit, you agree to these Terms &
          Conditions. Please read them carefully before using our
          website and services.
        </p>

        <Section
          title="1. Acceptance of Terms"
          content={[
            "By using TubeKit, you agree to comply with these Terms & Conditions.",
            "If you do not agree, please discontinue using the website."
          ]}
        />

        <Section
          title="2. Use of the Website"
          content={[
            "TubeKit is provided for personal and professional use.",
            "You agree not to misuse, damage, or interfere with the website or its services.",
            "Automated abuse, scraping, or harmful activities are prohibited."
          ]}
        />

        <Section
          title="3. AI Generated Content"
          content={[
            "AI-generated content is provided for informational and creative assistance.",
            "Users are responsible for reviewing, editing, and verifying generated content before publishing."
          ]}
        />

        <Section
          title="4. Intellectual Property"
          content={[
            "The TubeKit website, branding, design, and original content are protected by applicable intellectual property laws.",
            "You may not copy, reproduce, or redistribute website assets without permission."
          ]}
        />

        <Section
          title="5. User Responsibilities"
          content={[
            "Users must comply with applicable laws while using TubeKit.",
            "Users are responsible for any content they create or publish using our tools."
          ]}
        />

        <Section
          title="6. Third-Party Services"
          content={[
            "TubeKit may use third-party APIs and services such as AI providers or YouTube APIs.",
            "These services are governed by their own terms and policies."
          ]}
        />

        <Section
          title="7. Limitation of Liability"
          content={[
            "TubeKit is provided on an 'as is' basis.",
            "We are not responsible for losses resulting from the use of AI-generated content or third-party services."
          ]}
        />

        <Section
          title="8. Changes to the Terms"
          content={[
            "We may update these Terms & Conditions at any time.",
            "Updated versions will be published on this page."
          ]}
        />

        <Section
          title="9. Contact"
          content={[
            "For questions regarding these Terms, please contact us through the Contact page."
          ]}
        />

      </div>
    </main>
  );
}

function Section({ title, content }) {
  return (
    <> <SEO
title="Terms & Conditions | TubeKit"
description="TubeKit Terms & Conditions."
url="/terms"
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

export default Terms;