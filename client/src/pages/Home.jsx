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
    symbol: "âœ¦",
  },
  {
    name: "AI Description Generator",
    description: "Create structured descriptions for your YouTube videos.",
    path: "/tools/description-generator",
    color: "green",
    symbol: "âœŽ",
  },
  {
    name: "YouTube Tags Generator",
    description: "Generate relevant tag ideas for your video metadata.",
    path: "/tools/tags-generator",
    color: "yellow",
    symbol: "#",
  },
  {
    name: "YouTube Keyword Generator",
    description: "Discover keyword ideas around your video topic.",
    path: "/tools/keyword-generator",
    color: "blue",
    symbol: "âŒ•",
  },
  {
    name: "AI Script Generator",
    description: "Create a structured starting point for your next YouTube script.",
    path: "/tools/script-generator",
    color: "red",
    symbol: "â–¤",
  },
  {
    name: "YouTube Thumbnail Generator",
    description: "Explore thumbnail concepts and creative directions.",
    path: "/tools/thumbnail-generator",
    color: "green",
    symbol: "â–£",
  },
  {
    name: "Monetization Checker",
    description: "Check publicly available channel information related to monetization.",
    path: "/tools/monetization-checker",
    color: "yellow",
    symbol: "$",
  },
  {
    name: "YouTube Money Calculator",
    description: "Estimate potential earnings using views and revenue assumptions.",
    path: "/tools/money-calculator",
    color: "blue",
    symbol: "â‚¹",
  },
];

const moreTools = [
  ["Hashtag Generator", "/tools/hashtag-generator", "red"],
  ["Hook Generator", "/tools/hook-generator", "yellow"],
  ["Outline Generator", "/tools/outline-generator", "green"],
  ["Shorts Generator", "/tools/shorts-generator", "blue"],
  ["CPM Calculator", "/tools/cpm-calculator", "yellow"],
  ["RPM Calculator", "/tools/rpm-calculator", "green"],
  ["Channel ID Finder", "/tools/channel-id-finder", "blue"],
  ["Video ID Extractor", "/tools/video-id-extractor", "red"],
  ["Thumbnail Downloader", "/tools/thumbnail-downloader", "yellow"],
];

const colorStyles = {
  red: {
    icon: "bg-red-500/10 text-red-400 border-red-500/20",
    border: "hover:border-red-500/40",
    text: "text-red-400",
  },
  green: {
    icon: "bg-green-500/10 text-green-400 border-green-500/20",
    border: "hover:border-green-500/40",
    text: "text-green-400",
  },
  yellow: {
    icon: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
    border: "hover:border-yellow-400/40",
    text: "text-yellow-300",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    border: "hover:border-blue-500/40",
    text: "text-blue-400",
  },
};
const faqs = [
  {
    question: "What is TubeKit?",
    answer:
      "TubeKit is a collection of YouTube creator tools for video planning, AI-assisted content creation, SEO, thumbnails, utilities and monetization calculations.",
  },
  {
    question: "Are TubeKit tools free?",
    answer:
      "TubeKit provides a growing collection of free YouTube creator tools. Individual tools may have their own usage limits or requirements.",
  },
  {
    question: "Can TubeKit guarantee more YouTube views?",
    answer:
      "No. No tool can guarantee a specific number of views. TubeKit provides suggestions and utilities that can support the content creation workflow.",
  },
  {
    question: "Can I publish AI-generated content directly?",
    answer:
      "AI-generated results should be reviewed, edited and checked for accuracy before publication. The final content should accurately represent the actual video.",
  },
  {
    question: "Are YouTube earnings calculator results exact?",
    answer:
      "No. Revenue calculators provide estimates based on entered values. Actual earnings can vary due to audience, geography, advertising demand, content type and other factors.",
  },
  {
    question: "Can TubeKit help with YouTube SEO?",
    answer:
      "TubeKit includes tools for titles, descriptions, keywords, tags and hashtags that can assist creators while planning and optimizing video metadata.",
  },
];

