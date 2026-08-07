import { useState } from "react";

function ToolForm({
  onGenerate,
  loading,
  config = {},
}) {
  const {
    buttonText = "Generate",
    topicLabel = "Video Topic",
    topicPlaceholder = "Enter your topic...",
    showTone = true,
    showLanguage = true,
    showCount = true,
  } = config;

  const [topic, setTopic] = useState("");
  const [language, setLanguage] = useState("English");
  const [tone, setTone] = useState("Professional");
  const [count, setCount] = useState(10);

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
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
    >
      <label className="mb-3 block font-semibold text-white">
        {topicLabel}
      </label>

      <textarea
        rows={5}
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder={topicPlaceholder}
        className="mb-6 w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none"
      />

      <div className="grid gap-5 md:grid-cols-3">

        {showLanguage && (
          <div>
            <label className="mb-2 block text-white">
              Language
            </label>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
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
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
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
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
          </div>
        )}

      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 py-4 font-bold text-white disabled:opacity-50"
      >
        {loading ? "Generating..." : buttonText}
      </button>
    </form>
  );
}

export default ToolForm;