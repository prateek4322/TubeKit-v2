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
import BlogGrid from "@/components/blog/BlogGrid";
import blogPosts from "@/data/blogPosts";

// AI Tools
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

// Essential URL Tools
import TagExtractor from "@/pages/tools/TagExtractor";
import HashtagExtractor from "@/pages/tools/HashtagExtractor";
import DescriptionExtractor from "@/pages/tools/DescriptionExtractor";
import ShadowbanDetector from "@/pages/tools/ShadowbanDetector";
import ChannelAnalyzer from "@/pages/tools/ChannelAnalyzer";
import SEOAnalyzer from "@/pages/tools/SEOAnalyzer";
import CommentReader from "@/pages/tools/CommentReader";
import VideoIdExtractor from "@/pages/tools/VideoIdExtractor";
import ThumbnailDownloader from "@/pages/tools/ThumbnailDownloader";
import ChannelIdFinder from "@/pages/tools/ChannelIdFinder";
import MonetizationChecker from "@/pages/tools/MonetizationChecker";

// Calculator Tools
import CPMCalculator from "@/pages/tools/CPMCalculator";
import RPMCalculator from "@/pages/tools/RPMCalculator";
import MoneyCalculator from "@/pages/tools/MoneyCalculator";


// Tools

const toolComponents = {
  // AI tools
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

  // Essential URL tools
  "/tools/tag-extractor": TagExtractor,
  "/tools/hashtag-extractor": HashtagExtractor,
  "/tools/description-extractor": DescriptionExtractor,
  "/tools/shadowban-detector": ShadowbanDetector,
  "/tools/channel-analyzer": ChannelAnalyzer,
  "/tools/seo-analyzer": SEOAnalyzer,
  "/tools/comment-reader": CommentReader,
  "/tools/video-id-extractor": VideoIdExtractor,
  "/tools/thumbnail-downloader": ThumbnailDownloader,
  "/tools/channel-id-finder": ChannelIdFinder,
  "/tools/monetization-checker": MonetizationChecker,

  // Calculators
  "/tools/cpm-calculator": CPMCalculator,
  "/tools/rpm-calculator": RPMCalculator,
  "/tools/money-calculator": MoneyCalculator,
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
    name: "YouTube Tag Extractor",
    path: "/tools/tag-extractor",
    color: "red",
    icon: Hash,
    description: "Extract available tags from a YouTube video and copy individual or all returned tags.",
  },
  {
    name: "YouTube Hashtag Extractor",
    path: "/tools/hashtag-extractor",
    color: "green",
    icon: Hash,
    description: "Extract useful hashtags from a video's available title and description content.",
  },
  {
    name: "YouTube Description Extractor",
    path: "/tools/description-extractor",
    color: "blue",
    icon: FileText,
    description: "Extract and copy the public description of a YouTube video for quick reference.",
  },
  {
    name: "YouTube Shadowban Detector",
    path: "/tools/shadowban-detector",
    color: "yellow",
    icon: Check,
    description: "Review public channel signals and checks related to visibility and reach concerns.",
  },
  {
    name: "YouTube Channel Analyzer",
    path: "/tools/channel-analyzer",
    color: "red",
    icon: BarChart3,
    description: "Analyze public channel information, statistics, SEO signals, branding and optimization areas.",
  },
  {
    name: "YouTube SEO Analyzer",
    path: "/tools/seo-analyzer",
    color: "blue",
    icon: Search,
    description: "Review available video SEO signals including title, description, tags, keywords and metadata.",
  },
  {
    name: "YouTube Comment Reader",
    path: "/tools/comment-reader",
    color: "green",
    icon: BookOpen,
    description: "Read available video comments and review comment-level engagement signals.",
  },
  {
    name: "Video ID Extractor",
    path: "/tools/video-id-extractor",
    color: "yellow",
    icon: Play,
    description: "Extract YouTube video IDs from standard, Shorts, embed, live and shortened URLs.",
  },
  {
    name: "Thumbnail Downloader",
    path: "/tools/thumbnail-downloader",
    color: "blue",
    icon: Lightbulb,
    description: "Get available YouTube thumbnail image URLs from a video URL for quick access.",
  },
  {
    name: "Channel ID Finder",
    path: "/tools/channel-id-finder",
    color: "red",
    icon: Target,
    description: "Find a YouTube channel ID from a supported channel URL, handle or channel input.",
  },
  {
    name: "Monetization Checker",
    path: "/tools/monetization-checker",
    color: "green",
    icon: BarChart3,
    description: "Review public channel signals, YPP threshold progress and monetization readiness indicators.",
  },
  {
    name: "CPM Calculator",
    path: "/tools/cpm-calculator",
    color: "yellow",
    icon: BarChart3,
    description: "Calculate estimated CPM from views and advertising revenue inputs.",
  },
  {
    name: "RPM Calculator",
    path: "/tools/rpm-calculator",
    color: "blue",
    icon: BarChart3,
    description: "Calculate estimated YouTube RPM and revenue per thousand views.",
  },
  {
    name: "Money Calculator",
    path: "/tools/money-calculator",
    color: "red",
    icon: BarChart3,
    description: "Estimate potential YouTube earnings using views, CPM, RPM and creator revenue inputs.",
  },
];

