import { useState } from "react";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
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
    <> <SEO
title="YouTube Monetization Checker | TubeKit"
description="Check YouTube monetization eligibility."
url="/tools/monetization-checker"
/>
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
      <section className="mt-12 space-y-10">
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the YouTube Monetization Checker
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's YouTube Monetization Checker helps creators review
      publicly available channel information and understand whether a
      channel may meet common monetization requirements. Enter the
      requested channel information and review the result.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter the requested YouTube channel information.</li>
      <li>Click the Check Monetization button.</li>
      <li>Wait for the tool to analyze the available information.</li>
      <li>Review the result and any displayed requirements.</li>
      <li>Check YouTube's official policies before making a monetization decision.</li>
    </ol>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      What Is YouTube Monetization?
    </h2>

    <p className="mt-3 text-muted-foreground">
      YouTube monetization allows eligible creators to earn revenue from
      certain features and content on YouTube. Eligibility depends on
      YouTube's current policies and requirements, which can change over
      time.
    </p>

    <p className="mt-3 text-muted-foreground">
      A third-party checker can provide an estimate or informational
      assessment, but it cannot guarantee approval for the YouTube
      Partner Program.
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      Factors Related to YouTube Monetization
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Channel and content eligibility.</li>
      <li>Compliance with YouTube's monetization policies.</li>
      <li>Required subscriber and watch-time or Shorts-view thresholds.</li>
      <li>Originality and value of published content.</li>
      <li>Compliance with copyright and community guidelines.</li>
      <li>Availability of monetization features in the creator's region.</li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      YouTube Monetization Checker Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ Channel eligibility assessment</li>
      <li>✓ Easy-to-use checker</li>
      <li>✓ Quick results</li>
      <li>✓ Monetization information</li>
      <li>✓ Useful for creators</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  <div>
    <h2 className="text-2xl font-bold">
      Frequently Asked Questions
    </h2>

    <div className="mt-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          Does the monetization checker guarantee YouTube approval?
        </h3>
        <p className="mt-2 text-muted-foreground">
          No. A third-party tool can only provide an informational
          assessment. YouTube makes the final eligibility and approval
          decisions.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          What is required for YouTube monetization?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Requirements depend on the monetization feature and YouTube's
          current Partner Program policies. Always verify the latest
          requirements through YouTube's official resources.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can a channel be rejected even after meeting the thresholds?
        </h3>
        <p className="mt-2 text-muted-foreground">
          Meeting numerical thresholds does not by itself guarantee
          approval. Channels must also satisfy applicable YouTube
          policies and content requirements.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Does YouTube monetization depend only on subscribers?
        </h3>
        <p className="mt-2 text-muted-foreground">
          No. Different monetization features have different eligibility
          requirements, and policy compliance is also important.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit Monetization Checker free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the Monetization Checker as a free tool for
          creators.
        </p>
      </div>
    </div>
  </div>
</section>
    </ToolLayout>
    </>
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