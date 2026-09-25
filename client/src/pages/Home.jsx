import { useState } from "react";
import {
  ArrowRight,
  BarChart3,
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
  Tags,
  Image,
  Calculator,
  CircleDollarSign,
  KeyRound,
  Video,
  MessageCircle,
  ShieldCheck,
  ScanSearch,
  FileSearch,
} from "lucide-react";

import SEO from "@/components/common/SEO";
import Hero from "@/components/home/hero/Hero";
import BlogGrid from "@/components/blog/BlogGrid";
import blogPosts from "@/data/blogPosts";

// Tools

const toolComponents = {};


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
  { name: "YouTube Tag Extractor", path: "/tools/tag-extractor", color: "red", icon: Tags, description: "Extract available tags from a YouTube video and copy individual or all returned tags." },
  { name: "YouTube Hashtag Extractor", path: "/tools/hashtag-extractor", color: "green", icon: Hash, description: "Extract useful hashtags from a video's available title and description content." },
  { name: "YouTube Description Extractor", path: "/tools/description-extractor", color: "blue", icon: FileSearch, description: "Extract and copy the public description of a YouTube video for quick reference." },
  { name: "YouTube Shadowban Detector", path: "/tools/shadowban-detector", color: "yellow", icon: ShieldCheck, description: "Review public channel signals and checks related to visibility and reach concerns." },
  { name: "YouTube Channel Analyzer", path: "/tools/channel-analyzer", color: "red", icon: BarChart3, description: "Analyze public channel information, statistics, SEO signals, branding and optimization areas." },
  { name: "YouTube SEO Analyzer", path: "/tools/seo-analyzer", color: "blue", icon: ScanSearch, description: "Review available video SEO signals including title, description, tags, keywords and metadata." },
  { name: "YouTube Comment Reader", path: "/tools/comment-reader", color: "green", icon: MessageCircle, description: "Read available video comments and review comment-level engagement signals." },
  { name: "Video ID Extractor", path: "/tools/video-id-extractor", color: "yellow", icon: Video, description: "Extract YouTube video IDs from standard, Shorts, embed, live and shortened URLs." },
  { name: "Thumbnail Downloader", path: "/tools/thumbnail-downloader", color: "blue", icon: Image, description: "Get available YouTube thumbnail image URLs from a video URL for quick access." },
  { name: "Channel ID Finder", path: "/tools/channel-id-finder", color: "red", icon: KeyRound, description: "Find a YouTube channel ID from a supported channel URL, handle or channel input." },
  { name: "Monetization Checker", path: "/tools/monetization-checker", color: "green", icon: CircleDollarSign, description: "Review public channel signals, YPP threshold progress and monetization readiness indicators." },
  { name: "CPM Calculator", path: "/tools/cpm-calculator", color: "yellow", icon: Calculator, description: "Calculate estimated CPM from views and advertising revenue inputs." },
  { name: "RPM Calculator", path: "/tools/rpm-calculator", color: "blue", icon: Calculator, description: "Calculate estimated YouTube RPM and revenue per thousand views." },
  { name: "Money Calculator", path: "/tools/money-calculator", color: "red", icon: CircleDollarSign, description: "Estimate potential YouTube earnings using views, CPM, RPM and creator revenue inputs." },
];

