import { useState } from "react";

import { Search, ChevronDown, Sparkles } from "lucide-react";

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

  const handleToolSearch = () => {
  onToolSelect(selectedTool, query.trim());
};

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleToolSearch();
    }

    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#050816]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Blue glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Red glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-red-500/10 blur-[120px]" />

      {/* Yellow glow */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-yellow-400/5 blur-[110px]" />

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* =====================================================
          RED DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute right-[-170px] top-[-210px] hidden h-[520px] w-[520px] lg:block">
        <div className="absolute inset-0 rounded-full border border-red-500/30" />
        <div className="absolute inset-[25px] rounded-full border border-red-500/25" />
        <div className="absolute inset-[50px] rounded-full border border-red-500/20" />
        <div className="absolute inset-[75px] rounded-full border border-red-500/15" />
        <div className="absolute inset-[100px] rounded-full border border-red-500/10" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        {/* Badge */}

        <div className="mb-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-yellow-400" />

            <span>All-in-One YouTube Creator Toolkit</span>
          </div>
        </div>

        {/* Heading */}

        <div className="max-w-5xl text-center">
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Ultimate YouTube{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Toolkit
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg md:text-xl">
            Unlock the full potential of your YouTube channel with our
            comprehensive suite of tools designed for creators of all levels.
          </p>
        </div>

        {/* =====================================================
            TOOL SEARCH
        ====================================================== */}

       <div className="mt-16 w-full max-w-5xl sm:mt-20">
          <div className="rounded-3xl border border-white/10 bg-[#0b1024]/95 p-3 shadow-[0_25px_90px_rgba(0,0,0,0.50)] backdrop-blur-xl">
            <div className="flex flex-col gap-2 md:flex-row">
              {/* Input */}

              <div className="flex min-h-[72px] flex-1 items-center">
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your topic, YouTube URL or Channel ID"
                  className="h-full w-full bg-transparent px-5 text-base text-white outline-none placeholder:text-slate-500 sm:text-lg"
                />
              </div>

              {/* Dropdown */}

              <div className="relative md:w-[300px]">
                <button
                  type="button"
                  onClick={() => setIsOpen((value) => !value)}
                  className="flex min-h-[64px] w-full items-center justify-between rounded-xl border border-white/10 bg-[#050816] px-5 text-left text-white transition hover:border-blue-400/40"
                >
                  <span className="truncate font-medium">
                    {selectedTool.name}
                  </span>

                  <ChevronDown
                    className={`ml-3 h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute left-0 right-0 top-[72px] z-50 max-h-[360px] overflow-y-auto rounded-xl border border-white/10 bg-[#0b1024] p-2 shadow-2xl">
                    {tools.map((tool) => (
                      <button
                        key={tool.path}
                        type="button"
                        onClick={() => {
                          setSelectedTool(tool);
                          setIsOpen(false);
                        }}
                        className={`w-full rounded-lg px-4 py-3 text-left text-sm transition ${
                          selectedTool.path === tool.path
                            ? "bg-blue-500/15 text-blue-300"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
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
                onClick={handleToolSearch}
                aria-label="Open selected YouTube tool"
                className="group flex min-h-[72px] items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 px-7 text-white shadow-lg shadow-blue-500/10 transition duration-200 hover:scale-[1.01] hover:shadow-blue-500/25 md:w-[80px]"
              >
                <Search className="h-7 w-7 transition-transform group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRUST / FEATURES
        ====================================================== */}

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <div className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
            <span className="mr-2">●</span>
            AI Powered
          </div>

          <div className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
            <span className="mr-2">●</span>
            Creator Focused
          </div>

          <div className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300">
            <span className="mr-2">●</span>
            Fast & Easy
          </div>

          <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            <span className="mr-2">●</span>
            Free Tools
          </div>
        </div>

        {/* Bottom accent */}

        <div className="mt-14 h-px w-32 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
      </div>
    </section>
  );
}

export default Hero;