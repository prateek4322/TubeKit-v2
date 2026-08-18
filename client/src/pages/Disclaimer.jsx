import { Link } from "react-router-dom";
import {
  AlertTriangle,
  Brain,
  Scale,
  Server,
  ExternalLink,
  ShieldAlert,
  RefreshCw,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import SEO from "@/components/common/SEO";

const sections = [
  {
    number: "01",
    title: "General Information",
    icon: AlertTriangle,
    color: "red",
    content: [
      "TubeKit provides AI-powered and utility tools designed to assist YouTube creators.",
      "Information available on this website is provided for general informational and educational purposes.",
      "Although we aim to provide useful and reliable information, we do not guarantee that all information is complete, current or error-free.",
    ],
  },

  {
    number: "02",
    title: "AI Generated Content",
    icon: Brain,
    color: "yellow",
    content: [
      "TubeKit uses AI technology to generate content and suggestions based on information provided by users.",
      "AI-generated content may contain factual errors, omissions, outdated information or suggestions that may not be appropriate for your specific situation.",
      "Users should review, edit and independently verify AI-generated content before publishing or relying on it.",
      "TubeKit does not guarantee the originality, legality, accuracy or suitability of AI-generated content.",
    ],
  },

  {
    number: "03",
    title: "No Professional Advice",
    icon: Scale,
    color: "green",
    content: [
      "Information provided by TubeKit does not constitute legal, financial, tax, business, investment or other professional advice.",
      "Tools that provide calculations, estimates or suggestions should not be treated as professional recommendations.",
      "For important decisions, consult an appropriately qualified professional.",
    ],
  },

  {
    number: "04",
    title: "YouTube Platform",
    icon: ShieldAlert,
    color: "blue",
    content: [
      "TubeKit is an independent platform and is not affiliated with, endorsed by, or sponsored by YouTube or Google unless explicitly stated.",
      "YouTube is a trademark of Google LLC.",
      "TubeKit does not guarantee YouTube rankings, views, subscribers, watch time, revenue or monetization approval.",
      "Users are responsible for ensuring that their use of TubeKit and any resulting content complies with applicable YouTube policies.",
    ],
  },

  {
    number: "05",
    title: "Third-Party APIs and Services",
    icon: Server,
    color: "red",
    content: [
      "Some TubeKit features rely on third-party APIs and services, which may include AI providers and the YouTube Data API.",
      "The availability, accuracy, performance and limitations of third-party services are outside TubeKit's direct control.",
      "Third-party services may change their APIs, policies, pricing, availability or functionality without notice.",
    ],
  },

  {
    number: "06",
    title: "External Links",
    icon: ExternalLink,
    color: "yellow",
    content: [
      "TubeKit may contain links to external websites or third-party services.",
      "External websites operate independently and may have their own terms, privacy policies and practices.",
      "TubeKit is not responsible for the content, availability, security or privacy practices of third-party websites.",
    ],
  },

  {
    number: "07",
    title: "Tool Results and Estimates",
    icon: ShieldAlert,
    color: "green",
    content: [
      "Some TubeKit tools may provide estimates, calculations, predictions, suggestions or assessments.",
      "These results are intended as informational guidance and should not be treated as guaranteed outcomes.",
      "Actual YouTube performance, revenue, rankings, views, subscribers or monetization eligibility may differ from any estimate provided by a TubeKit tool.",
      "Always verify important information through appropriate official sources.",
    ],
  },

  {
    number: "08",
    title: "Limitation of Liability",
    icon: Scale,
    color: "blue",
    content: [
      "TubeKit is provided on an 'as is' and 'as available' basis to the extent permitted by applicable law.",
      "To the extent permitted by applicable law, TubeKit is not responsible for losses or damages resulting from reliance on information, AI-generated content, estimates, third-party services or website availability.",
      "Nothing in this Disclaimer is intended to exclude or limit liability where such exclusion or limitation is not permitted by applicable law.",
    ],
  },

  {
    number: "09",
    title: "Changes to This Disclaimer",
    icon: RefreshCw,
    color: "red",
    content: [
      "This Disclaimer may be updated from time to time as TubeKit's services, features or legal requirements change.",
      "The latest version will be published on this page.",
      "The Last Updated date indicates when this Disclaimer was most recently revised.",
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

function Disclaimer() {
  const lastUpdated = "August 2026";

  return (
    <>
      <SEO
        title="Disclaimer | TubeKit"
        description="Read the TubeKit Disclaimer covering AI-generated content, YouTube tools, third-party APIs, estimates, external links and limitations of liability."
        keywords="TubeKit disclaimer, TubeKit AI disclaimer, YouTube tools disclaimer, AI generated content disclaimer"
        canonical="/disclaimer"
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
            {/* RGYB ambient glow */}
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

                <AlertTriangle size={16} />

                Legal & Important Information

              </div>

            </div>

            {/* Heading */}
            <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">

              TubeKit{" "}

              <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                Disclaimer
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Important information about TubeKit's AI tools,
              YouTube utilities, estimates, third-party services
              and generated content.
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

            <div className="relative overflow-hidden rounded-3xl border border-yellow-400/20 bg-yellow-400/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">

              {/* Top RGYB line */}
              <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

              <div className="flex items-start gap-5">

                {/* Icon */}
                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-300 sm:flex">
                  <AlertTriangle size={27} />
                </div>

                <div>

                  <div className="flex items-center gap-3">

                    <span className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">
                      Important Notice
                    </span>

                    <CheckCircle2
                      size={16}
                      className="text-green-400"
                    />

                  </div>

                  <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    Please Read Before Using TubeKit
                  </h2>

                  <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
                    The information and tools provided by TubeKit are
                    intended for general informational, educational and
                    creative assistance. Results generated by AI systems,
                    calculators and other utilities should be reviewed
                    before being relied upon or published.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            DISCLAIMER SECTIONS
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

                  {/* Hover glow */}
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

                        {/* Custom bullets */}
                        <div className="mt-6 space-y-4">

                          {section.content.map((item) => (

                            <div
                              key={item}
                              className="flex items-start gap-3"
                            >

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
                  Have Questions About This Disclaimer?
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                  If you have questions about this Disclaimer or
                  TubeKit's services, contact the TubeKit team through
                  our Contact page.
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

export default Disclaimer;