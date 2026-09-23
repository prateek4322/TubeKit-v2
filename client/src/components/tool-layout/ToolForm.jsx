import { useEffect, useState } from "react";

function ToolForm({
  onGenerate,
  loading,
  config = {},
}) {
  const {
    buttonText = "Generate",
    topicLabel = "Video Topic",
    topicPlaceholder = "Enter your topic...",
    initialTopic = "",
    showTone = true,
    showLanguage = true,
    showCount = true,
  } = config;

  const [topic, setTopic] = useState(initialTopic);
  const [language, setLanguage] = useState("English");
  const [tone, setTone] = useState("Professional");
  const [count, setCount] = useState(10);

  useEffect(() => {
    setTopic(initialTopic || "");
  }, [initialTopic]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (loading) return;

    if (!topic.trim()) {
      alert("Please enter a topic.");
      return;
    }

    onGenerate({
      topic,
      language,
      tone,
      count,
    });
  };

  const fieldClass =
    "w-full rounded-2xl border border-white/10 bg-[#080b12] px-4 py-3.5 text-sm text-white outline-none transition duration-200 placeholder:text-slate-600 hover:border-white/15 focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10 disabled:cursor-not-allowed disabled:opacity-60 sm:px-5";

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-5xl space-y-7">
      {/* Topic */}
      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <label
            htmlFor="tool-topic"
            className="text-sm font-bold text-white sm:text-base"
          >
            {topicLabel}
          </label>

          <span className="text-xs font-medium text-slate-600">
            Required
          </span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#050816] p-2 transition duration-200 focus-within:border-red-500/60 focus-within:shadow-[0_0_30px_rgba(239,68,68,0.08)]">
          <textarea
            id="tool-topic"
            rows={5}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder={topicPlaceholder}
            disabled={loading}
            className="min-h-[140px] w-full resize-y rounded-xl border-0 bg-transparent px-3 py-3 text-sm leading-7 text-white outline-none placeholder:text-slate-600 disabled:cursor-not-allowed sm:px-4 sm:text-base"
          />
        </div>

        <p className="mt-2 px-1 text-xs leading-5 text-slate-600">
          Add your video topic, keyword or idea. The more useful context you
          provide, the more relevant the generated result can be.
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {showLanguage && (
          <div>
            <label
              htmlFor="tool-language"
              className="mb-2.5 block text-sm font-semibold text-slate-300"
            >
              Language
            </label>

            <select
              id="tool-language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              disabled={loading}
              className={fieldClass}
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
        )}

        {showTone && (
          <div>
            <label
              htmlFor="tool-tone"
              className="mb-2.5 block text-sm font-semibold text-slate-300"
            >
              Tone
            </label>

            <select
              id="tool-tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              disabled={loading}
              className={fieldClass}
            >
              <option>Professional</option>
              <option>Casual</option>
              <option>Friendly</option>
              <option>Educational</option>
              <option>Funny</option>
            </select>
          </div>
        )}

        {showCount && (
          <div>
            <label
              htmlFor="tool-count"
              className="mb-2.5 block text-sm font-semibold text-slate-300"
            >
              Results
            </label>

            <select
              id="tool-count"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              disabled={loading}
              className={fieldClass}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
        )}
      </div>

      {/* Generate Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-2xl bg-red-500 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-red-500/10 transition duration-200 hover:-translate-y-0.5 hover:bg-red-400 hover:shadow-red-500/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
      >
        {loading ? "Generating..." : buttonText}
      </button>

      {/* AI Loading Indicator */}
      {loading && (
        <div className="rounded-2xl border border-white/10 bg-[#080b12] px-4 py-4 shadow-lg sm:px-5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-slate-800 border-t-red-400" />
              <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="truncate text-sm font-semibold text-white">
                  AI is generating your results
                  <span className="inline-block w-5 overflow-hidden">
                    <span className="animate-pulse">...</span>
                  </span>
                </p>

                <span className="hidden shrink-0 text-xs text-slate-600 sm:block">
                  Please wait
                </span>
              </div>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Analyzing your topic and creating useful results for you.
              </p>
            </div>
          </div>

          <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-900">
            <div className="h-full w-1/3 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-red-500" />
          </div>
        </div>
      )}
    </form>
  );
}

export default ToolForm;