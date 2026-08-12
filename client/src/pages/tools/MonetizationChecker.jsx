import { useState } from "react";
import { Link } from "react-router-dom";
import api from "@/services/api";

import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";

function MonetizationChecker() {
  const [channel, setChannel] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const faqs = [
    {
      question: "Does the YouTube Monetization Checker guarantee approval?",
      answer:
        "No. TubeKit can only provide an estimated assessment using publicly available channel information. YouTube makes the final Partner Program eligibility and approval decision.",
    },
    {
      question: "What are the YouTube monetization requirements?",
      answer:
        "For ad revenue, YouTube currently lists 1,000 subscribers plus either 4,000 valid public watch hours in the last 12 months or 10 million valid public Shorts views in the last 90 days. Other YPP features can have different requirements.",
    },
    {
      question: "Can a channel be rejected after reaching the required numbers?",
      answer:
        "Yes. Meeting numerical thresholds does not automatically guarantee approval. YouTube also reviews channels for compliance with its monetization policies and other requirements.",
    },
    {
      question: "Does YouTube monetization depend only on subscribers?",
      answer:
        "No. Subscriber count is only one factor. Watch hours, Shorts views, channel activity, policy compliance and the requirements of the specific monetization feature can also matter.",
    },
    {
      question: "Can a third-party tool see a channel's actual YPP status?",
      answer:
        "No. A public-data checker cannot access a creator's private YouTube Studio or Partner Program information. It can only estimate eligibility from publicly available information.",
    },
    {
      question: "Is the TubeKit YouTube Monetization Checker free?",
      answer:
        "Yes. TubeKit provides the YouTube Monetization Checker as a free tool for creators.",
    },
  ];

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
        title="YouTube Monetization Checker | Check YPP Eligibility Free"
        description="Check a YouTube channel's estimated monetization eligibility using publicly available channel data. Analyze subscribers, views, videos and estimated YPP status with TubeKit's free YouTube Monetization Checker."
        keywords="YouTube monetization checker, YouTube monetization eligibility checker, YouTube channel monetization checker, YouTube Partner Program checker, YPP eligibility checker, YouTube monetization requirements, YouTube monetization checker free, YouTube YPP checker"
        canonical="/tools/monetization-checker"
        faqs={faqs}
      />

      <ToolLayout>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-white">
            <span className="text-red-400">YouTube</span>{" "}
            <span className="text-yellow-400">Monetization</span>{" "}
            <span className="text-green-400">Checker</span>
          </h1>

          <p className="mt-3 leading-7 text-muted-foreground">
            Check a YouTube channel's estimated monetization eligibility
            using publicly available channel information.
          </p>
        </div>

        {/* Checker */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <label
            htmlFor="channel-url"
            className="mb-2 block font-semibold text-white"
          >
            YouTube Channel URL
          </label>

          <input
            id="channel-url"
            type="url"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="https://youtube.com/@channel"
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
              {loading
                ? "Analyzing Channel..."
                : "Check Monetization"}
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

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

              {result.channel?.thumbnail && (
                <img
                  src={result.channel.thumbnail}
                  alt={`${result.channel.name || "YouTube"} channel thumbnail`}
                  className="h-24 w-24 rounded-full object-cover"
                />
              )}

              <div>
                <h2 className="text-3xl font-black text-white">
                  {result.channel?.name || "YouTube Channel"}
                </h2>

                {result.channel?.id && (
                  <p className="mt-1 break-all text-sm text-slate-400">
                    Channel ID: {result.channel.id}
                  </p>
                )}
              </div>

            </div>

            {/* Stats */}
            <div className="mt-10 grid gap-5 md:grid-cols-3">

              <InfoCard
                title="Subscribers"
                value={formatNumber(
                  result.channel?.subscribers
                )}
                color="red"
              />

              <InfoCard
                title="Total Views"
                value={formatNumber(
                  result.channel?.views
                )}
                color="yellow"
              />

              <InfoCard
                title="Videos"
                value={formatNumber(
                  result.channel?.videos
                )}
                color="green"
              />

            </div>

            {/* Analysis */}
            <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">

              <h3 className="text-xl font-black text-blue-400">
                Estimated Monetization Status
              </h3>

              <p className="mt-4 text-3xl font-black text-green-400">
                {result.analysis?.status || "Unknown"}
              </p>

              {result.analysis?.confidence !== undefined && (
                <p className="mt-3 text-slate-300">
                  Confidence:{" "}
                  <span className="font-bold text-white">
                    {result.analysis.confidence}%
                  </span>
                </p>
              )}

              <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
                <p className="text-sm leading-6 text-slate-400">
                  This is an estimate based on publicly available
                  YouTube data. TubeKit cannot access private YouTube
                  Studio information and cannot guarantee YPP approval.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* SEO Content */}
        <section className="mt-16 space-y-12">

          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">
                YouTube Monetization
              </span>{" "}
              <span className="text-yellow-400">
                Checker
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              Want to know whether a YouTube channel may be eligible
              for monetization? TubeKit's YouTube Monetization Checker
              analyzes publicly available channel information and
              provides an estimated assessment.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              Enter a public YouTube channel URL to review available
              subscriber, view and video statistics and get an
              estimated monetization status.
            </p>
          </div>

          {/* How to Use */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">
                How to Use the
              </span>{" "}
              <span className="text-blue-400">
                YouTube Monetization Checker
              </span>
            </h2>

            <ol className="mt-5 list-decimal space-y-3 pl-6 text-muted-foreground">
              <li>Copy the public YouTube channel URL.</li>
              <li>Paste it into the checker above.</li>
              <li>Click Check Monetization.</li>
              <li>Wait while TubeKit analyzes available channel data.</li>
              <li>Review the estimated monetization status.</li>
              <li>Verify the latest YPP requirements through YouTube.</li>
            </ol>
          </div>

          {/* What Is Monetization */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-yellow-400">
                What Is YouTube
              </span>{" "}
              <span className="text-green-400">
                Monetization?
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              YouTube monetization allows eligible creators to earn
              revenue from supported YouTube features. These can include
              advertising, YouTube Premium revenue, memberships,
              Supers and Shopping, depending on eligibility.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              YouTube reviews channels before accepting them into the
              YouTube Partner Program and continues to check channels
              for compliance with its policies.
            </p>
          </div>

          {/* Current Requirements */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-blue-400">
                YouTube Monetization
              </span>{" "}
              <span className="text-red-400">
                Requirements
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              YouTube has different thresholds for different
              monetization features. For ad revenue, YouTube currently
              lists the following main thresholds:
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6">
                <h3 className="text-xl font-black text-red-400">
                  Long-Form Videos
                </h3>

                <p className="mt-3 text-2xl font-black text-white">
                  1,000 Subscribers
                </p>

                <p className="mt-2 text-muted-foreground">
                  Plus 4,000 valid public watch hours in the
                  last 12 months.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6">
                <h3 className="text-xl font-black text-blue-400">
                  YouTube Shorts
                </h3>

                <p className="mt-3 text-2xl font-black text-white">
                  1,000 Subscribers
                </p>

                <p className="mt-2 text-muted-foreground">
                  Plus 10 million valid public Shorts views
                  in the last 90 days.
                </p>
              </div>

            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              These are the main thresholds for ad revenue. Other
              YPP features can have different eligibility requirements.
            </p>
          </div>

          {/* Expanded YPP */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">
                What About the
              </span>{" "}
              <span className="text-yellow-400">
                500 Subscriber
              </span>{" "}
              <span className="text-red-400">
                Threshold?
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              In eligible countries and regions, YouTube's expanded
              Partner Program can provide earlier access to certain
              fan-funding and Shopping features.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              The expanded YPP threshold can include 500 subscribers,
              3 public uploads in the last 90 days, and either 3,000
              valid public watch hours in the last 12 months or
              3 million valid public Shorts views in the last 90 days.
            </p>
          </div>

          {/* Factors */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">
                Factors That Affect
              </span>{" "}
              <span className="text-blue-400">
                Monetization Eligibility
              </span>
            </h2>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-muted-foreground">
              <li>Subscriber and qualifying view/watch-time thresholds.</li>
              <li>Compliance with YouTube monetization policies.</li>
              <li>Originality and value of published content.</li>
              <li>Copyright and Community Guidelines compliance.</li>
              <li>Channel activity and available content for review.</li>
              <li>Availability of specific YPP features in your region.</li>
              <li>Other requirements applicable to the selected feature.</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-yellow-400">
                YouTube Monetization Checker
              </span>{" "}
              <span className="text-green-400">
                Features
              </span>
            </h2>

            <ul className="mt-6 grid gap-3 text-muted-foreground sm:grid-cols-2">
              <li>✓ Public channel data analysis</li>
              <li>✓ Subscriber statistics</li>
              <li>✓ Total channel views</li>
              <li>✓ Video count</li>
              <li>✓ Estimated monetization status</li>
              <li>✓ Confidence score when available</li>
              <li>✓ Quick channel analysis</li>
              <li>✓ Free to use</li>
            </ul>
          </div>

          {/* Important Note */}
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6">
            <h2 className="text-2xl font-black text-yellow-400">
              Important: This Is an Estimate
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              TubeKit cannot see a creator's private YouTube Studio
              information, application status or internal YPP review.
              Therefore, the result shown by this tool should be treated
              as an estimate rather than an official monetization decision.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              Always check YouTube's official Partner Program information
              before relying on an eligibility result.
            </p>
          </div>

          {/* Internal Links */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">
                More YouTube
              </span>{" "}
              <span className="text-blue-400">
                Creator Tools
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              Continue improving your YouTube channel with TubeKit's
              free creator and SEO tools.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Link
                to="/tools/money-calculator"
                className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5 transition hover:border-red-400"
              >
                <h3 className="font-black text-red-400">
                  YouTube Money Calculator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Estimate potential YouTube earnings from views and RPM.
                </p>
              </Link>

              <Link
                to="/tools/rpm-calculator"
                className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5 transition hover:border-yellow-400"
              >
                <h3 className="font-black text-yellow-400">
                  YouTube RPM Calculator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Calculate estimated revenue per 1,000 views.
                </p>
              </Link>

              <Link
                to="/tools/cpm-calculator"
                className="rounded-2xl border border-green-500/30 bg-green-500/5 p-5 transition hover:border-green-400"
              >
                <h3 className="font-black text-green-400">
                  YouTube CPM Calculator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Calculate advertising-related CPM estimates.
                </p>
              </Link>

              <Link
                to="/tools/tags-generator"
                className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 transition hover:border-blue-400"
              >
                <h3 className="font-black text-blue-400">
                  YouTube Tags Generator →
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Generate relevant tags for your YouTube videos.
                </p>
              </Link>

            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">
                Frequently Asked Questions
              </span>{" "}
              <span className="text-blue-400">
                About YouTube Monetization
              </span>
            </h2>

            <div className="mt-7 space-y-5">

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <h3 className="text-lg font-black text-white">
                    {faq.question}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Final CTA */}
          <div className="rounded-3xl border border-blue-500/30 bg-blue-500/5 p-7">

            <h2 className="text-2xl font-black text-white">
              Check a YouTube Channel's Estimated Status
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Enter a public YouTube channel URL above and analyze
              its available public information.
            </p>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="mt-5 rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 px-6 py-3 font-black text-white transition hover:opacity-90"
            >
              Check Monetization ↑
            </button>

          </div>

        </section>
      </ToolLayout>
    </>
  );
}

function InfoCard({ title, value, color }) {
  const colors = {
    red: "border-red-500/30 bg-red-500/5 text-red-400",
    yellow: "border-yellow-500/30 bg-yellow-500/5 text-yellow-400",
    green: "border-green-500/30 bg-green-500/5 text-green-400",
    blue: "border-blue-500/30 bg-blue-500/5 text-blue-400",
  };

  return (
    <div
      className={`rounded-2xl border p-6 ${
        colors[color] || colors.blue
      }`}
    >
      <p className="text-sm font-semibold">
        {title}
      </p>

      <p className="mt-3 text-2xl font-black text-white">
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