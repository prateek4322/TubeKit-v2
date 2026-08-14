import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Cookie,
  BarChart3,
  Megaphone,
  Server,
  Lock,
  Users,
  RefreshCw,
  Mail,
} from "lucide-react";
import SEO from "@/components/common/SEO";

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    icon: Users,
    color: "red",
    content: [
      "Information you voluntarily provide through contact forms.",
      "Anonymous usage information such as browser type, device information and pages visited.",
      "Technical information collected automatically for security and analytics.",
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    icon: Server,
    color: "yellow",
    content: [
      "To improve our AI tools and website performance.",
      "To respond to support requests.",
      "To monitor security and prevent abuse.",
      "To analyze website traffic and user experience.",
    ],
  },
  {
    number: "03",
    title: "Cookies",
    icon: Cookie,
    color: "green",
    content: [
      "TubeKit may use cookies to remember preferences, improve performance and analyze traffic.",
      "You can disable cookies through your browser settings, although some website functionality may be affected.",
    ],
  },
  {
    number: "04",
    title: "Google Analytics",
    icon: BarChart3,
    color: "blue",
    content: [
      "TubeKit may use Google Analytics to understand how visitors use the website.",
      "Analytics information may include technical and usage data such as pages visited, device information and interactions.",
    ],
  },
  {
    number: "05",
    title: "Google AdSense",
    icon: Megaphone,
    color: "red",
    content: [
      "TubeKit may display advertisements provided by Google AdSense.",
      "Google and its advertising partners may use cookies or similar technologies to provide, measure and personalize advertising where permitted by applicable settings and regulations.",
    ],
  },
  {
    number: "06",
    title: "Third-Party Services",
    icon: Server,
    color: "yellow",
    content: [
      "Some TubeKit tools may communicate with third-party services, including AI providers and YouTube APIs.",
      "Information sent to a third-party service may be processed according to that provider's own terms and privacy policy.",
    ],
  },
  {
    number: "07",
    title: "Data Security",
    icon: Lock,
    color: "green",
    content: [
      "We take reasonable measures to protect our systems and user information.",
      "However, no internet transmission or storage method can be guaranteed to be completely secure.",
    ],
  },
  {
    number: "08",
    title: "Children's Privacy",
    icon: Users,
    color: "blue",
    content: [
      "TubeKit is not intended for children under the age required by applicable law.",
      "We do not knowingly collect personal information from children.",
    ],
  },
  {
    number: "09",
    title: "Changes to This Policy",
    icon: RefreshCw,
    color: "red",
    content: [
      "We may update this Privacy Policy from time to time.",
      "The updated version will be published on this page together with the applicable last-updated date.",
    ],
  },
];

const colorStyles = {
  red: {
    border: "border-red-500/15",
    iconBg: "bg-red-500/10",
    icon: "text-red-400",
  },
  yellow: {
    border: "border-yellow-400/15",
    iconBg: "bg-yellow-400/10",
    icon: "text-yellow-300",
  },
  green: {
    border: "border-green-500/15",
    iconBg: "bg-green-500/10",
    icon: "text-green-400",
  },
  blue: {
    border: "border-blue-500/15",
    iconBg: "bg-blue-500/10",
    icon: "text-blue-400",
  },
};

function PrivacyPolicy() {
  const lastUpdated = "August 2026";

  return (
    <>
      <SEO
        title="Privacy Policy | TubeKit"
        description="Read the TubeKit Privacy Policy to learn how information is collected, used, protected and processed when using the TubeKit website and services."
        keywords="TubeKit privacy policy, TubeKit data privacy, YouTube tools privacy, AI tools privacy"
        canonical="/privacy-policy"
      />

      <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

        {/* Hero */}
        <section className="relative border-b border-white/5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-[-180px] h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute left-[8%] top-1/2 h-40 w-40 rounded-full bg-green-500/5 blur-3xl" />

            <div className="absolute right-[8%] top-1/2 h-40 w-40 rounded-full bg-red-500/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-28">

            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
                <ShieldCheck size={16} />
                Legal & Privacy
              </div>
            </div>

            <h1 className="mt-7 text-center text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy
              <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Policy
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-slate-400 sm:text-lg">
              Learn how TubeKit handles information, cookies,
              analytics, advertising and third-party services.
            </p>

            <div className="mt-8 flex justify-center">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-slate-400 backdrop-blur-xl">
                Last Updated:{" "}
                <span className="font-semibold text-white">
                  {lastUpdated}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-10">

              <div className="flex items-start gap-5">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 sm:flex">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Your Privacy Matters
                  </h2>

                  <p className="mt-4 text-base leading-8 text-slate-400">
                    TubeKit respects your privacy. This Privacy Policy
                    explains what information we collect, how we use it,
                    how third-party services may process information and
                    the choices available to you when using our website.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-5xl space-y-5">

            {sections.map((section) => {
              const Icon = section.icon;
              const styles = colorStyles[section.color];

              return (
                <section
                  key={section.number}
                  className={`group relative overflow-hidden rounded-3xl border ${styles.border} bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:bg-white/[0.045] sm:p-9`}
                >
                  <div className="flex gap-5">

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${styles.iconBg}`}
                    >
                      <Icon
                        size={22}
                        className={styles.icon}
                      />
                    </div>

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold tracking-widest text-slate-600">
                          {section.number}
                        </span>

                        <h2 className="text-xl font-bold text-white sm:text-2xl">
                          {section.title}
                        </h2>
                      </div>

                      <ul className="mt-5 space-y-3">
                        {section.content.map((item) => (
                          <li
                            key={item}
                            className="relative pl-5 text-sm leading-7 text-slate-400 sm:text-base"
                          >
                            <span className="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-slate-600" />

                            {item}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </section>
              );
            })}

          </div>
        </section>

        {/* Contact */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl sm:p-12">

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
              />

              <div className="relative">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Mail size={22} />
                </div>

                <h2 className="mt-6 text-2xl font-black text-white sm:text-3xl">
                  Questions About Privacy?
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                  If you have questions regarding this Privacy Policy,
                  you can contact the TubeKit team through our Contact page.
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5"
                >
                  Contact TubeKit →
                </Link>

              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default PrivacyPolicy;