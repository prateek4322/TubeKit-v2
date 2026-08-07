import {
  Copy,
  RotateCcw,
  Download,
  Share2,
} from "lucide-react";

function ToolOutput({
  results,
  loading,
  onCopy,
  onCopyAll,
  onRegenerate,
}) {
  if (loading) {
    return (
      <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-2xl font-bold text-white">
          Generating...
        </h2>

        <div className="mt-6 space-y-4">
          <div className="h-16 animate-pulse rounded-xl bg-slate-800" />
          <div className="h-16 animate-pulse rounded-xl bg-slate-800" />
          <div className="h-16 animate-pulse rounded-xl bg-slate-800" />
        </div>
      </div>
    );
  }

  const hasResults = Array.isArray(results)
    ? results.length > 0
    : Boolean(results);

  if (!hasResults) {
    return (
      <div className="mt-10 rounded-3xl border border-dashed border-slate-700 bg-slate-900 p-10 text-center">
        <h2 className="text-2xl font-bold text-white">
          Output
        </h2>

        <p className="mt-4 text-slate-400">
          Your AI-generated content will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">

        <h2 className="text-2xl font-bold text-white">
          Generated Result
        </h2>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={onCopyAll}
            className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
          >
            <Copy size={18} />
            Copy All
          </button>

          <button
            onClick={onRegenerate}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
          >
            <RotateCcw size={18} />
            Regenerate
          </button>

          <button
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-500"
          >
            <Download size={18} />
            Download
          </button>

          <button
            className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-500"
          >
            <Share2 size={18} />
            Share
          </button>

        </div>

      </div>

      {Array.isArray(results) ? (
        <div className="space-y-4">

          {results.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950 p-5"
            >

              <p className="text-white">
                {item}
              </p>

              <button
                onClick={() => onCopy(item)}
                className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-white hover:bg-slate-700"
              >
                Copy
              </button>

            </div>
          ))}

        </div>
      ) : (
        <div className="rounded-xl border border-slate-700 bg-slate-950 p-6">

          <pre className="whitespace-pre-wrap font-sans text-white">
            {results}
          </pre>

        </div>
      )}

    </div>
  );
}

export default ToolOutput;