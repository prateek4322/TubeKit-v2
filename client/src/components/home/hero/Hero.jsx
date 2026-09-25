import { useEffect, useRef, useState } from "react";
import { Search, ChevronDown, Sparkles, Wand2, Check } from "lucide-react";
import BackgroundEffects from "./BackgroundEffects";

const aiTools = [
  { name: "AI Title Generator", path: "/tools/title-generator", type: "ai" },
  { name: "AI Description Generator", path: "/tools/description-generator", type: "ai" },
  { name: "AI Tags Generator", path: "/tools/tags-generator", type: "ai" },
  { name: "AI Script Generator", path: "/tools/script-generator", type: "ai" },
  { name: "AI Hashtag Generator", path: "/tools/hashtag-generator", type: "ai" },
  { name: "AI Keyword Generator", path: "/tools/keyword-generator", type: "ai" },
  { name: "AI Hook Generator", path: "/tools/hook-generator", type: "ai" },
  { name: "AI Outline Generator", path: "/tools/outline-generator", type: "ai" },
  { name: "AI Shorts Generator", path: "/tools/shorts-generator", type: "ai" },
  { name: "AI Thumbnail Generator", path: "/tools/thumbnail-generator", type: "ai" },
];

const essentialTools = [
  { name: "YouTube Tag Extractor", path: "/tools/tag-extractor", type: "essential" },
  { name: "YouTube Hashtag Extractor", path: "/tools/hashtag-extractor", type: "essential" },
  { name: "YouTube Description Extractor", path: "/tools/description-extractor", type: "essential" },
  { name: "YouTube Shadowban Detector", path: "/tools/shadowban-detector", type: "essential" },
  { name: "YouTube Channel Analyzer", path: "/tools/channel-analyzer", type: "essential" },
  { name: "YouTube SEO Analyzer", path: "/tools/seo-analyzer", type: "essential" },
  { name: "YouTube Comment Reader", path: "/tools/comment-reader", type: "essential" },
  { name: "Video ID Extractor", path: "/tools/video-id-extractor", type: "essential" },
  { name: "Thumbnail Downloader", path: "/tools/thumbnail-downloader", type: "essential" },
  { name: "Channel ID Finder", path: "/tools/channel-id-finder", type: "essential" },
  { name: "Monetization Checker", path: "/tools/monetization-checker", type: "essential" },
];

