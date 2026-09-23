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
    icon: "âœ¦",
  },
  {
    name: "AI Description Generator",
    description: "Create structured YouTube descriptions for your videos.",
    path: "/tools/description-generator",
    icon: "âœŽ",
  },
  {
    name: "YouTube Tags Generator",
    description: "Generate relevant tag ideas to organize your video metadata.",
    path: "/tools/tags-generator",
    icon: "#",
  },
  {
    name: "YouTube Keyword Generator",
    description: "Discover keyword ideas around your YouTube video topic.",
    path: "/tools/keyword-generator",
    icon: "âŒ•",
  },
  {
    name: "AI Script Generator",
    description: "Create a structured starting point for your next YouTube script.",
    path: "/tools/script-generator",
    icon: "â–¤",
  },
  {
    name: "YouTube Thumbnail Generator",
    description: "Explore thumbnail concepts and ideas for your next video.",
    path: "/tools/thumbnail-generator",
    icon: "â–£",
  },
  {
    name: "YouTube Monetization Checker",
    description: "Check publicly available channel information related to monetization.",
    path: "/tools/monetization-checker",
    icon: "$",
  },
  {
    name: "YouTube Money Calculator",
    description: "Estimate potential YouTube earnings using views and revenue assumptions.",
    path: "/tools/money-calculator",
    icon: "â‚¹",
  },
];

const moreTools = [
  {
    name: "Hashtag Generator",
    path: "/tools/hashtag-generator",
    description: "Generate relevant hashtag ideas.",
  },
  {
    name: "Hook Generator",
    path: "/tools/hook-generator",
    description: "Create opening hook ideas for videos.",
  },
  {
    name: "Video Outline Generator",
    path: "/tools/outline-generator",
    description: "Build an organized video structure.",
  },
  {
    name: "YouTube Shorts Generator",
    path: "/tools/shorts-generator",
    description: "Generate ideas for short-form content.",
  },
  {
    name: "CPM Calculator",
    path: "/tools/cpm-calculator",
    description: "Calculate CPM-based revenue estimates.",
  },
  {
    name: "RPM Calculator",
    path: "/tools/rpm-calculator",
    description: "Calculate RPM-based revenue estimates.",
  },
  {
    name: "Channel ID Finder",
    path: "/tools/channel-id-finder",
    description: "Find a YouTube channel ID.",
  },
  {
    name: "Video ID Extractor",
    path: "/tools/video-id-extractor",
    description: "Extract a YouTube video ID from a URL.",
  },
  {
    name: "Thumbnail Downloader",
    path: "/tools/thumbnail-downloader",
    description: "Access available YouTube thumbnail resources.",
  },
];

