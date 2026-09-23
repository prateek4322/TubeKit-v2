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
{/* HERO - kept separate */}
      <Hero onToolSelect={handleToolSelect} />

      {/* ACTIVE TOOL */}
      {ActiveTool && (
        <section
          ref={toolSectionRef}
          aria-label={`${activeTool.name} tool`}
          className="relative overflow-hidden bg-[#030712] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                TubeKit AI Tool
              </span>

              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                {activeTool.name}
              </h2>

              {toolQuery && (
                <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
                  Topic: <span className="font-semibold text-white">{toolQuery}</span>
                </p>
              )}
            </div>

            <div className="bg-[#070b18] p-2 sm:p-4">
              <ActiveTool query={toolQuery} />
            </div>
          </div>
        </section>
      )}

      {/* INTRO */}
      <section className="bg-[#050816] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              Built for YouTube Creators
            </span>

            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Create, Optimize
              <span className="block text-red-500">& Grow With TubeKit</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">
              TubeKit brings the repetitive parts of YouTube content creation
              into one simple workspace. Plan ideas, write content, improve
              metadata and use creator utilities without jumping between many
              different tools.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["AI Content", "YouTube SEO", "Creator Tools"].map((item, index) => (
                <span
                  key={item}
                  className={`rounded-full bg-white/[0.04] px-4 py-2 text-xs font-semibold ${
                    index === 0
                      ? "text-red-400"
                      : index === 1
                        ? "text-green-400"
                        : "text-blue-400"
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["Create", "Ideas, scripts, hooks and content directions.", "red", Sparkles],
              ["Optimize", "Titles, keywords, descriptions, tags and hashtags.", "green", BarChart3],
              ["Customize", "Review every result and make it yours.", "blue", Wand2],
            ].map(([title, text, color, Icon]) => {
              const s = rgby[color];

              return (
                <div
                  key={title}
                  tabIndex={0}
                  className={`group border border-transparent bg-[#070b18] p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-[#090e1c] hover:${s.text} ${s.active} ${s.glow}`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.icon}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="bg-[#030712] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SearchSection />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#050816] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            ["17+", "Creator tools", "red"],
            ["AI", "Powered workflows", "green"],
            ["SEO", "Content support", "yellow"],
            ["24/7", "Self-serve access", "blue"],
          ].map(([value, label, color]) => {
            const s = rgby[color];

            return (
              <div
                key={label}
                className="border border-transparent bg-[#070b18] px-4 py-6 text-center transition duration-300 hover:-translate-y-0.5 hover:bg-[#090e1c]"
              >
                <div className={`text-3xl font-black sm:text-4xl ${s.text}`}>{value}</div>
                <div className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">{label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ESSENTIAL TOOLS */}
      <section
        id="tools"
        className="bg-[#030712] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              Essential
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Creator
              <span className="block text-red-500">Tools</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
              Everything you need to plan, create and optimize YouTube content
              from one creator-focused workspace.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {essentialTools.map((tool) => {
              const s = rgby[tool.color];
              const Icon = tool.icon;

              return (
                <a
                  key={tool.path}
                  href={tool.path}
                  className={`group border border-transparent bg-[#070b18] p-5 outline-none transition duration-300 hover:-translate-y-1 hover:bg-[#090e1c] hover:shadow-2xl sm:p-6 ${s.active} ${s.glow}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.icon}`}>
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowRight className={`h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100 ${s.text}`} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-tight text-white sm:text-xl">
                    {tool.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {tool.description}
                  </p>

                  <span className={`mt-5 inline-flex text-xs font-bold uppercase tracking-wider ${s.text}`}>
                    Open tool
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED TOOLS */}
      <section className="bg-[#050816] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-blue-400">
              Featured
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Featured
              <span className="block text-red-500">Tools</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
              Explore more useful tools for YouTube research, content planning,
              optimization and creator workflows.
            </p>
          </div>

          <FeaturedTools />
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-[#030712] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-green-400">
              Key Features
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Simple Tools.
              <span className="block text-red-500">Useful Results.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              TubeKit is designed to keep the workflow clear. Choose what you
              need, generate a starting point and refine it for your channel.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {keyFeatures.map((feature) => {
              const s = rgby[feature.color];
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  tabIndex={0}
                  className={`border border-transparent bg-[#070b18] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#090e1c] ${s.active} ${s.glow}`}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.icon}`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">{feature.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
{/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-[#050816] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              How It Works
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              From Idea
              <span className="block text-red-500">To Upload</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              A simple workflow for turning an early idea into more organized
              YouTube content.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((step) => {
              const s = rgby[step.color];

              return (
                <div
                  key={step.number}
                  tabIndex={0}
                  className={`border border-transparent bg-[#070b18] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#090e1c] ${s.active} ${s.glow}`}
                >
                  <div className={`text-sm font-black tracking-[0.18em] ${s.text}`}>
                    {step.number}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">{step.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CREATOR GUIDES */}
      <section className="bg-[#030712] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              Creator Knowledge
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Build Better
              <span className="block text-red-500">YouTube Content</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              Tools are only one part of a creator workflow. Understand the
              basics, test ideas and use your own analytics to improve over time.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {creatorGuides.map((guide) => {
              const s = rgby[guide.color];

              return (
                <div
                  key={guide.title}
                  tabIndex={0}
                  className={`border border-transparent bg-[#070b18] p-6 transition duration-300 hover:bg-[#090e1c] ${s.active} ${s.glow}`}
                >
                  <h3 className="text-xl font-bold text-white">{guide.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{guide.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT / RESPONSIBLE AI */}
      <section className="bg-[#050816] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="bg-[#070b18] p-7 sm:p-9">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
              <BookOpen className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              What is TubeKit?
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              TubeKit is a practical AI workspace for YouTube creators. It
              combines content generation tools and useful creator utilities in
              one place, helping reduce repetitive planning work.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              Use the generated suggestions as a starting point, then apply
              your own knowledge, voice, examples and creative decisions.
            </p>
          </div>

          <div className="bg-[#070b18] p-7 sm:p-9">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
              <Check className="h-5 w-5" />
            </div>

            <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
              Use AI Responsibly
            </h2>

            <ul className="mt-6 space-y-4">
              {[
                "Review generated information before publishing.",
                "Keep titles and thumbnails accurate to the actual video.",
                "Add your own experience and original creative direction.",
                "Use YouTube Analytics to understand what works for your audience.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-slate-500">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-green-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
{/* FAQ */}
      <section className="bg-[#030712] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-blue-400">
              FAQ
            </span>

            <h2 className="mt-3 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
              Common
              <span className="block text-red-500">Questions</span>
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const s = rgby[faq.color];
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`border bg-[#070b18] transition duration-300 ${isOpen ? (faq.color === "red" ? "border-red-500/40" : faq.color === "green" ? "border-green-500/40" : faq.color === "yellow" ? "border-yellow-400/40" : "border-blue-500/40") : "border-transparent"}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-5 p-5 text-left outline-none ${s.active}`}
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

      {/* LATEST BLOG */}
      <section
        id="latest-blog"
        className="bg-[#050816] px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              Latest from the Blog
            </span>

            <h2 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              YouTube Growth
              <span className="block text-red-500">& Creator Guides</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
              Practical SEO tips, creator strategies, AI workflows and YouTube
              growth guides from TubeKit.
            </p>
          </div>

          <div className="mt-10">
            <BlogGrid posts={latestBlogPosts} />
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/10"
            >
              View All Blog Posts
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#030712] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl bg-[#070b18] px-6 py-12 text-center sm:px-10 sm:py-16">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
            <Play className="h-5 w-5" />
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to create your
            <span className="block text-red-500">next video?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
            Start with an idea, choose a tool and build your next piece of
            YouTube content with TubeKit.
          </p>

          <a
            href="#tools"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/10"
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