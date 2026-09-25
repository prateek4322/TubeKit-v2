import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";

function ChannelAnalyzer() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const generatedForRef = useRef("");

  const analyzeChannel = async (value) => {
    const input = String(value || "").trim();

    if (!input) {
      setError(
        "Please enter a YouTube channel URL, handle, channel ID, or supported channel input first."
      );
      setResult(null);
      return;
    }

    if (generatedForRef.current === input && loading) return;

    generatedForRef.current = input;
    setLoading(true);
    setError("");

    try {
      const response = await api.get("/youtube/channel-analyzer", {
        params: { channel: input },
      });

      const data = response?.data?.data || response?.data || null;

      if (!data) {
        throw new Error("No channel analysis data was returned.");
      }

      setResult(data);
    } catch (err) {
      console.error("Channel Analyzer Error:", err);

      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Unable to analyze this channel right now. Please try again.";

      setError(message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = ({ topic }) => {
    setQuery(topic);
    analyzeChannel(topic);
  };

  useEffect(() => {
    if (!query) return;

    const timer = setTimeout(() => {
      analyzeChannel(query);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const copyText = async (text) => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(String(text));
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const copyReport = async () => {
    if (!result) return;

    const channel = result.channel || result.channelInfo || {};

    const lines = [
      "TubeKit Channel Analysis",
      "",
      `Channel: ${channel.title || "N/A"}`,
      `Channel ID: ${channel.channelId || "N/A"}`,
      `Handle: ${channel.handle || "N/A"}`,
      `Subscribers: ${channel.subscriberCount ?? "N/A"}`,
      `Total Views: ${channel.viewCount ?? "N/A"}`,
      `Videos: ${channel.videoCount ?? "N/A"}`,
      `Country: ${channel.country || "N/A"}`,
      `Published: ${channel.publishedAt || "N/A"}`,
      `Channel Score: ${result.score ?? "N/A"}`,
      "",
      "Channel Description",
      channel.description || "N/A",
      "",
      "Channel Statistics",
      `Subscribers: ${channel.subscriberCount ?? "N/A"}`,
      `Total Views: ${channel.viewCount ?? "N/A"}`,
      `Videos: ${channel.videoCount ?? "N/A"}`,
      `Average Views: ${result.statistics?.averageViews ?? "N/A"}`,
      `Average Likes: ${result.statistics?.averageLikes ?? "N/A"}`,
      `Average Comments: ${result.statistics?.averageComments ?? "N/A"}`,
      "",
      "Branding",
      `Profile Image: ${channel.profileImage || "N/A"}`,
      `Banner: ${channel.bannerImage || "N/A"}`,
      "",
      "Recommendations",
      ...(result.recommendations || []).map(
        (item, index) => `${index + 1}. ${item}`
      ),
    ];

    await copyText(lines.join("\n"));
  };

  const channel = result?.channel || result?.channelInfo || {};
  const statistics = result?.statistics || {};
  const branding = result?.branding || {};

  const score = Number(result?.score);
  const normalizedScore = Number.isFinite(score)
    ? Math.max(0, Math.min(100, score))
    : 0;

  const scoreTone =
    normalizedScore >= 80
      ? "text-green-400"
      : normalizedScore >= 60
        ? "text-yellow-400"
        : "text-red-400";

  const scoreLabel =
    result?.grade ||
    (normalizedScore >= 80
      ? "Strong"
      : normalizedScore >= 60
        ? "Needs Improvement"
        : normalizedScore > 0
          ? "Needs Work"
          : "Not Available");

  const formatNumber = (value) => {
    if (value === null || value === undefined || value === "") return "N/A";

    const numeric = Number(value);

    if (!Number.isFinite(numeric)) return String(value);

    return new Intl.NumberFormat("en-US", {
      notation: numeric >= 1000 ? "compact" : "standard",
      maximumFractionDigits: 1,
    }).format(numeric);
  };

  const formatDate = (value) => {
    if (!value) return "N/A";

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) return value;

    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const MetricCard = ({ label, value, helper, icon }) => (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition-all duration-300 hover:border-red-500/40">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {label}
          </p>
          <p className="mt-2 break-words text-2xl font-black text-white">
            {value}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-sm font-bold text-red-400">
          {icon}
        </div>
      </div>

      {helper && (
        <p className="mt-3 text-xs leading-5 text-slate-500">{helper}</p>
      )}
    </div>
  );

  const ScoreBar = ({ label, score: itemScore }) => {
    const numericScore = Number(itemScore);

    const width = Number.isFinite(numericScore)
      ? Math.max(0, Math.min(100, numericScore))
      : 0;

    return (
      <div>
        <div className="mb-2 flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-slate-300">{label}</span>
          <span className="text-sm font-bold text-white">
            {Number.isFinite(numericScore) ? `${numericScore}/100` : "N/A"}
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 transition-all duration-700"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <>

<SEO
        title="YouTube Channel Analyzer - Detailed Channel Analysis | TubeKit"
        description="Analyze a YouTube channel with TubeKit. View channel profile, banner, description, subscribers, views, videos, branding, statistics, growth signals, SEO checks and optimization recommendations."
        canonical="/tools/channel-analyzer"
        keywords={[
          "YouTube channel analyzer",
          "YouTube channel checker",
          "channel analytics",
          "YouTube channel analysis",
          "YouTube subscriber checker",
          "YouTube channel statistics",
          "YouTube channel profile",
          "YouTube channel banner",
          "YouTube channel SEO analyzer",
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Tools", url: "/tools" },
          { name: "Channel Analyzer", url: "/tools/channel-analyzer" },
        ]}
      />

      <ToolLayout>
        <ToolHeader
          title="YouTube Channel Analyzer"
          description="Get a detailed public-data analysis of a YouTube channel including its profile, banner, description, statistics, branding, content signals, SEO checks, and optimization opportunities."
        />

        <ToolForm
          query={query}
          setQuery={setQuery}
          onGenerate={handleGenerate}
          placeholder="Paste a channel URL, handle, or channel ID..."
          buttonText="Analyze Channel"
          helperText="Use a public YouTube channel URL, @handle, channel ID, or supported channel input."
        />

        {loading && (
          <div className="mt-10 rounded-3xl border border-red-500/20 bg-[#090909] p-8 text-center shadow-[0_0_60px_rgba(239,68,68,0.08)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-red-500/20 border-t-red-500" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Analyzing YouTube Channel
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Loading available channel profile, branding, statistics, content
              signals, SEO data, and optimization opportunities.
            </p>

            <div className="mx-auto mt-7 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Channel profile",
                "Banner & branding",
                "Subscribers & views",
                "Content statistics",
                "Channel SEO",
                "Optimization signals",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-slate-300"
                >
                  <span className="mr-2 text-red-400">[OK]</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="mt-10 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-sm leading-6 text-red-300">
            {error}
          </div>
        )}

        {result && !loading && (
          <section className="mt-10 space-y-6">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#090909] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="relative h-44 overflow-hidden bg-[#111] sm:h-56 lg:h-64">
                {channel.bannerImage || branding.bannerImage ? (
                  <img
                    src={channel.bannerImage || branding.bannerImage}
                    alt={`${channel.title || "YouTube channel"} banner`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-r from-red-950/60 via-[#111827] to-blue-950/60" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
              </div>

              <div className="relative px-6 pb-7 sm:px-8">
                <div className="-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex min-w-0 items-end gap-4">
                    <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-[#090909] bg-[#111] shadow-2xl sm:h-32 sm:w-32">
                      {channel.profileImage || branding.profileImage ? (
                        <img
                          src={channel.profileImage || branding.profileImage}
                          alt={`${channel.title || "YouTube channel"} profile`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-red-500/10 text-3xl font-black text-red-400">
                          {String(channel.title || "C").charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 pb-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
                          CHANNEL REPORT
                        </span>

                        {channel.handle && (
                          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                            {channel.handle}
                          </span>
                        )}
                      </div>

                      <h2 className="mt-3 truncate text-2xl font-black text-white sm:text-3xl">
                        {channel.title || "YouTube Channel"}
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        Channel ID: {channel.channelId || "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {channel.channelUrl && (
                      <a
                        href={channel.channelUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-sm font-bold text-blue-300 transition hover:bg-blue-500/15"
                      >
                        Open Channel
                      </a>
                    )}

<button
                      type="button"
                      onClick={copyReport}
                      className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-bold text-red-300 transition hover:bg-red-500/15"
                    >
                      Copy Report
                    </button>
                  </div>
                </div>

                {!!channel.description && (
                  <div className="mt-7 max-w-4xl">
                    <p className="whitespace-pre-line text-sm leading-7 text-slate-400">
                      {channel.description}
                    </p>
                  </div>
                )}

                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                  <span>
                    Joined:{" "}
                    <strong className="text-slate-300">
                      {formatDate(channel.publishedAt)}
                    </strong>
                  </span>

                  {channel.country && (
                    <span>
                      Country:{" "}
                      <strong className="text-slate-300">
                        {channel.country}
                      </strong>
                    </span>
                  )}

                  {channel.customUrl && (
                    <span>
                      URL:{" "}
                      <strong className="text-slate-300">
                        {channel.customUrl}
                      </strong>
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                label="Subscribers"
                value={formatNumber(channel.subscriberCount)}
                helper="Public subscriber count"
                icon="S"
              />

              <MetricCard
                label="Total Views"
                value={formatNumber(channel.viewCount)}
                helper="Lifetime channel views"
                icon="V"
              />

              <MetricCard
                label="Videos"
                value={formatNumber(channel.videoCount)}
                helper="Published videos"
                icon="C"
              />

              <MetricCard
                label="Channel Score"
                value={
                  Number.isFinite(score) ? `${score}/100` : "N/A"
                }
                helper={scoreLabel}
                icon="A"
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8 lg:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                  Channel Overview
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Channel Performance Snapshot
                </h3>

                <div className="mt-7 space-y-6">
                  <ScoreBar label="Overall Channel" score={result.score} />
                  <ScoreBar label="Channel SEO" score={result.seo?.score} />
                  <ScoreBar
                    label="Branding"
                    score={result.branding?.score}
                  />
                  <ScoreBar
                    label="Content Signals"
                    score={result.content?.score}
                  />
                  <ScoreBar
                    label="Description"
                    score={result.description?.score}
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <p className={`text-5xl font-black ${scoreTone}`}>
                  {Number.isFinite(score) ? score : "N/A"}
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Channel Score
                </p>

                <p className={`mt-4 text-lg font-bold ${scoreTone}`}>
                  {scoreLabel}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  This score is a TubeKit analytical indicator based on
                  available public channel information and returned checks.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                  Channel Statistics
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Detailed Numbers
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <MetricCard
                    label="Subscribers"
                    value={formatNumber(statistics.subscriberCount ?? channel.subscriberCount)}
                    helper="Current public count"
                    icon="S"
                  />

                  <MetricCard
                    label="Views"
                    value={formatNumber(statistics.viewCount ?? channel.viewCount)}
                    helper="Total public views"
                    icon="V"
                  />

                  <MetricCard
                    label="Videos"
                    value={formatNumber(statistics.videoCount ?? channel.videoCount)}
                    helper="Total uploads"
                    icon="U"
                  />

                  <MetricCard
                    label="Avg. Views"
                    value={formatNumber(statistics.averageViews)}
                    helper="Average views per analyzed content set"
                    icon="A"
                  />

                  <MetricCard
                    label="Avg. Likes"
                    value={formatNumber(statistics.averageLikes)}
                    helper="Average likes"
                    icon="L"
                  />

                  <MetricCard
                    label="Avg. Comments"
                    value={formatNumber(statistics.averageComments)}
                    helper="Average comments"
                    icon="C"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                  Channel Details
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Profile Information
                </h3>

<div className="mt-6 space-y-3">
                  {[
                    ["Channel Name", channel.title],
                    ["Handle", channel.handle],
                    ["Channel ID", channel.channelId],
                    ["Custom URL", channel.customUrl],
                    ["Country", channel.country],
                    ["Created", formatDate(channel.publishedAt)],
                    ["Subscribers", formatNumber(channel.subscriberCount)],
                    ["Total Views", formatNumber(channel.viewCount)],
                    ["Videos", formatNumber(channel.videoCount)],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-5 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3"
                    >
                      <span className="text-sm text-slate-500">{label}</span>
                      <span className="max-w-[65%] break-words text-right text-sm font-semibold text-slate-200">
                        {value || "N/A"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#090909]">
                <div className="border-b border-white/10 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-400">
                    Channel Branding
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    Profile & Banner
                  </h3>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
                    {channel.bannerImage || branding.bannerImage ? (
                      <img
                        src={channel.bannerImage || branding.bannerImage}
                        alt={`${channel.title || "Channel"} banner preview`}
                        className="aspect-[5/1] w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex aspect-[5/1] items-center justify-center bg-gradient-to-r from-red-950/60 via-[#111827] to-blue-950/60 text-sm text-slate-500">
                        Banner not available
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex items-center gap-5">
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-white/10 bg-[#111]">
                      {channel.profileImage || branding.profileImage ? (
                        <img
                          src={channel.profileImage || branding.profileImage}
                          alt={`${channel.title || "Channel"} profile preview`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-red-500/10 text-2xl font-black text-red-400">
                          {String(channel.title || "C").charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>

                    <div>
                      <p className="font-bold text-white">
                        {channel.title || "YouTube Channel"}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {channel.handle || "Handle unavailable"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      ["Profile Image", channel.profileImage || branding.profileImage],
                      ["Banner Image", channel.bannerImage || branding.bannerImage],
                      ["Branding Score", branding.score],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                      >
                        <p className="text-xs uppercase tracking-wider text-slate-500">
                          {label}
                        </p>
                        <p className="mt-2 break-all text-sm font-semibold text-slate-300">
                          {value || "N/A"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                  SEO Analysis
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Channel SEO Signals
                </h3>

                <div className="mt-6 space-y-6">
                  <ScoreBar label="SEO Score" score={result.seo?.score} />

                  {[
                    ["Channel Description", result.seo?.description],
                    ["Channel Keywords", result.seo?.keywords],
                    ["Custom URL", result.seo?.customUrl],
                    ["Branding", result.seo?.branding],
                    ["Profile Completeness", result.seo?.profileCompleteness],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-semibold text-slate-300">
                          {label}
                        </span>
                        <span className="text-sm font-bold text-white">
                          {typeof value === "boolean"
                            ? value
                              ? "Available"
                              : "Missing"
                            : value ?? "N/A"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {!!result.seo?.checks?.length && (
                  <div className="mt-6 space-y-3">
                    {result.seo.checks.map((check, index) => (
                      <div
                        key={`${check?.label || "seo-check"}-${index}`}
                        className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                      >
                        <span className="mr-2 text-sm font-bold text-green-400">
                          {check?.passed ? "[OK]" : "[! ]"}
                        </span>

                        <span className="text-sm font-semibold text-slate-200">
                          {check?.label || "SEO Check"}
                        </span>

                        {check?.message && (
                          <p className="mt-2 text-xs leading-5 text-slate-500">
                            {check.message}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

                      className="flex gap-4 rounded-2xl border border-white/10 bg-[#090909] p-5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-sm font-black text-red-400">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">
              <p className="text-sm leading-7 text-yellow-200/80">
                TubeKit's Channel Analyzer uses available public YouTube
                channel information. Statistics, branding assets, country,
                descriptions, and other fields may be unavailable depending
                on the channel and the data returned by the YouTube API. Any
                score shown by TubeKit is an analytical indicator and is not an
                official YouTube score or a guarantee of channel growth.
              </p>
            </div>
          </section>
        )}

        {!result && !loading && !error && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-[#090909] p-8 text-center">
            <h3 className="text-2xl font-black text-white">
              Get a Complete YouTube Channel Report
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Enter a public channel URL, handle, or channel ID to inspect
              profile information, banner, branding, statistics, SEO signals,
              content indicators, and optimization opportunities.
            </p>

            <div className="mx-auto mt-7 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Channel profile",
                "Profile image",
                "Channel banner",
                "Channel description",
                "Subscribers",
                "Total views",
                "Video count",
                "Channel ID",
                "Handle & custom URL",
                "Country & creation date",
                "Channel SEO",
                "Content signals",
                "Branding analysis",
                "Optimization checks",
                "Recommendations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-left text-sm text-slate-300"
                >
                  <span className="mr-2 text-red-400">[OK]</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

<section className="mt-20 border-t border-white/10 pt-16">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-red-400">
                Channel Insights
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Understand Your YouTube Channel
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                TubeKit brings important public channel information into one
                detailed dashboard so creators can inspect profile, branding,
                statistics, SEO, and content signals in one place.
              </p>
            </div>

            <div className="mt-10 space-y-8 text-slate-300">
              <article>
                <h3 className="text-xl font-bold text-white">
                  What does a YouTube Channel Analyzer show?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Depending on the information available for a channel, the
                  analyzer can display its profile image, banner, channel
                  name, handle, channel ID, description, subscriber count,
                  total views, video count, country, creation date, branding
                  signals, SEO checks, content signals, and recommendations.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-bold text-white">
                  Can I see the channel banner and profile picture?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Yes. When YouTube returns the relevant public branding
                  assets, TubeKit displays the channel banner and profile image
                  directly inside the analysis report.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-bold text-white">
                  Can I analyze another YouTube channel?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Yes. Enter the public URL, supported handle, or channel ID
                  for the channel you want to inspect.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-bold text-white">
                  Is the channel score an official YouTube metric?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  No. The score is generated by TubeKit from the available
                  public data and configured analysis checks. It is not an
                  official YouTube ranking or growth prediction.
                </p>
              </article>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <Link
                to="/tools/seo-analyzer"
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-red-500/40"
              >
                <p className="text-sm font-bold text-red-400">
                  YouTube SEO Analyzer
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Analyze individual video SEO signals in more detail.
                </p>
              </Link>

              <Link
                to="/tools/tag-extractor"
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-yellow-500/40"
              >
                <p className="text-sm font-bold text-yellow-400">
                  YouTube Tag Extractor
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Extract available tags from a YouTube video.
                </p>
              </Link>

              <Link
                to="/tools/description-extractor"
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-green-500/40"
              >
                <p className="text-sm font-bold text-green-400">
                  Description Extractor
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Inspect the public description of a YouTube video.
                </p>
              </Link>

              <Link
                to="/tools/seo-analyzer"
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-blue-500/40"
              >
                <p className="text-sm font-bold text-blue-400">
                  SEO Analyzer
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Get a broader video SEO report with actionable checks.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-16">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                FAQ
              </span>

              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                YouTube Channel Analyzer FAQs
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {[
                {
                  q: "What can I enter into the Channel Analyzer?",
                  a: "You can enter a supported public YouTube channel URL, handle, channel ID, or other channel input supported by the backend.",
                },
                {
                  q: "Will the analyzer show the channel profile picture?",
                  a: "Yes, when the public profile image is returned by the YouTube data source.",
                },
                {
                  q: "Will it show the channel banner?",
                  a: "Yes, when the channel branding data contains a public banner image.",
                },
                {
                  q: "Can I see subscriber count and total views?",
                  a: "Yes, when those public channel statistics are available through the YouTube data source.",
                },
                {
                  q: "Why is some channel information shown as N/A?",
                  a: "Not every channel exposes every field, and some fields may not be returned by the available YouTube API response. TubeKit displays N/A when the requested information is unavailable.",
                },
                {
                  q: "Does the Channel Analyzer predict channel growth?",
                  a: "No. Its scores and recommendations are analytical indicators based on available public data and should not be treated as guaranteed growth predictions.",
                },
              ].map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-white/10 bg-[#090909] p-5"
                >
                  <summary className="cursor-pointer list-none pr-8 text-base font-bold text-white">
                    {faq.q}
                  </summary>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </ToolLayout>
    </>
  );
}

export default ChannelAnalyzer;