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
  ArrowRight,
  CheckCircle2,
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
            {/* RGYB glow */}
            <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />

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

          <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-24 lg:py-28">

            {/* Badge */}
            <div className="flex justify-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 shadow-lg shadow-blue-500/5 backdrop-blur-xl">

                <ShieldCheck size={16} />

                Legal & Privacy

              </div>

            </div>

            {/* Heading */}
            <h1 className="mt-7 text-center text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">

              Privacy{" "}

              <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                Policy
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-slate-400 sm:text-lg">
              Learn how TubeKit handles information, cookies,
              analytics, advertising and third-party services.
            </p>

            {/* Updated */}
            <div className="mt-8 flex justify-center">

              <div className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-slate-400 backdrop-blur-xl">

                Last Updated:{" "}

                <span className="font-bold text-white">
                  {lastUpdated}
                </span>

              </div>

            </div>

            {/* RGYB line */}
            <div className="mx-auto mt-12 h-1 max-w-md overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

          </div>

        </section>


        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="relative px-6 py-14 sm:py-20">

          <div className="mx-auto max-w-5xl">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">

              {/* RGYB top line */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

              <div className="flex items-start gap-5">

                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 sm:flex">
                  <ShieldCheck size={27} />
                </div>

                <div>

                  <div className="flex items-center gap-3">

                    <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                      Privacy First
                    </span>

                    <CheckCircle2
                      size={16}
                      className="text-green-400"
                    />

                  </div>

                  <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    Your Privacy Matters
                  </h2>

                  <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
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


        {/* =====================================================
            POLICY SECTIONS
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
                      bg-gradient-to-b ${styles.line}
                      to-transparent
                      opacity-80
                    `}
                  />

                  {/* Glow */}
                  <div
                    className={`
                      pointer-events-none absolute
                      -right-20 -top-20 h-40 w-40
                      rounded-full ${styles.glow}
                      opacity-0 blur-3xl
                      transition-opacity duration-300
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

                        {/* Points */}
                        <div className="mt-6 space-y-4">

                          {section.content.map((item) => (

                            <div
                              key={item}
                              className="flex items-start gap-3"
                            >

                              {/* Custom bullet */}
                              <span
                                className={`
                                  mt-[10px]
                                  h-1.5 w-1.5
                                  shrink-0 rounded-full
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

              {/* RGYB glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-red-500/10 blur-3xl"
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
                  Questions About Privacy?
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                  If you have questions regarding this Privacy Policy,
                  you can contact the TubeKit team through our Contact page.
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

export default PrivacyPolicy;