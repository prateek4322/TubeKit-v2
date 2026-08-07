import { useState } from "react";
import api from "@/services/api";

import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function MonetizationChecker() {
  const [channel, setChannel] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeChannel = async () => {
    try {
      setLoading(true);

      const response = await api.post(
        "/youtube/monetization-analyzer",
        {
          channel,
        }
      );

      if (response.data.success) {
        setResult(response.data);
      }

    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Channel not found"
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setChannel("");
    setResult(null);
  };

  return (
    <ToolLayout>
      <ToolHeader
        title="YouTube Monetization Checker"
        description="Analyze any YouTube channel."
      />

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <label className="mb-2 block text-white">
          Channel URL
        </label>

        <input
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          placeholder="https://youtube.com/@MrBeast"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
        />

        <div className="mt-8 flex gap-4">

          <button
            onClick={analyzeChannel}
            className="rounded-xl bg-blue-600 px-6 py-3 text-white"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>

          <button
            onClick={reset}
            className="rounded-xl bg-slate-700 px-6 py-3 text-white"
          >
            Reset
          </button>

        </div>

      </div>

      {result && (
        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <div className="flex items-center gap-6">

            <img
              src={result.channel.thumbnail}
              alt=""
              className="h-24 w-24 rounded-full"
            />

            <div>

              <h2 className="text-3xl font-bold text-white">
                {result.channel.name}
              </h2>

              <p className="text-slate-400">
                {result.channel.id}
              </p>

            </div>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <InfoCard
              title="Subscribers"
              value={result.channel.subscribers.toLocaleString()}
            />

            <InfoCard
              title="Views"
              value={result.channel.views.toLocaleString()}
            />

            <InfoCard
              title="Videos"
              value={result.channel.videos.toLocaleString()}
            />

          </div>

          <div className="mt-10 rounded-2xl bg-slate-950 p-6">

            <h3 className="text-xl font-bold text-white">
              Estimated Status
            </h3>

            <p className="mt-4 text-3xl text-green-400">
              {result.analysis.status}
            </p>

            <p className="mt-3 text-slate-300">
              Confidence: {result.analysis.confidence}%
            </p>

            <p className="mt-6 text-sm text-slate-500">
              This is an estimate based on public YouTube
              data. The official monetization status is not
              publicly available.
            </p>

          </div>

        </div>
      )}
    </ToolLayout>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950 p-6 text-center">
      <h3 className="text-slate-400">
        {title}
      </h3>

      <p className="mt-3 text-2xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}

export default MonetizationChecker;