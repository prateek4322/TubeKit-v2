import { useRef, useState } from "react";

import SEO from "@/components/common/SEO";
import Hero from "@/components/home/hero/Hero";
import SearchSection from "@/components/home/search/SearchSection";
import FeaturedTools from "@/components/home/featured-tools/FeaturedTools";

// Tools
import TitleGenerator from "@/pages/tools/TitleGenerator";
import DescriptionGenerator from "@/pages/tools/DescriptionGenerator";
import TagsGenerator from "@/pages/tools/TagsGenerator";
import ScriptGenerator from "@/pages/tools/ScriptGenerator";
import HashtagGenerator from "@/pages/tools/HashtagGenerator";
import KeywordGenerator from "@/pages/tools/KeywordGenerator";
import HookGenerator from "@/pages/tools/HookGenerator";
import OutlineGenerator from "@/pages/tools/OutlineGenerator";
import ShortsGenerator from "@/pages/tools/ShortsGenerator";
import ThumbnailGenerator from "@/pages/tools/ThumbnailGenerator";
import MonetizationChecker from "@/pages/tools/MonetizationChecker";
import MoneyCalculator from "@/pages/tools/MoneyCalculator";
import CPMCalculator from "@/pages/tools/CPMCalculator";
import RPMCalculator from "@/pages/tools/RPMCalculator";
import ChannelIdFinder from "@/pages/tools/ChannelIdFinder";
import VideoIdExtractor from "@/pages/tools/VideoIdExtractor";
import ThumbnailDownloader from "@/pages/tools/ThumbnailDownloader";

/*
  TubeKit Home Page
  ------------------------------------------------------------
  Design direction:
  - Dark premium creator-tool layout
  - RGYB card system: Red / Green / Yellow / Blue
  - Every card uses ONE solid color on all four borders
  - No half/top-only RGYB lines
  - Desktop + mobile responsive
  - Hero remains a separate component
*/

const toolComponents = {
  "/tools/title-generator": TitleGenerator,
  "/tools/description-generator": DescriptionGenerator,
  "/tools/tags-generator": TagsGenerator,
  "/tools/script-generator": ScriptGenerator,
  "/tools/hashtag-generator": HashtagGenerator,
  "/tools/keyword-generator": KeywordGenerator,
  "/tools/hook-generator": HookGenerator,
  "/tools/outline-generator": OutlineGenerator,
  "/tools/shorts-generator": ShortsGenerator,
  "/tools/thumbnail-generator": ThumbnailGenerator,
  "/tools/monetization-checker": MonetizationChecker,
  "/tools/money-calculator": MoneyCalculator,
  "/tools/cpm-calculator": CPMCalculator,
  "/tools/rpm-calculator": RPMCalculator,
  "/tools/channel-id-finder": ChannelIdFinder,
  "/tools/video-id-extractor": VideoIdExtractor,
  "/tools/thumbnail-downloader": ThumbnailDownloader,
};

const rgbyStyles = {
  red: {
    border: "border-red-500/70 hover:border-red-400",
    icon: "bg-red-500/15 text-red-400",
    text: "text-red-400",
    glow: "hover:shadow-red-500/10",
  },
  green: {
    border: "border-green-500/70 hover:border-green-400",
    icon: "bg-green-500/15 text-green-400",
    text: "text-green-400",
    glow: "hover:shadow-green-500/10",
  },
  yellow: {
    border: "border-yellow-400/70 hover:border-yellow-300",
    icon: "bg-yellow-400/15 text-yellow-300",
    text: "text-yellow-300",
    glow: "hover:shadow-yellow-400/10",
  },
  blue: {
    border: "border-blue-500/70 hover:border-blue-400",
    icon: "bg-blue-500/15 text-blue-400",
    text: "text-blue-400",
    glow: "hover:shadow-blue-500/10",
  },
};

