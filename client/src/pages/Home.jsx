import { useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FileText,
  Hash,
  Image as ImageIcon,
  Lightbulb,
  Link2,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Tags,
  Target,
  TrendingUp,
  Users,
  Video,
  WandSparkles,
  Zap,
} from "lucide-react";

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

const essentialTools = [
  {
    name: "AI Title Generator",
    description: "Generate relevant YouTube title ideas from your video topic.",
    path: "/tools/title-generator",
    color: "red",
    icon: Sparkles,
  },
  {
    name: "AI Description Generator",
    description: "Create structured descriptions for your YouTube videos.",
    path: "/tools/description-generator",
    color: "green",
    icon: FileText,
  },
  {
    name: "YouTube Tags Generator",
    description: "Generate relevant tag ideas for your video metadata.",
    path: "/tools/tags-generator",
    color: "yellow",
    icon: Tags,
  },
  {
    name: "YouTube Keyword Generator",
    description: "Discover keyword ideas around your video topic.",
    path: "/tools/keyword-generator",
    color: "blue",
    icon: Search,
  },
  {
    name: "AI Script Generator",
    description: "Create a structured starting point for your next script.",
    path: "/tools/script-generator",
    color: "red",
    icon: FileText,
  },
  {
    name: "YouTube Thumbnail Generator",
    description: "Explore thumbnail concepts and creative directions.",
    path: "/tools/thumbnail-generator",
    color: "green",
    icon: ImageIcon,
  },
  {
    name: "Monetization Checker",
    description: "Check publicly available channel information related to monetization.",
    path: "/tools/monetization-checker",
    color: "yellow",
    icon: ShieldCheck,
  },
  {
    name: "YouTube Money Calculator",
    description: "Estimate potential earnings using views and revenue assumptions.",
    path: "/tools/money-calculator",
    color: "blue",
    icon: Calculator,
  },
];

const moreTools = [
  ["Hashtag Generator", "/tools/hashtag-generator", Hash, "red"],
  ["Hook Generator", "/tools/hook-generator", Lightbulb, "yellow"],
  ["Outline Generator", "/tools/outline-generator", FileText, "green"],
  ["Shorts Generator", "/tools/shorts-generator", Video, "blue"],
  ["CPM Calculator", "/tools/cpm-calculator", Calculator, "yellow"],
  ["RPM Calculator", "/tools/rpm-calculator", BarChart3, "green"],
  ["Channel ID Finder", "/tools/channel-id-finder", Users, "blue"],
  ["Video ID Extractor", "/tools/video-id-extractor", Link2, "red"],
  ["Thumbnail Downloader", "/tools/thumbnail-downloader", ImageIcon, "yellow"],
];

const colorMap = {
  red: {
    icon: "text-red-400 bg-red-500/10 border-red-500/20",
    glow: "group-hover:shadow-red-500/10",
    text: "text-red-400",
  },
  green: {
    icon: "text-green-400 bg-green-500/10 border-green-500/20",
    glow: "group-hover:shadow-green-500/10",
    text: "text-green-400",
  },
  yellow: {
    icon: "text-yellow-300 bg-yellow-500/10 border-yellow-500/20",
    glow: "group-hover:shadow-yellow-500/10",
    text: "text-yellow-300",
  },
  blue: {
    icon: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    glow: "group-hover:shadow-blue-500/10",
    text: "text-blue-400",
  },
};

const faqItems = [
  {
    q: "What is TubeKit?",
    a: "TubeKit is an all-in-one collection of YouTube creator tools for video planning, AI-assisted content creation, SEO, thumbnails, utilities and monetization calculations.",
  },
  {
    q: "Are TubeKit tools free?",
    a: "TubeKit provides a growing collection of free YouTube tools. Some tools may have their own usage limits or requirements.",
  },
  {
    q: "Can TubeKit guarantee more views?",
    a: "No. YouTube views depend on many factors and no tool can guarantee a particular number of views. TubeKit provides suggestions and utilities that can support your workflow.",
  },
  {
    q: "Can I publish AI-generated content directly?",
    a: "AI-generated results should be reviewed, edited and checked for accuracy before publication. The final content should accurately represent your video and provide value to your audience.",
  },
  {
    q: "Are the money calculator results exact?",
    a: "No. Revenue calculators provide estimates based on the values entered. Actual revenue can vary due to audience, geography, advertising demand, content type and other factors.",
  },
  {
    q: "Can TubeKit help with YouTube SEO?",
    a: "Yes. TubeKit includes tools for titles, descriptions, keywords, tags and hashtags that can assist with content planning and metadata optimization.",
  },
];

