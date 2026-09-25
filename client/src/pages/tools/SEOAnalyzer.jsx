import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";

function SEOAnalyzer() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const generatedForRef = useRef("");

  const analyzeSEO = async (value) => {
    const input = String(value || "").trim();

    if (!input) {
      setError("Please enter a YouTube video URL first.");
      setResult(null);
      return;
    }

    if (generatedForRef.current === input && loading) return;

    generatedForRef.current = input;
    setLoading(true);
    setError("");

    try {
      const response = await api.get("/youtube/seo-analyzer", {
        params: { url: input },
      });

      const data = response?.data?.data || response?.data || null;

      if (!data) {
        throw new Error("No SEO analysis data was returned.");
      }

      setResult(data);
    } catch (err) {
      console.error("SEO Analyzer Error:", err);

      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Unable to analyze this video right now. Please try again.";

      setError(message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = ({ topic }) => {
    setQuery(topic);
    analyzeSEO(topic);
  };

  useEffect(() => {
    if (!query) return;

    const timer = setTimeout(() => {
      analyzeSEO(query);
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

    const lines = [
      "TubeKit SEO Analysis",
      "",
      `Video: ${result.videoInfo?.title || "N/A"}`,
      `Channel: ${result.videoInfo?.channelTitle || "N/A"}`,
      `Video ID: ${result.videoInfo?.videoId || "N/A"}`,
      `SEO Score: ${result.score ?? "N/A"}`,
      `SEO Grade: ${result.grade || "N/A"}`,
      "",
      "Title Analysis",
      `Title: ${result.title?.text || "N/A"}`,
      `Score: ${result.title?.score ?? "N/A"}`,
      `Length: ${result.title?.length ?? "N/A"}`,
      `Keywords: ${(result.title?.keywords || []).join(", ") || "N/A"}`,
      "",
      "Description Analysis",
      `Score: ${result.description?.score ?? "N/A"}`,
      `Length: ${result.description?.length ?? "N/A"}`,
      `Keywords: ${(result.description?.keywords || []).join(", ") || "N/A"}`,
      "",
      "Tags Analysis",
      `Score: ${result.tags?.score ?? "N/A"}`,
      `Tag Count: ${result.tags?.count ?? "N/A"}`,
      `Tags: ${(result.tags?.items || []).join(", ") || "N/A"}`,
      "",
      "Keyword Analysis",
      `Primary Keywords: ${(result.keywords?.primary || []).join(", ") || "N/A"}`,
      `Secondary Keywords: ${(result.keywords?.secondary || []).join(", ") || "N/A"}`,
      "",
      "Channel Analysis",
      `Channel: ${result.channel?.title || result.videoInfo?.channelTitle || "N/A"}`,
      `Subscribers: ${result.channel?.subscriberCount ?? "N/A"}`,
      `Videos: ${result.channel?.videoCount ?? "N/A"}`,
      "",
      "Recommendations",
      ...(result.recommendations || []).map(
        (item, index) => `${index + 1}. ${item}`
      ),
    ];

    await copyText(lines.join("\n"));
  };

  const score = Number(result?.score);
  const normalizedScore = Number.isFinite(score)
    ? Math.max(0, Math.min(100, score))
    : 0;

  const scoreLabel =
    result?.grade ||
    (normalizedScore >= 80
      ? "Strong"
      : normalizedScore >= 60
        ? "Needs Improvement"
        : normalizedScore > 0
          ? "Needs Work"
          : "Not Available");

  const scoreTone =
    normalizedScore >= 80
      ? "text-green-400"
      : normalizedScore >= 60
        ? "text-yellow-400"
        : "text-red-400";

  const MetricCard = ({ label, value, helper, icon }) => (
    <div className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition-all duration-300 hover:border-red-500/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            {label}
          </p>
          <p className="mt-2 text-2xl font-black text-white">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-sm font-bold text-red-400">
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
        title="YouTube SEO Analyzer - Analyze Video SEO Score | TubeKit"
        description="Analyze a YouTube video with TubeKit's SEO Analyzer. Review title, description, tags, keywords, channel signals, metadata and actionable SEO recommendations."
        canonical="/tools/seo-analyzer"
        keywords={[
          "YouTube SEO analyzer",
          "YouTube SEO checker",
          "video SEO analyzer",
          "YouTube SEO score",
          "YouTube metadata analyzer",
          "YouTube title analyzer",
          "YouTube tags analyzer",
          "YouTube description analyzer",
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Tools", url: "/tools" },
          { name: "SEO Analyzer", url: "/tools/seo-analyzer" },
        ]}
      />

      <ToolLayout>
        <ToolHeader
          title="YouTube SEO Analyzer"
          description="Analyze a YouTube video and get a detailed SEO report covering title, description, tags, keywords, channel signals, metadata, and optimization opportunities."
        />

        <ToolForm
          query={query}
          setQuery={setQuery}
          onGenerate={handleGenerate}
          placeholder="Paste a YouTube video URL..."
          buttonText="Analyze SEO"
          helperText="Use a public YouTube video URL. TubeKit analyzes available public metadata and returns an SEO report."
        />

        {loading && (
          <div className="mt-10 rounded-3xl border border-red-500/20 bg-[#090909] p-8 text-center shadow-[0_0_60px_rgba(239,68,68,0.08)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-red-500/20 border-t-red-500" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">
              Analyzing YouTube SEO
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Checking available video metadata, title, description, tags,
              keywords, channel signals, and optimization opportunities.
            </p>

            <div className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Video metadata",
                "Title signals",
                "Description",
                "Tags & keywords",
                "Channel signals",
                "SEO recommendations",
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
            <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
                      SEO REPORT
                    </span>
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                      Public Data Analysis
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                    {result.videoInfo?.title || "YouTube Video Analysis"}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
                    <span>
                      Channel:{" "}
                      <strong className="text-slate-200">
                        {result.videoInfo?.channelTitle || "N/A"}
                      </strong>
                    </span>
                    <span>
                      Video ID:{" "}
                      <strong className="text-slate-200">
                        {result.videoInfo?.videoId || "N/A"}
                      </strong>
                    </span>
                  </div>

                  {result.videoInfo?.videoUrl && (
                    <a
                      href={result.videoInfo.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300"
                    >
                      Open YouTube Video
                    </a>
                  )}
                </div>

                <div className="shrink-0 text-center">
                  <div className="flex h-36 w-36 flex-col items-center justify-center rounded-full border-8 border-red-500/20 bg-red-500/5">
                    <span className={`text-4xl font-black ${scoreTone}`}>
                      {Number.isFinite(score) ? score : "N/A"}
                    </span>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-widest text-slate-500">
                      SEO Score
                    </span>
                  </div>
                  <p className={`mt-3 text-sm font-bold ${scoreTone}`}>
                    {scoreLabel}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                label="Title"
                value={`${result.title?.score ?? "N/A"}/100`}
                helper={`${result.title?.length ?? 0} characters`}
                icon="T"
              />
              <MetricCard
                label="Description"
                value={`${result.description?.score ?? "N/A"}/100`}
                helper={`${result.description?.length ?? 0} characters`}
                icon="D"
              />
              <MetricCard
                label="Tags"
                value={`${result.tags?.score ?? "N/A"}/100`}
                helper={`${result.tags?.count ?? 0} available tags`}
                icon="#"
              />
<MetricCard
                label="Keywords"
                value={`${result.keywords?.score ?? "N/A"}/100`}
                helper="Keyword relevance signals"
                icon="K"
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                      SEO Breakdown
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      Score by Area
                    </h3>
                  </div>
                  <div className="rounded-xl bg-green-500/10 px-3 py-2 text-xs font-bold text-green-400">
                    Detailed
                  </div>
                </div>

                <div className="mt-7 space-y-6">
                  <ScoreBar label="Title" score={result.title?.score} />
                  <ScoreBar
                    label="Description"
                    score={result.description?.score}
                  />
                  <ScoreBar label="Tags" score={result.tags?.score} />
                  <ScoreBar label="Keywords" score={result.keywords?.score} />
                  <ScoreBar label="Channel" score={result.channel?.score} />
                  <ScoreBar label="Metadata" score={result.metadata?.score} />
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                  Video Metadata
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  Available Data
                </h3>

                <div className="mt-6 space-y-3">
                  {[
                    ["Published", result.metadata?.publishedAt],
                    ["Category", result.metadata?.category],
                    ["Duration", result.metadata?.duration],
                    ["Views", result.metadata?.viewCount],
                    ["Likes", result.metadata?.likeCount],
                    ["Comments", result.metadata?.commentCount],
                    ["Language", result.metadata?.language],
                    ["Definition", result.metadata?.definition],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-5 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3"
                    >
                      <span className="text-sm text-slate-500">{label}</span>
                      <span className="max-w-[65%] break-words text-right text-sm font-semibold text-slate-200">
                        {value ?? "N/A"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 lg:col-span-2">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                      Title Analysis
                    </p>
                    <h3 className="mt-2 text-xl font-black text-white">
                      Title SEO Signals
                    </h3>
                  </div>
                  <span className="text-2xl font-black text-yellow-400">
                    {result.title?.score ?? "N/A"}/100
                  </span>
                </div>

                <div className="mt-6 rounded-2xl bg-white/[0.03] p-5">
                  <p className="text-base font-semibold leading-7 text-white">
                    {result.title?.text ||
                      result.videoInfo?.title ||
                      "Title not available"}
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Length", result.title?.length],
                    ["Words", result.title?.wordCount],
                    ["Primary Keyword", result.title?.primaryKeyword],
                    ["Keyword Position", result.title?.keywordPosition],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                    >
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        {label}
                      </p>
                      <p className="mt-2 break-words text-sm font-bold text-slate-200">
                        {value ?? "N/A"}
                      </p>
                    </div>
                  ))}
                </div>

                {!!result.title?.keywords?.length && (
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-slate-300">
                      Detected Keywords
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {result.title.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-300"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-400">
                  Title Checks
                </p>
                <h3 className="mt-2 text-xl font-black text-white">
                  Optimization
                </h3>

                <div className="mt-5 space-y-3">
                  {(result.title?.checks || []).map((check, index) => (
                    <div
                      key={`${check?.label || "check"}-${index}`}
                      className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 text-sm font-bold text-green-400">
                          {check?.passed ? "[OK]" : "[! ]"}
                        </span>
                        <div>
                          <p className="text-sm font-bold text-slate-200">
                            {check?.label || "SEO Check"}
                          </p>
                          {check?.message && (
                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              {check.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  {!result.title?.checks?.length && (
                    <p className="text-sm leading-6 text-slate-500">
                      No individual title checks were returned.
                    </p>
                  )}
                </div>
              </div>
            </div>
<div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                    Description Analysis
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    Description SEO Signals
                  </h3>
                </div>
                <span className="text-2xl font-black text-blue-400">
                  {result.description?.score ?? "N/A"}/100
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <MetricCard
                  label="Length"
                  value={result.description?.length ?? "N/A"}
                  helper="Characters"
                  icon="L"
                />
                <MetricCard
                  label="Words"
                  value={result.description?.wordCount ?? "N/A"}
                  helper="Description words"
                  icon="W"
                />
                <MetricCard
                  label="Links"
                  value={result.description?.linkCount ?? "N/A"}
                  helper="Detected links"
                  icon="U"
                />
              </div>

              {!!result.description?.keywords?.length && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-300">
                    Description Keywords
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {result.description.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {!!result.description?.checks?.length && (
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {result.description.checks.map((check, index) => (
                    <div
                      key={`${check?.label || "check"}-${index}`}
                      className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                    >
                      <span className="mr-2 text-sm font-bold text-green-400">
                        {check?.passed ? "[OK]" : "[! ]"}
                      </span>
                      <span className="text-sm font-semibold text-slate-200">
                        {check?.label || "Description Check"}
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

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                      Tags Analysis
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      Tag Coverage
                    </h3>
                  </div>
                  <span className="text-2xl font-black text-yellow-400">
                    {result.tags?.score ?? "N/A"}/100
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <MetricCard
                    label="Tag Count"
                    value={result.tags?.count ?? "N/A"}
                    helper="Available public tags"
                    icon="#"
                  />
                  <MetricCard
                    label="Avg. Length"
                    value={result.tags?.averageLength ?? "N/A"}
                    helper="Average tag characters"
                    icon="A"
                  />
                </div>


                {!!result.tags?.items?.length && (
                  <div className="mt-6 flex max-h-72 flex-wrap gap-2 overflow-auto">
                    {result.tags.items.map((tag, index) => (
                      <button
                        type="button"
                        key={`${tag}-${index}`}
                        onClick={() => copyText(tag)}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-yellow-500/40 hover:text-yellow-300"
                        title="Copy tag"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}

                <Link
                  to="/tools/tag-extractor"
                  className="mt-6 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Open YouTube Tag Extractor
                </Link>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-400">
                  Keyword Analysis
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  Search Context
                </h3>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-300">
                    Primary Keywords
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(result.keywords?.primary || []).map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-300"
                      >
                        {keyword}
                      </span>
                    ))}
                    {!result.keywords?.primary?.length && (
                      <span className="text-sm text-slate-500">N/A</span>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-300">
                    Secondary Keywords
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(result.keywords?.secondary || []).map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300"
                      >
                        {keyword}
                      </span>
                    ))}
                    {!result.keywords?.secondary?.length && (
                      <span className="text-sm text-slate-500">N/A</span>
                    )}
                  </div>
                </div>

                {!!result.keywords?.related?.length && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-slate-300">
                      Related Keywords
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {result.keywords.related.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-300"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                    Channel Analysis
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    Creator & Channel Signals
                  </h3>
                </div>
                <span className="text-2xl font-black text-red-400">
                  {result.channel?.score ?? "N/A"}/100
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  label="Channel"
                  value={result.channel?.title || result.videoInfo?.channelTitle || "N/A"}
                  helper="Channel title"
                  icon="C"
                />
                <MetricCard
                  label="Subscribers"
                  value={result.channel?.subscriberCount ?? "N/A"}
                  helper="Public subscriber data"
                  icon="S"
                />
                <MetricCard
                  label="Videos"
                  value={result.channel?.videoCount ?? "N/A"}
                  helper="Published videos"
                  icon="V"
                />
                <MetricCard
                  label="Views"
                  value={result.channel?.viewCount ?? "N/A"}
                  helper="Channel views"
                  icon="R"
                />
              </div>

              {!!result.channel?.checks?.length && (
                <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {result.channel.checks.map((check, index) => (
                    <div
                      key={`${check?.label || "channel-check"}-${index}`}
                      className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                    >
                      <span className="mr-2 text-sm font-bold text-green-400">
                        {check?.passed ? "[OK]" : "[! ]"}
                      </span>
                      <span className="text-sm font-semibold text-slate-200">
                        {check?.label || "Channel Check"}
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


                {!!result.tags?.items?.length && (
                  <div className="mt-6 flex max-h-72 flex-wrap gap-2 overflow-auto">
                    {result.tags.items.map((tag, index) => (
                      <button
                        type="button"
                        key={`${tag}-${index}`}
                        onClick={() => copyText(tag)}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-yellow-500/40 hover:text-yellow-300"
                        title="Copy tag"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                )}

                <Link
                  to="/tools/tag-extractor"
                  className="mt-6 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Open YouTube Tag Extractor
                </Link>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-400">
                  Keyword Analysis
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  Search Context
                </h3>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-300">
                    Primary Keywords
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(result.keywords?.primary || []).map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-300"
                      >
                        {keyword}
                      </span>
                    ))}
                    {!result.keywords?.primary?.length && (
                      <span className="text-sm text-slate-500">N/A</span>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-slate-300">
                    Secondary Keywords
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(result.keywords?.secondary || []).map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300"
                      >
                        {keyword}
                      </span>
                    ))}
                    {!result.keywords?.secondary?.length && (
                      <span className="text-sm text-slate-500">N/A</span>
                    )}
                  </div>
                </div>

                {!!result.keywords?.related?.length && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-slate-300">
                      Related Keywords
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {result.keywords.related.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-300"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                    Channel Analysis
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    Creator & Channel Signals
                  </h3>
                </div>
                <span className="text-2xl font-black text-red-400">
                  {result.channel?.score ?? "N/A"}/100
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  label="Channel"
                  value={result.channel?.title || result.videoInfo?.channelTitle || "N/A"}
                  helper="Channel title"
                  icon="C"
                />
                <MetricCard
                  label="Subscribers"
                  value={result.channel?.subscriberCount ?? "N/A"}
                  helper="Public subscriber data"
                  icon="S"
                />
                <MetricCard
                  label="Videos"
                  value={result.channel?.videoCount ?? "N/A"}
                  helper="Published videos"
                  icon="V"
                />
                <MetricCard
                  label="Views"
                  value={result.channel?.viewCount ?? "N/A"}
                  helper="Channel views"
                  icon="R"
                />
              </div>

              {!!result.channel?.checks?.length && (
                <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {result.channel.checks.map((check, index) => (
                    <div
                      key={`${check?.label || "channel-check"}-${index}`}
                      className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                    >
                      <span className="mr-2 text-sm font-bold text-green-400">
                        {check?.passed ? "[OK]" : "[! ]"}
                      </span>
                      <span className="text-sm font-semibold text-slate-200">
                        {check?.label || "Channel Check"}
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
{!!result.checks?.length && (
              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                  Complete SEO Checklist
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  Optimization Checks
                </h3>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {result.checks.map((check, index) => (
                    <div
                      key={`${check?.label || "seo-check"}-${index}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 text-sm font-black ${
                            check?.passed ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {check?.passed ? "[OK]" : "[! ]"}
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-white">
                            {check?.label || "SEO Check"}
                          </p>
                          {check?.message && (
                            <p className="mt-1 text-sm leading-6 text-slate-500">
                              {check.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!!result.recommendations?.length && (
              <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                      AI SEO Recommendations
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">
                      What You Can Improve
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={copyReport}
                    className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-bold text-red-300 transition hover:bg-red-500/15"
                  >
                    Copy Full Report
                  </button>
                </div>

                <div className="mt-6 space-y-3">
                  {result.recommendations.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-[#090909] p-5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-sm font-black text-red-400">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">
              <p className="text-sm leading-7 text-yellow-200/80">
                TubeKit's SEO Analyzer works with information available through
                supported public YouTube data. An SEO score is an analytical
                indicator, not a guarantee of search ranking, impressions,
                views, or recommendations. Some fields may be unavailable
                depending on the video's public metadata.
              </p>
            </div>
          </section>
        )}

        {!result && !loading && !error && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-[#090909] p-8 text-center">
            <h3 className="text-2xl font-black text-white">
              Get a Detailed YouTube SEO Report
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Paste a public YouTube video URL to inspect available metadata
              and review title, description, tags, keywords, channel signals,
              SEO checks, and optimization recommendations.
            </p>

            <div className="mx-auto mt-7 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Overall SEO score",
                "Title analysis",
                "Description analysis",
                "Tags analysis",
                "Keyword signals",
                "Channel signals",
                "Video metadata",
                "SEO checklist",
                "Actionable recommendations",
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
                YouTube SEO Guide
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Understand What Your SEO Report Means
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-400">
                TubeKit combines available YouTube metadata into one readable
                report so creators can inspect important optimization areas
                without switching between multiple tools.
              </p>
            </div>

            <div className="mt-10 space-y-8 text-slate-300">
              <article>
                <h3 className="text-xl font-bold text-white">
                  What does a YouTube SEO Analyzer check?
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  A video SEO analysis can review the information that is
                  publicly available for the video, including its title,
                  description, tags, selected metadata, and related channel
                  information. TubeKit presents these signals as separate
                  sections so you can see which areas may need attention.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-bold text-white">
                  Why are title and description important?
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  The title and description communicate the topic and context
                  of a video. A clear title can help viewers understand the
                  video quickly, while a useful description can provide
                  additional context and relevant terms.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-bold text-white">
                  What does the SEO score mean?
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  The score is a TubeKit analytical indicator based on the
                  checks returned by the analyzer. It should be used to
                  identify optimization opportunities rather than treated as a
                  prediction of YouTube ranking or traffic.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-bold text-white">
                  Can the analyzer guarantee more views?
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  No. SEO analysis can highlight metadata and content
                  optimization opportunities, but performance also depends on
                  audience demand, viewer behavior, competition, packaging,
                  retention, distribution, and other factors.
                </p>
              </article>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <Link
                to="/tools/title-generator"
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-red-500/40"
              >
                <p className="text-sm font-bold text-red-400">
                  AI Title Generator
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Generate title ideas after reviewing your current title
                  signals.
                </p>
              </Link>

              <Link
                to="/tools/description-generator"
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-green-500/40"
              >
                <p className="text-sm font-bold text-green-400">
                  AI Description Generator
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Create a structured description around your video topic and
                  keywords.
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
                  Inspect available tags from a public YouTube video.
                </p>
              </Link>

              <Link
                to="/tools/channel-analyzer"
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-blue-500/40"
              >
                <p className="text-sm font-bold text-blue-400">
                  Channel Analyzer
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Review public channel-level signals and creator data.
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
                YouTube SEO Analyzer FAQs
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {[
                {
                  q: "What URL should I enter?",
                  a: "Enter a public YouTube video URL. Standard watch URLs and other supported YouTube video URL formats can be analyzed when the required public data is available.",
                },
                {
                  q: "Does the SEO score guarantee rankings?",
                  a: "No. The score is an analytical indicator based on the available checks and does not guarantee rankings, impressions, views, or recommendations.",
                },
                {
                  q: "Why is some information shown as N/A?",
                  a: "Some metadata is not publicly available for every video or may not be returned by the YouTube data source. TubeKit displays N/A when a field is unavailable.",
                },
                {
                  q: "Can I copy the complete SEO report?",
                  a: "Yes. When recommendations are available, use Copy Full Report to copy the main analysis into your clipboard.",
                },
                {
                  q: "Can I use the analyzer for Shorts?",
                  a: "Yes, when the Shorts URL resolves to a public YouTube video and the required public metadata is available.",
                },
                {
                  q: "Is this an official YouTube ranking score?",
                  a: "No. It is a TubeKit analysis based on available public video and channel information.",
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

export default SEOAnalyzer;