const essentialTools = [
  {
    name: "AI Title Generator",
    path: "/tools/title-generator",
    color: "red",
    description:
      "Create engaging YouTube title ideas around your topic, audience and search intent.",
  },
  {
    name: "AI Description Generator",
    path: "/tools/description-generator",
    color: "blue",
    description:
      "Generate structured YouTube descriptions with relevant keywords, context and clear calls to action.",
  },
  {
    name: "YouTube Tags Generator",
    path: "/tools/tags-generator",
    color: "green",
    description:
      "Find useful tag ideas that help organize your video topic and improve metadata coverage.",
  },
  {
    name: "AI Script Writer",
    path: "/tools/script-generator",
    color: "yellow",
    description:
      "Turn a simple video idea into a structured script with hooks, sections and a natural flow.",
  },
  {
    name: "Hashtag Generator",
    path: "/tools/hashtag-generator",
    color: "red",
    description:
      "Generate relevant hashtag ideas for YouTube videos, Shorts and creator campaigns.",
  },
  {
    name: "Keyword Generator",
    path: "/tools/keyword-generator",
    color: "blue",
    description:
      "Build keyword ideas around your content topic so you can plan videos with clearer search intent.",
  },
  {
    name: "Hook Generator",
    path: "/tools/hook-generator",
    color: "green",
    description:
      "Generate opening hooks that help you start videos with a clear and focused message.",
  },
  {
    name: "Thumbnail Idea Generator",
    path: "/tools/thumbnail-generator",
    color: "yellow",
    description:
      "Explore thumbnail concepts and visual directions before designing your final thumbnail.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Choose a creator tool",
    text: "Select the tool that matches the part of your YouTube workflow you want to improve.",
    color: "red",
  },
  {
    number: "02",
    title: "Add your topic",
    text: "Enter your video idea, niche, keyword or useful context to guide the result.",
    color: "green",
  },
  {
    number: "03",
    title: "Generate ideas",
    text: "TubeKit creates practical suggestions that you can review, edit and refine.",
    color: "yellow",
  },
  {
    number: "04",
    title: "Publish your version",
    text: "Use the result as a starting point and add your own experience and creative direction.",
    color: "blue",
  },
];
const seoCards = [
  {
    title: "Titles",
    text: "Make the topic clear and interesting without misleading the viewer.",
    color: "red",
  },
  {
    title: "Keywords",
    text: "Build keyword ideas around the topic and search intent of your audience.",
    color: "green",
  },
  {
    title: "Descriptions",
    text: "Give viewers useful context about what they will find in the video.",
    color: "yellow",
  },
  {
    title: "Tags",
    text: "Use relevant metadata when it adds useful context to the video topic.",
    color: "blue",
  },
  {
    title: "Hooks",
    text: "Start with a clear reason for viewers to continue watching.",
    color: "red",
  },
  {
    title: "Consistency",
    text: "Publish useful content consistently and learn from your channel analytics.",
    color: "green",
  },
];

const faqs = [
  {
    question: "What is TubeKit?",
    answer:
      "TubeKit is an AI-powered toolkit for YouTube creators. It brings together tools for titles, descriptions, tags, scripts, keywords, hooks, hashtags, thumbnails and creator utilities.",
    color: "red",
  },
  {
    question: "Can beginners use TubeKit?",
    answer:
      "Yes. The tools are designed around simple inputs so creators can start with a basic video idea and turn it into more structured content.",
    color: "green",
  },
  {
    question: "Can TubeKit help with YouTube SEO?",
    answer:
      "TubeKit provides tools for titles, descriptions, tags, keywords, hashtags and content planning. Actual search performance depends on many factors including relevance, audience response and video quality.",
    color: "yellow",
  },
  {
    question: "Does TubeKit replace YouTube Studio?",
    answer:
      "No. TubeKit is a creator-support toolkit. YouTube Studio remains the place to manage your channel, publish videos and review official channel analytics.",
    color: "blue",
  },
  {
    question: "How should I use AI-generated content?",
    answer:
      "Treat generated results as a starting point. Review facts, adapt the wording to your audience and add your own experience before publishing.",
    color: "red",
  },
];

