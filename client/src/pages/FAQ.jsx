import { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  Search,
  ShieldCheck,
  Settings2,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "@/components/common/SEO";

const categories = [
  {
    id: "general",
    label: "General",
    icon: Sparkles,
    color: "red",
  },
  {
    id: "ai",
    label: "AI Tools",
    icon: Settings2,
    color: "yellow",
  },
  {
    id: "seo",
    label: "YouTube SEO",
    icon: Search,
    color: "green",
  },
  {
    id: "privacy",
    label: "Privacy",
    icon: ShieldCheck,
    color: "blue",
  },
];

const faqGroups = [
  {
    category: "general",
    title: "General Questions About TubeKit",
    description:
      "Learn what TubeKit is, who it is designed for, and how you can use the platform.",
    faqs: [
      {
        question: "What is TubeKit?",
        answer:
          "TubeKit is a creator-focused platform that provides AI-powered and utility tools for YouTube creators. The platform is designed to help with tasks such as generating video titles, descriptions, tags, hashtags, keywords, scripts and content ideas, along with useful YouTube utilities.",
      },
      {
        question: "Who is TubeKit designed for?",
        answer:
          "TubeKit is designed for YouTube creators, beginners, marketers, educators, businesses and anyone who wants to make their YouTube content workflow more efficient.",
      },
      {
        question: "Is TubeKit free to use?",
        answer:
          "Most TubeKit tools are available for free. Availability and limits can vary by tool or feature, so check the individual tool before relying on it for high-volume usage.",
      },
      {
        question: "Do I need an account to use TubeKit?",
        answer:
          "Many TubeKit tools can be used without creating an account. If a particular feature requires authentication, the website will indicate that requirement.",
      },
      {
        question: "Can beginners use TubeKit?",
        answer:
          "Yes. TubeKit is designed to keep the creator workflow simple. You can enter a topic, choose available options and generate ideas without needing advanced YouTube SEO or content-writing knowledge.",
      },
      {
        question: "Can TubeKit be used on mobile?",
        answer:
          "Yes. TubeKit uses a responsive interface designed to work across desktop computers, tablets and mobile devices.",
      },
    ],
  },

  {
    category: "ai",
    title: "AI YouTube Tools",
    description:
      "Understand how TubeKit's AI-powered creator tools can support your content workflow.",
    faqs: [
      {
        question: "What can TubeKit's AI tools generate?",
        answer:
          "Depending on the tool, TubeKit can generate YouTube title ideas, descriptions, tags, hashtags, keywords, scripts, hooks, outlines, thumbnail ideas and other creator-focused content.",
      },
      {
        question: "How does the AI Title Generator work?",
        answer:
          "The AI Title Generator uses the topic and options you provide to create title ideas. You should review the suggestions and choose a title that accurately represents your video's actual content.",
      },
      {
        question: "How does the YouTube Script Generator work?",
        answer:
          "The Script Generator creates a structured script based on the topic and options you provide. Generated scripts should be reviewed, edited and adapted to your own voice, experience and audience.",
      },
      {
        question: "Can TubeKit generate YouTube descriptions?",
        answer:
          "Yes. The Description Generator can create description ideas based on your video topic and selected options. Always verify that the generated description accurately reflects the content of your video.",
      },
      {
        question: "Can TubeKit generate YouTube tags and hashtags?",
        answer:
          "Yes. TubeKit provides separate tools for generating tag and hashtag ideas. Use only suggestions that are genuinely relevant to your video's subject and audience.",
      },
      {
        question: "Can TubeKit generate video hooks?",
        answer:
          "Yes. The Hook Generator can provide opening ideas designed to help creators introduce their video topic clearly and give viewers a reason to continue watching.",
      },
      {
        question: "Can TubeKit create a YouTube video outline?",
        answer:
          "Yes. The Outline Generator can help organize a video into logical sections, making it easier to plan the introduction, main points, examples and conclusion.",
      },
      {
        question: "Are AI-generated results guaranteed to be accurate?",
        answer:
          "No. AI-generated content can contain mistakes, outdated information or suggestions that do not fit your specific audience. Review and fact-check important information before publishing.",
      },
      {
        question: "Are TubeKit AI results unique?",
        answer:
          "AI generates responses based on the information and instructions provided, but TubeKit should not be treated as a guarantee that every generated phrase is completely unique across the internet. Customize generated content before publishing.",
      },
    ],
  },

  {
    category: "seo",
    title: "YouTube SEO & Content Optimization",
    description:
      "Common questions about using TubeKit for YouTube SEO and content planning.",
    faqs: [
      {
        question: "Can TubeKit improve my YouTube SEO?",
        answer:
          "TubeKit can help with parts of the YouTube SEO workflow, including title ideas, keywords, tags, hashtags, descriptions and content planning. It cannot guarantee higher rankings, views or subscribers.",
      },
      {
        question: "Does TubeKit guarantee more YouTube views?",
        answer:
          "No. No legitimate tool can guarantee a specific number of views. YouTube performance depends on many factors including topic demand, audience interest, content quality, packaging, competition, viewer satisfaction and recommendation systems.",
      },
      {
        question: "Does a better YouTube title guarantee higher rankings?",
        answer:
          "No. A strong title can improve how your video is presented to potential viewers, but it does not guarantee search rankings, impressions or views.",
      },
      {
        question: "How should I use TubeKit's keyword suggestions?",
        answer:
          "Use keyword suggestions as research ideas rather than blindly inserting every keyword into your content. Choose terms that accurately match your video's topic, search intent and target audience.",
      },
      {
        question: "Should I use every generated YouTube tag?",
        answer:
          "No. Select only tags that accurately describe your video. Adding irrelevant tags simply because they are popular can make your metadata less useful.",
      },
      {
        question: "How many YouTube hashtags should I use?",
        answer:
          "There is no universal number that works for every video. Focus on relevant hashtags and avoid adding unrelated hashtags simply to increase the number of terms.",
      },
      {
        question: "Can TubeKit replace YouTube Analytics?",
        answer:
          "No. TubeKit can support content planning and optimization, but YouTube Analytics provides channel-specific performance data that a third-party tool cannot replace.",
      },
      {
        question: "Can TubeKit predict which video will go viral?",
        answer:
          "No. TubeKit cannot reliably predict whether a video will go viral. Content performance depends on audience behavior, timing, competition, topic demand and many other variables.",
      },
    ],
  },

  {
    category: "privacy",
    title: "Privacy, Security & Data",
    description:
      "Important questions about privacy and the information required to use TubeKit.",
    faqs: [
      {
        question: "Does TubeKit store my prompts?",
        answer:
          "Data handling depends on the specific feature and how the service is implemented. Review TubeKit's Privacy Policy for the current information about data collection, processing, storage and retention.",
      },
      {
        question: "Does TubeKit require my YouTube password?",
        answer:
          "TubeKit tools should not require you to provide your YouTube account password. Never enter your YouTube password into a third-party tool.",
      },
      {
        question: "Does TubeKit access my YouTube account?",
        answer:
          "Public-data tools can work with publicly available YouTube information. Do not assume that a tool has access to private account information unless the website explicitly requests authorization and explains what access is being requested.",
      },
      {
        question: "What information should I avoid entering into AI tools?",
        answer:
          "Avoid entering passwords, private credentials, financial information, personal identification numbers or other sensitive information into prompts unless a feature explicitly requires it and clearly explains how that information is handled.",
      },
      {
        question: "Where can I read TubeKit's privacy information?",
        answer:
          "You can review the complete privacy information on the TubeKit Privacy Policy page.",
      },
    ],
  },
];

const colorStyles = {
  red: {
    border: "border-red-500/20",
    active: "border-red-400/30 bg-red-500/10 text-red-300",
    iconBg: "bg-red-500/10",
    icon: "text-red-400",
    number: "text-red-400",
    glow: "bg-red-500/10",
  },

  yellow: {
    border: "border-yellow-400/20",
    active: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
    iconBg: "bg-yellow-400/10",
    icon: "text-yellow-300",
    number: "text-yellow-300",
    glow: "bg-yellow-400/10",
  },

  green: {
    border: "border-green-500/20",
    active: "border-green-400/30 bg-green-500/10 text-green-300",
    iconBg: "bg-green-500/10",
    icon: "text-green-400",
    number: "text-green-400",
    glow: "bg-green-500/10",
  },

  blue: {
    border: "border-blue-500/20",
    active: "border-blue-400/30 bg-blue-500/10 text-blue-300",
    iconBg: "bg-blue-500/10",
    icon: "text-blue-400",
    number: "text-blue-400",
    glow: "bg-blue-500/10",
  },
};

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [open, setOpen] = useState(0);

  const activeGroup = faqGroups.find(
    (group) => group.category === activeCategory
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpen(0);
  };

  const allFaqs = faqGroups.flatMap(
    (group) => group.faqs
  );

  return (
    <>
      <SEO
        title="FAQ | TubeKit YouTube AI Tools & Creator Platform"
        description="Find detailed answers about TubeKit, AI YouTube tools, YouTube SEO, monetization tools, privacy, accounts, generated content and creator workflow."
        keywords="TubeKit FAQ, TubeKit questions, YouTube AI tools FAQ, YouTube SEO tools FAQ, YouTube monetization checker, YouTube creator tools"
        canonical="/faq"
        image="/og-image.png"
        breadcrumbs={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "FAQ",
            url: "/faq",
          },
        ]}
        faqs={allFaqs}
      />

      <main className="min-h-screen overflow-hidden bg-[#050816] text-white">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative overflow-hidden border-b border-white/10">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            {/* RGYB glows */}

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

          <div className="relative mx-auto max-w-6xl px-6 py-20 text-center sm:py-24 lg:py-28">

            {/* Badge */}

            <div className="flex justify-center">

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 shadow-lg shadow-blue-500/5 backdrop-blur-xl">

                <HelpCircle size={16} />

                TubeKit Help Center

              </div>

            </div>

            {/* Heading */}

            <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">

              Everything You Need to Know

              <br />

              <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                About TubeKit
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              Explore answers about TubeKit's AI tools,
              YouTube SEO features, privacy, generated content
              and creator workflow.
            </p>

            {/* RGYB line */}

            <div className="mx-auto mt-10 h-1 max-w-md overflow-hidden rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

            {/* Stats */}

            <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-red-500/15 bg-white/[0.035] p-5 backdrop-blur-xl">
                <p className="text-2xl font-black text-red-400">
                  AI
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Creator Tools
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/15 bg-white/[0.035] p-5 backdrop-blur-xl">
                <p className="text-2xl font-black text-yellow-300">
                  SEO
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Content Support
                </p>
              </div>

              <div className="rounded-2xl border border-green-500/15 bg-white/[0.035] p-5 backdrop-blur-xl">
                <p className="text-2xl font-black text-green-400">
                  FREE
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Creator Utilities
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FAQ CONTENT
        ====================================================== */}

        <section className="relative px-6 py-16 sm:py-20 lg:py-24">

          <div className="mx-auto max-w-6xl">

            {/* Category Tabs */}

            <div className="mb-12">

              <div className="flex flex-wrap justify-center gap-3">

                {categories.map((category) => {

                  const Icon = category.icon;

                  const active =
                    activeCategory === category.id;

                  const styles =
                    colorStyles[category.color];

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() =>
                        handleCategoryChange(
                          category.id
                        )
                      }
                      className={`
                        inline-flex items-center gap-2
                        rounded-xl border
                        px-4 py-3
                        text-sm font-semibold
                        transition-all duration-300
                        ${
                          active
                            ? styles.active
                            : `border-white/10 bg-white/[0.025] text-slate-400 hover:${styles.icon}`
                        }
                      `}
                    >

                      <Icon size={17} />

                      {category.label}

                    </button>
                  );
                })}

              </div>

            </div>


            {/* Active Group */}

            {activeGroup && (

              <div className="mx-auto max-w-4xl">

                {/* Category Header */}

                <div className="mb-8">

                  <div className="flex items-center gap-3">

                    <span className="h-2 w-2 rounded-full bg-blue-400" />

                    <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                      FAQ Category
                    </p>

                  </div>

                  <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                    {activeGroup.title}
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    {activeGroup.description}
                  </p>

                </div>


                {/* Accordion */}

                <div className="space-y-4">

                  {activeGroup.faqs.map(
                    (faq, index) => {

                      const isOpen =
                        open === index;

                      const categoryData =
                        categories.find(
                          (item) =>
                            item.id ===
                            activeCategory
                        );

                      const styles =
                        colorStyles[
                          categoryData?.color ||
                            "blue"
                        ];

                      return (
                        <div
                          key={faq.question}
                          className={`
                            group relative overflow-hidden
                            rounded-2xl border
                            ${styles.border}
                            bg-white/[0.025]
                            backdrop-blur-xl
                            transition-all duration-300
                            ${
                              isOpen
                                ? "bg-white/[0.045] shadow-2xl"
                                : "hover:bg-white/[0.04]"
                            }
                          `}
                        >

                          {/* Side accent */}

                          <div
                            className={`
                              absolute left-0 top-0
                              h-full w-[2px]
                              bg-gradient-to-b
                              ${
                                activeCategory ===
                                "general"
                                  ? "from-red-500"
                                  : activeCategory ===
                                    "ai"
                                  ? "from-yellow-400"
                                  : activeCategory ===
                                    "seo"
                                  ? "from-green-500"
                                  : "from-blue-500"
                              }
                              to-transparent
                              ${
                                isOpen
                                  ? "opacity-100"
                                  : "opacity-40"
                              }
                            `}
                          />

                          {/* Question */}

                          <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${activeCategory}-${index}`}
                            onClick={() =>
                              setOpen(
                                isOpen
                                  ? -1
                                  : index
                              )
                            }
                            className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7 sm:py-6"
                          >

                            <div className="flex min-w-0 items-start gap-4">

                              {/* Number */}

                              <span
                                className={`
                                  mt-0.5 flex h-9 w-9
                                  shrink-0 items-center
                                  justify-center
                                  rounded-xl
                                  ${styles.iconBg}
                                  text-xs font-black
                                  ${styles.number}
                                `}
                              >
                                {String(
                                  index + 1
                                ).padStart(2, "0")}
                              </span>

                              <span className="text-base font-bold leading-7 text-white sm:text-lg">
                                {faq.question}
                              </span>

                            </div>

                            <span
                              className={`
                                flex h-9 w-9
                                shrink-0 items-center
                                justify-center
                                rounded-xl
                                border border-white/5
                                bg-white/[0.03]
                                transition-all duration-300
                                ${
                                  isOpen
                                    ? `${styles.iconBg} ${styles.icon}`
                                    : "text-slate-500"
                                }
                              `}
                            >
                              <ChevronDown
                                size={19}
                                className={`
                                  transition-transform
                                  duration-300
                                  ${
                                    isOpen
                                      ? "rotate-180"
                                      : ""
                                  }
                                `}
                              />
                            </span>

                          </button>


                          {/* Answer */}

                          <div
                            id={`faq-answer-${activeCategory}-${index}`}
                            className={`
                              grid transition-all
                              duration-300
                              ${
                                isOpen
                                  ? "grid-rows-[1fr]"
                                  : "grid-rows-[0fr]"
                              }
                            `}
                          >

                            <div className="overflow-hidden">

                              <div className="border-t border-white/5 px-5 py-6 sm:px-7 sm:pl-[5.5rem]">

                                <div className="flex items-start gap-3">

                                  <CheckCircle2
                                    size={18}
                                    className={`mt-1 shrink-0 ${styles.icon}`}
                                  />

                                  <p className="text-sm leading-8 text-slate-400 sm:text-base">
                                    {faq.answer}
                                  </p>

                                </div>

                              </div>

                            </div>

                          </div>

                        </div>
                      );
                    }
                  )}

                </div>

              </div>
            )}

          </div>

        </section>


        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="px-6 pb-24">

          <div className="mx-auto max-w-5xl">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12 lg:p-14">

              {/* RGYB glows */}

              <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />

              <div className="pointer-events-none absolute left-1/3 top-0 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl" />

              <div className="pointer-events-none absolute right-1/3 top-0 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" />

              <div className="pointer-events-none absolute -right-20 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">

                {/* RGYB line */}

                <div className="mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

                <div className="mx-auto mt-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">

                  <Sparkles size={24} />

                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  Creator Tools
                </p>

                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Ready to Create?
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
                  Explore TubeKit's AI and utility tools and
                  simplify your next YouTube project.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                  <Link
                    to="/tools/title-generator"
                    className="
                      group inline-flex
                      items-center justify-center gap-2
                      rounded-xl
                      bg-gradient-to-r
                      from-red-500
                      via-yellow-400
                      via-green-500
                      to-blue-500
                      px-7 py-3.5
                      font-bold text-white
                      shadow-lg
                      shadow-blue-500/10
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >
                    Explore AI Tools

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </Link>

                  <Link
                    to="/contact"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-xl
                      border border-white/10
                      bg-white/[0.03]
                      px-7 py-3.5
                      font-semibold
                      text-slate-200
                      transition-all
                      hover:border-blue-400/30
                      hover:bg-white/[0.06]
                    "
                  >
                    Contact Us
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default FAQ;