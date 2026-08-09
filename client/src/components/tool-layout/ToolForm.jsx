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

  // Hero se aayi query ko input mein set karega
  useEffect(() => {
    setTopic(initialTopic || "");
  }, [initialTopic]);

  const handleSubmit = (e) => {
    e.preventDefault();

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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-2 block text-white">
          {topicLabel}
        </label>

        <textarea
          rows={5}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder={topicPlaceholder}
          disabled={loading}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {showLanguage && (
          <div>
            <label className="mb-2 block text-white">
              Language
            </label>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              disabled={loading}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none disabled:opacity-60"
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
        )}

        {showTone && (
          <div>
            <label className="mb-2 block text-white">
              Tone
            </label>

            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              disabled={loading}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none disabled:opacity-60"
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
            <label className="mb-2 block text-white">
              Results
            </label>

            <select
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              disabled={loading}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none disabled:opacity-60"
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
        className="w-full rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 py-4 font-bold text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Generating..." : buttonText}
      </button>

      {/* AI Loading Indicator */}
      {loading && (
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-slate-400">
              AI is generating your results...
            </span>

            <span className="text-xs text-slate-500">
              Please wait
            </span>
          </div>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 animate-[loading_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      )}
    </form>
  );
}

export default ToolForm;