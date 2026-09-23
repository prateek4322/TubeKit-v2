import { useEffect, useState } from "react";
import { Search, ChevronDown, Sparkles, Zap, Wand2 } from "lucide-react";

import BackgroundEffects from "./BackgroundEffects";

const tools = [
  { name: "AI Title Generator", path: "/tools/title-generator" },
  { name: "AI Description Generator", path: "/tools/description-generator" },
  { name: "AI Tags Generator", path: "/tools/tags-generator" },
  { name: "AI Script Generator", path: "/tools/script-generator" },
  { name: "AI Hashtag Generator", path: "/tools/hashtag-generator" },
  { name: "AI Keyword Generator", path: "/tools/keyword-generator" },
  { name: "AI Hook Generator", path: "/tools/hook-generator" },
  { name: "AI Outline Generator", path: "/tools/outline-generator" },
  { name: "AI Shorts Generator", path: "/tools/shorts-generator" },
  { name: "AI Thumbnail Generator", path: "/tools/thumbnail-generator" },
  { name: "Monetization Checker", path: "/tools/monetization-checker" },
  { name: "Money Calculator", path: "/tools/money-calculator" },
  { name: "CPM Calculator", path: "/tools/cpm-calculator" },
  { name: "RPM Calculator", path: "/tools/rpm-calculator" },
  { name: "Channel ID Finder", path: "/tools/channel-id-finder" },
  { name: "Video ID Extractor", path: "/tools/video-id-extractor" },
  { name: "Thumbnail Downloader", path: "/tools/thumbnail-downloader" },
];

const rotatingWords = ["Titles", "Scripts", "SEO", "Thumbnails"];

function Hero({ onToolSelect }) {
  const [selectedTool, setSelectedTool] = useState(tools[0]);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2200);

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
    <section className="relative isolate overflow-hidden bg-[#050816]">
      <BackgroundEffects />

      {/* Extra RGYB ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-[8%] top-20 h-40 w-40 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute right-[8%] top-32 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-32 w-32 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-1/3 h-32 w-32 rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl flex-col items-center justify-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* Small badge */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-300 shadow-lg shadow-black/20 backdrop-blur-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>
          AI-powered YouTube Creator Toolkit
          <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
        </div>

        {/* Heading */}
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Create Better YouTube
            <span
              className="mt-2 block bg-[linear-gradient(90deg,#ef4444_0%,#facc15_32%,#22c55e_66%,#3b82f6_100%)] bg-clip-text text-transparent"
              key={rotatingWords[wordIndex]}
            >
              {rotatingWords[wordIndex]}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Generate titles, scripts, keywords, descriptions, hashtags and
            thumbnail ideas with a creator-focused AI toolkit built for
            faster YouTube workflows.
          </p>
        </div>

        {/* Search workspace */}
        <div className="mt-12 w-full max-w-5xl">
          <div className="relative rounded-[1.6rem] border border-white/10 bg-[#070b18]/90 p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-3">
            {/* RGYB animated accent */}
            <div className="pointer-events-none absolute -inset-px -z-10 rounded-[1.7rem] bg-[linear-gradient(90deg,rgba(239,68,68,.55),rgba(250,204,21,.45),rgba(34,197,94,.45),rgba(59,130,246,.55))] opacity-60 blur-sm" />

            <div className="flex flex-col gap-2.5 md:flex-row">
              {/* Search input */}
              <div className="group flex min-h-14 flex-1 items-center rounded-xl border-2 border-red-500/70 bg-[#050816] px-4 transition duration-300 focus-within:border-red-400 focus-within:shadow-lg focus-within:shadow-red-500/10">
                <Search className="mr-3 h-5 w-5 shrink-0 text-red-500 transition-transform duration-300 group-focus-within:scale-110" />

                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your topic, YouTube URL or Channel ID..."
                  aria-label="Enter topic, YouTube URL or Channel ID"
                  className="w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-slate-500 sm:text-base"
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="ml-2 rounded-md px-2 py-1 text-xs font-bold text-slate-500 transition hover:text-white"
                    aria-label="Clear search"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Tool selector */}
              <div className="relative md:w-64 lg:w-72">
                <button
                  type="button"
                  onClick={() => setIsOpen((open) => !open)}
                  onKeyDown={handleKeyDown}
                  aria-haspopup="listbox"
                  aria-expanded={isOpen}
                  className="flex min-h-14 w-full items-center justify-between rounded-xl border-2 border-blue-500/50 bg-blue-950/40 px-4 text-left text-white transition duration-300 hover:border-blue-400 hover:bg-blue-950/60"
                >
                  <span className="truncate text-sm font-semibold">
                    {selectedTool.name}
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
                    className="absolute left-0 right-0 top-[calc(100%+8px)] z-[100] max-h-72 overflow-y-auto rounded-2xl border-2 border-blue-500/40 bg-[#080d1d] p-2 shadow-2xl shadow-blue-950/50"
                  >
                    {tools.map((tool) => {
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
                className="group flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-red-500 bg-red-500 px-7 text-sm font-black text-white shadow-lg shadow-red-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-red-400 hover:shadow-red-500/30 disabled:cursor-not-allowed disabled:border-slate-700 disabled:bg-slate-800 disabled:text-slate-500 disabled:shadow-none"
              >
                <Search className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                <span>Search</span>
              </button>
            </div>
          </div>

          <p className="mt-4 text-center text-xs font-medium text-slate-500 sm:text-sm">
            Select a tool, enter your topic and start creating.
          </p>
        </div>

        {/* Quick feature chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {[
            ["AI Tools", "red", Sparkles],
            ["YouTube SEO", "blue", Zap],
            ["Content Ideas", "green", Wand2],
            ["Creator Utilities", "yellow", Sparkles],
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
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-semibold ${classes}`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;