const faqItems = [
  {
    question: "What is TubeKit?",
    answer:
      "TubeKit is a collection of YouTube creator tools designed to help with video planning, content creation, SEO, thumbnails and monetization calculations.",
  },
  {
    question: "Are TubeKit tools free to use?",
    answer:
      "TubeKit provides a growing collection of free creator tools. Individual tools may have their own usage limitations or requirements.",
  },
  {
    question: "Can TubeKit guarantee more YouTube views?",
    answer:
      "No. No tool can guarantee a specific number of YouTube views. TubeKit provides suggestions and utilities that can support the content creation process.",
  },
  {
    question: "Can AI-generated content be published directly?",
    answer:
      "AI-generated results should be reviewed and edited before publication. Creators should make sure the final content is accurate, useful and appropriate for their audience.",
  },
  {
    question: "Are YouTube earnings calculator results exact?",
    answer:
      "No. Revenue calculators provide estimates based on the values entered. Actual YouTube earnings can vary because of audience, geography, advertising demand, content type and other factors.",
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
    <div className="min-h-screen bg-[#050816] text-white">

      <SEO
        title="TubeKit | Free YouTube Tools for Creators"
        description="Use free YouTube tools from TubeKit to generate titles, descriptions, scripts, keywords, tags, hashtags and thumbnail ideas. Explore YouTube SEO and monetization tools."
        keywords="TubeKit, YouTube tools, free YouTube tools, YouTube SEO tools, AI YouTube tools, YouTube title generator, YouTube description generator, YouTube keyword generator, YouTube tags generator, YouTube script generator, YouTube monetization tools"
        canonical="/"
        organization={true}
      />

      <Hero onToolSelect={handleToolSelect} />

      {ActiveTool && (
        <section
          ref={toolSectionRef}
          aria-label={`${activeTool.name} tool`}
          className="border-y border-white/10 bg-[#050816] px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                TubeKit Creator Tool
              </p>

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

      <SearchSection />

      <section
        id="tools"
        className="border-t border-white/10 bg-[#050816] px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
              YouTube Creator Toolkit
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Essential Tools for YouTube Creators
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Explore TubeKit's collection of AI-powered YouTube tools
              for content creation, SEO, video planning and channel
              growth workflows.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {essentialTools.map((tool) => (
              <a
                key={tool.path}
                href={tool.path}
                className="group rounded-2xl border border-white/10 bg-[#0a1024] p-6 transition duration-200 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-lg font-bold text-blue-400">
                  {tool.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {tool.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {tool.description}
                </p>

                <span className="mt-5 inline-block text-sm font-semibold text-blue-400">
                  Use Tool â†’
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FeaturedTools />
<section className="border-t border-white/10 bg-[#080d20] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              Explore More
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              More YouTube Tools
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
              Use additional utilities for Shorts, hashtags, hooks,
              video structure, thumbnails and YouTube revenue estimates.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moreTools.map((tool) => (
              <a
                key={tool.path}
                href={tool.path}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-[#050816] p-5 transition hover:border-white/20"
              >
                <div>
                  <h3 className="font-bold text-white">
                    {tool.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {tool.description}
                  </p>
                </div>

                <span className="ml-4 text-blue-400">
                  â†’
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-white/10 bg-[#050816] px-4 py-24 sm:px-6 lg:px-8"
      >
        <article className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
            Understanding TubeKit
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            What Is TubeKit?
          </h2>

          <div className="mt-8 space-y-6 text-[16px] leading-8 text-slate-300">
            <p>
              TubeKit is a creator-focused platform that brings useful
              YouTube tools together in one place. The platform is
              designed for creators who need assistance with planning
              video ideas, generating content, optimizing metadata,
              preparing thumbnails and understanding basic monetization
              calculations.
            </p>

            <p>
              A typical YouTube workflow can involve several different
              tasks. Before publishing a video, a creator may need to
              choose a topic, research keywords, create a title, write a
              description, prepare a script, develop an opening hook and
              plan a thumbnail. TubeKit provides separate tools for
              these tasks so creators can work through their content
              workflow more efficiently.
            </p>

            <p>
              TubeKit also includes utility and monetization tools.
              Creators can work with YouTube URLs, identify channel or
              video information and explore estimated RPM, CPM and
              revenue calculations. These calculations are informational
              estimates and should not be interpreted as guaranteed
              earnings.
            </p>

            <p>
              The goal of TubeKit is to provide practical tools that
              support creators while keeping the creator responsible for
              the final content. AI-generated suggestions should always
              be reviewed, edited and checked for accuracy before being
              used in a published video.
            </p>
          </div>
        </article>
      </section>

      <section className="border-t border-white/10 bg-[#080d20] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Get Started in Three Simple Steps
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose a Tool",
                text: "Select a YouTube tool based on the task you want to complete.",
              },
              {
                number: "02",
                title: "Enter Your Topic",
                text: "Provide a video topic, keyword, YouTube URL or other information required by the tool.",
              },
              {
                number: "03",
                title: "Review Your Result",
                text: "Review the generated ideas or calculated information and adapt it to your own workflow.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-[#050816] p-8"
              >
                <span className="text-sm font-black text-blue-400">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#050816] px-4 py-24 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">
            YouTube SEO
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            YouTube SEO Tools for Better Content Planning
          </h2>

          <p className="mt-7 leading-8 text-slate-300">
            YouTube SEO involves making video information clear and
            relevant to both viewers and the platform. Topic selection,
            titles, descriptions and other metadata can all be part of a
            creator's optimization workflow. TubeKit provides tools that
            can assist with several of these planning tasks.
          </p>

          <h3 className="mt-12 text-2xl font-bold">
            YouTube Title Ideas
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            A useful title should tell viewers what the video is about
            without making misleading claims. TubeKit's Title Generator
            can provide different title ideas from a topic, allowing
            creators to compare approaches and create a final title that
            accurately represents the video.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            YouTube Descriptions
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            A video description can give viewers additional information
            about the content, resources and context of a video. The
            Description Generator can help create a starting draft that
            creators can then edit and personalize.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Keywords, Tags and Hashtags
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            Keyword and metadata research can help creators understand
            the terminology associated with a topic. TubeKit provides
            keyword, tag and hashtag generation tools that can be used
            during the planning stage. Generated suggestions should be
            reviewed for relevance rather than added automatically.
          </p>

          <h3 className="mt-10 text-2xl font-bold">
            Scripts, Hooks and Video Outlines
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            A clear structure can make the video production process
            easier. TubeKit's Script Generator, Hook Generator and
            Outline Generator can provide starting ideas that creators
            can refine according to their topic, audience and personal
            presentation style.
          </p>
        </article>
      </section>

      <section className="border-t border-white/10 bg-[#080d20] px-4 py-20 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
            YouTube Monetization
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Understand YouTube Revenue Estimates
          </h2>

          <p className="mt-7 leading-8 text-slate-300">
            YouTube revenue is not the same for every channel or every
            video. Revenue can be affected by factors such as views,
            audience location, advertising demand, content category,
            monetization status and RPM or CPM values.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            TubeKit includes RPM, CPM and money calculator tools that
            allow creators to experiment with different values and
            understand how estimated revenue calculations work.
          </p>

          <p className="mt-5 leading-8 text-slate-300">
            Calculator results are estimates only. They do not represent
            guaranteed YouTube earnings, and actual revenue may be
            different from any calculated amount.
          </p>
        </article>
      </section>

      <section className="border-t border-white/10 bg-[#050816] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
              Creator Workflow
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Plan. Create. Optimize. Publish. Analyze.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              ["01", "Plan", "Research your topic and keywords."],
              ["02", "Create", "Develop titles, scripts and hooks."],
              ["03", "Optimize", "Review descriptions and metadata."],
              ["04", "Publish", "Prepare your video and thumbnail."],
              ["05", "Analyze", "Review available data and estimates."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/10 bg-[#080d20] p-6"
              >
                <span className="text-xs font-black text-blue-400">
                  {number}
                </span>

                <h3 className="mt-3 font-bold">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#080d20] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Key Features
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Why Creators Use TubeKit
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Multiple Creator Tools",
                text: "Access AI, SEO, utility and monetization tools from one platform.",
              },
              {
                title: "AI-Assisted Creation",
                text: "Generate starting ideas for titles, scripts, descriptions, hooks and more.",
              },
              {
                title: "Simple Workflow",
                text: "Choose a tool, enter your information and review the result.",
              },
              {
                title: "Creator-Focused",
                text: "Tools are organized around common YouTube content creation tasks.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#050816] p-7"
              >
                <h3 className="text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-white/10 bg-[#050816] px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-slate-400">
              Common questions about TubeKit and its YouTube creator tools.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-[#080d20] p-6"
              >
                <summary className="cursor-pointer list-none pr-6 text-base font-bold text-white">
                  {item.question}
                </summary>

                <p className="mt-4 leading-7 text-slate-400">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#050816] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            Start Creating With TubeKit
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Explore free YouTube tools for titles, descriptions,
            keywords, scripts, thumbnails, Shorts and monetization
            calculations.
          </p>

          <a
            href="#tools"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 font-bold text-slate-950 transition hover:scale-[1.02]"
          >
            Explore YouTube Tools
          </a>
        </div>
      </section>

    </div>
  );
}

export default Home;