const searchTools = [...aiTools, ...essentialTools];

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
  const [error, setError] = useState("");
  const selectorRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleSearch = () => {
    const value = query.trim();

    if (!value) {
      setError("Please enter a topic, keyword, URL, or video idea first.");
      return;
    }

    setError("");

    if (!selectedTool) return;

    onToolSelect(selectedTool, value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleSearch();
    if (event.key === "Escape") setIsOpen(false);
  };

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
    setIsOpen(false);
    setError("");
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#030712]">
      <BackgroundEffects />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-red-500/10 blur-[110px]" />
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-green-500/8 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-yellow-400/8 blur-[100px]" />
        <div className="absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[710px] max-w-7xl flex-col items-center justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.04] px-3.5 py-1.5 text-[11px] font-bold tracking-wide text-slate-300 shadow-xl shadow-black/20 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs">
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-50" />
            <span className="relative inline-flex h-full w-full rounded-full bg-red-500" />
          </span>
          <span>AI Creator Studio</span>
          <span className="h-3 w-px bg-white/15" />
          <Sparkles className="h-3 w-3 text-yellow-400 sm:h-3.5 sm:w-3.5" />
          <span className="text-slate-400">Built for YouTube</span>
        </div>

        <div className="max-w-5xl text-center">
          <h1 className="text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Create Better YouTube
            <span className="relative mt-2 block h-[1.15em] overflow-hidden sm:mt-3">
              <span
                key={rotatingWords[wordIndex]}
                className="block animate-[heroWord_.5s_ease-out] text-red-500 drop-shadow-[0_0_22px_rgba(239,68,68,0.2)]"
              >
                {rotatingWords[wordIndex]}
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
            Generate titles, scripts, hooks, keywords, descriptions, hashtags
            and thumbnail concepts with a premium AI toolkit built for YouTube
            creators.
          </p>
        </div>

        <div className="mt-9 w-full max-w-4xl sm:mt-11 lg:max-w-5xl">
          <div className="group relative">
            <div className="pointer-events-none absolute -inset-[1px] rounded-[1.4rem] bg-gradient-to-r from-red-500/35 via-yellow-400/20 via-green-500/20 to-blue-500/35 opacity-80 blur-sm transition duration-500 group-hover:opacity-100" />

            <div className="relative rounded-[1.35rem] border border-white/10 bg-[#070b18]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:rounded-[1.6rem] sm:p-2.5">
              <div className="flex flex-col gap-2 md:flex-row">
                <div className="group/input flex min-h-12 min-w-0 flex-1 items-center rounded-xl border-2 border-red-500/70 bg-[#030712] px-3.5 transition duration-300 focus-within:border-red-400 focus-within:shadow-lg focus-within:shadow-red-500/15 sm:min-h-14 sm:px-4">
                  <Search
                    className="mr-2.5 h-[18px] w-[18px] shrink-0 !text-red-500 sm:mr-3 sm:h-5 sm:w-5"
                    style={{ color: "#ef4444", stroke: "#ef4444" }}
                    strokeWidth={2.5}
                  />

                  <input
                    type="text"
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                      if (error) setError("");
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder={
                      selectedTool?.type === "essential"
                        ? "Paste a YouTube URL..."
                        : "Enter your topic, niche or video idea..."
                    }
                    aria-label={
                      selectedTool?.type === "essential"
                        ? "Paste a YouTube URL"
                        : "Enter your topic, niche or video idea"
                    }
                    className="min-w-0 w-full bg-transparent text-xs font-medium text-white outline-none placeholder:text-slate-500 sm:text-sm lg:text-base"
                  />

                  {query && (
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setError("");
                      }}
                      className="ml-1.5 shrink-0 rounded-lg px-1.5 py-1 text-[10px] font-bold text-slate-500 transition hover:bg-white/5 hover:text-white sm:ml-2 sm:px-2 sm:text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div ref={selectorRef} className="relative w-full md:w-60 lg:w-64">
                  <button
                    type="button"
                    onClick={() => setIsOpen((open) => !open)}
                    onKeyDown={handleKeyDown}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    className={`flex min-h-12 w-full items-center justify-between rounded-xl border-2 px-3.5 text-left text-white transition-all duration-300 sm:min-h-14 sm:px-4 ${
                      isOpen
                        ? "border-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/10"
                        : "border-blue-500/45 bg-[#0a1023] hover:border-blue-400 hover:bg-blue-500/[0.06]"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/25 bg-blue-500/10 sm:h-9 sm:w-9">
                        <Wand2 className="h-3.5 w-3.5 text-blue-400 sm:h-4 sm:w-4" />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-500 sm:text-[10px]">
                          Select Tool
                        </span>
                        <span className="mt-0.5 block truncate text-xs font-semibold text-white sm:text-sm">
                          {selectedTool.name}
                        </span>
                      </span>
                    </span>

                    <ChevronDown
                      className={`ml-2 h-4 w-4 shrink-0 text-blue-400 transition-transform duration-300 sm:h-5 sm:w-5 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      role="listbox"
                      className="absolute left-0 right-0 top-[calc(100%+8px)] z-[100] overflow-hidden rounded-2xl border border-blue-500/30 bg-[#080d1d] p-2 shadow-2xl shadow-black/60"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 px-3 py-3">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-400">
                            TubeKit Tools
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            AI generation and URL tools
                          </p>
                        </div>

                        <Sparkles className="h-4 w-4 text-yellow-400" />
                      </div>

                      <div className="max-h-80 overflow-y-auto pt-2">
                        <div className="px-3 pb-1 pt-1 text-[9px] font-black uppercase tracking-[0.18em] text-red-400">
                          AI Generation
                        </div>

                        {aiTools.map((tool) => {
                          const active = selectedTool.path === tool.path;

                          return (
                            <button
                              key={tool.path}
                              type="button"
                              role="option"
                              aria-selected={active}
                              onClick={() => handleToolSelect(tool)}
                              className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-all ${
                                active
                                  ? "bg-blue-500/12 text-blue-300"
                                  : "text-slate-300 hover:bg-white/[0.045] hover:text-white"
                              }`}
                            >
                              <span className="flex items-center gap-3">
                                <span
                                  className={`h-2 w-2 rounded-full ${
                                    active ? "bg-blue-400" : "bg-slate-700"
                                  }`}
                                />
                                <span className="text-sm font-medium">
                                  {tool.name}
                                </span>
                              </span>

                              {active && (
                                <Check className="h-4 w-4 text-blue-400" />
                              )}
                            </button>
                          );
                        })}

                        <div className="my-2 border-t border-white/10" />

                        <div className="px-3 pb-1 pt-1 text-[9px] font-black uppercase tracking-[0.18em] text-green-400">
                          Essential URL Tools
                        </div>

                        {essentialTools.map((tool) => {
                          const active = selectedTool.path === tool.path;

                          return (
                            <button
                              key={tool.path}
                              type="button"
                              role="option"
                              aria-selected={active}
                              onClick={() => handleToolSelect(tool)}
                              className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-all ${
                                active
                                  ? "bg-green-500/12 text-green-300"
                                  : "text-slate-300 hover:bg-white/[0.045] hover:text-white"
                              }`}
                            >
                              <span className="flex items-center gap-3">
                                <span
                                  className={`h-2 w-2 rounded-full ${
                                    active ? "bg-green-400" : "bg-slate-700"
                                  }`}
                                />
                                <span className="text-sm font-medium">
                                  {tool.name}
                                </span>
                              </span>

                              {active && (
                                <Check className="h-4 w-4 text-green-400" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full md:w-auto">
                  <button
                    type="button"
                    onClick={handleSearch}
                    className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-red-500 bg-red-500 px-5 text-xs font-black text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-400 hover:shadow-red-500/35 sm:min-h-14 sm:px-6 sm:text-sm"
                  >
                    <Search
                      className="h-4 w-4 shrink-0 !text-white sm:h-5 sm:w-5"
                      style={{ color: "#ffffff", stroke: "#ffffff" }}
                      strokeWidth={2.5}
                    />
                    <span>
                      {selectedTool?.type === "essential" ? "Open Tool" : "Generate"}
                    </span>
                  </button>
                </div>
              </div>

              <div className="px-1 pt-2">
                {error ? (
                  <p className="text-center text-[10px] font-semibold leading-4 text-red-400 sm:text-xs">
                    {error}
                  </p>
                ) : (
                  <p className="text-center text-[10px] font-medium leading-4 text-slate-500 sm:text-xs">
                    {selectedTool?.type === "essential"
                      ? "Paste a YouTube URL and select an essential tool to continue."
                      : "Enter a topic, keyword, URL, or video idea and select an AI tool to get started."}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 flex items-center justify-center gap-2.5 text-[10px] text-slate-500 sm:mt-12 sm:gap-3 sm:text-xs">
          <span className="h-px w-8 bg-white/10 sm:w-16" />
          <span>21 creator tools</span>
          <span className="h-px w-8 bg-white/10 sm:w-16" />
        </div>
      </div>

      <style>{`
        @keyframes heroWord {
          0% { opacity: 0; transform: translateY(18px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>
    </section>
  );
}

export default Hero;