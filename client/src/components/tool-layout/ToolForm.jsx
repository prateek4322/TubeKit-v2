import { useEffect, useState } from "react";

function ToolForm({
  onGenerate,
  loading,
  config = {},
}) {
  const {
    buttonText = "Generate",
    topicPlaceholder =
      "Enter your topic, keyword, video idea, or question...",
    initialTopic = "",
  } = config;

  const [topic, setTopic] = useState(initialTopic);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    {
      title: "Analyzing your idea",
      description: "Understanding your topic and intent...",
    },
    {
      title: "Building content strategy",
      description: "Finding the best structure for your content...",
    },
    {
      title: "Generating content",
      description: "Creating high-quality results with AI...",
    },
    {
      title: "Optimizing for YouTube",
      description: "Refining your results for better performance...",
    },
    {
      title: "Finalizing results",
      description: "Putting everything together for you...",
    },
  ];

  useEffect(() => {
    setTopic(initialTopic || "");
  }, [initialTopic]);

  // Dynamic status while AI is working
  useEffect(() => {
    if (!loading) {
      setStatusIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setStatusIndex((prev) => (prev + 1) % statuses.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [loading]);

  const generate = () => {
    if (loading) return;

    const value = topic.trim();

    if (!value) {
      alert("Please enter a topic.");
      return;
    }

    onGenerate({
      topic: value,
      language: "English",
      tone: "Professional",
      count: 10,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generate();
  };

  const handleKeyDown = (e) => {
    // Enter = Generate
    // Shift + Enter = New line
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generate();
    }
  };

  const currentStatus = statuses[statusIndex];

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-5xl"
    >
      {/* =========================
          CREATOR INPUT
      ========================== */}
      <div
        className="
          group
          overflow-hidden
          rounded-2xl
          border border-blue-500/70
          bg-[#080b12]
          shadow-[0_0_25px_rgba(59,130,246,0.06)]
          transition-all
          duration-300
          focus-within:border-blue-400
          focus-within:shadow-[0_0_40px_rgba(59,130,246,0.15)]
        "
      >
        {/* AI Scan Line */}
        <div className="relative h-[2px] overflow-hidden bg-blue-500/10">
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-32
              bg-gradient-to-r
              from-transparent
              via-blue-400
              to-transparent
              opacity-0
              group-focus-within:opacity-100
              animate-[inputScan_2.2s_linear_infinite]
            "
          />
        </div>

        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={topicPlaceholder}
          disabled={loading}
          rows={5}
          className="
            min-h-[135px]
            w-full
            resize-y
            border-0
            bg-transparent
            px-4
            py-4
            text-sm
            leading-7
            text-white
            outline-none
            placeholder:text-slate-600
            disabled:cursor-not-allowed
            disabled:opacity-60
            sm:px-5
            sm:text-base
          "
          aria-label="Enter your topic"
        />

        {/* Input Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-3 py-2.5 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400" />
            </span>

            <span className="text-[11px] text-slate-500">
              AI Ready
            </span>
          </div>

          <span className="text-[11px] text-slate-600">
            Enter to generate
            <span className="hidden sm:inline">
              {" "} | Shift + Enter for new line
            </span>
          </span>
        </div>
      </div>

      {/* =========================
          GENERATE BUTTON
      ========================== */}
      <div className="mt-5">
        <button
          type="submit"
          disabled={loading}
          className="
            relative
            w-full
            overflow-hidden
            rounded-2xl
            bg-red-500
            px-5
            py-4
            text-sm
            font-bold
            text-white
            shadow-lg
            shadow-red-500/20
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-red-400
            hover:shadow-red-500/30
            active:translate-y-0
            disabled:cursor-not-allowed
            disabled:opacity-60
            sm:text-base
          "
        >
          {/* Button Shine */}
          {!loading && (
            <span
              className="
                absolute
                inset-y-0
                -left-20
                w-16
                rotate-12
                bg-white/20
                blur-md
                animate-[buttonShine_3s_ease-in-out_infinite]
              "
            />
          )}

          <span className="relative">
            {loading ? "Creating..." : buttonText}
          </span>
        </button>
      </div>

      {/* =========================
          CREATOR STUDIO LOADER
      ========================== */}
      {loading && (
        <div
          className="
            relative
            mt-5
            overflow-hidden
            rounded-2xl
            border border-blue-500/20
            bg-[#060b16]
            shadow-[0_0_45px_rgba(37,99,235,0.12)]
          "
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

          <div className="relative p-4 sm:p-5">

            {/* Header */}
            <div className="flex items-center gap-3">

              {/* AI Orb */}
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10">

                <div
                  className="
                    absolute
                    inset-1
                    animate-spin
                    rounded-xl
                    border-2
                    border-blue-500/10
                    border-t-blue-400
                    border-r-cyan-400
                  "
                />

                <div className="absolute h-5 w-5 animate-ping rounded-full bg-blue-400/20" />

                <div
                  className="
                    relative
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-blue-400
                    shadow-[0_0_18px_rgba(96,165,250,1)]
                  "
                />
              </div>

              {/* Status */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">

                  <p
                    key={statusIndex}
                    className="animate-[statusFade_0.4s_ease-out] text-sm font-bold text-white sm:text-base"
                  >
                    {currentStatus.title}
                    <span className="ml-1 text-blue-400 animate-pulse">
                      ...
                    </span>
                  </p>

                  <span className="hidden rounded-full border border-blue-400/20 bg-blue-500/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-blue-400 sm:block">
                    AI Working
                  </span>
                </div>

                <p
                  key={`desc-${statusIndex}`}
                  className="mt-1 animate-[statusFade_0.4s_ease-out] text-xs text-slate-500"
                >
                  {currentStatus.description}
                </p>
              </div>
            </div>

            {/* =========================
                CREATOR PIPELINE
            ========================== */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {statuses.map((step, index) => {
                const active = index === statusIndex;
                const completed = index < statusIndex;

                return (
                  <div
                    key={step.title}
                    className={`
                      relative
                      overflow-hidden
                      rounded-xl
                      border
                      px-2
                      py-2.5
                      text-center
                      transition-all
                      duration-500
                      ${
                        active
                          ? "border-blue-400/30 bg-blue-500/10 shadow-[0_0_18px_rgba(59,130,246,0.10)]"
                          : completed
                          ? "border-blue-500/10 bg-blue-500/[0.04]"
                          : "border-white/[0.05] bg-white/[0.02]"
                      }
                    `}
                  >
                    {active && (
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-[stepShine_1.8s_linear_infinite]" />
                    )}

                    <div className="relative flex items-center justify-center gap-1.5">

                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            active
                              ? "bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)] animate-pulse"
                              : completed
                              ? "bg-cyan-400"
                              : "bg-slate-700"
                          }
                        `}
                      />

                      <span
                        className={`
                          text-[9px]
                          font-medium
                          sm:text-[10px]
                          ${
                            active
                              ? "text-blue-300"
                              : completed
                              ? "text-slate-400"
                              : "text-slate-600"
                          }
                        `}
                      >
                        {step.title.replace("your ", "")}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =========================
                AI SCAN PROGRESS
            ========================== */}
            <div className="mt-5">

              <div className="relative h-2 overflow-hidden rounded-full bg-slate-900">

                {/* Moving Progress */}
                <div
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-[38%]
                    rounded-full
                    bg-gradient-to-r
                    from-blue-700
                    via-blue-400
                    to-cyan-300
                    shadow-[0_0_22px_rgba(59,130,246,0.7)]
                    animate-[aiProgress_2.4s_ease-in-out_infinite]
                  "
                />

                {/* Scan */}
                <div
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-24
                    bg-gradient-to-r
                    from-transparent
                    via-white/50
                    to-transparent
                    blur-[1px]
                    animate-[progressScan_1.2s_linear_infinite]
                  "
                />
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-400">
                  AI Creator Engine
                </span>

                <span className="text-[9px] uppercase tracking-[0.15em] text-slate-600">
                  Processing
                </span>
              </div>
            </div>

            {/* Bottom Message */}
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-blue-500/10 bg-blue-500/[0.035] px-3 py-2.5">

              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>

              <p className="text-[10px] leading-4 text-slate-500 sm:text-xs">
                TubeKit AI is working on your request. Your results will appear here automatically.
              </p>
            </div>
          </div>

          <style>{`
            @keyframes inputScan {
              0% {
                transform: translateX(-150px);
              }
              100% {
                transform: translateX(900px);
              }
            }

            @keyframes buttonShine {
              0% {
                transform: translateX(-100px) rotate(12deg);
              }
              45%,
              100% {
                transform: translateX(500px) rotate(12deg);
              }
            }

            @keyframes statusFade {
              from {
                opacity: 0;
                transform: translateY(4px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes stepShine {
              0% {
                transform: translateX(-110%);
              }
              45%,
              100% {
                transform: translateX(110%);
              }
            }

            @keyframes aiProgress {
              0% {
                transform: translateX(-120%);
                width: 28%;
              }
              45% {
                transform: translateX(100%);
                width: 48%;
              }
              100% {
                transform: translateX(300%);
                width: 34%;
              }
            }

            @keyframes progressScan {
              0% {
                transform: translateX(-100px);
              }
              100% {
                transform: translateX(500px);
              }
            }
          `}</style>
        </div>
      )}
    </form>
  );
}

export default ToolForm;