function Home() {
  const [activeTool, setActiveTool] = useState(null);
  const [toolQuery, setToolQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

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

      {/* =====================================================
          SEO
      ====================================================== */}

      <SEO
        title="TubeKit | Free YouTube Tools for Creators"
        description="TubeKit provides free YouTube tools for creators, including AI title, description, script, keyword, tags, hashtag, thumbnail and monetization tools."
        keywords="TubeKit, YouTube tools, free YouTube tools, YouTube SEO tools, AI YouTube tools, YouTube title generator, YouTube description generator, YouTube keyword generator, YouTube tags generator, YouTube script generator, YouTube thumbnail generator"
        canonical="/"
        organization={true}
      />

      {/* =====================================================
          HERO
      ====================================================== */}

      <Hero onToolSelect={handleToolSelect} />

      {/* =====================================================
          ACTIVE TOOL
      ====================================================== */}

      {ActiveTool && (
        <section
          ref={toolSectionRef}
          aria-label={`${activeTool.name} tool`}
          className="border-y border-white/10 bg-[#050816] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">

            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                TubeKit Creator Tool
              </p>

              <h2 className="text-3xl font-black sm:text-4xl">
                {activeTool.name}
              </h2>

              {toolQuery && (
                <p className="mt-4 text-slate-400">
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
          TRUST / BENEFITS STRIP
      ====================================================== */}

      <section className="border-y border-white/10 bg-[#050816] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:grid-cols-4">

          {[
            ["âœ“", "Free Creator Tools", "Useful tools for everyday tasks", "red"],
            ["âš¡", "Fast Workflow", "Simple and easy to use", "green"],
            ["â—†", "AI Assisted", "Generate useful starting ideas", "yellow"],
            ["â—", "Creator Focused", "Built around YouTube workflows", "blue"],
          ].map(([icon, title, description, color]) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border font-bold ${colorStyles[color].icon}`}
              >
                {icon}
              </div>

              <div>
                <h3 className="text-sm font-bold text-white">
                  {title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
{/* =====================================================
          SEARCH
      ====================================================== */}

      <section className="px-4 pt-20 sm:px-6 lg:px-8">
        <SearchSection />
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#080d1d] md:grid-cols-4">

          {[
            ["15+", "Creator Tools", "Tools for different YouTube tasks", "red"],
            ["100%", "Free to Explore", "Easy access to useful tools", "green"],
            ["AI", "Content Workflow", "AI-assisted creation utilities", "yellow"],
            ["24/7", "Online Access", "Use tools whenever you need", "blue"],
          ].map(([value, title, description, color], index) => (
            <div
              key={title}
              className={`p-7 text-center ${
                index !== 0
                  ? "border-t border-white/10 md:border-l md:border-t-0"
                  : ""
              }`}
            >
              <div className={`text-3xl font-black ${colorStyles[color].text}`}>
                {value}
              </div>

              <h3 className="mt-2 font-bold text-white">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          ESSENTIAL TOOLS
      ====================================================== */}

      <section
        id="tools"
        className="relative px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="pointer-events-none absolute left-0 top-24 h-72 w-72 rounded-full bg-red-500/5 blur-[120px]" />
        <div className="pointer-events-none absolute right-0 top-64 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
              YouTube Creator Toolkit
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Essential Tools for{" "}
              <span className="bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
                YouTube Creators
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Explore TubeKit's core AI and YouTube utilities for
              content creation, SEO, video planning and monetization.
            </p>

          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {essentialTools.map((tool) => {
              const styles = colorStyles[tool.color];

              return (
                <a
                  key={tool.path}
                  href={tool.path}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d1d] p-7 transition duration-300 hover:-translate-y-1 ${styles.border}`}
                >

                  <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/[0.02] blur-2xl" />

                  <div className="relative">

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border text-xl font-black ${styles.icon}`}
                    >
                      {tool.symbol}
                    </div>

                    <h3 className="mt-6 text-lg font-bold">
                      {tool.name}
                    </h3>

                    <p className="mt-3 min-h-[52px] text-sm leading-7 text-slate-400">
                      {tool.description}
                    </p>

                    <span
                      className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${styles.text}`}
                    >
                      Use Tool
                      <span className="transition-transform group-hover:translate-x-1">
                        â†’
                      </span>
                    </span>

                  </div>

                </a>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          FEATURED TOOLS
      ====================================================== */}

      <section className="border-y border-white/10 bg-[#080d1d] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
              Most Popular
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Featured Tools
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Discover useful AI-powered tools that can help you
              organize and improve your YouTube content workflow.
            </p>
          </div>

          <FeaturedTools />

        </div>
      </section>
      {/* =====================================================
          MORE TOOLS
      ====================================================== */}

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Explore More
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              More YouTube Tools
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Additional utilities for Shorts, hashtags, hooks,
              outlines, video IDs, thumbnails and revenue estimates.
            </p>

          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

            {moreTools.map(([name, path, color]) => {
              const styles = colorStyles[color];

              return (
                <a
                  key={path}
                  href={path}
                  className={`group rounded-2xl border border-white/10 bg-[#080d1d] p-5 transition duration-300 hover:-translate-y-1 ${styles.border}`}
                >

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border text-lg font-bold ${styles.icon}`}
                  >
                    +
                  </div>

                  <h3 className="mt-5 text-sm font-bold leading-6">
                    {name}
                  </h3>

                  <span
                    className={`mt-3 block text-xs font-bold ${styles.text}`}
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
        className="border-y border-white/10 bg-[#080d1d] px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          <article>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
              Understanding TubeKit
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              What is{" "}
              <span className="bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
                TubeKit?
              </span>
            </h2>

            <div className="mt-8 space-y-6 text-[16px] leading-8 text-slate-300">

              <p>
                TubeKit is an all-in-one toolkit created for YouTube
                creators, video makers and content teams. It brings
                together AI-assisted content tools, YouTube SEO
                utilities, thumbnail tools and monetization calculators
                in one platform.
              </p>

              <p>
                Creating a YouTube video involves many steps. Creators
                may need to research a topic, find keyword ideas, write
                a title, prepare a description, structure a script,
                develop an opening hook, plan a thumbnail and review
                revenue estimates. TubeKit provides dedicated tools for
                many of these common tasks.
              </p>

              <p>
                TubeKit is designed to assist the creator's workflow,
                not replace the creator's judgment. AI-generated
                suggestions should be reviewed, edited and checked for
                accuracy before they are used in published content.
              </p>

            </div>

          </article>

          <div className="grid grid-cols-2 gap-5">

            {[
              ["01", "Plan Better", "Research topics and keywords.", "red"],
              ["02", "Create Faster", "Generate content starting points.", "green"],
              ["03", "Optimize Easier", "Work with titles and metadata.", "yellow"],
              ["04", "Grow Consistently", "Build a repeatable workflow.", "blue"],
            ].map(([number, title, text, color]) => {
              const styles = colorStyles[color];

              return (
                <div
                  key={number}
                  className="rounded-2xl border border-white/10 bg-[#050816] p-6"
                >

                  <div className={`text-xs font-black ${styles.text}`}>
                    {number}
                  </div>

                  <h3 className="mt-4 font-bold">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          CONTENT CREATION GUIDE
      ====================================================== */}

      <section className="px-4 py-28 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            YouTube Content Guide
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            Plan, Create and Optimize Your YouTube Videos
          </h2>

          <p className="mt-8 text-base leading-8 text-slate-300">
            A successful YouTube workflow involves more than uploading
            a video. Creators often work through several stages before
            and after publishing, including topic research, content
            planning, writing, optimization, thumbnail preparation and
            performance review.
          </p>

          <div className="mt-14 space-y-12">

            <div>
              <h3 className="text-2xl font-bold">
                YouTube Titles
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                A useful title should clearly communicate the topic and
                accurately represent the video. TubeKit's Title
                Generator can provide different title ideas that
                creators can review and adapt to their audience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                YouTube Descriptions
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                A description can provide additional context about a
                video, resources and related information. TubeKit's
                Description Generator can help create a starting draft
                that should be reviewed and personalized before use.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Keywords, Tags and Hashtags
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Keyword research can help creators understand the
                language associated with a topic. TubeKit provides
                keyword, tag and hashtag tools for brainstorming and
                planning. Suggestions should always be checked for
                relevance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Scripts, Hooks and Outlines
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                A clear structure can make video production easier.
                Script, Hook and Outline tools can provide starting
                ideas that creators can refine according to their topic,
                audience and presentation style.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Thumbnails and Visual Ideas
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                A thumbnail communicates the subject of a video before
                the viewer starts watching. TubeKit's thumbnail tools
                can help creators explore concepts and visual directions
                before designing their final thumbnail.
              </p>
            </div>

          </div>

        </article>
      </section>

      {/* =====================================================
          MONETIZATION
      ====================================================== */}

      <section className="border-y border-white/10 bg-[#080d1d] px-4 py-28 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
            YouTube Monetization
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-5xl">
            Understand YouTube Revenue Estimates
          </h2>

          <p className="mt-8 leading-8 text-slate-300">
            YouTube revenue can vary between channels and videos.
            Audience location, views, advertising demand, content
            category, monetization status, RPM and CPM can all affect
            the final amount a creator earns.
          </p>

          <p className="mt-5 leading-8 text-slate-400">
            TubeKit's CPM, RPM and Money Calculator tools allow
            creators to enter different assumptions and explore how
            estimated revenue calculations work.
          </p>

          <p className="mt-5 leading-8 text-slate-400">
            These calculators provide estimates for informational and
            planning purposes. They do not guarantee actual YouTube
            earnings, and real revenue can differ substantially.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">

            {[
              ["CPM", "Cost per thousand ad impressions.", "yellow"],
              ["RPM", "Estimated revenue per thousand views.", "green"],
              ["Revenue", "A calculated estimate based on inputs.", "blue"],
            ].map(([title, text, color]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#050816] p-6"
              >

                <div className={`text-2xl font-black ${colorStyles[color].text}`}>
                  {title}
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </article>
      </section>

      {/* =====================================================
          HOW TUBEKIT WORKS
      ====================================================== */}

      <section className="px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
              Simple Workflow
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              How TubeKit Works
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Use the tools in the order that fits your own YouTube
              workflow.
            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">

            {[
              ["01", "Choose a Tool", "Select a tool for your current task.", "red"],
              ["02", "Enter Information", "Provide a topic, keyword or URL.", "yellow"],
              ["03", "Generate or Analyze", "Review the generated result.", "green"],
              ["04", "Use & Improve", "Adapt useful results to your content.", "blue"],
            ].map(([number, title, text, color]) => (
              <div
                key={number}
                className="relative rounded-2xl border border-white/10 bg-[#080d1d] p-7"
              >

                <div className={`text-2xl font-black ${colorStyles[color].text}`}>
                  {number}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

{/* =====================================================
          CREATOR WORKFLOW
      ====================================================== */}

      <section className="border-y border-white/10 bg-[#050816] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
              Creator Workflow
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Plan. Create. Optimize. Publish. Analyze.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Organize your content process with tools for different
              stages of the YouTube journey.
            </p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

            {[
              ["01", "Plan", "Research topics and keywords.", "red"],
              ["02", "Create", "Develop titles, scripts and hooks.", "green"],
              ["03", "Optimize", "Review descriptions and metadata.", "yellow"],
              ["04", "Publish", "Prepare videos and thumbnails.", "blue"],
              ["05", "Analyze", "Review available data and estimates.", "red"],
            ].map(([number, title, text, color]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-[#080d1d] p-6"
              >

                <span className={`text-xs font-black ${colorStyles[color].text}`}>
                  {number}
                </span>

                <h3 className="mt-4 font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY TUBEKIT
      ====================================================== */}

      <section className="px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Key Features
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Built Around the Creator Workflow
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              TubeKit brings multiple practical YouTube tasks into one
              creator-focused platform.
            </p>

          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["Multiple Tools", "AI, SEO, utility and monetization tools in one platform.", "red"],
              ["AI Assisted", "Generate starting ideas for common content tasks.", "green"],
              ["Simple Workflow", "Choose a tool, enter information and review the result.", "yellow"],
              ["Creator Focused", "Organized around practical YouTube workflows.", "blue"],
            ].map(([title, text, color]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#080d1d] p-7"
              >

                <div
                  className={`mb-5 h-2 w-16 rounded-full ${
                    color === "red"
                      ? "bg-red-500"
                      : color === "green"
                      ? "bg-green-500"
                      : color === "yellow"
                      ? "bg-yellow-400"
                      : "bg-blue-500"
                  }`}
                />

                <h3 className="text-lg font-bold">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section
        id="faq"
        className="border-y border-white/10 bg-[#080d1d] px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Common questions about TubeKit and its YouTube creator
              tools.
            </p>

          </div>

          <div className="mt-14 space-y-4">

            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#050816]"
                >

                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left"
                  >

                    <span className="font-bold">
                      {item.question}
                    </span>

                    <span
                      className={`text-xl text-blue-400 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>

                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-6 pb-6 pt-5 leading-7 text-slate-400">
                      {item.answer}
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

      <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64">
          <div className="absolute left-0 bottom-0 h-40 w-1/2 bg-red-500/15 blur-[90px]" />
          <div className="absolute left-1/4 bottom-0 h-40 w-1/2 bg-yellow-400/10 blur-[90px]" />
          <div className="absolute right-0 bottom-0 h-40 w-1/2 bg-blue-500/15 blur-[90px]" />
          <div className="absolute left-1/3 bottom-0 h-40 w-1/2 bg-green-500/10 blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
            TubeKit Creator Toolkit
          </p>

          <h2 className="mt-5 text-4xl font-black sm:text-6xl">
            Ready to Create Better
            <span className="block bg-gradient-to-r from-red-400 via-yellow-300 to-blue-400 bg-clip-text text-transparent">
              YouTube Content?
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl leading-8 text-slate-400">
            Explore TubeKit's creator tools and build a more organized
            workflow for your next YouTube video.
          </p>

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("tools")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
            className="mt-9 rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 px-8 py-4 font-black text-slate-950 shadow-xl transition hover:-translate-y-1"
          >
            Explore Creator Tools â†’
          </button>

          <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-500">
            <span>âœ“ Free Tools</span>
            <span>âœ“ AI Assisted</span>
            <span>âœ“ Easy to Use</span>
            <span>âœ“ Built for Creators</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;