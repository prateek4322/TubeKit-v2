import { Link } from "react-router-dom";
import {
  FileText,
  ShieldCheck,
  Sparkles,
  Scale,
  Users,
  Server,
  AlertTriangle,
  RefreshCw,
  Mail,
} from "lucide-react";

import SEO from "@/components/common/SEO";

const sections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    icon: FileText,
    color: "red",
    content: [
      "By accessing or using TubeKit, you agree to comply with these Terms & Conditions.",
      "If you do not agree with these terms, you should discontinue using the website and its services.",
      "These terms apply to visitors, users and anyone accessing or using TubeKit services.",
    ],
  },
  {
    number: "02",
    title: "Use of the Website",
    icon: ShieldCheck,
    color: "yellow",
    content: [
      "TubeKit is provided for personal and professional use.",
      "You agree not to misuse, damage, disrupt or interfere with the website or its services.",
      "Automated abuse, unauthorized scraping, excessive requests or harmful activities are prohibited.",
      "You must not attempt to bypass security measures, access restricted systems or interfere with the normal operation of the platform.",
    ],
  },
  {
    number: "03",
    title: "AI Generated Content",
    icon: Sparkles,
    color: "green",
    content: [
      "TubeKit's AI-generated content is provided as creative and informational assistance.",
      "AI-generated results may contain errors, omissions, outdated information or suggestions that may not be appropriate for your specific situation.",
      "Users are responsible for reviewing, editing and verifying generated content before publishing or relying on it.",
      "TubeKit does not guarantee that AI-generated titles, descriptions, scripts, tags, keywords or other content will produce a particular result.",
    ],
  },
  {
    number: "04",
    title: "YouTube Content & Platform Responsibility",
    icon: Users,
    color: "blue",
    content: [
      "Users are responsible for ensuring that content created or published using TubeKit complies with YouTube's policies and applicable laws.",
      "TubeKit does not guarantee YouTube rankings, views, subscribers, watch time, monetization approval or other channel performance outcomes.",
      "Users should independently review YouTube's current policies and requirements before publishing or making business decisions.",
    ],
  },
  {
    number: "05",
    title: "Intellectual Property",
    icon: Scale,
    color: "red",
    content: [
      "The TubeKit website, branding, visual design, logos, original website content and software are protected by applicable intellectual property laws.",
      "You may not copy, reproduce, redistribute, modify or commercially exploit TubeKit's protected website assets without appropriate permission.",
      "Third-party names, trademarks, APIs and services referenced on TubeKit remain the property of their respective owners.",
    ],
  },
  {
    number: "06",
    title: "User Responsibilities",
    icon: Users,
    color: "yellow",
    content: [
      "Users must comply with applicable laws while using TubeKit.",
      "Users are responsible for the information, prompts and content they submit to the platform.",
      "Users are responsible for reviewing any output before using or publishing it.",
      "You must not use TubeKit to create, distribute or facilitate unlawful, harmful or abusive content.",
    ],
  },
  {
    number: "07",
    title: "Third-Party Services",
    icon: Server,
    color: "green",
    content: [
      "TubeKit may rely on third-party services, APIs and infrastructure, including AI providers, YouTube APIs, analytics services and advertising services.",
      "Third-party services may have their own terms, privacy policies, limitations and availability requirements.",
      "TubeKit is not responsible for changes, interruptions or limitations caused by third-party services.",
    ],
  },
  {
    number: "08",
    title: "Tool Results & Estimates",
    icon: AlertTriangle,
    color: "blue",
    content: [
      "Some TubeKit tools may provide estimates, suggestions or calculations based on information supplied by the user or publicly available information.",
      "Results from calculators, monetization tools or other utilities should be treated as estimates and not as guarantees.",
      "Users should verify important information through appropriate official sources before making financial, business or platform-related decisions.",
    ],
  },
  {
    number: "09",
    title: "Availability of Services",
    icon: Server,
    color: "red",
    content: [
      "TubeKit may modify, suspend, restrict or discontinue any tool or website feature at any time.",
      "We do not guarantee that every tool or feature will always be available, uninterrupted or error-free.",
      "Third-party API availability may affect the operation of certain TubeKit tools.",
    ],
  },
  {
    number: "10",
    title: "Limitation of Liability",
    icon: AlertTriangle,
    color: "yellow",
    content: [
      "TubeKit is provided on an 'as is' and 'as available' basis to the extent permitted by applicable law.",
      "TubeKit does not guarantee the accuracy, completeness or suitability of AI-generated results or third-party information.",
      "To the extent permitted by applicable law, TubeKit is not responsible for losses arising from reliance on generated content, estimates, third-party services or website availability.",
    ],
  },
  {
    number: "11",
    title: "Changes to These Terms",
    icon: RefreshCw,
    color: "green",
    content: [
      "We may update these Terms & Conditions from time to time.",
      "Changes become applicable when the updated terms are published on this page, unless otherwise stated.",
      "The last-updated date at the top of this page indicates when the terms were most recently revised.",
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

function Terms() {
  const lastUpdated = "August 2026";

  return (
    <>
      <SEO
        title="Terms & Conditions | TubeKit"
        description="Read the TubeKit Terms & Conditions covering website usage, AI-generated content, user responsibilities, intellectual property, third-party services and service limitations."
        keywords="TubeKit terms and conditions, TubeKit terms, YouTube AI tools terms, TubeKit usage policy"
        canonical="/terms"
      />

      <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

        {/* Hero */}
        <section className="relative border-b border-white/5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-[-180px] h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute left-[8%] top-1/2 h-40 w-40 rounded-full bg-red-500/5 blur-3xl" />

            <div className="absolute right-[8%] top-1/2 h-40 w-40 rounded-full bg-green-500/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 py-24 text-center sm:py-28 lg:py-32">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
              <Scale size={16} />
              Legal
            </div>

            <h1 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Terms &
              <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Conditions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Please review the rules, responsibilities and limitations
              that apply when using TubeKit and its services.
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

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 sm:flex">
                  <FileText size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white">
                    Agreement to These Terms
                  </h2>

                  <p className="mt-4 text-base leading-8 text-slate-400">
                    By accessing or using TubeKit, you acknowledge that
                    you have read, understood and agree to these Terms &
                    Conditions. These terms govern your use of the
                    TubeKit website and available services.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Terms Sections */}
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
                  Questions About These Terms?
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                  If you have questions about these Terms & Conditions,
                  contact the TubeKit team through our Contact page.
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

export default Terms;