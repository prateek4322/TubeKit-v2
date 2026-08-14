import { useState } from "react";
import {
  Search,
  ChevronDown,
} from "lucide-react";

import BackgroundEffects from "./BackgroundEffects";

const tools = [
  {
    name: "AI Title Generator",
    path: "/tools/title-generator",
  },
  {
    name: "AI Description Generator",
    path: "/tools/description-generator",
  },
  {
    name: "AI Tags Generator",
    path: "/tools/tags-generator",
  },
  {
    name: "AI Script Generator",
    path: "/tools/script-generator",
  },
  {
    name: "AI Hashtag Generator",
    path: "/tools/hashtag-generator",
  },
  {
    name: "AI Keyword Generator",
    path: "/tools/keyword-generator",
  },
  {
    name: "AI Hook Generator",
    path: "/tools/hook-generator",
  },
  {
    name: "AI Outline Generator",
    path: "/tools/outline-generator",
  },
  {
    name: "AI Shorts Generator",
    path: "/tools/shorts-generator",
  },
  {
    name: "AI Thumbnail Generator",
    path: "/tools/thumbnail-generator",
  },
  {
    name: "Monetization Checker",
    path: "/tools/monetization-checker",
  },
  {
    name: "Money Calculator",
    path: "/tools/money-calculator",
  },
  {
    name: "CPM Calculator",
    path: "/tools/cpm-calculator",
  },
  {
    name: "RPM Calculator",
    path: "/tools/rpm-calculator",
  },
  {
    name: "Channel ID Finder",
    path: "/tools/channel-id-finder",
  },
  {
    name: "Video ID Extractor",
    path: "/tools/video-id-extractor",
  },
  {
    name: "Thumbnail Downloader",
    path: "/tools/thumbnail-downloader",
  },
];

function Hero({ onToolSelect }) {
  const [selectedTool, setSelectedTool] = useState(tools[0]);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    const value = query.trim();

    if (!value) return;

    onToolSelect(selectedTool, value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#050816]">

      {/* Background */}
      <BackgroundEffects />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl flex-col items-center justify-center px-6 py-20">

        {/* Heading */}

        <div className="max-w-4xl text-center">

          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Ultimate YouTube{" "}
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 bg-clip-text text-transparent">
              Toolkit
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Powerful AI tools to help you create better YouTube content,
            improve your workflow, and grow your channel.
          </p>

        </div>

        {/* Search Bar */}

        <div className="mt-12 w-full max-w-4xl">

          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/75 p-3 shadow-2xl shadow-blue-950/30 backdrop-blur-xl md:flex-row">

            {/* Search Input */}

            <div className="flex h-14 flex-1 items-center rounded-xl border border-slate-700/80 bg-slate-950/85 px-4 transition focus-within:border-blue-500">

              <Search className="mr-3 h-5 w-5 shrink-0 text-slate-400" />

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter your Topic, YouTube URL, Channel ID ..."
                className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
              />

            </div>

            {/* Tool Dropdown */}

            <div className="relative md:w-64">

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-14 w-full items-center justify-between rounded-xl border border-indigo-500/40 bg-indigo-950/80 px-4 text-left text-white shadow-sm shadow-indigo-500/10 transition-all hover:border-indigo-400/60 hover:bg-indigo-900/80"
              >

                <span className="truncate text-sm font-medium">
                  {selectedTool.name}
                </span>

                <ChevronDown
                  className={`ml-2 h-5 w-5 shrink-0 text-indigo-300 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />

              </button>

              {isOpen && (
                <div
                  className="absolute left-0 right-0 top-16 z-50 max-h-72 overflow-y-auto rounded-xl border border-indigo-500/30 bg-[#111936] p-2 shadow-2xl shadow-indigo-950/50"
                >

                  {tools.map((tool) => (
                    <button
                      key={tool.path}
                      type="button"
                      onClick={() => {
                        setSelectedTool(tool);
                        setIsOpen(false);
                      }}
                      className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition-all ${
                        selectedTool.path === tool.path
                          ? "bg-indigo-500/20 text-indigo-300"
                          : "text-slate-300 hover:bg-indigo-500/10 hover:text-white"
                      }`}
                    >
                      {tool.name}
                    </button>
                  ))}

                </div>
              )}

            </div>

            {/* Search Button */}

            <button
              type="button"
              onClick={handleSearch}
              disabled={!query.trim()}
              className="flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 px-7 font-semibold text-white transition hover:scale-[1.01] hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >

              <Search className="h-5 w-5" />

              <span className="md:hidden lg:inline">
                Search
              </span>

            </button>

          </div>

          {/* Hint */}

          <p className="mt-3 text-center text-sm text-slate-500">
            Search a topic and select the tool you want to use
          </p>

        </div>

      </div>
    </section>
  );
}

export default Hero;