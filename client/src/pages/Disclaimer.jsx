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

      <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

        {/* Hero */}
        <section className="relative border-b border-white/5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-[-180px] h-96 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />

            <div className="absolute left-[8%] top-1/2 h-40 w-40 rounded-full bg-red-500/5 blur-3xl" />

            <div className="absolute right-[8%] top-1/2 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-28 lg:py-32">

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-2 text-sm font-medium text-yellow-300 backdrop-blur-sm">
              <AlertTriangle size={16} />
              Legal & Important Information
            </div>

            <h1 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              TubeKit
              <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Disclaimer
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Important information about TubeKit's AI tools,
              YouTube utilities, estimates, third-party services
              and generated content.
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

            <div className="rounded-3xl border border-yellow-400/15 bg-yellow-400/[0.03] p-7 backdrop-blur-xl sm:p-10">

              <div className="flex items-start gap-5">

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-300 sm:flex">
                  <AlertTriangle size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Please Read Before Using TubeKit
                  </h2>

                  <p className="mt-4 text-base leading-8 text-slate-400">
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

        {/* Disclaimer Sections */}
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

        {/* CTA */}
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
                  Have Questions?
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                  If you have questions about this Disclaimer or
                  TubeKit's services, contact us through our Contact page.
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

export default Disclaimer;