const featuredTools = [
  { id: 1, icon: Sparkles, title: "AI Title Generator", description: "Create engaging YouTube title ideas around your topic, keywords, and audience.", path: "/tools/title-generator", color: "red" },
  { id: 2, icon: FileText, title: "AI Description Generator", description: "Generate structured YouTube descriptions with context, keywords, and clear calls to action.", path: "/tools/description-generator", color: "blue" },
  { id: 3, icon: Tags, title: "AI Tags Generator", description: "Generate relevant YouTube tag ideas based on your video topic and search context.", path: "/tools/tags-generator", color: "green" },
  { id: 4, icon: Hash, title: "AI Hashtag Generator", description: "Create relevant hashtag ideas for YouTube videos, Shorts, and creator campaigns.", path: "/tools/hashtag-generator", color: "red" },
  { id: 5, icon: Search, title: "AI Keyword Generator", description: "Explore keyword ideas around your topic and the search intent of your target viewers.", path: "/tools/keyword-generator", color: "blue" },
  { id: 6, icon: Image, title: "AI Thumbnail Generator", description: "Explore creative thumbnail concepts and visual directions before designing your final thumbnail.", path: "/tools/thumbnail-generator", color: "yellow" },
  { id: 7, icon: Wand2, title: "AI Script Writer", description: "Turn a simple video idea into a structured script with hooks, sections, and a clear flow.", path: "/tools/script-generator", color: "green" },
  { id: 8, icon: Target, title: "AI Hook Generator", description: "Create focused opening hooks that capture attention and give viewers a reason to continue.", path: "/tools/hook-generator", color: "red" },
  { id: 9, icon: FileText, title: "AI Outline Generator", description: "Build organized video outlines with sections and talking points for faster content planning.", path: "/tools/outline-generator", color: "yellow" },
  { id: 10, icon: Play, title: "AI Shorts Generator", description: "Generate short-form video ideas, structures, and content concepts for YouTube Shorts.", path: "/tools/shorts-generator", color: "blue" },
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
  const [openFaq, setOpenFaq] = useState(0);

  const latestBlogPosts = [...blogPosts]
    .filter((post) => post.category !== "Mobile Reviews")
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const handleToolSelect = (tool) => {
    if (!tool?.path) return;
    window.location.href = tool.path;
  };

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

{/* ESSENTIAL TOOLS */}
      <section
        id="tools"
        className="bg-[#030712] px-5 py-28 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-red-500">Essential</span> Creator Tools
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
              Extract, analyze, check, download and calculate with practical YouTube
              utilities built for everyday creator workflows.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {essentialTools.map((tool) => {
              const s = rgby[tool.color];
              const Icon = tool.icon;

              return (
                <a
                  key={tool.path}
                  href={tool.path}
                  className="group block min-h-[240px] rounded-2xl border border-slate-800 bg-[#0b0b0b] p-7 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-red-500/70 hover:bg-[#0e0e0e] hover:shadow-[0_20px_50px_rgba(239,68,68,0.12)] focus:border-red-500 focus:shadow-[0_0_35px_rgba(239,68,68,0.18)] active:border-red-500 active:shadow-[0_0_35px_rgba(239,68,68,0.22)] sm:min-h-[255px] sm:p-8"
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
                    className="mt-5 inline-flex text-xs font-bold uppercase tracking-wider text-blue-400 transition group-hover:text-blue-300"
                  >
                    Open tool
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED AI TOOLS */}
      <section id="ai-tools" className="bg-[#050816] px-5 py-28 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              AI Creator Studio
            </span>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-red-500">Featured</span> AI Tools
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
              Create titles, descriptions, tags, hashtags, keywords, thumbnails,
              scripts, hooks, outlines and Shorts ideas with TubeKit's AI tools.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <a key={tool.path} href={tool.path} className={card}>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-500 transition-all duration-300 group-hover:border-red-500/40 group-hover:bg-red-500/15 group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] sm:h-16 sm:w-16">
                    <Icon size={29} strokeWidth={1.8} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-7 text-xl font-extrabold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-red-500 sm:text-2xl">
                    {tool.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                    {tool.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-red-500 transition-all duration-300 group-hover:gap-3 sm:text-lg">
                    Learn more
                    <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#050816] px-5 py-28 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            About TubeKit
          </span>

          <h2 className="mt-5 text-[clamp(1.7rem,6vw,3.75rem)] font-black leading-tight tracking-tight text-white">
            Understanding <span className="text-red-500">TubeKit</span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
            TubeKit is a creator-focused toolkit for planning, creating and
            optimizing YouTube content. It brings common creator tasks into one
            simple workspace so you can spend less time switching between tools
            and more time improving your content.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-[#050816] px-5 py-28 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-5 text-[clamp(1.45rem,5vw,3rem)] font-black leading-tight text-white">
              Key Features <span className="text-red-500">of TubeKit</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  className={`group rounded-2xl border border-red-500/20 bg-red-500/10 p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#0b0f18] ${s.active} ${s.glow}`}
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
      <section className="bg-[#030712] px-5 py-28 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-5 text-[clamp(1.4rem,5vw,3rem)] font-black leading-tight text-white">
              Benefits of Using <span className="text-red-500">TubeKit</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
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
                  className={`group flex gap-5 rounded-2xl border border-red-500/20 bg-red-500/10 p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#0b0f18] ${s.active} ${s.glow}`}
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
      <section className="bg-[#050816] px-5 py-28 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-5 text-[clamp(1.55rem,5vw,3rem)] font-black leading-tight text-white">
              Common <span className="text-red-500">Use Cases</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Useful workflows for creators, marketers, SEO-focused teams and
              anyone working with YouTube content.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
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
                  className={`rounded-2xl border border-red-500/20 bg-red-500/10 p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#0b0f18] ${s.active} ${s.glow}`}
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
        className="bg-[#030712] px-5 py-28 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              How It Works
            </span>

            <h2 className="mt-5 text-[clamp(1.8rem,6vw,3.75rem)] font-black leading-tight text-white">
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
                  className={`rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-center transition duration-300 hover:-translate-y-1 hover:bg-[#0b0f18] ${s.active} ${s.glow}`}
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
      <section className="bg-[#050816] px-5 py-28 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Best Practices
          </span>

          <h2 className="mt-5 text-[clamp(1.4rem,5vw,3rem)] font-black leading-tight text-white">
            Better YouTube <span className="text-red-500">Content Practices</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
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
                className="flex gap-3 rounded-xl bg-red-500/10 p-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                <span className="text-sm leading-6 text-slate-500">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="bg-[#030712] px-5 py-28 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              FAQ
            </span>

            <h2 className="mt-5 text-[clamp(1.8rem,6vw,3.75rem)] font-black leading-tight text-white">
              Common <span className="text-red-500">Questions</span>
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const s = rgby[faq.color];
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border bg-red-500/10 transition duration-300 ${
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
        className="bg-[#050816] px-5 py-28 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Blog
            </span>

            <h2 className="mt-5 text-[clamp(1.65rem,6vw,3.75rem)] font-black leading-tight text-white">
              Latest from <span className="text-red-500">the Blog</span>
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
              Explore practical YouTube SEO strategies, creator tips, AI
              tools, content ideas and growth guides from TubeKit.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-6xl">
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
      <section className="bg-[#030712] px-5 py-28 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-red-500/10 bg-red-500/10 px-6 py-16 text-center sm:px-10 sm:py-20">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400">
            <Play className="h-5 w-5" />
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Create better
            <span className="block text-red-500">YouTube content</span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
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