const featuredAITools = [
  {
    name: "AI Title Generator",
    path: "/tools/title-generator",
    color: "red",
    icon: Wand2,
    description: "Create engaging YouTube title ideas around your topic, keywords and audience.",
  },
  {
    name: "AI Description Generator",
    path: "/tools/description-generator",
    color: "green",
    icon: FileText,
    description: "Generate structured YouTube descriptions with context, keywords and clear calls to action.",
  },
  {
    name: "AI Tags Generator",
    path: "/tools/tags-generator",
    color: "yellow",
    icon: Hash,
    description: "Generate relevant YouTube tag ideas based on your video topic and search context.",
  },
  {
    name: "AI Hashtag Generator",
    path: "/tools/hashtag-generator",
    color: "blue",
    icon: Hash,
    description: "Create relevant hashtag ideas for YouTube videos, Shorts and creator campaigns.",
  },
  {
    name: "AI Keyword Generator",
    path: "/tools/keyword-generator",
    color: "red",
    icon: Search,
    description: "Explore keyword ideas around your topic and the search intent of your target viewers.",
  },
  {
    name: "AI Thumbnail Generator",
    path: "/tools/thumbnail-generator",
    color: "green",
    icon: Lightbulb,
    description: "Explore creative thumbnail concepts and visual directions before designing your final thumbnail.",
  },
  {
    name: "AI Script Writer",
    path: "/tools/script-generator",
    color: "yellow",
    icon: FileText,
    description: "Turn a simple video idea into a structured script with hooks, sections and a clear flow.",
  },
  {
    name: "AI Hook Generator",
    path: "/tools/hook-generator",
    color: "blue",
    icon: Target,
    description: "Create focused opening hooks that capture attention and give viewers a reason to continue.",
  },
  {
    name: "AI Outline Generator",
    path: "/tools/outline-generator",
    color: "red",
    icon: BookOpen,
    description: "Build organized video outlines with sections and talking points for faster content planning.",
  },
  {
    name: "AI Shorts Generator",
    path: "/tools/shorts-generator",
    color: "green",
    icon: Play,
    description: "Generate short-form video ideas, structures and content concepts for YouTube Shorts.",
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
    const value = String(query || "").trim();

    if (!tool?.path || !toolComponents[tool.path] || !value) {
      return;
    }

    setActiveTool(tool);
    setToolQuery(value);

    requestAnimationFrame(() => {
      setTimeout(() => {
        toolSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);
    });
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
          <div className="mx-auto w-full max-w-6xl">
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

            <div className="rounded-2xl bg-[#070b18]/80 p-1 sm:p-2">
              <ActiveTool key={`${activeTool.path}-${toolQuery}`} query={toolQuery} />
            </div>
          </div>
        </section>
      )}

{/* ESSENTIAL TOOLS */}
      <section
        id="tools"
        className="w-full overflow-hidden bg-[#030712] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-red-500">Essential</span> Creator Tools
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
              Practical YouTube utilities, extractors, analyzers and calculators
              organized in one creator-focused workspace.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {essentialTools.map((tool) => {
              const s = rgby[tool.color];
              const Icon = tool.icon;

              return (
                <a
                  key={tool.path}
                  href={tool.path}
                  className="group block min-h-[240px] w-full rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:bg-[#0e0e0e] hover:shadow-[0_20px_50px_rgba(239,68,68,0.10)] focus-visible:border-red-500/70 focus-visible:shadow-[0_0_35px_rgba(239,68,68,0.14)] active:border-red-500/70 active:shadow-[0_0_35px_rgba(239,68,68,0.16)] sm:min-h-[255px] sm:p-8"
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

                  <h3 className="mt-7 text-xl font-extrabold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-red-500 sm:text-2xl">
                    {tool.name}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                    {tool.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-red-500 transition-all duration-300 group-hover:gap-3 sm:text-lg">
                    Open tool
                    <ArrowRight
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED AI TOOLS */}
      <section
        id="ai-tools"
        className="w-full overflow-hidden bg-[#050816] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-red-500">Featured</span> AI Tools
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8 lg:text-lg">
              AI-powered tools for generating titles, descriptions, tags, scripts,
              hooks, keywords, hashtags, outlines and thumbnail ideas.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredAITools.map((tool) => {
              const s = rgby[tool.color];
              const Icon = tool.icon;

              return (
                <a
                  key={tool.path}
                  href={tool.path}
                  className="group block min-h-[240px] w-full rounded-2xl border border-white/10 bg-[#0b0b0b] p-7 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-red-500/60 hover:bg-[#0e0e0e] hover:shadow-[0_20px_50px_rgba(239,68,68,0.10)] focus-visible:border-red-500/70 focus-visible:shadow-[0_0_35px_rgba(239,68,68,0.14)] active:border-red-500/70 active:shadow-[0_0_35px_rgba(239,68,68,0.16)] sm:min-h-[255px] sm:p-8"
                >
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${s.icon} transition-all duration-300 group-hover:scale-105 sm:h-16 sm:w-16`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-xl font-extrabold leading-tight tracking-tight text-white transition-colors duration-300 group-hover:text-red-500 sm:text-2xl">
                    {tool.name}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                    {tool.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-red-500 transition-all duration-300 group-hover:gap-3 sm:text-lg">
                    Learn more
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* ABOUT */}
      <section className="w-full overflow-hidden bg-[#050816] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            About TubeKit
          </span>

          <h2 className="mt-5 text-[clamp(1.7rem,6vw,3.75rem)] font-black leading-tight tracking-tight text-white">
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
      <section className="bg-[#050816] px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-5 text-[clamp(1.45rem,5vw,3rem)] font-black leading-tight text-white">
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
                  className={`group rounded-2xl border border-white/10 bg-[#0b0b0d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-[#101014] ${s.active} ${s.glow}`}
                >
                  <div className={`mb-5 h-1.5 w-10 rounded-full ${s.icon.split(" ")[0]}`} />
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.icon} transition-transform duration-300 group-hover:scale-105`}>
                    <Target className="h-5 w-5" />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-extrabold leading-tight text-white sm:text-xl">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

{/* BENEFITS */}
      <section className="w-full overflow-hidden bg-[#030712] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mt-5 text-[clamp(1.4rem,5vw,3rem)] font-black leading-tight text-white">
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
                  className={`group min-h-[180px] rounded-2xl border border-white/10 bg-[#0b0b0d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-[#101014] ${s.active} ${s.glow} sm:min-h-[190px] sm:p-6`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.icon} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="mt-5">
                    <h3 className="text-lg font-extrabold leading-tight text-white sm:text-xl">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-[15px] sm:leading-7">
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

{/* COMMON USE CASES */}
<section className="w-full overflow-hidden bg-[#050816] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
  <div className="mx-auto w-full max-w-6xl">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mt-5 text-[clamp(1.55rem,5vw,3rem)] font-black leading-tight text-white">
        Common <span className="text-red-500">Use Cases</span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
        Practical ways creators and teams can use TubeKit for everyday
        YouTube workflows.
      </p>
    </div>

    <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
      {[
        {
          icon: "🎬",
          title: "Content Creators",
          text: "Plan videos, improve ideas and build stronger content workflows.",
          color: "red",
        },
        {
          icon: "📣",
          title: "Digital Marketers",
          text: "Research topics, organize ideas and support YouTube campaigns.",
          color: "green",
        },
        {
          icon: "🔎",
          title: "SEO Specialists",
          text: "Optimize keywords, titles, descriptions and YouTube metadata.",
          color: "yellow",
        },
        {
          icon: "⚙️",
          title: "Developers & Researchers",
          text: "Use YouTube utilities, analyzers and data-focused workflows.",
          color: "blue",
        },
      ].map((item) => {
        const s = rgby[item.color];

        return (
          <div
            key={item.title}
            tabIndex={0}
            className={`group min-h-[145px] rounded-2xl border border-white/10 bg-[#0b0b0d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-[#101014] ${s.active} ${s.glow} sm:min-h-[155px] sm:p-6`}
          >
            <h3 className="flex items-center gap-3 text-lg font-bold text-white sm:text-xl">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </span>
              <span>{item.title}</span>
            </h3>

            <p className="mt-3 pl-[52px] text-sm leading-6 text-slate-500 sm:text-[15px]">
              {item.text}
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
  className="w-full overflow-hidden bg-[#030712] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
>
  <div className="mx-auto w-full max-w-6xl">
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
            className={`group min-h-[165px] rounded-2xl border border-white/10 bg-[#0b0b0d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-[#101014] ${s.active} ${s.glow} sm:min-h-[175px] sm:p-6`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${s.icon} text-sm font-black ${s.text} transition-transform duration-300 group-hover:scale-105`}
              >
                {step.number}
              </div>

              <h3 className="text-base font-extrabold leading-tight text-white sm:text-lg">
                {step.title}
              </h3>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-[15px]">
              {step.text}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* BEST PRACTICES */}
<section className="w-full overflow-hidden bg-[#050816] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
  <div className="mx-auto max-w-4xl text-center">
    <span className="inline-flex rounded-full bg-red-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
      Best Practices
    </span>

    <h2 className="mt-5 text-[clamp(1.4rem,5vw,3rem)] font-black leading-tight text-white">
      Better YouTube <span className="text-red-500">Content Practices</span>
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
      Simple practices to create clearer, more useful and audience-focused
      YouTube content.
    </p>

    <div className="mx-auto mt-10 grid max-w-5xl gap-4 text-left sm:grid-cols-2">
      {[
        {
          icon: "✓",
          title: "Clear Titles",
          text: "Keep titles accurate and easy to understand.",
        },
        {
          icon: "⌕",
          title: "Relevant Keywords",
          text: "Match keywords with your actual video topic.",
        },
        {
          icon: "▣",
          title: "Strong Thumbnails",
          text: "Communicate one clear idea at a glance.",
        },
        {
          icon: "↗",
          title: "Review Analytics",
          text: "Track retention and audience response regularly.",
        },
      ].map((item) => (
        <div
          key={item.title}
          tabIndex={0}
          className="group min-h-[118px] rounded-2xl border border-white/10 bg-[#0b0b0d] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:bg-[#101014] focus:border-red-500/50 sm:p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-lg font-bold text-red-400 transition-transform duration-300 group-hover:scale-105">
              {item.icon}
            </div>

            <div className="min-w-0">
              <h3 className="text-base font-bold text-white sm:text-lg">
                {item.title}
              </h3>

              <p className="mt-1.5 text-sm leading-6 text-slate-500">
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* FAQ */}
      <section className="w-full overflow-hidden bg-[#030712] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              FAQ
            </span>

            <h2 className="mt-5 text-[clamp(1.8rem,6vw,3.75rem)] font-black leading-tight text-white">
              Common <span className="text-red-500">Questions</span>
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
              Find clear answers about TubeKit, its creator tools, YouTube SEO support and how to use generated content.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const s = rgby[faq.color];
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`group rounded-2xl border bg-[#0b0b0d] transition-all duration-300 hover:border-red-500/40 ${
                    isOpen
                      ? faq.color === "red"
                        ? "border-red-500/40"
                        : faq.color === "green"
                          ? "border-green-500/40"
                          : faq.color === "yellow"
                            ? "border-yellow-400/40"
                            : "border-blue-500/40"
                      : "border-white/10"
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
        className="w-full overflow-hidden bg-[#050816] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto w-full max-w-7xl">
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

          <div className="mx-auto mt-12 max-w-6xl rounded-3xl border border-white/10 bg-[#0b0b0d] p-3 sm:p-5">
            <BlogGrid posts={latestBlogPosts} />
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-red-400 hover:shadow-lg hover:shadow-red-500/20"
            >
                View All Blog Posts
              <ArrowRight className="h-10 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full overflow-hidden bg-[#030712] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-[#0b0b0d] px-6 py-12 text-center transition-all duration-300 hover:border-red-500/40 sm:px-10 sm:py-16">
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
            <ArrowRight className="h-10 w-5" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;