function ToolIcon({ Icon, color = "blue" }) {
  const styles = colorMap[color] || colorMap.blue;

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${styles.icon}`}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}

function Home() {
  const [activeTool, setActiveTool] = useState(null);
  const [toolQuery, setToolQuery] = useState("");
  const [faqOpen, setFaqOpen] = useState(null);

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
    <div className="min-h-screen overflow-hidden bg-[#030712] text-white">

      <SEO
        title="TubeKit | Free YouTube Tools for Creators"
        description="TubeKit provides free AI-powered YouTube tools for creators, including title, description, script, keyword, tags, hashtag, thumbnail and monetization tools."
        keywords="TubeKit, YouTube tools, free YouTube tools, YouTube SEO tools, AI YouTube tools, YouTube title generator, YouTube description generator, YouTube keyword generator, YouTube tags generator, YouTube script generator, YouTube thumbnail generator"
        canonical="/"
        organization={true}
      />

      {/* =====================================================
          HERO - KEEPING YOUR EXISTING DYNAMIC HERO
      ====================================================== */}

      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] overflow-hidden">
          <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-red-600/10 blur-[110px]" />
          <div className="absolute left-1/3 top-16 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />
          <div className="absolute right-1/4 top-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-[110px]" />
          <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
        </div>

        <Hero onToolSelect={handleToolSelect} />
      </div>

      {/* =====================================================
          ACTIVE TOOL
      ====================================================== */}

      {ActiveTool && (
        <section
          ref={toolSectionRef}
          aria-label={`${activeTool.name} tool`}
          className="relative border-y border-white/10 bg-[#050816] px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <div className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                <WandSparkles className="h-4 w-4" />
                TubeKit Creator Tool
              </div>

              <h2 className="text-3xl font-black sm:text-4xl">
                {activeTool.name}
              </h2>

              {toolQuery && (
                <p className="mt-3 text-slate-400">
                  Topic:{" "}
                  <span className="font-medium text-white">
                    {toolQuery}
                  </span>
                </p>
              )}
            </div>

            <ActiveTool query={toolQuery} />
          </div>
        </section>
      )}

      {/* =====================================================
          TRUST BAR
      ====================================================== */}

      <section className="border-y border-white/10 bg-[#050816] px-4 py-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            [CheckCircle2, "Free Tools", "Creator focused"],
            [Zap, "Fast Workflow", "Simple to use"],
            [ShieldCheck, "Safe & Simple", "Clear results"],
            [Users, "For Creators", "Beginner to advanced"],
          ].map(([Icon, title, sub], i) => (
            <div
              key={title}
              className={`flex items-center justify-center gap-3 ${
                i !== 0 ? "border-l border-white/10" : ""
              }`}
            >
              <Icon
                className={`h-5 w-5 ${
                  ["text-red-400", "text-green-400", "text-yellow-300", "text-blue-400"][i]
                }`}
              />

              <div>
                <p className="text-sm font-bold text-white">{title}</p>
                <p className="text-xs text-slate-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SEARCH
      ====================================================== */}

      <SearchSection />

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#080d1d] md:grid-cols-4">
          {[
            ["15+", "YouTube Tools", "red", Sparkles],
            ["100%", "Free to Explore", "green", CheckCircle2],
            ["AI", "Creator Workflow", "yellow", WandSparkles],
            ["24/7", "Available Online", "blue", Zap],
          ].map(([value, label, color, Icon], index) => (
            <div
              key={label}
              className={`relative flex items-center gap-4 px-6 py-6 ${
                index !== 0 ? "border-t border-white/10 md:border-l md:border-t-0" : ""
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  color === "red"
                    ? "bg-red-500/10 text-red-400"
                    : color === "green"
                    ? "bg-green-500/10 text-green-400"
                    : color === "yellow"
                    ? "bg-yellow-500/10 text-yellow-300"
                    : "bg-blue-500/10 text-blue-400"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <div className="text-2xl font-black">{value}</div>
                <div className="text-sm text-slate-400">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          ESSENTIAL TOOLS
      ====================================================== */}

      <section
        id="tools"
        className="relative px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-red-500/5 blur-[100px]" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-blue-500/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                <Sparkles className="h-4 w-4" />
                YouTube Creator Toolkit
              </div>

              <h2 className="text-3xl font-black sm:text-4xl">
                Essential Tools for{" "}
                <span className="bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
                  YouTube Creators
                </span>
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                Powerful AI and creator utilities for content creation,
                YouTube SEO, video planning and channel workflows.
              </p>
            </div>

            <a
              href="/tools"
              className="group inline-flex w-fit items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/5 px-5 py-3 text-sm font-bold text-blue-400 transition hover:border-blue-400 hover:bg-blue-500/10"
            >
              View All Tools
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {essentialTools.map((tool) => {
              const Icon = tool.icon;
              const styles = colorMap[tool.color];

              return (
                <a
                  key={tool.path}
                  href={tool.path}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d1d] p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl ${styles.glow}`}
                >
                  <div
                    className={`absolute -right-12 -top-12 h-28 w-28 rounded-full blur-3xl ${
                      tool.color === "red"
                        ? "bg-red-500/10"
                        : tool.color === "green"
                        ? "bg-green-500/10"
                        : tool.color === "yellow"
                        ? "bg-yellow-400/10"
                        : "bg-blue-500/10"
                    }`}
                  />

                  <div className="relative">
                    <ToolIcon Icon={Icon} color={tool.color} />

                    <h3 className="mt-5 text-lg font-bold text-white">
                      {tool.name}
                    </h3>

                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-400">
                      {tool.description}
                    </p>

                    <span
                      className={`mt-5 inline-flex items-center gap-1 text-sm font-bold ${styles.text}`}
                    >
                      Use Tool
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXISTING FEATURED TOOLS
      ====================================================== */}

      <FeaturedTools />

      {/* =====================================================
          MORE TOOLS
      ====================================================== */}

      <section className="border-t border-white/10 bg-[#050816] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
                Explore More
              </div>

              <h2 className="text-3xl font-black sm:text-4xl">
                More{" "}
                <span className="text-yellow-300">YouTube</span>{" "}
                Tools
              </h2>

              <p className="mt-4 text-slate-400">
                More utilities for your complete YouTube workflow.
              </p>
            </div>

            <a
              href="/tools"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-blue-400/50"
            >
              Browse All
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {moreTools.map(([name, path, Icon, color]) => {
              const styles = colorMap[color];

              return (
                <a
                  key={path}
                  href={path}
                  className="group rounded-2xl border border-white/10 bg-[#080d1d] p-5 transition hover:-translate-y-1 hover:border-white/20"
                >
                  <ToolIcon Icon={Icon} color={color} />

                  <h3 className="mt-4 text-sm font-bold text-white">
                    {name}
                  </h3>

                  <span
                    className={`mt-3 inline-flex text-xs font-bold ${styles.text}`}
                  >
                    Open Tool â†’
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT IS TUBEKIT
      ====================================================== */}

      <section
        id="about"
        className="border-t border-white/10 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          <article>
            <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-400">
              Understanding TubeKit
            </div>

            <h2 className="text-3xl font-black sm:text-5xl">
              What is{" "}
              <span className="bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
                TubeKit?
              </span>
            </h2>

            <div className="mt-7 space-y-5 leading-8 text-slate-300">
              <p>
                TubeKit is an all-in-one toolkit designed for YouTube
                creators, video makers and content teams. It brings
                AI-powered creation tools, YouTube SEO utilities,
                thumbnail tools and monetization calculators together
                in one platform.
              </p>

              <p>
                Creating a video involves much more than recording.
                Creators may need to research topics, plan keywords,
                write titles and descriptions, structure a script,
                develop a hook, prepare a thumbnail and review
                monetization estimates. TubeKit provides dedicated tools
                for these common tasks.
              </p>

              <p>
                TubeKit is designed to assist creators rather than
                replace their judgment. AI-generated suggestions should
                be reviewed and adapted to the actual video, audience
                and creator's style before publication.
              </p>
            </div>

            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 px-6 py-3 font-bold text-slate-950"
            >
              Learn More About TubeKit
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <div className="grid grid-cols-2 gap-4">
            {[
              [Target, "Plan Better", "Find topics and keywords.", "red"],
              [WandSparkles, "Create Faster", "Generate content ideas.", "green"],
              [TrendingUp, "Optimize Easier", "Improve metadata planning.", "yellow"],
              [Users, "Grow Your Channel", "Build a consistent workflow.", "blue"],
            ].map(([Icon, title, text, color]) => {
              const styles = colorMap[color];

              return (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-[#080d1d] p-6"
                >
                  <ToolIcon Icon={Icon} color={color} />

                  <h3 className="mt-5 font-bold">{title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
{/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="border-y border-white/10 bg-[#080d1d] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Simple Workflow
            </div>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              How TubeKit{" "}
              <span className="text-blue-400">Works?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              Get useful results in a few simple steps.
            </p>
          </div>

          <div className="relative mt-16 grid gap-8 md:grid-cols-4">
            {[
              ["1", "Choose a Tool", "Select a tool based on your current task.", "red"],
              ["2", "Enter Your Topic", "Provide a topic, keyword or YouTube URL.", "yellow"],
              ["3", "Generate or Analyze", "Get AI suggestions or calculated results.", "green"],
              ["4", "Use & Improve", "Review the result and adapt it to your content.", "blue"],
            ].map(([number, title, text, color], index) => {
              const styles = colorMap[color];

              return (
                <div key={number} className="relative text-center">
                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 text-xl font-black ${styles.icon}`}
                  >
                    {number}
                  </div>

                  {index < 3 && (
                    <div className="absolute left-[calc(50%+48px)] right-[calc(-50%+48px)] top-8 hidden h-px bg-gradient-to-r from-white/20 to-transparent md:block" />
                  )}

                  <h3 className="mt-6 font-bold">{title}</h3>

                  <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-slate-400">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SEO / CONTENT
      ====================================================== */}

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl">

          <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-green-400">
            YouTube SEO & Content Creation
          </div>

          <h2 className="text-3xl font-black sm:text-5xl">
            YouTube Tools for{" "}
            <span className="text-green-400">Better Content Planning</span>
          </h2>

          <p className="mt-7 leading-8 text-slate-300">
            YouTube content creation involves research, planning,
            production, optimization and analysis. TubeKit provides
            tools that can support several stages of this workflow,
            from developing a video title to creating a description,
            exploring keywords and preparing a script.
          </p>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="text-2xl font-bold">
                YouTube Titles and Descriptions
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                A useful title should accurately communicate the topic
                of the video. A description can provide additional
                context, resources and information for viewers.
                TubeKit's AI title and description tools can provide
                starting drafts that creators can review and personalize.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Keywords, Tags and Hashtags
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Keyword research can help creators understand the
                terminology associated with a topic. TubeKit provides
                keyword, tag and hashtag generation tools for the
                planning stage. Generated suggestions should be checked
                for relevance before being used.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Scripts, Hooks and Shorts
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                A clear video structure can make the production process
                easier. Script, hook, outline and Shorts tools can help
                creators explore different content ideas before
                recording and publishing their final videos.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                YouTube Monetization Estimates
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                YouTube revenue can vary according to views, audience
                location, content category, advertising demand,
                monetization status and other factors. TubeKit's CPM,
                RPM and money calculators provide estimates for
                informational and planning purposes. Actual earnings
                can differ from any calculated result.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section
        id="faq"
        className="border-t border-white/10 bg-[#080d1d] px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
              FAQ
            </div>

            <h2 className="mt-3 text-3xl font-black sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqItems.map((item, index) => {
              const open = faqOpen === index;

              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#050816]"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpen(open ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="font-bold">{item.q}</span>

                    <ChevronRight
                      className={`h-5 w-5 shrink-0 text-blue-400 transition ${
                        open ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {open && (
                    <div className="border-t border-white/10 px-6 pb-6 pt-5 leading-7 text-slate-400">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA - RGYB
      ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 px-4 py-28 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 bottom-0 h-52 w-1/2 rounded-full bg-red-500/20 blur-[90px]" />
          <div className="absolute left-1/4 bottom-0 h-52 w-1/2 rounded-full bg-yellow-400/15 blur-[90px]" />
          <div className="absolute right-0 bottom-0 h-52 w-1/2 rounded-full bg-blue-500/20 blur-[90px]" />
          <div className="absolute left-1/3 bottom-0 h-52 w-1/2 rounded-full bg-green-500/15 blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            Creator Toolkit
          </div>

          <h2 className="text-4xl font-black sm:text-6xl">
            Ready to Create Better
            <span className="block bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
              YouTube Content?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-400">
            Explore TubeKit's free creator tools and build a faster,
            more organized YouTube workflow.
          </p>

          <a
            href="#tools"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 px-7 py-4 font-black text-slate-950 shadow-2xl shadow-blue-500/10 transition hover:-translate-y-0.5"
          >
            Explore All Tools
            <ArrowRight className="h-5 w-5" />
          </a>

          <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              Free Tools
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              No Signup Required
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              Easy to Use
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              Built for Creators
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;