import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Clipboard,
  ExternalLink,
  Eye,
  Info,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  Wallet,
  XCircle,
  Youtube,
} from "lucide-react";

import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";

function MonetizationChecker() {
  const [channel, setChannel] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  const faqs = [
    {
      question: "Does the YouTube Monetization Checker guarantee YPP approval?",
      answer:
        "No. TubeKit provides an estimated assessment from available public channel information. YouTube makes the final Partner Program eligibility and approval decision.",
    },
    {
      question: "What are the main YouTube Partner Program thresholds?",
      answer:
        "YouTube has different thresholds for different YPP features. The commonly used ad-revenue route is 1,000 subscribers plus either 4,000 valid public watch hours in the last 12 months or 10 million valid public Shorts views in the last 90 days. Earlier-access YPP features can have lower thresholds in eligible regions.",
    },
    {
      question: "Can TubeKit see my private YouTube Studio monetization status?",
      answer:
        "No. A public-data checker cannot access private YouTube Studio, Earn, application, AdSense, or internal review information.",
    },
    {
      question: "Can I know the exact watch hours or Shorts views from a public channel?",
      answer:
        "Usually not. Exact qualifying watch hours and qualifying Shorts views are creator-side metrics. TubeKit can display them only when they are actually available from the connected analysis response; otherwise it clearly marks them as unavailable or estimated.",
    },
    {
      question: "Does reaching 1,000 subscribers automatically enable ads?",
      answer:
        "No. Numerical thresholds are only part of the process. YouTube also reviews policy compliance, channel content and other eligibility conditions for the relevant YPP features.",
    },
    {
      question: "What should I do if my channel is close to monetization?",
      answer:
        "Use the readiness checklist to identify missing public signals, keep content original and policy-compliant, improve channel consistency, and verify the latest requirements in YouTube Studio and official YouTube documentation.",
    },
    {
      question: "Is the TubeKit YouTube Monetization Checker free?",
      answer:
        "Yes. TubeKit provides this checker as a free creator tool.",
    },
  ];

  const analyzeChannel = async () => {
    const value = channel.trim();

    if (!value) {
      alert("Please enter a YouTube channel URL or supported channel identifier.");
      return;
    }

    try {
      setLoading(true);
      setResult(null);
      setCopied(false);

      const response = await api.post("/youtube/monetization-analyzer", {
        channel: value,
      });

      if (response.data.success) {
        setResult(response.data);
      } else {
        alert(response.data.message || "Unable to analyze this channel.");
      }
    } catch (error) {
      console.error("MONETIZATION CHECKER ERROR:", error);
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
    setCopied(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      analyzeChannel();
    }
  };

  const channelData = result?.channel || result?.channelInfo || {};
  const stats = result?.statistics || result?.stats || {};
  const analysis = result?.analysis || {};
  const readiness = result?.readiness || result?.eligibility || {};
  const checks = result?.checks || result?.monetizationChecks || [];
  const recommendations = result?.recommendations || [];
  const revenue = result?.revenue || result?.earning || {};
  const content = result?.content || {};
  const branding = result?.branding || {};

  const subscribers = toNumber(
    channelData.subscribers ?? stats.subscribers ?? channelData.subscriberCount
  );
  const views = toNumber(channelData.views ?? stats.views ?? channelData.viewCount);
  const videos = toNumber(channelData.videos ?? stats.videos ?? channelData.videoCount);
  const watchHours = toNumber(
    result?.watchHours ?? stats.watchHours ?? analysis.watchHours
  );
  const shortsViews = toNumber(
    result?.shortsViews ?? stats.shortsViews ?? analysis.shortsViews
  );

  const subscriberProgress = progress(subscribers, 1000);
  const watchHourProgress = progress(watchHours, 4000);
  const shortsProgress = progress(shortsViews, 10000000);

  const statusText =
    analysis.status ||
    readiness.status ||
    result?.status ||
    "Estimated status unavailable";

  const score =
    toNumber(analysis.score ?? readiness.score ?? result?.score) ??
    null;

  const normalizedChecks = normalizeItems(checks);
  const normalizedRecommendations = normalizeItems(recommendations);

  const reportText = useMemo(() => {
    if (!result) return "";

    return [
      "TubeKit YouTube Monetization Report",
      "-----------------------------------",
      `Channel: ${channelData.name || "Unknown"}`,
      `Channel ID: ${channelData.id || "Unavailable"}`,
      `Estimated Status: ${statusText}`,
      `Readiness Score: ${score !== null ? `${score}%` : "Unavailable"}`,
      `Subscribers: ${formatNumber(subscribers)}`,
      `Total Views: ${formatNumber(views)}`,
      `Videos: ${formatNumber(videos)}`,
      `Public Watch Hours: ${watchHours !== null ? formatNumber(watchHours) : "Unavailable"}`,
      `Public Shorts Views: ${shortsViews !== null ? formatNumber(shortsViews) : "Unavailable"}`,
      "",
      "Important: This is an estimate based on available information. It is not an official YPP decision.",
      "",
      normalizedRecommendations.length
        ? `Recommendations:\n${normalizedRecommendations.map((item) => `- ${item}`).join("\n")}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");
  }, [
    result,
    channelData.name,
    channelData.id,
    statusText,
    score,
    subscribers,
    views,
    videos,
    watchHours,
    shortsViews,
    normalizedRecommendations,
  ]);

  const copyReport = async () => {
    if (!reportText) return;

    try {
      await navigator.clipboard.writeText(reportText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      console.error("COPY REPORT ERROR:", error);
    }
  };

  return (
    <>
<SEO
        title="YouTube Monetization Checker | Check YPP Eligibility Free"
        description="Check a YouTube channel's estimated monetization readiness using available public channel data. Review YPP thresholds, progress, channel statistics, readiness checks and monetization signals with TubeKit."
        keywords="YouTube monetization checker, YouTube YPP checker, YouTube monetization eligibility checker, YouTube Partner Program checker, YPP eligibility, YouTube monetization requirements, YouTube channel monetization checker, YouTube monetization calculator"
        canonical="/tools/monetization-checker"
        faqs={faqs}
      />

      <ToolLayout>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-400">
              <Youtube size={17} />
              YouTube Creator Tool
            </div>

            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
              <span className="text-red-400">YouTube</span>{" "}
              <span className="text-yellow-400">Monetization</span>{" "}
              <span className="text-green-400">Checker</span>
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-lg">
              Analyze a public YouTube channel, review monetization readiness,
              compare available metrics with common YPP thresholds, and find
              the areas that need attention.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-[#090b12] p-5 shadow-2xl shadow-blue-500/5 sm:p-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                    Channel Analysis
                  </p>
                  <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">
                    Check Monetization Readiness
                  </h2>
                </div>

                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-2 text-xs font-bold text-green-400">
                  <ShieldCheck size={15} />
                  Public data analysis
                </div>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-red-400">
                  <SearchIcon />
                </div>

                <input
                  id="channel-url"
                  type="text"
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="https://youtube.com/@channel"
                  disabled={loading}
                  className="w-full rounded-2xl border border-slate-700 bg-black/50 py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
                />
              </div>

              <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm">
                Supports public channel URLs, handles and supported channel identifiers.
                Press Enter to analyze.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={analyzeChannel}
                  disabled={loading || !channel.trim()}
                  className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 px-6 py-3 font-black text-white shadow-lg shadow-red-500/10 transition hover:-translate-y-0.5 hover:shadow-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <RefreshCw size={18} className="animate-spin" />
                      Analyzing Channel...
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} />
                      Check Monetization
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={reset}
                  disabled={loading}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-6 py-3 font-bold text-slate-200 transition hover:border-red-500/50 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <RefreshCw size={17} />
                  Reset
                </button>
              </div>
            </div>
          </div>

          {loading && (
            <div className="mt-8 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <RefreshCw size={23} className="animate-spin" />
                </div>
                <div>
                  <p className="font-black text-white">Analyzing public channel data</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Reading available statistics and preparing the monetization readiness report.
                  </p>
                </div>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-2/3 animate-pulse rounded-full bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500" />
              </div>
            </div>
          )}

          {result && (
            <div className="mt-10 space-y-7">
              <section className="overflow-hidden rounded-3xl border border-slate-800 bg-[#090b12]">
                <div className="relative">
                  {channelData.banner && (
                    <img
                      src={channelData.banner}
                      alt={`${channelData.name || "YouTube"} channel banner`}
                      className="h-36 w-full object-cover opacity-80 sm:h-52"
                    />
                  )}

                  <div className={`${channelData.banner ? "-mt-10 sm:-mt-14" : ""} relative p-5 sm:p-8`}>
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
                      {channelData.thumbnail && (
                        <img
                          src={channelData.thumbnail}
                          alt={`${channelData.name || "YouTube"} channel profile`}
                          className="h-24 w-24 rounded-full border-4 border-[#090b12] object-cover shadow-xl sm:h-28 sm:w-28"
                        />
                      )}

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h2 className="break-words text-2xl font-black text-white sm:text-3xl">
                            {channelData.name || "YouTube Channel"}
                          </h2>
                          {channelData.handle && (
                            <span className="text-sm font-semibold text-slate-500">
                              {channelData.handle}
                            </span>
                          )}
                        </div>

                        {channelData.id && (
                          <p className="mt-2 break-all text-xs text-slate-500">
                            Channel ID: {channelData.id}
                          </p>
                        )}

                        {channelData.description && (
                          <p className="mt-4 max-w-4xl whitespace-pre-line text-sm leading-7 text-slate-400">
                            {channelData.description}
                          </p>
                        )}
                      </div>

                      {channelData.url && (
                        <a
                          href={channelData.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-400 transition hover:border-red-500/50"
                        >
                          Open Channel
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </section>
<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  title="Subscribers"
                  value={formatNumber(subscribers)}
                  icon={Users}
                  color="red"
                />
                <StatCard
                  title="Total Views"
                  value={formatNumber(views)}
                  icon={Eye}
                  color="yellow"
                />
                <StatCard
                  title="Videos"
                  value={formatNumber(videos)}
                  icon={Video}
                  color="green"
                />
                <StatCard
                  title="Readiness Score"
                  value={score !== null ? `${score}%` : "N/A"}
                  icon={BarChart3}
                  color="blue"
                />
              </section>

              <section className="grid gap-5 lg:grid-cols-2">
                <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                      <CircleDollarSign size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-green-400">
                        Estimated Assessment
                      </p>
                      <h3 className="mt-1 text-2xl font-black text-white">
                        {statusText}
                      </h3>
                    </div>
                  </div>

                  {analysis.message && (
                    <p className="mt-5 text-sm leading-7 text-slate-300">
                      {analysis.message}
                    </p>
                  )}

                  {analysis.confidence !== undefined && (
                    <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="text-slate-400">Analysis confidence</span>
                        <span className="font-black text-white">
                          {analysis.confidence}%
                        </span>
                      </div>
                      <ProgressBar value={analysis.confidence} color="green" />
                    </div>
                  )}
                </div>

                <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">
                      <Info size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-yellow-400">
                        Important
                      </p>
                      <h3 className="mt-1 text-xl font-black text-white">
                        Public-data estimate only
                      </h3>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    TubeKit cannot see private YouTube Studio, Earn, AdSense,
                    application or internal review information. A public
                    analysis cannot prove actual YPP approval or rejection.
                  </p>
                </div>
              </section>

              <section className="rounded-3xl border border-slate-800 bg-[#090b12] p-6 sm:p-8">
                <div className="mb-7">
                  <p className="text-xs font-black uppercase tracking-wider text-blue-400">
                    YPP Progress
                  </p>
                  <h3 className="mt-1 text-2xl font-black text-white">
                    Common monetization thresholds
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Progress is shown only when the required metric is available.
                    Public channel data does not always expose qualifying metrics.
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                  <ThresholdCard
                    title="Subscribers"
                    current={subscribers}
                    target={1000}
                    progress={subscriberProgress}
                    color="red"
                    note="Common ad-revenue threshold"
                  />
                  <ThresholdCard
                    title="Valid Public Watch Hours"
                    current={watchHours}
                    target={4000}
                    progress={watchHourProgress}
                    color="yellow"
                    note="Last 12 months"
                    unavailable={watchHours === null}
                  />
                  <ThresholdCard
                    title="Public Shorts Views"
                    current={shortsViews}
                    target={10000000}
                    progress={shortsProgress}
                    color="blue"
                    note="Last 90 days"
                    unavailable={shortsViews === null}
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <div className="flex gap-3">
                    <AlertTriangle className="mt-0.5 shrink-0 text-yellow-400" size={19} />
                    <p className="text-sm leading-7 text-slate-400">
                      Watch hours and Shorts views shown as unavailable are not
                      treated as zero. Exact qualifying metrics are normally
                      available to the creator inside YouTube Studio.
                    </p>
                  </div>
                </div>
              </section>

              {(normalizedChecks.length > 0 || readiness.checks) && (
                <section className="rounded-3xl border border-slate-800 bg-[#090b12] p-6 sm:p-8">
                  <div className="mb-7">
                    <p className="text-xs font-black uppercase tracking-wider text-green-400">
                      Readiness Checklist
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-white">
                      Monetization signals
                    </h3>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {(normalizedChecks.length
                      ? normalizedChecks
                      : normalizeItems(readiness.checks)
                    ).map((item, index) => (
                      <CheckItem key={`${item}-${index}`} value={item} />
                    ))}
                  </div>
                </section>
              )}


              {(content || branding) && (
                <section className="grid gap-5 lg:grid-cols-2">
                  <AnalysisPanel
                    title="Content Signals"
                    icon={Video}
                    color="green"
                    data={content}
                  />
                  <AnalysisPanel
                    title="Channel & Branding Signals"
                    icon={Youtube}
                    color="blue"
                    data={branding}
                  />
                </section>
              )}

              {Object.keys(revenue).length > 0 && (
                <section className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                      <Wallet size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-yellow-400">
                        Revenue Signals
                      </p>
                      <h3 className="text-2xl font-black text-white">
                        Available monetization data
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Object.entries(revenue)
                      .filter(([, value]) => value !== undefined && value !== null)
                      .slice(0, 9)
                      .map(([key, value]) => (
                        <MetricTile
                          key={key}
                          label={humanize(key)}
                          value={formatValue(value)}
                        />
                      ))}
                  </div>
                </section>
              )}

              {normalizedRecommendations.length > 0 && (
                <section className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <Sparkles className="text-red-400" size={22} />
                    <div>
                      <p className="text-xs font-black uppercase tracking-wider text-red-400">
                        Action Plan
                      </p>
                      <h3 className="text-2xl font-black text-white">
                        Recommended next steps
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {normalizedRecommendations.map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-5"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-sm font-black text-red-400">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section className="flex flex-col gap-3 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                  <h3 className="font-black text-white">Save your monetization report</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Copy the current public-data assessment for your records.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={copyReport}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-400"
                >
                  <Clipboard size={17} />
                  {copied ? "Report Copied" : "Copy Full Report"}
                </button>
              </section>
            </div>
          )}

          <section className="mt-16 space-y-12">
            <SectionHeading
              first="YouTube Monetization"
              second="Checker"
              secondColor="yellow"
            />

            <div>
              <p className="leading-8 text-slate-400">
                TubeKit's YouTube Monetization Checker is designed to turn
                available public channel information into a practical
                monetization-readiness report. Instead of showing only a
                single status, the updated checker can surface channel
                statistics, threshold progress, available readiness signals,
                revenue data, recommendations and important data limitations.
              </p>
              <p className="mt-4 leading-8 text-slate-400">
                The tool should be treated as an analysis assistant, not an
                official YouTube Partner Program decision. Private Studio
                metrics and internal YPP review information are not exposed by
                normal public channel data.
              </p>
            </div>

            <div>
              <SectionHeading first="What This" second="Tool Analyzes" secondColor="blue" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  ["Channel statistics", "Subscribers, total views and public video count."],
                  ["YPP threshold progress", "Compares available metrics with common thresholds."],
                  ["Readiness signals", "Displays available checks returned by the analysis."],
                  ["Content signals", "Uses returned content data when available."],
                  ["Branding signals", "Reviews returned profile and branding fields when available."],
                  ["Revenue signals", "Shows available monetization-related metrics from the analysis."],
                  ["Recommendations", "Turns returned findings into practical next steps."],
                  ["Report export", "Copy the current assessment as a text report."],
                  ["Data limitations", "Clearly separates unavailable private metrics from zero values."],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-red-500/10 p-5 transition hover:bg-red-500/15"
                  >
                    <h3 className="font-black text-red-400">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

<div>
              <SectionHeading first="Common YouTube" second="YPP Thresholds" secondColor="green" />
              <div className="grid gap-5 md:grid-cols-2">
                <InfoBox
                  color="red"
                  title="Ad Revenue Route"
                  value="1,000 subscribers"
                  text="Commonly paired with either 4,000 valid public watch hours in the last 12 months or 10 million valid public Shorts views in the last 90 days."
                />
                <InfoBox
                  color="blue"
                  title="Earlier YPP Access"
                  value="500 subscribers in eligible regions"
                  text="Expanded YPP access can have lower thresholds for selected fan-funding and Shopping features. Requirements depend on region and feature."
                />
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                Thresholds and feature availability can change. Always verify
                the current requirements in YouTube Studio and official YouTube
                documentation before applying.
              </p>
            </div>

            <div>
              <SectionHeading first="Why Public Data" second="Has Limits" secondColor="yellow" />
              <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <LimitItem
                    title="Private Studio metrics"
                    text="Qualifying watch hours and certain Shorts metrics are creator-side analytics and may not be publicly available."
                  />
                  <LimitItem
                    title="Internal YPP review"
                    text="A public API response cannot reveal YouTube's internal policy review, application status or approval decision."
                  />
                  <LimitItem
                    title="Policy compliance"
                    text="Content may require human or platform-side review for monetization policy compliance."
                  />
                  <LimitItem
                    title="Feature-specific rules"
                    text="Different YPP features can have different eligibility requirements and regional availability."
                  />
                </div>
              </div>
            </div>

            <div>
              <SectionHeading first="How to Use" second="Monetization Checker" secondColor="red" />
              <ol className="mt-5 list-decimal space-y-3 pl-6 text-slate-400">
                <li>Copy a public YouTube channel URL or supported identifier.</li>
                <li>Paste it into the checker above.</li>
                <li>Click Check Monetization or press Enter.</li>
                <li>Review the channel statistics and estimated assessment.</li>
                <li>Check threshold progress and available readiness signals.</li>
                <li>Review recommendations and save the report if needed.</li>
                <li>Verify the latest YPP requirements inside YouTube Studio before applying.</li>
              </ol>
            </div>

            <div>
              <SectionHeading first="More YouTube" second="Creator Tools" secondColor="blue" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <ToolLink to="/tools/money-calculator" color="red" title="YouTube Money Calculator" text="Estimate potential earnings from views and RPM." />
                <ToolLink to="/tools/rpm-calculator" color="yellow" title="YouTube RPM Calculator" text="Calculate estimated revenue per 1,000 views." />
                <ToolLink to="/tools/cpm-calculator" color="green" title="YouTube CPM Calculator" text="Calculate advertising-related CPM estimates." />
                <ToolLink to="/tools/channel-analyzer" color="blue" title="Channel Analyzer" text="Review public channel information and optimization signals." />
              </div>
            </div>

            <div>
              <SectionHeading first="Frequently Asked Questions" second="About Monetization" secondColor="blue" />
              <div className="mt-7 space-y-5">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                  >
                    <h3 className="text-lg font-black text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-400">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-blue-500/30 bg-blue-500/5 p-7 text-center">
              <h2 className="text-2xl font-black text-white">
                Check a YouTube Channel's Monetization Readiness
              </h2>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-400">
                Analyze available public channel data and review the signals
                that can help you understand your current monetization position.
              </p>
              <button
                type="button"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="mt-5 rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 px-6 py-3 font-black text-white transition hover:-translate-y-0.5"
              >
                Check Monetization
              </button>
            </div>
          </section>
        </div>
      </ToolLayout>
    </>
  );
}

function SectionHeading({ first, second, secondColor = "red" }) {
  const colors = {
    red: "text-red-400",
    yellow: "text-yellow-400",
    green: "text-green-400",
    blue: "text-blue-400",
  };

  return (
    <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
      <span className="text-red-400">{first}</span>{" "}
      <span className={colors[secondColor] || colors.red}>{second}</span>
    </h2>
  );
}

function StatCard({ title, value, icon: Icon, color }) {
  const styles = {
    red: "border-red-500/20 bg-red-500/5 text-red-400",
    yellow: "border-yellow-500/20 bg-yellow-500/5 text-yellow-400",
    green: "border-green-500/20 bg-green-500/5 text-green-400",
    blue: "border-blue-500/20 bg-blue-500/5 text-blue-400",
  };

  return (
    <div className={`rounded-2xl border p-5 ${styles[color] || styles.blue}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-bold text-slate-400">{title}</p>
        <Icon size={19} />
      </div>
      <p className="mt-4 break-words text-2xl font-black text-white">{value}</p>
    </div>
  );
}

function ThresholdCard({
  title,
  current,
  target,
  progress: percentage,
  color,
  note,
  unavailable = false,
}) {
  const styles = {
    red: {
      box: "border-red-500/20 bg-red-500/5",
      text: "text-red-400",
      bar: "bg-red-500",
    },
    yellow: {
      box: "border-yellow-500/20 bg-yellow-500/5",
      text: "text-yellow-400",
      bar: "bg-yellow-400",
    },
    blue: {
      box: "border-blue-500/20 bg-blue-500/5",
      text: "text-blue-400",
      bar: "bg-blue-500",
    },
  };

  const style = styles[color] || styles.blue;
return (
    <div className={`rounded-2xl border p-5 ${style.box}`}>
      <p className={`text-sm font-black ${style.text}`}>{title}</p>

      {unavailable ? (
        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="font-black text-white">Not available</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            This qualifying metric is not visible in the available public data.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-5 flex items-end justify-between gap-3">
            <p className="text-2xl font-black text-white">
              {formatNumber(current)}
            </p>
            <p className="text-xs font-bold text-slate-500">
              Target {formatNumber(target)}
            </p>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className={`h-full rounded-full ${style.bar}`}
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs">
            <span className={`font-black ${style.text}`}>{percentage}%</span>
            <span className="text-slate-500">{note}</span>
          </div>
        </>
      )}
    </div>
  );
}

function ProgressBar({ value, color = "blue" }) {
  const bars = {
    red: "bg-red-500",
    yellow: "bg-yellow-400",
    green: "bg-green-500",
    blue: "bg-blue-500",
  };

  return (
    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
      <div
        className={`h-full rounded-full ${bars[color] || bars.blue}`}
        style={{ width: `${Math.max(0, Math.min(100, Number(value) || 0))}%` }}
      />
    </div>
  );
}

function CheckItem({ value }) {
  const text = typeof value === "string" ? value : value?.label || value?.name || "Check";

  const passed =
    typeof value === "object"
      ? value?.passed ?? value?.eligible ?? value?.status === "passed"
      : null;

  return (
    <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      {passed === false ? (
        <XCircle className="mt-0.5 shrink-0 text-red-400" size={19} />
      ) : passed === true ? (
        <CheckCircle2 className="mt-0.5 shrink-0 text-green-400" size={19} />
      ) : (
        <Info className="mt-0.5 shrink-0 text-blue-400" size={19} />
      )}
      <div className="min-w-0">
        <p className="font-bold text-white">{text}</p>
        {typeof value === "object" && value?.message && (
          <p className="mt-1 text-sm leading-6 text-slate-500">{value.message}</p>
        )}
      </div>
    </div>
  );
}

function AnalysisPanel({ title, icon: Icon, color, data }) {
  const iconColors = {
    red: "text-red-400",
    yellow: "text-yellow-400",
    green: "text-green-400",
    blue: "text-blue-400",
  };

  const entries = Object.entries(data || {}).filter(
    ([, value]) =>
      value !== undefined &&
      value !== null &&
      typeof value !== "object"
  );

  if (!entries.length) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-[#090b12] p-6">
        <div className="flex items-center gap-3">
          <Icon className={iconColors[color] || iconColors.blue} size={21} />
          <h3 className="text-xl font-black text-white">{title}</h3>
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-500">
          No additional {title.toLowerCase()} were returned by the analysis.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-800 bg-[#090b12] p-6">
      <div className="flex items-center gap-3">
        <Icon className={iconColors[color] || iconColors.blue} size={21} />
        <h3 className="text-xl font-black text-white">{title}</h3>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {entries.slice(0, 10).map(([key, value]) => (
          <MetricTile key={key} label={humanize(key)} value={formatValue(value)} />
        ))}
      </div>
    </div>
  );
}

function MetricTile({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-2 break-words text-base font-black text-white">{value}</p>
    </div>
  );
}

function InfoBox({ color, title, value, text }) {
  const styles = {
    red: "border-red-500/20 bg-red-500/5 text-red-400",
    yellow: "border-yellow-500/20 bg-yellow-500/5 text-yellow-400",
    green: "border-green-500/20 bg-green-500/5 text-green-400",
    blue: "border-blue-500/20 bg-blue-500/5 text-blue-400",
  };

  return (
    <div className={`rounded-2xl border p-6 ${styles[color] || styles.blue}`}>
      <p className="text-sm font-black">{title}</p>
      <p className="mt-3 text-2xl font-black text-white">{value}</p>
      <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function LimitItem({ title, text }) {
  return (
    <div className="rounded-2xl border border-yellow-500/10 bg-black/10 p-5">
      <h3 className="font-black text-yellow-400">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-400">{text}</p>
    </div>
  );
}

function ToolLink({ to, color, title, text }) {
  const styles = {
    red: "border-red-500/20 bg-red-500/5 text-red-400",
    yellow: "border-yellow-500/20 bg-yellow-500/5 text-yellow-400",
    green: "border-green-500/20 bg-green-500/5 text-green-400",
    blue: "border-blue-500/20 bg-blue-500/5 text-blue-400",
  };

  return (
    <Link
      to={to}
      className={`rounded-2xl border p-5 transition hover:-translate-y-1 ${styles[color] || styles.blue}`}
    >
      <h3 className="font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </Link>
  );
}

function SearchIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function normalizeItems(items) {
  if (!Array.isArray(items)) return [];

  return items
    .map((item) => {
      if (typeof item === "string") return item;
      if (!item || typeof item !== "object") return "";
      return (
        item.message ||
        item.label ||
        item.name ||
        item.title ||
        item.description ||
        ""
      );
    })
    .filter(Boolean);
}

function toNumber(value) {
  if (value === undefined || value === null || value === "") return null;
  const number = Number(String(value).replace(/,/g, ""));
  return Number.isFinite(number) ? number : null;
}

function progress(current, target) {
  if (current === null || current === undefined || !target) return 0;
  return Math.max(0, Math.min(100, (Number(current) / Number(target)) * 100));
}

function formatNumber(value) {
  if (value === undefined || value === null) return "N/A";

  const number = toNumber(value);
  if (number === null) return String(value);

  return number.toLocaleString();
}

function formatValue(value) {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function humanize(value) {
  return String(value)
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export default MonetizationChecker;