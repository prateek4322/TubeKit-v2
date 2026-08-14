import { Link } from "react-router-dom";
import {
  Cookie,
  BarChart3,
  Megaphone,
  Globe,
  Settings,
  RefreshCw,
  Mail,
  ShieldCheck,
} from "lucide-react";

import SEO from "@/components/common/SEO";

const sections = [
  {
    number: "01",
    title: "What Are Cookies?",
    icon: Cookie,
    color: "red",
    content: [
      "Cookies are small text files or similar technologies that websites may store or access through your browser or device.",
      "They can help websites remember preferences, understand how visitors interact with pages and support certain website functionality.",
      "Cookies may be temporary or remain on your device for a longer period depending on their purpose and configuration.",
    ],
  },
  {
    number: "02",
    title: "How TubeKit Uses Cookies",
    icon: Settings,
    color: "yellow",
    content: [
      "TubeKit may use cookies or similar technologies to support website functionality and remember certain preferences.",
      "Cookies and similar technologies may also be used to understand website usage and improve performance.",
      "The specific cookies used may change as TubeKit's features, analytics and advertising services evolve.",
    ],
  },
  {
    number: "03",
    title: "Analytics Cookies",
    icon: BarChart3,
    color: "green",
    content: [
      "TubeKit may use Google Analytics to understand how visitors interact with the website.",
      "Analytics technologies can collect information such as pages viewed, interactions, device information and other technical usage information.",
      "This information may help us understand traffic patterns and improve website performance and user experience.",
    ],
  },
  {
    number: "04",
    title: "Advertising Cookies",
    icon: Megaphone,
    color: "blue",
    content: [
      "TubeKit may display advertisements through Google AdSense or other advertising services.",
      "Advertising providers may use cookies or similar technologies to deliver, measure and personalize advertisements where permitted.",
      "The availability and behavior of advertising cookies may depend on your browser settings, region, consent choices and the policies of the advertising provider.",
    ],
  },
  {
    number: "05",
    title: "Third-Party Cookies",
    icon: Globe,
    color: "red",
    content: [
      "Third-party services integrated with TubeKit may use their own cookies or similar technologies.",
      "Examples may include analytics, advertising, embedded content or other external services.",
      "Third-party cookies are controlled by the respective service providers and may be subject to their own privacy and cookie policies.",
    ],
  },
  {
    number: "06",
    title: "Managing Cookies",
    icon: Settings,
    color: "yellow",
    content: [
      "Most modern browsers allow you to view, block, delete or manage cookies through their settings.",
      "You can configure your browser to notify you when cookies are being stored or to reject certain types of cookies.",
      "Disabling cookies may affect the availability or functionality of some website features.",
    ],
  },
  {
    number: "07",
    title: "Google Advertising Preferences",
    icon: ShieldCheck,
    color: "green",
    content: [
      "Google provides settings that allow users to manage certain advertising preferences associated with Google services.",
      "Advertising behavior can vary depending on your account settings, browser configuration, region and applicable privacy choices.",
      "For current information about Google's advertising practices and available controls, refer to Google's official privacy and advertising resources.",
    ],
  },
  {
    number: "08",
    title: "Changes to This Cookie Policy",
    icon: RefreshCw,
    color: "blue",
    content: [
      "TubeKit may update this Cookie Policy periodically to reflect changes in technology, services, legal requirements or website functionality.",
      "The latest version will be published on this page.",
      "The Last Updated date indicates when this policy was most recently revised.",
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

function CookiePolicy() {
  const lastUpdated = "August 2026";

  return (
    <>
      <SEO
        title="Cookie Policy | TubeKit"
        description="Learn how TubeKit uses cookies and similar technologies for website functionality, analytics, advertising and performance."
        keywords="TubeKit Cookie Policy, TubeKit cookies, Google Analytics cookies, Google AdSense cookies, YouTube tools privacy"
        canonical="/cookie-policy"
      />

      <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

        {/* Hero */}
        <section className="relative border-b border-white/5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-[-180px] h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="absolute left-[8%] top-1/2 h-40 w-40 rounded-full bg-red-500/5 blur-3xl" />

            <div className="absolute right-[8%] top-1/2 h-40 w-40 rounded-full bg-green-500/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-28 lg:py-32">

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-2 text-sm font-medium text-yellow-300 backdrop-blur-sm">
              <Cookie size={16} />
              Legal & Privacy
            </div>

            <h1 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Cookie
              <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Policy
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Learn how TubeKit uses cookies and similar technologies
              to support functionality, analytics and advertising.
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

        {/* Introduction */}
        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl sm:p-10">

              <div className="flex items-start gap-5">

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300 sm:flex">
                  <Cookie size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    About Cookies on TubeKit
                  </h2>

                  <p className="mt-4 text-base leading-8 text-slate-400">
                    This Cookie Policy explains how TubeKit may use
                    cookies and similar technologies to support website
                    functionality, understand website traffic, improve
                    performance and support advertising services.
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

        {/* Contact CTA */}
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
                  Questions About Cookies?
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                  If you have questions about how TubeKit uses cookies
                  or similar technologies, contact us through our
                  Contact page.
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

export default CookiePolicy;