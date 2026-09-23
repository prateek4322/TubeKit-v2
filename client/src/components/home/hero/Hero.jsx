import { useEffect, useState } from "react";
import {
  Search,
  ChevronDown,
  Sparkles,
  Wand2,
  Zap,
  Play,
} from "lucide-react";

import BackgroundEffects from "./BackgroundEffects";

const aiTools = [
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
];

const rotatingWords = [
  "Titles",
  "Scripts",
  "Hooks",
  "Keywords",
  "Descriptions",
  "Hashtags",
  "Thumbnails",
];

function Hero({ onToolSelect }) {
  const [selectedTool, setSelectedTool] = useState(aiTools[0]);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2100);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    const value = query.trim();

    if (!value || !selectedTool) return;

    onToolSelect(selectedTool, value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }

    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#030712]">
      <BackgroundEffects />

      {/* Premium ambient background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-red-500/10 blur-[100px]" />
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-green-500/8 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-yellow-400/8 blur-[100px]" />

        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* Premium badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-bold tracking-wide text-slate-300 shadow-xl shadow-black/20 backdrop-blur-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>

          <span>AI Creator Studio</span>

          <span className="h-3 w-px bg-white/15" />

          <Sparkles className="h-3.5 w-3.5 text-yellow-400" />

          <span className="text-slate-400">Built for YouTube</span>
        </div>

        {/* Main heading */}
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Create Better YouTube
            <span className="relative mt-3 block h-[1.15em] overflow-hidden">
              <span
                key={rotatingWords[wordIndex]}
                className="block animate-[heroWord_.45s_ease-out] bg-[linear-gradient(90deg,#ef4444_0%,#facc15_32%,#22c55e_66%,#3b82f6_100%)] bg-clip-text text-transparent"
              >
                {rotatingWords[wordIndex]}
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Generate high-quality YouTube content ideas with AI. Create titles,
            scripts, hooks, keywords, descriptions, hashtags and thumbnail
            concepts faster.
          </p>
        </div>

        {/* Search workspace */}
        <div className="mt-12 w-full max-w-5xl">
          <div className="group relative">
            {/* RGYB outer glow */}
            <div className="pointer-events-none absolute -inset-[1px] rounded-[1.65rem] bg-gradient-to-r from-red-500/40 via-yellow-400/25 via-green-500/25 to-blue-500/40 opacity-70 blur-sm transition duration-500 group-hover:opacity-100" />

            <div className="relative rounded-[1.6rem] border border-white/10 bg-[#070b18]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:p-3">
              <div className="flex flex-col gap-2.5 md:flex-row">
                {/* Input */}
                <div className="group/input flex min-h-14 flex-1 items-center rounded-xl border-2 border-red-500/70 bg-[#030712] px-4 transition duration-300 focus-within:border-red-400 focus-within:shadow-lg focus-within:shadow-red-500/15">
                  {/* ALWAYS RED */}
                  <Search className="mr-3 h-5 w-5 shrink-0 text-red-500 transition-transform duration-300 group-focus-within/input:scale-110" />

                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter your topic, niche or video idea..."
                    aria-label="Enter your topic, niche or video idea"
                    className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-slate-500 sm:text-base"
                  />

                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery("")}
                      className="ml-2 rounded-lg px-2 py-1 text-xs font-bold text-slate-500 transition hover:bg-white/5 hover:text-white"
                      aria-label="Clear search"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* AI tool selector */}
                <div className="relative md:w-64 lg:w-72">
                  <button
                    type="button"
                    onClick={() => setIsOpen((open) => !open)}
                    onKeyDown={handleKeyDown}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    className="flex min-h-14 w-full items-center justify-between rounded-xl border-2 border-blue-500/50 bg-blue-950/35 px-4 text-left text-white transition duration-300 hover:border-blue-400 hover:bg-blue-950/55"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <Wand2 className="h-4 w-4 shrink-0 text-blue-400" />
                      <span className="truncate text-sm font-semibold">
                        {selectedTool.name}
                      </span>
                    </span>

                    <ChevronDown
                      className={`ml-2 h-5 w-5 shrink-0 text-blue-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      role="listbox"
                      className="absolute left-0 right-0 top-[calc(100%+8px)] z-[100] max-h-80 overflow-y-auto rounded-2xl border-2 border-blue-500/40 bg-[#080d1d] p-2 shadow-2xl shadow-blue-950/60"
                    >
                      <div className="px-3 pb-2 pt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        AI Generation Tools
                      </div>

                      {aiTools.map((tool) => {
                        const active = selectedTool.path === tool.path;

                        return (
                          <button
                            key={tool.path}
                            type="button"
                            role="option"
                            aria-selected={active}
                            onClick={() => {
                              setSelectedTool(tool);
                              setIsOpen(false);
                            }}
                            className={`w-full rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                              active
                                ? "bg-blue-500/15 text-blue-300"
                                : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                            }`}
                          >
                            {tool.name}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Search button */}
                <button
                  type="button"
                  onClick={handleSearch}
                  disabled={!query.trim()}
                  className="group/search flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-red-500 bg-red-500 px-7 text-sm font-black text-white shadow-lg shadow-red-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-red-400 hover:shadow-red-500/35 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800 disabled:text-slate-500 disabled:shadow-none"
                >
                  {/* ALWAYS RED ICON */}
                  <Search className="h-5 w-5 text-red-100 transition-transform duration-300 group-hover/search:scale-110" />
                  <span>Generate</span>
                </button>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs font-medium text-slate-500 sm:text-sm">
            Choose an AI tool, enter your topic and generate your first idea.
          </p>
        </div>

        {/* Feature chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {[
            ["AI Content", "red", Sparkles],
            ["YouTube SEO", "blue", Zap],
            ["Smart Ideas", "green", Wand2],
            ["Fast Generation", "yellow", Play],
          ].map(([label, color, Icon]) => {
            const classes =
              color === "red"
                ? "border-red-500/25 bg-red-500/5 text-red-300"
                : color === "green"
                  ? "border-green-500/25 bg-green-500/5 text-green-300"
                  : color === "yellow"
                    ? "border-yellow-400/25 bg-yellow-400/5 text-yellow-300"
                    : "border-blue-500/25 bg-blue-500/5 text-blue-300";

            return (
              <span
                key={label}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold backdrop-blur-sm ${classes}`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            );
          })}
        </div>

        {/* Bottom tool indicators */}
        <div className="mt-12 flex items-center justify-center gap-3 text-xs text-slate-500">
          <span className="h-px w-10 bg-white/10 sm:w-16" />
          <span>10 AI generation tools</span>
          <span className="h-px w-10 bg-white/10 sm:w-16" />
        </div>
      </div>

      {/* Local animation for rotating heading */}
      <style>{`
        @keyframes heroWord {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;