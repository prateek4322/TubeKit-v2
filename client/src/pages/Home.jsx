import { useEffect, useRef, useState } from "react";

import Schema from "@/components/seo/Schema";
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

function Home() {
  const [activeTool, setActiveTool] = useState(null);
  const [toolQuery, setToolQuery] = useState("");

  const toolSectionRef = useRef(null);

  const handleToolSelect = (tool, query) => {
    setActiveTool(tool);
    setToolQuery(query || "");

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
  description="Free AI-powered YouTube tools for creators. Generate YouTube titles, descriptions, tags, hashtags, scripts, hooks, outlines and more with TubeKit."
  keywords="TubeKit, YouTube AI tools, YouTube tools, YouTube SEO tools, AI YouTube tools"
  canonical="/"
/>
      <Schema />

      <Hero onToolSelect={handleToolSelect} />

      {/* Tool opens on the SAME HOME PAGE */}
      {ActiveTool && (
        <section
          ref={toolSectionRef}
          className="relative bg-[#050816] px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            {/* Tool Header */}
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-400">
                TubeKit AI Tool
              </p>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                {activeTool.name}
              </h2>

              {toolQuery && (
                <p className="mt-3 text-slate-400">
                  Topic:{" "}
                  <span className="text-white">
                    {toolQuery}
                  </span>
                </p>
              )}
            </div>

            {/* Existing Tool */}
            <ActiveTool query={toolQuery} />
          </div>
        </section>
      )}

      <SearchSection />

      <FeaturedTools />
    </>
  );
}

export default Home;