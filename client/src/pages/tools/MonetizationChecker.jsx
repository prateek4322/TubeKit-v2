import { useState } from "react";
import api from "@/services/api";

import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";

function MonetizationChecker() {
  const [channel, setChannel] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeChannel = async () => {
    const value = channel.trim();

    if (!value) {
      alert("Please enter a YouTube channel URL.");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      const response = await api.post(
        "/youtube/monetization-analyzer",
        {
          channel: value,
        }
      );

      if (response.data.success) {
        setResult(response.data);
      } else {
        alert(
          response.data.message ||
            "Unable to analyze this channel."
        );
      }
    } catch (error) {
      console.error("MONETIZATION CHECKER ERROR:", error);
      console.error("RESPONSE:", error.response);
      console.error("REQUEST:", error.request);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Channel not found or unable to analyze the channel."
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setChannel("");
    setResult(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      analyzeChannel();
    }
  };

  return (
    <>
      <SEO
        title="YouTube Monetization Checker - Check Channel Eligibility"
        description="Check a YouTube channel's estimated monetization status using publicly available channel data. Use TubeKit's free YouTube Monetization Checker to analyze subscribers, views, videos and estimated eligibility."
        keywords="YouTube monetization checker, YouTube monetization eligibility checker, YouTube channel monetization checker, YouTube Partner Program checker, YPP eligibility checker, YouTube monetization requirements"
        canonical="/tools/monetization-checker"
      />

      <ToolLayout>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            YouTube Monetization Checker
          </h1>

          <p className="mt-3 text-muted-foreground">
            Check the estimated monetization status of a YouTube
            channel using publicly available channel information.
          </p>
        </div>

        {/* Checker Form */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <label
            htmlFor="channel-url"
            className="mb-2 block text-white"
          >
            YouTube Channel URL
          </label>

          <input
            id="channel-url"
            type="url"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="https://youtube.com/@MrBeast"
            disabled={loading}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none transition focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
          />

          <p className="mt-2 text-sm text-slate-500">
            Enter a public YouTube channel URL or supported channel
            identifier.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={analyzeChannel}
              disabled={loading || !channel.trim()}
              className="rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 px-6 py-3 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Check Monetization"}
            </button>

            <button
              type="button"
              onClick={reset}
              disabled={loading}
              className="rounded-xl bg-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">
            {/* Channel Information */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              {result.channel?.thumbnail && (
                <img
                  src={result.channel.thumbnail}
                  alt={`${result.channel.name || "YouTube"} channel thumbnail`}
                  className="h-24 w-24 rounded-full object-cover"
                />
              )}

              <div>
                <h2 className="text-3xl font-bold text-white">
                  {result.channel?.name || "YouTube Channel"}
                </h2>

                {result.channel?.id && (
                  <p className="mt-1 break-all text-sm text-slate-400">
                    Channel ID: {result.channel.id}
                  </p>
                )}
              </div>
            </div>

            {/* Channel Stats */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <InfoCard
                title="Subscribers"
                value={formatNumber(
                  result.channel?.subscribers
                )}
              />

              <InfoCard
                title="Views"
                value={formatNumber(
                  result.channel?.views
                )}
              />

              <InfoCard
                title="Videos"
                value={formatNumber(
                  result.channel?.videos
                )}
              />
            </div>

            {/* Analysis */}
            <div className="mt-10 rounded-2xl bg-slate-950 p-6">
              <h3 className="text-xl font-bold text-white">
                Estimated Monetization Status
              </h3>

              <p className="mt-4 text-3xl font-bold text-green-400">
                {result.analysis?.status || "Unknown"}
              </p>

              {result.analysis?.confidence !== undefined && (
                <p className="mt-3 text-slate-300">
                  Confidence:{" "}
                  <span className="font-semibold text-white">
                    {result.analysis.confidence}%
                  </span>
                </p>
              )}

              <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-sm leading-6 text-slate-400">
                  This result is an estimate based on publicly
                  available YouTube data. A third-party checker
                  cannot see a creator's private YouTube Partner
                  Program status or guarantee approval.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SEO Content */}
        <section className="mt-12 space-y-10">
          {/* How to Use */}
          <div>
            <h2 className="text-2xl font-bold">
              How to Use the YouTube Monetization Checker
            </h2>

            <p className="mt-3 text-muted-foreground">
              TubeKit's YouTube Monetization Checker helps creators
              review publicly available channel information and
              understand whether a channel may meet common
              monetization requirements.
            </p>

            <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
              <li>Enter the YouTube channel URL.</li>
              <li>
                Click the Check Monetization button.
              </li>
              <li>
                Wait for the tool to analyze the available
                information.
              </li>
              <li>Review the channel statistics and result.</li>
              <li>
                Check YouTube's official policies before making
                a monetization decision.
              </li>
            </ol>
          </div>

          {/* What Is Monetization */}
          <div>
            <h2 className="text-2xl font-bold">
              What Is YouTube Monetization?
            </h2>

            <p className="mt-3 text-muted-foreground">
              YouTube monetization allows eligible creators to earn
              revenue from certain features and content on YouTube.
              Eligibility depends on YouTube's current policies and
              requirements, which can change over time.
            </p>

            <p className="mt-3 text-muted-foreground">
              A third-party checker can provide an estimate or
              informational assessment, but it cannot guarantee
              approval for the YouTube Partner Program.
            </p>
          </div>

          {/* Eligibility Factors */}
          <div>
            <h2 className="text-2xl font-bold">
              YouTube Monetization Eligibility Factors
            </h2>

            <p className="mt-3 text-muted-foreground">
              Monetization eligibility can depend on several factors,
              including:
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>
                Channel and content eligibility.
              </li>

              <li>
                Compliance with YouTube's monetization policies.
              </li>

              <li>
                Required subscriber and watch-time or Shorts-view
                thresholds.
              </li>

              <li>
                Originality and value of published content.
              </li>

              <li>
                Compliance with copyright and community guidelines.
              </li>

              <li>
                Availability of monetization features in the
                creator's region.
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-bold">
              Features
            </h2>

            <ul className="mt-5 grid gap-3 text-muted-foreground sm:grid-cols-2">
              <li>✓ Channel eligibility assessment</li>
              <li>✓ Public channel data analysis</li>
              <li>✓ Subscriber statistics</li>
              <li>✓ Channel views and video count</li>
              <li>✓ Estimated monetization status</li>
              <li>✓ Quick results</li>
              <li>✓ Easy-to-use checker</li>
              <li>✓ Free to use</li>
            </ul>
          </div>

          {/* Important Note */}
          <div>
            <h2 className="text-2xl font-bold">
              Important Note About Monetization Checks
            </h2>

            <p className="mt-3 text-muted-foreground">
              A public-data checker cannot confirm whether a channel
              has actually been accepted into the YouTube Partner
              Program. It can only estimate eligibility using the
              information that is publicly available.
            </p>

            <p className="mt-3 text-muted-foreground">
              YouTube's official review process and current
              monetization policies determine the final eligibility
              decision.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold">
                  Does the monetization checker guarantee YouTube
                  approval?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  No. A third-party tool can only provide an
                  informational assessment. YouTube makes the final
                  eligibility and approval decisions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  What is required for YouTube monetization?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Requirements depend on the monetization feature and
                  YouTube's current Partner Program policies. Always
                  verify the latest requirements through YouTube's
                  official resources.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Can a channel be rejected even after meeting the
                  thresholds?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Meeting numerical thresholds does not by itself
                  guarantee approval. Channels must also satisfy
                  applicable YouTube policies and content requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Does YouTube monetization depend only on
                  subscribers?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  No. Different monetization features have different
                  eligibility requirements, and policy compliance is
                  also important.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Is the TubeKit Monetization Checker free?
                </h3>

                <p className="mt-2 text-muted-foreground">
                  TubeKit provides the Monetization Checker as a free
                  tool for creators.
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
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <p className="mt-3 text-2xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}

function formatNumber(value) {
  if (value === undefined || value === null) {
    return "—";
  }

  const number = Number(value);

  if (Number.isNaN(number)) {
    return String(value);
  }

  return number.toLocaleString();
}

export default MonetizationChecker;