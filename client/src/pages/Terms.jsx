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
  CheckCircle2,
  ArrowRight,
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

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 shadow-lg shadow-blue-500/5 backdrop-blur-xl">

                <Scale size={16} />

                Legal & Terms

              </div>

            </div>

            {/* Heading */}
            <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">

              Terms &{" "}

              <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                Conditions
              </span>

            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Please review the rules, responsibilities and limitations
              that apply when using TubeKit and its services.
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
                <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 sm:flex">
                  <FileText size={27} />
                </div>

                <div>

                  <div className="flex items-center gap-3">

                    <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                      Agreement
                    </span>

                    <CheckCircle2
                      size={16}
                      className="text-green-400"
                    />

                  </div>

                  <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    Agreement to These Terms
                  </h2>

                  <p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">
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


        {/* =====================================================
            TERMS SECTIONS
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

                  {/* Colored side line */}
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

                        {/* Title */}
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

                              {/* Custom Bullet */}
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
                  Questions About These Terms?
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                  If you have questions about these Terms & Conditions,
                  contact the TubeKit team through our Contact page.
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

export default Terms;