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
    path: "/tools/title-generator",
    color: "red",
    description:
      "Create engaging YouTube title ideas designed around your topic, audience and search intent.",
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
      "Explore thumbnail concepts, visual directions and attention-focused ideas before designing.",
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
    text: "Enter your video idea, niche, keyword or other useful context to guide the result.",
    color: "green",
  },
  {
    number: "03",
    title: "Generate ideas",
    text: "TubeKit processes your input and creates practical content ideas you can review and refine.",
    color: "yellow",
  },
  {
    number: "04",
    title: "Publish with confidence",
    text: "Use the generated output as a starting point for your title, script, metadata or content plan.",
    color: "blue",
  },
];

const faqs = [
  {
    question: "What is TubeKit?",
    answer:
      "TubeKit is an AI-powered toolkit for YouTube creators. It brings together tools for titles, descriptions, tags, scripts, keywords, hooks, hashtags, thumbnails and creator utilities in one place.",
  },
  {
    question: "Are TubeKit tools useful for YouTube Shorts?",
    answer:
      "Yes. TubeKit includes tools that can support Shorts workflows, including hooks, scripts, hashtags, titles and thumbnail ideas.",
  },
  {
    question: "Can beginners use TubeKit?",
    answer:
      "Yes. The tools are designed around simple inputs so creators can start with a basic video idea and turn it into more structured content.",
  },
  {
    question: "Does TubeKit replace YouTube Studio?",
    answer:
      "No. TubeKit is a creator-support toolkit. YouTube Studio remains the place to manage your channel, publish videos and review official channel analytics.",
  },
  {
    question: "How should I use AI-generated content?",
    answer:
      "Treat generated results as a starting point. Review facts, adapt the wording to your audience and add your own experience, examples and creative direction before publishing.",
  },
  {
    question: "Can TubeKit help with YouTube SEO?",
    answer:
      "TubeKit provides tools for titles, descriptions, tags, keywords, hashtags and content planning. These can help with metadata and ideation, while actual search performance depends on many factors including relevance, audience response and video quality.",
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

      {/* HERO â€” kept as a separate component */}
      <Hero onToolSelect={handleToolSelect} />

      {/* ACTIVE TOOL */}
      {ActiveTool && (
        <section
          ref={toolSectionRef}
          aria-label={`${activeTool.name} tool`}
          className="relative overflow-hidden bg-[#030712] px-4 py-24 sm:px-6 lg:px-8"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
                TubeKit AI Tool
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
                {activeTool.name}
              </h2>

              {toolQuery && (
                <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                  Working with topic:{" "}
                  <span className="font-semibold text-white">{toolQuery}</span>
                </p>
              )}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-black/20 sm:p-6">
              <ActiveTool query={toolQuery} />
            </div>
          </div>
        </section>
      )}

      {/* INTRO / TRUST STRIP */}
      <section className="relative overflow-hidden bg-[#030712] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["01", "AI-powered workflow", "Create ideas faster without starting every task from a blank page.", "red"],
              ["02", "Creator-focused", "Every tool is built around practical YouTube content workflows.", "green"],
              ["03", "Simple inputs", "Give TubeKit your topic and focus on reviewing and improving the result.", "yellow"],
              ["04", "One creator hub", "Keep ideation, SEO support and creator utilities in one place.", "blue"],
            ].map(([number, title, text, color]) => (
              <div
                key={number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className={`absolute left-0 top-0 h-1 w-full ${
                    color === "red"
                      ? "bg-red-500"
                      : color === "green"
                        ? "bg-green-500"
                        : color === "yellow"
                          ? "bg-yellow-400"
                          : "bg-blue-500"
                  }`}
                />
                <div className="text-xs font-black tracking-[0.2em] text-slate-500">
                  {number}
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH COMPONENT â€” existing styling is preserved */}
      <section className="bg-[#050816] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SearchSection />
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-[#050816] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-10">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["17+", "Creator tools"],
              ["AI", "Powered workflows"],
              ["SEO", "Content support"],
              ["24/7", "Self-serve access"],
            ].map(([value, label], index) => (
              <div key={label} className="relative">
                <div
                  className={`mx-auto mb-4 h-1 w-12 rounded-full ${
                    index === 0
                      ? "bg-red-500"
                      : index === 1
                        ? "bg-green-500"
                        : index === 2
                          ? "bg-yellow-400"
                          : "bg-blue-500"
                  }`}
                />
                <div className="text-4xl font-black tracking-tight text-white">
                  {value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* ESSENTIAL TOOLS */}
      <section
        id="tools"
        className="relative overflow-hidden bg-[#030712] px-4 py-28 sm:px-6 lg:px-8"
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

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {essentialTools.map((tool) => {
              const colorClass =
                tool.color === "red"
                  ? "border-red-500/20 hover:border-red-500/50"
                  : tool.color === "green"
                    ? "border-green-500/20 hover:border-green-500/50"
                    : tool.color === "yellow"
                      ? "border-yellow-400/20 hover:border-yellow-400/50"
                      : "border-blue-500/20 hover:border-blue-500/50";

              const dotClass =
                tool.color === "red"
                  ? "bg-red-500"
                  : tool.color === "green"
                    ? "bg-green-500"
                    : tool.color === "yellow"
                      ? "bg-yellow-400"
                      : "bg-blue-500";

              return (
                <a
                  key={tool.path}
                  href={tool.path}
                  className={`group rounded-3xl border bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${colorClass}`}
                >
                  <span
                    className={`mb-6 block h-2 w-12 rounded-full ${dotClass}`}
                  />

                  <h3 className="text-xl font-bold text-white">
                    {tool.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {tool.description}
                  </p>

                  <span className="mt-6 inline-block text-sm font-bold text-white transition group-hover:translate-x-1">
                    Open tool â†’
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED TOOLS â€” existing component */}
      <section className="bg-[#050816] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FeaturedTools />
        </div>
      </section>
{/* ABOUT */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#030712] px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-green-400">
              What is TubeKit?
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
              A practical AI workspace for modern YouTube creators
            </h2>

            <p className="mt-7 text-base leading-8 text-slate-400 sm:text-lg">
              Creating a YouTube video involves much more than recording.
              Creators research topics, develop titles, plan scripts, write
              descriptions, select keywords, create hooks and prepare
              thumbnails. TubeKit brings many of those repetitive planning
              tasks into one creator-focused toolkit.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
              The goal is simple: help you spend less time staring at a blank
              page and more time improving the actual content. Use the
              generated suggestions as a starting point, then add your own
              expertise, voice, examples and creative decisions.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                ["Content ideation", "Turn a topic into actionable content directions."],
                ["YouTube SEO support", "Work with titles, keywords, descriptions and tags."],
                ["Short-form workflow", "Plan hooks, scripts and hashtags for Shorts."],
                ["Creator utilities", "Use practical tools for common YouTube tasks."],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                >
                  <div
                    className={`mb-4 h-1 w-9 rounded-full ${
                      index === 0
                        ? "bg-red-500"
                        : index === 1
                          ? "bg-green-500"
                          : index === 2
                            ? "bg-yellow-400"
                            : "bg-blue-500"
                    }`}
                  />
                  <h3 className="font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/30 sm:p-9">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Creator workspace
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    Your content flow
                  </h3>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                </div>
              </div>

              <div className="space-y-4 pt-7">
                {[
                  ["01", "Video topic", "Start with an idea"],
                  ["02", "Title & keyword", "Shape the content direction"],
                  ["03", "Script & hook", "Build the video structure"],
                  ["04", "Description & tags", "Prepare supporting metadata"],
                  ["05", "Thumbnail concept", "Plan the visual direction"],
                ].map(([number, title, text], index) => (
                  <div
                    key={number}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-black text-black ${
                        index === 0
                          ? "bg-red-400"
                          : index === 1
                            ? "bg-green-400"
                            : index === 2
                              ? "bg-yellow-300"
                              : index === 3
                                ? "bg-blue-400"
                                : "bg-red-400"
}`}
                    >
                      {number}
                    </div>

                    <div>
                      <div className="font-bold text-white">{title}</div>
                      <div className="mt-1 text-xs text-slate-500">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="relative overflow-hidden bg-[#050816] px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">
              How TubeKit works
            </span>

            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              A simple four-step creator workflow
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              TubeKit is designed to keep the process straightforward. Give
              the tool enough context, review the output and make it your own.
            </p>
          </div>

          <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
              <div
                key={item.number}
                className="relative rounded-3xl border border-white/10 bg-white/[0.025] p-7"
              >
                <div
                  className={`text-sm font-black ${
                    item.color === "red"
                      ? "text-red-400"
                      : item.color === "green"
                        ? "text-green-400"
                        : item.color === "yellow"
                          ? "text-yellow-400"
                          : "text-blue-400"
                  }`}
                >
                  {item.number}
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO EDUCATION */}
      <section className="bg-[#030712] px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-blue-400">
                YouTube SEO
              </span>

              <h2 className="mt-4 text-4xl font-black text-white">
                Build better metadata around better content
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-400">
                Search optimization is more than adding keywords. Your topic,
                title, description, viewer intent, content quality and audience
                response all work together.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
              {[
                ["Titles", "Make the topic clear and interesting without misleading the viewer."],
                ["Keywords", "Research and organize topic ideas around what your audience may search for."],
                ["Descriptions", "Give viewers and search systems useful context about the video."],
                ["Tags", "Use relevant metadata where it adds useful context to the video topic."],
                ["Hooks", "Open with a clear reason for viewers to continue watching."],
                ["Consistency", "Publish useful content consistently while learning from your analytics."],
              ].map(([title, text], index) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.025] p-7"
                >
                  <div
                    className={`mb-5 h-1 w-10 rounded-full ${
                      index % 4 === 0
                        ? "bg-red-500"
                        : index % 4 === 1
                          ? "bg-green-500"
                          : index % 4 === 2
                            ? "bg-yellow-400"
                            : "bg-blue-500"
                    }`}
                  />
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MONETIZATION */}
      <section className="bg-[#050816] px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 sm:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.22em] text-green-400">
                  Creator growth
                </span>

                <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                  Plan content with growth in mind
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-400">
                  TubeKit also includes creator utilities that can help you
                  understand common YouTube metrics and plan content around
                  your goals. Use calculators and estimators as planning aids,
                  not as guarantees of future earnings.
                </p>
              </div>
<div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["CPM Calculator", "Estimate advertising revenue scenarios from CPM and views."],
                  ["RPM Calculator", "Understand revenue-per-thousand-view calculations."],
                  ["Money Calculator", "Explore simple creator revenue scenarios."],
                  ["Monetization Checker", "Review common monetization-related requirements and information."],
                ].map(([title, text], index) => (
                  <a
                    key={title}
                    href={
                      [
                        "/tools/cpm-calculator",
                        "/tools/rpm-calculator",
                        "/tools/money-calculator",
                        "/tools/monetization-checker",
                      ][index]
                    }
                    className="rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:-translate-y-1 hover:border-white/20"
                  >
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TUBEKIT */}
      <section className="bg-[#030712] px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">
              Why creators use TubeKit
            </span>

            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              Less friction. More room for creativity.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              A creator toolkit should make repetitive work easier without
              taking away your creative control.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              ["Faster ideation", "Move from a rough idea to multiple content directions quickly."],
              ["Structured workflow", "Keep titles, scripts, metadata and supporting tasks connected."],
              ["Creative control", "Use AI output as a draft and customize every result before publishing."],
            ].map(([title, text], index) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.025] p-8"
              >
                <div
                  className={`mb-7 h-10 w-10 rounded-2xl ${
                    index === 0
                      ? "bg-red-500/15"
                      : index === 1
                        ? "bg-green-500/15"
                        : "bg-blue-500/15"
                  }`}
                />

                <h3 className="text-xl font-bold text-white">{title}</h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* FAQ */}
      <section
        id="faq"
        className="bg-[#050816] px-4 py-28 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-400">
              Frequently asked questions
            </span>

            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              Questions creators commonly ask
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
              Learn how TubeKit fits into your YouTube planning, SEO and
              content creation workflow.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-blue-500/30 bg-blue-500/[0.04]"
                      : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-white">{faq.question}</span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition ${
                        isOpen
                          ? "rotate-45 border-blue-400/40 text-blue-300"
                          : "border-white/10 text-slate-400"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-white/10 px-6 py-6">
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

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#030712] px-4 py-28 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

          <div className="relative">
            <div className="mx-auto flex w-fit gap-2">
              <span className="h-2.5 w-10 rounded-full bg-red-500" />
              <span className="h-2.5 w-10 rounded-full bg-green-500" />
              <span className="h-2.5 w-10 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-10 rounded-full bg-blue-500" />
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Turn your next YouTube idea into a complete content plan
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Start with a topic, explore TubeKit's creator tools and build
              your next video with a clearer workflow.
            </p>

            <a
              href="#tools"
              className="mt-9 inline-flex items-center rounded-2xl bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Explore Creator Tools â†’
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;