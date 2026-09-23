import { useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  ChevronDown,
  FileText,
  Hash,
  Lightbulb,
  Play,
  Search,
  Sparkles,
  Target,
  Wand2,
} from "lucide-react";

import SEO from "@/components/common/SEO";
import Hero from "@/components/home/hero/Hero";
import SearchSection from "@/components/home/search/SearchSection";
import FeaturedTools from "@/components/home/featured-tools/FeaturedTools";
import BlogGrid from "@/components/blog/BlogGrid";
import blogPosts from "@/data/blogPosts";

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

const rgby = {
  red: {
    text: "text-red-400",
    icon: "bg-red-500/10 text-red-400",
    active: "active:border-red-500/70 focus-visible:border-red-500/70",
    glow: "active:shadow-[0_0_35px_rgba(239,68,68,0.10)]",
  },
  green: {
    text: "text-green-400",
    icon: "bg-green-500/10 text-green-400",
    active: "active:border-green-500/70 focus-visible:border-green-500/70",
    glow: "active:shadow-[0_0_35px_rgba(34,197,94,0.10)]",
  },
  yellow: {
    text: "text-yellow-300",
    icon: "bg-yellow-400/10 text-yellow-300",
    active: "active:border-yellow-400/70 focus-visible:border-yellow-400/70",
    glow: "active:shadow-[0_0_35px_rgba(250,204,21,0.10)]",
  },
  blue: {
    text: "text-blue-400",
    icon: "bg-blue-500/10 text-blue-400",
    active: "active:border-blue-500/70 focus-visible:border-blue-500/70",
    glow: "active:shadow-[0_0_35px_rgba(59,130,246,0.10)]",
  },
};

const essentialTools = [
  {
    name: "AI Title Generator",
    path: "/tools/title-generator",
    color: "red",
    icon: Sparkles,
    description: "Create clear and engaging YouTube title ideas around your topic and audience.",
  },
  {
    name: "AI Description Generator",
    path: "/tools/description-generator",
    color: "blue",
    icon: FileText,
    description: "Generate useful description drafts with context, keywords and calls to action.",
  },
  {
    name: "YouTube Tags Generator",
    path: "/tools/tags-generator",
    color: "green",
    icon: Hash,
    description: "Build relevant tag ideas around your video's topic and search context.",
  },
  {
    name: "AI Script Writer",
    path: "/tools/script-generator",
    color: "yellow",
    icon: Wand2,
    description: "Turn a simple video idea into a structured script with hooks and sections.",
  },
  {
    name: "Hashtag Generator",
    path: "/tools/hashtag-generator",
    color: "red",
    icon: Hash,
    description: "Generate relevant hashtag ideas for videos, Shorts and creator campaigns.",
  },
  {
    name: "Keyword Generator",
    path: "/tools/keyword-generator",
    color: "blue",
    icon: Search,
    description: "Explore keyword ideas around your topic and the search intent of viewers.",
  },
  {
    name: "Hook Generator",
    path: "/tools/hook-generator",
    color: "green",
    icon: Target,
    description: "Create focused opening hooks that give viewers a clear reason to continue.",
  },
  {
    name: "Thumbnail Idea Generator",
    path: "/tools/thumbnail-generator",
    color: "yellow",
    icon: Lightbulb,
    description: "Explore thumbnail concepts before designing your final visual.",
  },
];

const keyFeatures = [
  {
    title: "Create Faster",
    text: "Move from a rough idea to titles, scripts, hooks, keywords and content directions without starting from a blank page.",
    color: "red",
    icon: Wand2,
  },
  {
    title: "Optimize Content",
    text: "Use practical tools for titles, descriptions, keywords, tags and hashtags while keeping your content relevant.",
    color: "green",
    icon: BarChart3,
  },
  {
    title: "Plan With Clarity",
    text: "Organize the important parts of your video before publishing so every element has a clear purpose.",
    color: "yellow",
    icon: Target,
  },
  {
    title: "Creator Utilities",
    text: "Access everyday YouTube utilities and calculators from one simple creator-focused workspace.",
    color: "blue",
    icon: Play,
  },
];

