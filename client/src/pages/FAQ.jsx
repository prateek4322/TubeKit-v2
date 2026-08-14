import { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  Search,
  ShieldCheck,
  Settings2,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/common/SEO";

const categories = [
  {
    id: "general",
    label: "General",
    icon: Sparkles,
  },
  {
    id: "ai",
    label: "AI Tools",
    icon: Settings2,
  },
  {
    id: "seo",
    label: "YouTube SEO",
    icon: Search,
  },

  {
    id: "privacy",
    label: "Privacy",
    icon: ShieldCheck,
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

  const allFaqs = faqGroups.flatMap((group) => group.faqs);

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

      <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

        {/* HERO */}
        <section className="relative border-b border-white/5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute left-1/2 top-[-180px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute left-[5%] top-1/2 h-48 w-48 rounded-full bg-red-500/5 blur-3xl" />

            <div className="absolute right-[5%] top-1/2 h-48 w-48 rounded-full bg-green-500/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center sm:py-28 lg:py-32">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              TubeKit Help Center
            </div>

            <h1 className="mx-auto mt-7 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Everything You Need to Know
              <br />

              <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
                About TubeKit
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              Explore detailed answers about TubeKit's AI tools,
              YouTube SEO features, monetization utilities, privacy,
              generated content and creator workflow.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <p className="text-2xl font-black text-red-400">
                  AI
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Creator Tools
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <p className="text-2xl font-black text-yellow-300">
                  SEO
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Content Support
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                <p className="text-2xl font-black text-green-400">
                  Tools
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  YouTube Utilities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ AREA */}
        <section className="relative px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl">

            {/* Category Navigation */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const active =
                    activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() =>
                        handleCategoryChange(category.id)
                      }
                      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                        active
                          ? "border-blue-400/30 bg-blue-500/10 text-blue-300"
                          : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <Icon size={17} />
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Category */}
            {activeGroup && (
              <div className="mx-auto max-w-4xl">

                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                    {activeGroup.title}
                  </p>

                  <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                    Common Questions
                  </h2>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    {activeGroup.description}
                  </p>
                </div>

                {/* Accordion */}
                <div className="space-y-4">
                  {activeGroup.faqs.map((faq, index) => {
                    const isOpen = open === index;

                    return (
                      <div
                        key={faq.question}
                        className={`overflow-hidden rounded-2xl border bg-white/[0.03] backdrop-blur-xl transition duration-300 ${
                          isOpen
                            ? "border-blue-400/30 shadow-lg shadow-blue-500/5"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${activeCategory}-${index}`}
                          onClick={() =>
                            setOpen(
                              isOpen ? -1 : index
                            )
                          }
                          className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-7"
                        >
                          <div className="flex items-start gap-4">
                            <span
                              className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                                isOpen
                                  ? "bg-blue-500/15 text-blue-400"
                                  : "bg-white/5 text-slate-500"
                              }`}
                            >
                              {String(index + 1).padStart(
                                2,
                                "0"
                              )}
                            </span>

                            <span className="text-base font-semibold leading-7 text-white sm:text-lg">
                              {faq.question}
                            </span>
                          </div>

                          <ChevronDown
                            size={20}
                            className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                              isOpen
                                ? "rotate-180 text-blue-400"
                                : ""
                            }`}
                          />
                        </button>

                        <div
                          id={`faq-answer-${activeCategory}-${index}`}
                          className={`grid transition-all duration-300 ${
                            isOpen
                              ? "grid-rows-[1fr]"
                              : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="border-t border-white/5 px-6 py-6 pl-[4.5rem] sm:px-7 sm:pl-[5.75rem]">
                              <p className="text-sm leading-8 text-slate-400 sm:text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            )}
          </div>
        </section>

        {/* TOOL CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl sm:p-12 lg:p-16">

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
              />

              <div className="relative">

                <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500" />

                <h2 className="mt-7 text-3xl font-black text-white sm:text-4xl">
                  Still Looking for the Right Tool?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
                  Explore TubeKit's AI and utility tools and find
                  the right tool for your next YouTube project.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    to="/tools/title-generator"
                    className="rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5"
                  >
                    Explore AI Tools →
                  </Link>

                  <Link
                    to="/about"
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 font-semibold text-slate-200 transition hover:border-blue-400/30 hover:bg-white/[0.06]"
                  >
                    Learn About TubeKit
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