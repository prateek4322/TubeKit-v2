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

  useEffect(() => {
    setTopic(initialTopic || "");
  }, [initialTopic]);

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

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-5xl"
    >
      {/* Search / Topic Input */}
      <div
        className="
          group
          rounded-2xl
          border border-blue-500/70
          bg-[#080b12]
          p-2
          shadow-[0_0_25px_rgba(59,130,246,0.06)]
          transition-all duration-300
          focus-within:border-blue-400
          focus-within:shadow-[0_0_35px_rgba(59,130,246,0.16)]
        "
      >
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
            rounded-xl
            border-0
            bg-transparent
            px-4
            py-3
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

        {/* Input Hint */}
        <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-3 py-2.5 sm:px-4">
          <span className="text-[11px] text-slate-500">
            Press Enter to generate
          </span>

          <span className="hidden text-[11px] text-slate-600 sm:block">
            Shift + Enter for a new line
          </span>
        </div>
      </div>

      {/* Space Between Input and Button */}
      <div className="mt-5">
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-2xl
            bg-red-500
            px-5
            py-4
            text-sm
            font-bold
            text-white
            shadow-lg
            shadow-red-500/10
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-red-400
            hover:shadow-red-500/25
            active:translate-y-0
            disabled:cursor-not-allowed
            disabled:opacity-60
            sm:text-base
          "
        >
          {loading ? "Generating..." : buttonText}
        </button>
      </div>

      {/* Premium AI Generation Loader */}
      {loading && (
        <div
          className="
            mt-5
            overflow-hidden
            rounded-2xl
            border border-blue-500/20
            bg-[#070b18]
            shadow-[0_0_40px_rgba(59,130,246,0.10)]
          "
        >
          <div className="p-4 sm:p-5">

            {/* Loader Header */}
            <div className="flex items-center gap-3">

              {/* Animated AI Icon */}
              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                "
              >
                <div
                  className="
                    absolute
                    inset-1
                    animate-spin
                    rounded-lg
                    border-2
                    border-blue-500/15
                    border-t-blue-400
                  "
                />

                <div
                  className="
                    h-2.5
                    w-2.5
                    animate-pulse
                    rounded-full
                    bg-blue-400
                    shadow-[0_0_15px_rgba(96,165,250,0.95)]
                  "
                />
              </div>

              {/* Loader Text */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-white sm:text-base">
                    Creating your results
                    <span className="ml-1 inline-block animate-pulse text-blue-400">
                      ...
                    </span>
                  </p>

                  <span className="hidden rounded-full bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-400 sm:block">
                    AI Working
                  </span>
                </div>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Analyzing your input and generating useful suggestions...
                </p>
              </div>
            </div>

            {/* Blue Filling Progress */}
            <div className="mt-5">
              <div className="relative h-2 overflow-hidden rounded-full bg-slate-900">
                <div
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-[35%]
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    via-blue-400
                    to-cyan-300
                    shadow-[0_0_20px_rgba(59,130,246,0.65)]
                    animate-[aiFill_1.7s_ease-in-out_infinite]
                  "
                />

                {/* Moving Shine */}
                <div
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-24
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                    animate-[aiShine_1.4s_linear_infinite]
                  "
                />
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-400">
                  Generating
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-slate-700">
                  Please wait
                </span>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes aiFill {
              0% {
                transform: translateX(-120%);
                width: 30%;
              }

              45% {
                transform: translateX(90%);
                width: 55%;
              }

              100% {
                transform: translateX(260%);
                width: 35%;
              }
            }

            @keyframes aiShine {
              0% {
                transform: translateX(-150px);
              }

              100% {
                transform: translateX(600px);
              }
            }
          `}</style>
        </div>
      )}
    </form>
  );
}

export default ToolForm;