const workflow = [
  {
    number: "01",
    title: "Choose a tool",
    text: "Pick the tool that matches the part of your YouTube workflow you are working on.",
    color: "red",
  },
  {
    number: "02",
    title: "Add your idea",
    text: "Enter your topic, keyword, video idea or other useful context.",
    color: "green",
  },
  {
    number: "03",
    title: "Generate",
    text: "Get practical suggestions that you can review, edit and personalize.",
    color: "yellow",
  },
  {
    number: "04",
    title: "Create your version",
    text: "Use the output as a starting point and add your own experience and creative direction.",
    color: "blue",
  },
];

const creatorGuides = [
  {
    title: "YouTube SEO",
    text: "Understand titles, keywords, descriptions, tags, thumbnails and search intent.",
    color: "red",
  },
  {
    title: "Content Ideas",
    text: "Turn broad topics into clearer video concepts, hooks and content structures.",
    color: "green",
  },
  {
    title: "YouTube Shorts",
    text: "Plan short-form hooks, scripts, hashtags and ideas for faster content production.",
    color: "yellow",
  },
  {
    title: "Channel Growth",
    text: "Combine better content planning with analytics, consistency and audience feedback.",
    color: "blue",
  },
];

const faqs = [
  {
    question: "What is TubeKit?",
    answer:
      "TubeKit is a creator-focused toolkit that brings together AI content tools and practical YouTube utilities for planning, creating and optimizing videos.",
    color: "red",
  },
  {
    question: "Can beginners use TubeKit?",
    answer:
      "Yes. Most tools are built around simple inputs, so you can start with a basic topic or video idea and refine the generated result.",
    color: "green",
  },
  {
    question: "Can TubeKit help with YouTube SEO?",
    answer:
      "TubeKit includes tools for titles, descriptions, keywords, tags and hashtags. Search performance still depends on relevance, content quality, audience response and many other factors.",
    color: "yellow",
  },
  {
    question: "Does TubeKit replace YouTube Studio?",
    answer:
      "No. TubeKit is a creator-support toolkit. YouTube Studio remains the place to manage your channel, publish videos and review official analytics.",
    color: "blue",
  },
  {
    question: "Should I publish AI-generated content directly?",
    answer:
      "Generated output should be treated as a starting point. Review facts, adapt the wording to your audience and add your own experience before publishing.",
    color: "red",
  },
];

