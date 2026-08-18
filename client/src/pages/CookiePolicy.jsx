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
  CheckCircle2,
  ArrowRight,
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
    border: "border-red-500/20",
    glow: "bg-red-500/10",
    iconBg: "bg-red-500/10",
    icon: "text-red-400",
    number: "text-red-400",
    line: "from-red-500",
  },

  yellow: {
    border: "border-yellow-400/20",
    glow: "bg-yellow-400/10",
    iconBg: "bg-yellow-400/10",
    icon: "text-yellow-300",
    number: "text-yellow-300",
    line: "from-yellow-400",
  },

  green: {
    border: "border-green-500/20",
    glow: "bg-green-500/10",
    iconBg: "bg-green-500/10",
    icon: "text-green-400",
    number: "text-green-400",
    line: "from-green-500",
  },

  blue: {
    border: "border-blue-500/20",
    glow: "bg-blue-500/10",
    iconBg: "bg-blue-500/10",
    icon: "text-blue-400",
    number: "text-blue-400",
    line: "from-blue-500",
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

      <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-white/10">

          {/* Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >

            {/* RGYB Glow */}
            <div className="absolute left-[5%] top-20 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

            <div className="absolute left-1/3 top-0 h-64 w-64 rounded-full bg-yellow-400/10 blur-[120px]" />

            <div className="absolute right-1/3 top-10 h-64 w-64 rounded-full bg-green-500/10 blur-[120px]" />

            <div className="absolute right-[5%] top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-24 lg:py-28">

            {/* Badge */}
            <div className="flex justify-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-300 shadow-lg shadow-yellow-500/5 backdrop-blur-xl">

                <Cookie size={16} />

                Legal & Privacy

              </div>

            </div>

            {/* Heading */}
            <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">

              Cookie{" "}

              <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                Policy
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Learn how TubeKit uses cookies and similar technologies
              to support website functionality, analytics and advertising.
            </p>

            {/* Last Updated */}
            <div className="mt-8 flex justify-center">

              <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-slate-400 backdrop-blur-xl">

                Last Updated:{" "}

                <span className="font-bold text-white">
                  {lastUpdated}
                </span>

              </div>

            </div>

            {/* RGYB Line */}
            <div className="mx-auto mt-12 h-1 max-w-md overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

          </div>

        </section>


        {/* =====================================================
            INTRODUCTION
        ====================================================== */}

        <section className="relative px-6 py-14 sm:py-20">

          <div className="mx-auto max-w-5xl">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">

              {/* Top RGYB line */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

              <div className="flex items-start gap-5">

                {/* Icon */}
                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-300 sm:flex">
                  <Cookie size={27} />
                </div>

                <div>

                  <div className="flex items-center gap-3">

                    <span className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
                      Cookie Information
                    </span>

                    <CheckCircle2
                      size={16}
                      className="text-green-400"
                    />

                  </div>

                  <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    About Cookies on TubeKit
                  </h2>

                  <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
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


        {/* =====================================================
            COOKIE POLICY SECTIONS
        ====================================================== */}

        <section className="px-6 pb-20">

          <div className="mx-auto max-w-5xl space-y-5">

            {sections.map((section) => {

              const Icon = section.icon;
              const styles = colorStyles[section.color];

              return (
                <section
                  key={section.number}
                  className={`
                    group relative overflow-hidden rounded-3xl
                    border ${styles.border}
                    bg-white/[0.025]
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-white/[0.045]
                    hover:shadow-2xl
                  `}
                >

                  {/* Colored side accent */}
                  <div
                    className={`
                      absolute left-0 top-0 h-full w-[2px]
                      bg-gradient-to-b
                      ${styles.line}
                      to-transparent
                      opacity-80
                    `}
                  />

                  {/* Hover Glow */}
                  <div
                    className={`
                      pointer-events-none absolute
                      -right-20 -top-20
                      h-40 w-40
                      rounded-full
                      ${styles.glow}
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    `}
                  />

                  <div className="relative p-6 sm:p-8">

                    <div className="flex gap-5">

                      {/* Icon */}
                      <div
                        className={`
                          flex h-12 w-12 shrink-0
                          items-center justify-center
                          rounded-2xl
                          border border-white/5
                          ${styles.iconBg}
                        `}
                      >
                        <Icon
                          size={22}
                          className={styles.icon}
                        />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">

                        {/* Heading */}
                        <div className="flex flex-wrap items-center gap-3">

                          <span
                            className={`
                              text-xs font-black
                              tracking-[0.2em]
                              ${styles.number}
                            `}
                          >
                            {section.number}
                          </span>

                          <span className="h-px w-6 bg-white/10" />

                          <h2 className="text-xl font-black text-white sm:text-2xl">
                            {section.title}
                          </h2>

                        </div>

                        {/* Custom Bullets */}
                        <div className="mt-6 space-y-4">

                          {section.content.map((item) => (

                            <div
                              key={item}
                              className="flex items-start gap-3"
                            >

                              {/* Clean Dot */}
                              <span
                                className={`
                                  mt-[10px]
                                  h-1.5 w-1.5
                                  shrink-0
                                  rounded-full
                                  ${styles.iconBg}
                                  ring-1 ring-white/10
                                `}
                              />

                              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                                {item}
                              </p>

                            </div>

                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                </section>
              );
            })}

          </div>

        </section>


        {/* =====================================================
            CONTACT CTA
        ====================================================== */}

        <section className="px-6 pb-24">

          <div className="mx-auto max-w-5xl">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">

              {/* RGYB Glows */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-red-500/10 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"
              />

              <div className="relative">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                  <Mail size={24} />
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  Need Help?
                </p>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Questions About Cookies?
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                  If you have questions about how TubeKit uses cookies
                  or similar technologies, contact us through our
                  Contact page.
                </p>

                <Link
                  to="/contact"
                  className="
                    group mt-7 inline-flex items-center gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-red-500
                    via-yellow-400
                    via-green-500
                    to-blue-500
                    px-7 py-3.5
                    font-bold text-white
                    shadow-lg shadow-blue-500/10
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  Contact TubeKit

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

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