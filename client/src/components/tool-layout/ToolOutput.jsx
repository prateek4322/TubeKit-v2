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
      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">
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
      <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <h2 className="text-2xl font-bold text-white">
          Output
        </h2>

        <p className="mt-4 text-slate-400">
          Your AI-generated content will appear here.
        </p>
      </div>
    );
  }

  // Convert result into downloadable/shareable text
  const outputText = Array.isArray(results)
    ? results.join("\n")
    : String(results);

  const handleDownload = () => {
    try {
      const blob = new Blob([outputText], {
        type: "text/plain;charset=utf-8",
      });

      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "tubekit-ai-result.txt";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download result.");
    }
  };

  const handleShare = async () => {
    try {
      const shareData = {
        title: "TubeKit AI Generated Result",
        text: outputText,
        url: window.location.href,
      };

      // Mobile browsers / supported desktop browsers
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      // Fallback for browsers without Web Share API
      await navigator.clipboard.writeText(
        `${outputText}\n\nGenerated with TubeKit: ${window.location.href}`
      );

      alert("Result copied. You can now share it.");
    } catch (error) {
      // User closing the share dialog is not really an error
      if (error?.name !== "AbortError") {
        console.error("Share failed:", error);

        try {
          await navigator.clipboard.writeText(outputText);
          alert("Result copied. You can now share it.");
        } catch (copyError) {
          console.error("Share fallback failed:", copyError);
          alert("Unable to share result.");
        }
      }
    }
  };

  return (
    <div className="mt-8">
      {/* Header + Actions */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">
          Generated Result
        </h2>

        <div className="flex flex-wrap gap-3">
          {/* Copy All */}
          <button
            type="button"
            onClick={onCopyAll}
            className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-white transition hover:bg-slate-700"
          >
            <Copy size={18} />
            Copy All
          </button>

          {/* Regenerate */}
          <button
            type="button"
            onClick={onRegenerate}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-500"
          >
            <RotateCcw size={18} />
            Regenerate
          </button>

          {/* Download */}
          <button
            type="button"
            onClick={handleDownload}
            className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-500"
          >
            <Download size={18} />
            Download
          </button>

          {/* Share */}
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-500"
          >
            <Share2 size={18} />
            Share
          </button>
        </div>
      </div>

      {/* Results */}
      {Array.isArray(results) ? (
        <div className="space-y-4">
          {results.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 rounded-xl border border-slate-700 bg-slate-950 p-5"
            >
              <p className="text-white">
                {item}
              </p>

              <button
                type="button"
                onClick={() => onCopy(item)}
                className="shrink-0 rounded-lg bg-slate-800 px-4 py-2 text-sm text-white transition hover:bg-slate-700"
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