function Home() {
  const [activeTool, setActiveTool] = useState(null);
  const [toolQuery, setToolQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const toolSectionRef = useRef(null);

  const latestBlogPosts = [...blogPosts]
    .filter((post) => post.category !== "Mobile Reviews")
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

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

  const ActiveTool = activeTool ? toolComponents[activeTool.path] : null;

  return (
    <>
      <SEO
        title="TubeKit | Free AI Tools for YouTube Creators"
        description="TubeKit is a free AI toolkit for YouTube creators. Generate titles, descriptions, tags, scripts, hooks, keywords, hashtags, thumbnail ideas and more."
        keywords="TubeKit, YouTube AI tools, free YouTube tools, YouTube SEO tools, AI YouTube tools, YouTube title generator, YouTube script generator"
        canonical="/"
        organization={true}
      />

      {/* HERO */}
      <Hero onToolSelect={handleToolSelect} />

      {/* ACTIVE TOOL */}
      {ActiveTool && (
        <section
          ref={toolSectionRef}
          aria-label={`${activeTool.name} tool`}
          className="relative overflow-hidden bg-[#030712] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-red-400">
                TubeKit AI Tool
              </span>

              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                {activeTool.name}
              </h2>

              {toolQuery && (
                <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
                  Topic:{" "}
                  <span className="font-semibold text-white">{toolQuery}</span>
                </p>
              )}
            </div>

            <div className="bg-[#070b18] p-2 sm:p-4">
              <ActiveTool query={toolQuery} />
            </div>
          </div>
        </section>
      )}

{/* ESSENTIAL TOOLS */}
      <section
        id="tools"
        className="bg-[#030712] px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-red-500">Essential</span> Creator Tools
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
              Powerful tools for titles, descriptions, keywords, scripts,
              hooks, hashtags and thumbnails in one simple workspace.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {essentialTools.map((tool) => {
              const s = rgby[tool.color];
              const Icon = tool.icon;

              return (
                <a
                  key={tool.path}
                  href={tool.path}
                  className={`group rounded-2xl border border-transparent bg-[#080b12] p-5 outline-none transition duration-300 hover:-translate-y-1 hover:bg-[#0b0f18] hover:shadow-2xl sm:p-6 ${s.active} ${s.glow}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.icon}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowRight
                      className={`h-4 w-4 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100 ${s.text}`}
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-tight text-white sm:text-xl">
                    {tool.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {tool.description}
                  </p>

                  <span
                    className={`mt-5 inline-flex text-xs font-bold uppercase tracking-wider ${s.text}`}
                  >
                    Open tool
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED TOOLS */}
      <section className="bg-[#050816] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-6xl">
            <FeaturedTools />
          </div>
        </div>
      </section>

   

      {/* ABOUT */}
      <section className="bg-[#050816] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            About TubeKit
          </span>

          <h2 className="mt-5 whitespace-nowrap text-[clamp(1.7rem,6vw,3.75rem)] font-black leading-tight tracking-tight text-white">
            Understanding <span className="text-red-500">TubeKit</span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
            TubeKit is a creator-focused toolkit for planning, creating and
            optimizing YouTube content. It brings common creator tasks into one
            simple workspace so you can spend less time switching between tools
            and more time improving your content.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-[#050816] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-5 whitespace-nowrap text-[clamp(1.45rem,5vw,3rem)] font-black leading-tight text-white">
              Key Features <span className="text-red-500">of TubeKit</span>
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Instant Creation", "Generate useful starting points for titles, scripts, hooks and content ideas.", "red"],
              ["SEO Support", "Work with keywords, descriptions, tags and hashtags in a focused workflow.", "green"],
              ["Simple Workflow", "Use clear inputs and practical outputs without a complicated interface.", "yellow"],
              ["Creator Utilities", "Access calculators and everyday YouTube utilities from one place.", "blue"],
              ["Flexible Ideas", "Review, edit and combine suggestions to fit your own content style.", "red"],
              ["Free Access", "Explore the available tools without adding unnecessary complexity.", "green"],
            ].map(([title, text, color]) => {
              const s = rgby[color];

              return (
                <div
                  key={title}
                  tabIndex={0}
                  className={`group rounded-2xl border border-transparent bg-[#080b12] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#0b0f18] ${s.active} ${s.glow}`}
                >
                  <div className={`mb-5 h-1.5 w-10 rounded-full ${s.icon.split(" ")[0]}`} />
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
{/* BENEFITS */}
      <section className="bg-[#030712] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-5 whitespace-nowrap text-[clamp(1.4rem,5vw,3rem)] font-black leading-tight text-white">
              Benefits of Using <span className="text-red-500">TubeKit</span>
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
            {[
              ["Improved Content Workflow", "Keep common planning and optimization tasks together in one focused workspace.", "red", BarChart3],
              ["Less Tool Switching", "Move between creator tasks without rebuilding your workflow from scratch.", "green", Sparkles],
              ["Better Content Planning", "Organize titles, keywords, scripts, hooks and thumbnail ideas before publishing.", "yellow", Lightbulb],
              ["Time-Saving Utilities", "Use practical calculators and YouTube utilities for common creator tasks.", "blue", Wand2],
            ].map(([title, text, color, Icon]) => {
              const s = rgby[color];

              return (
                <div
                  key={title}
                  tabIndex={0}
                  className={`group flex gap-5 rounded-2xl border border-transparent bg-[#080b12] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#0b0f18] ${s.active} ${s.glow}`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${s.icon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-500">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMON USE CASES */}
      <section className="bg-[#050816] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mt-5 whitespace-nowrap text-[clamp(1.55rem,5vw,3rem)] font-black leading-tight text-white">
              Common <span className="text-red-500">Use Cases</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Useful workflows for creators, marketers, SEO-focused teams and
              anyone working with YouTube content.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {[
              ["Content Creators", "Plan videos, improve metadata and develop stronger content directions.", "red"],
              ["Digital Marketers", "Research topics, organize content ideas and support campaign planning.", "green"],
              ["SEO Specialists", "Work with keywords, titles, descriptions and metadata around search intent.", "yellow"],
              ["Developers & Researchers", "Use practical YouTube utilities and data-focused creator workflows.", "blue"],
            ].map(([title, text, color]) => {
              const s = rgby[color];

              return (
                <div
                  key={title}
                  tabIndex={0}
                  className={`rounded-2xl border border-transparent bg-[#080b12] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#0b0f18] ${s.active} ${s.glow}`}
                >
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-[#030712] px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              How It Works
            </span>

            <h2 className="mt-5 whitespace-nowrap text-[clamp(1.8rem,6vw,3.75rem)] font-black leading-tight text-white">
              From Idea <span className="text-red-500">To Upload</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => {
              const s = rgby[step.color];

              return (
                <div
                  key={step.number}
                  tabIndex={0}
                  className={`rounded-2xl border border-transparent bg-[#080b12] p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#0b0f18] ${s.active} ${s.glow}`}
                >
                  <div className={`text-sm font-black tracking-[0.18em] ${s.text}`}>
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BEST PRACTICES */}
      <section className="bg-[#050816] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Best Practices
          </span>

          <h2 className="mt-5 whitespace-nowrap text-[clamp(1.4rem,5vw,3rem)] font-black leading-tight text-white">
            Better YouTube <span className="text-red-500">Content Practices</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            Use clear topics, accurate titles and thumbnails, useful
            descriptions, strong openings and audience feedback to improve
            your content over time.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            {[
              "Keep titles accurate and easy to understand.",
              "Match keywords with the actual topic of the video.",
              "Use thumbnails that communicate one clear idea.",
              "Review analytics and audience retention regularly.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-3 rounded-xl bg-[#080b12] p-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                <span className="text-sm leading-6 text-slate-500">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#030712] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
FAQ
            </span>

            <h2 className="mt-5 whitespace-nowrap text-[clamp(1.8rem,6vw,3.75rem)] font-black leading-tight text-white">
              Common <span className="text-red-500">Questions</span>
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const s = rgby[faq.color];
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border bg-[#080b12] transition duration-300 ${
                    isOpen
                      ? faq.color === "red"
                        ? "border-red-500/40"
                        : faq.color === "green"
                          ? "border-green-500/40"
                          : faq.color === "yellow"
                            ? "border-yellow-400/40"
                            : "border-blue-500/40"
                      : "border-transparent"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 rounded-2xl p-5 text-left outline-none"
                  >
                    <span className="text-sm font-bold text-white sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-7 text-slate-500">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LATEST BLOG - AFTER THE MAIN CONTENT */}
      <section
        id="latest-blog"
        className="bg-[#050816] px-4 py-24 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Blog
            </span>

            <h2 className="mt-5 whitespace-nowrap text-[clamp(1.65rem,6vw,3.75rem)] font-black leading-tight text-white">
              Latest from <span className="text-red-500">the Blog</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
              Explore practical YouTube SEO strategies, creator tips, AI
              tools, content ideas and growth guides from TubeKit.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-6xl">
            <BlogGrid posts={latestBlogPosts} />
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/20"
            >
              View All Blog Posts
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#030712] px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#080b12] px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
            <Play className="h-5 w-5" />
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Create better
            <span className="block text-red-500">YouTube content</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            Start with your idea, choose a tool and build your next piece of
            YouTube content with TubeKit.
          </p>

          <a
            href="#tools"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/20"
          >
            Explore Creator Tools
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;