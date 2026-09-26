import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Search, ChevronDown, Sparkles, Wand2, Check, X } from "lucide-react";
import BackgroundEffects from "./BackgroundEffects";

const essentialTools = [
  { name: "YouTube Tag Extractor", path: "/tools/tag-extractor" },
  { name: "YouTube Hashtag Extractor", path: "/tools/hashtag-extractor" },
  { name: "YouTube Description Extractor", path: "/tools/description-extractor" },
  { name: "YouTube Shadowban Detector", path: "/tools/shadowban-detector" },
  { name: "YouTube Channel Analyzer", path: "/tools/channel-analyzer" },
  { name: "YouTube SEO Analyzer", path: "/tools/seo-analyzer" },
  { name: "YouTube Comment Reader", path: "/tools/comment-reader" },
  { name: "Video ID Extractor", path: "/tools/video-id-extractor" },
  { name: "Thumbnail Downloader", path: "/tools/thumbnail-downloader" },
  { name: "Channel ID Finder", path: "/tools/channel-id-finder" },
  { name: "Monetization Checker", path: "/tools/monetization-checker" },
];

const rotatingWords = [
  "Tags",
  "Hashtags",
  "Descriptions",
  "Channels",
  "SEO",
  "Comments",
  "Video ",
];

function Hero({ onToolSelect }) {
  const defaultTool =
    essentialTools.find((tool) => tool.name === "Monetization Checker") ||
    essentialTools[0];

  const [selectedTool, setSelectedTool] = useState(defaultTool);
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
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleSearch = () => {
    const value = query.trim();

    if (!value) {
      setError("Please enter a YouTube URL first.");
      return;
    }

    setError("");

    if (!selectedTool) return;

    onToolSelect(selectedTool, value);
  };

  const handleInputKeyDown = (event) => {
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
          <span>YouTube Creator Utilities</span>
          <span className="h-3 w-px bg-white/15" />
          <Sparkles className="h-3 w-3 text-yellow-400 sm:h-3.5 sm:w-3.5" />
          <span className="text-slate-400">Extract. Analyze. Optimize.</span>
        </div>

        <div className="max-w-5xl text-center">
          <h1 className="text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Analyze Your YouTube
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
            Extract YouTube data, analyze channels and videos, check SEO
            signals, and explore useful creator insights from one powerful
            toolkit.
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
                    onKeyDown={handleInputKeyDown}
                    placeholder="Paste a YouTube URL..."
                    aria-label="Paste a YouTube URL"
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

                <div className="w-full md:w-60 lg:w-64">
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-haspopup="dialog"
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
                    <span>Open Tool</span>
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
                    Paste a YouTube URL and select an essential tool to
                    continue.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 flex items-center justify-center gap-2.5 text-[10px] text-slate-500 sm:mt-12 sm:gap-3 sm:text-xs">
          <span className="h-px w-8 bg-white/10 sm:w-16" />
          <span>11 essential creator tools</span>
          <span className="h-px w-8 bg-white/10 sm:w-16" />
        </div>
      </div>

      {/* TOOL SELECTOR POPUP */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex h-[100dvh] w-screen items-center justify-center overflow-hidden bg-black/70 px-4 py-5 backdrop-blur-sm sm:px-6 sm:py-8"
            role="dialog"
            aria-modal="true"
            aria-label="Select a YouTube creator tool"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            <div
              ref={selectorRef}
              className="relative flex max-h-[calc(100dvh-40px)] w-full max-w-2xl flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#17191b] shadow-[0_30px_100px_rgba(0,0,0,0.75)] sm:max-h-[calc(100dvh-64px)] sm:rounded-[1.75rem]"
              onMouseDown={(event) => event.stopPropagation()}
            >
              {/* Popup header */}
              <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7 sm:py-5">
                <div className="min-w-0 pr-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
                    YouTube Creator Tools
                  </p>

                  <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">
                    Select a Tool
                  </h2>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Choose a tool to switch your creator workflow.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close tool selector"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Tool list */}
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-2.5 sm:p-3">
                {essentialTools.map((tool) => {
                  const active = selectedTool.path === tool.path;

                  return (
                    <button
                      key={tool.path}
                      type="button"
                      role="option"
                      aria-selected={active}
                      onClick={() => handleToolSelect(tool)}
                      className={`group flex min-h-[68px] w-full items-center justify-between border-b border-white/[0.08] px-3.5 py-3.5 text-left transition-all duration-200 last:border-b-0 sm:min-h-[76px] sm:px-5 sm:py-4 ${
                        active
                          ? "bg-white/[0.045] text-white"
                          : "text-slate-200 hover:bg-white/[0.035]"
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-3.5 sm:gap-4">
                        <span
                          className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all ${
                            active
                              ? "bg-fuchsia-400 shadow-[0_0_14px_rgba(232,121,249,0.8)]"
                              : "border-2 border-slate-400 bg-transparent"
                          }`}
                        />

                        <span className="min-w-0 truncate text-base font-bold sm:text-lg">
                          {tool.name}
                        </span>
                      </span>

                      <span
                        className={`ml-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                          active
                            ? "border-fuchsia-400 bg-fuchsia-400/10 shadow-[0_0_18px_rgba(232,121,249,0.18)]"
                            : "border-slate-400 group-hover:border-white"
                        }`}
                      >
                        {active && (
                          <Check className="h-4 w-4 text-fuchsia-300" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Popup footer */}
              <div className="shrink-0 border-t border-white/10 px-5 py-3.5 sm:px-7">
                <p className="text-center text-[10px] font-medium text-slate-500 sm:text-xs">
                  {essentialTools.length} essential creator tools available
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}

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