function Home() {
  const [activeTool, setActiveTool] = useState(null);
  const [toolQuery, setToolQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const toolSectionRef = useRef(null);

  const handleToolSelect = (tool, query) => {
    setActiveTool(tool);
    setToolQuery(query?.trim() || "");

    setTimeout(() => {
      toolSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };
const ActiveTool = activeTool
    ? toolComponents[activeTool.path]
    : null;

  return (
    <>
      <SEO
        title="TubeKit | Free AI Tools for YouTube Creators"
        description="TubeKit is a free AI toolkit for YouTube creators. Generate titles, descriptions, tags, scripts, hooks, keywords, hashtags, thumbnail ideas and more."
        keywords="TubeKit, YouTube AI tools, free YouTube tools, YouTube SEO tools, AI YouTube tools, YouTube title generator, YouTube script generator"
        canonical="/"
        organization={true}
      />

      {/* =====================================================
          HERO
          Kept completely separate. Hero can be redesigned later.
      ====================================================== */}
      <Hero onToolSelect={handleToolSelect} />

      {/* =====================================================
          ACTIVE TOOL
      ====================================================== */}
      {ActiveTool && (
        <section
          ref={toolSectionRef}
          aria-label={`${activeTool.name} tool`}
          className="relative overflow-hidden bg-[#030712] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                TubeKit AI Tool
              </span>

              <h2 className="mt-5 text-3xl font-black text-white sm:text-5xl">
                {activeTool.name}
              </h2>

              {toolQuery && (
                <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                  Topic:{" "}
                  <span className="font-semibold text-white">{toolQuery}</span>
                </p>
              )}
            </div>

            <div className="rounded-[2rem] border border-blue-500/30 bg-[#070b18] p-3 shadow-2xl sm:p-6">
              <ActiveTool query={toolQuery} />
            </div>
          </div>
        </section>
      )}


      {/* =====================================================
          SEARCH
          Existing component is preserved.
      ====================================================== */}
      <section className="bg-[#050816] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SearchSection />
        </div>
      </section>

      
{/* =====================================================
          ESSENTIAL CREATOR TOOLS
      ====================================================== */}
      <section
        id="tools"
        className="bg-[#030712] px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              Essential creator tools
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Everything you need to move from idea to upload
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              TubeKit brings common YouTube content tasks into one focused
              workspace. Start with a topic, generate useful ideas, then
              customize the result for your own channel and audience.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {essentialTools.map((tool) => {
              const s = rgbyStyles[tool.color];

              return (
                <a
                  key={tool.path}
                  href={tool.path}
                  className={`group rounded-3xl border-2 bg-[#070b18] p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#0a0f1f] hover:shadow-2xl sm:p-7 ${s.border} ${s.glow}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-black ${s.icon}`}
                    >
                      AI
                    </span>

                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
                      TubeKit
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold leading-tight text-white">
                    {tool.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {tool.description}
                  </p>

                  <span
                    className={`mt-6 inline-flex text-sm font-bold transition group-hover:translate-x-1 ${s.text}`}
                  >
                    Open tool
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED TOOLS
          Existing component is preserved.
      ====================================================== */}
      <section className="bg-[#050816] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FeaturedTools />
        </div>
      </section>
{/* =====================================================
          ABOUT TUBEKIT
      ====================================================== */}
      <section
        id="about"
        className="bg-[#030712] px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-green-400">
              What is TubeKit?
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              A practical AI workspace for YouTube creators
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-400 sm:text-lg">
              Creating a YouTube video involves much more than recording.
              Creators research topics, develop titles, plan scripts, write
              descriptions, select keywords, create hooks and prepare
              thumbnails. TubeKit brings many of those repetitive planning
              tasks into one creator-focused toolkit.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              Use generated suggestions as a starting point, then add your own
              expertise, voice, examples and creative decisions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Content ideation", "Turn a topic into actionable content directions.", "red"],
              ["YouTube SEO", "Work with titles, keywords, descriptions and tags.", "green"],
              ["Short-form workflow", "Plan hooks, scripts and hashtags for Shorts.", "yellow"],
              ["Creator utilities", "Use practical tools for common YouTube tasks.", "blue"],
            ].map(([title, text, color]) => {
              const s = rgbyStyles[color];

              return (
                <div
                  key={title}
                  className={`rounded-3xl border-2 bg-[#070b18] p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${s.border} ${s.glow}`}
                >
                  <div className={`h-2 w-10 rounded-full ${s.icon.split(" ")[0]}`} />
                  <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section
        id="how-it-works"
        className="bg-[#050816] px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">
              How TubeKit works
            </span>

            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              A simple creator workflow
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              Give the tool enough context, review the output and make it your
              own.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => {
              const s = rgbyStyles[item.color];

              return (
                <div
                  key={item.number}
                  className={`rounded-3xl border-2 bg-[#070b18] p-7 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${s.border} ${s.glow}`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-xs font-black ${s.icon}`}
                  >
                    {item.number}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
{/* =====================================================
          YOUTUBE SEO
      ====================================================== */}
      <section className="bg-[#030712] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-blue-400">
                YouTube SEO
              </span>

              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Build better metadata around better content
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                Search optimization is more than adding keywords. Your topic,
                title, description, viewer intent, content quality and audience
                response all work together.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {seoCards.map((card) => {
                const s = rgbyStyles[card.color];

                return (
                  <article
                    key={card.title}
                    className={`rounded-3xl border-2 bg-[#070b18] p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${s.border} ${s.glow}`}
                  >
                    <h3 className="text-lg font-bold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {card.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MONETIZATION
      ====================================================== */}
      <section className="bg-[#050816] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-green-400">
                Creator growth
              </span>

              <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                Plan content with growth in mind
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                TubeKit includes creator utilities that can help you understand
                common YouTube metrics and plan content around your goals.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["CPM Calculator", "Estimate advertising revenue scenarios from CPM and views.", "/tools/cpm-calculator", "red"],
                ["RPM Calculator", "Understand revenue-per-thousand-view calculations.", "/tools/rpm-calculator", "blue"],
                ["Money Calculator", "Explore simple creator revenue scenarios.", "/tools/money-calculator", "green"],
                ["Monetization Checker", "Review common monetization-related information.", "/tools/monetization-checker", "yellow"],
              ].map(([title, text, href, color]) => {
                const s = rgbyStyles[color];

                return (
                  <a
                    key={title}
                    href={href}
                    className={`rounded-3xl border-2 bg-[#070b18] p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${s.border} ${s.glow}`}
                  >
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
                    <span className={`mt-5 inline-flex text-sm font-bold ${s.text}`}>
                      Open tool
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
{/* =====================================================
          WHY TUBEKIT
      ====================================================== */}
      <section className="bg-[#030712] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              Why TubeKit
            </span>

            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              Less friction. More room for creativity.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              A creator toolkit should make repetitive work easier without
              taking away your creative control.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              ["Faster ideation", "Move from a rough idea to multiple content directions quickly.", "red"],
              ["Structured workflow", "Keep titles, scripts, metadata and supporting tasks connected.", "green"],
              ["Creative control", "Use AI output as a draft and customize every result.", "blue"],
            ].map(([title, text, color]) => {
              const s = rgbyStyles[color];

              return (
                <div
                  key={title}
                  className={`rounded-3xl border-2 bg-[#070b18] p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${s.border} ${s.glow}`}
                >
                  <div className={`h-10 w-10 rounded-2xl ${s.icon}`} />

                  <h3 className="mt-7 text-xl font-bold text-white">{title}</h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

{/* =====================================================
          FAQ
      ====================================================== */}
      <section
        id="faq"
        className="bg-[#050816] px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">
              Frequently asked questions
            </span>

            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              Questions creators commonly ask
            </h2>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const s = rgbyStyles[faq.color];

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-3xl border-2 bg-[#070b18] shadow-lg ${s.border}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-7"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-white">{faq.question}</span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition ${s.icon} ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-6 py-6 sm:px-7">
                      <p className="text-sm leading-7 text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
{/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#030712] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border-2 border-blue-500/60 bg-[#070b18] px-6 py-16 text-center shadow-2xl shadow-blue-500/5 sm:px-12">
          <div className="mx-auto flex w-fit gap-2">
            <span className="h-2.5 w-10 rounded-full bg-red-500" />
            <span className="h-2.5 w-10 rounded-full bg-green-500" />
            <span className="h-2.5 w-10 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-10 rounded-full bg-blue-500" />
          </div>

          <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Turn your next YouTube idea into a content plan
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Start with a topic, explore TubeKit's creator tools and build your
            next video with a clearer workflow.
          </p>

          <a
            href="#tools"
            className="mt-9 inline-flex rounded-2xl bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Explore Creator Tools
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;