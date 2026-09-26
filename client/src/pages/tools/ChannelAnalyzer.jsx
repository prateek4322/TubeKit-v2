import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  CalendarDays,
  Check,
  Clock3,
  Eye,
  Globe,
  Heart,
  ListChecks,
  Maximize2,
  MessageCircle,
  PieChart,
  Play,
  Rocket,
  Star,
  Target,
  ThumbsUp,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";

function ChannelAnalyzer({ query = "" }) {
  const [channelQuery, setChannelQuery] = useState("");
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
    setChannelQuery(topic);
    analyzeChannel(topic);
  };

  useEffect(() => {
    const value = String(query || "").trim();

    if (!value) return;

    setChannelQuery(value);

    const timer = setTimeout(() => {
      analyzeChannel(value);
    }, 0);

    return () => clearTimeout(timer);
  }, [query]);

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
      `Banner: ${channel.bannerImage || channel.banner || branding.bannerUrl || "N/A"}`,
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

  const performance = result?.performance || result?.performanceMetrics || {};
  const analytics = result?.analytics || result?.performanceAnalytics || {};

  const topVideo =
    result?.topPerformingVideo ||
    result?.topVideo ||
    result?.bestVideo ||
    performance?.topPerformingVideo ||
    null;

  const averageViews = Number(
    statistics.averageViews ?? statistics.viewsPerVideo ?? 0
  );
  const averageLikes = Number(statistics.averageLikes ?? 0);

  const calculatedEngagement =
    Number.isFinite(averageViews) &&
    averageViews > 0 &&
    Number.isFinite(averageLikes)
      ? ((averageLikes / averageViews) * 100).toFixed(1) + "%"
      : performance?.engagementRate ?? "N/A";

  const performanceMetrics = [
    {
      label: "Engagement Rate",
      value: performance?.engagementRate ?? calculatedEngagement,
      helper: "Percentage of viewers who interact with your content",
      icon: "heart",
      tone: "red",
    },
    {
      label: "Channel Health",
      value: performance?.channelHealth ?? (Number.isFinite(score) ? `${score}/100` : "N/A"),
      helper: "Overall public channel performance and health score",
      icon: "chart",
      tone: "red",
    },
    {
      label: "Optimal Length",
      value: performance?.optimalLength ?? result?.optimalLength ?? "N/A",
      helper: "Recommended video duration for your audience",
      icon: "clock",
      tone: "green",
    },
    {
      label: "Growth Potential",
      value: performance?.growthPotential ?? result?.growthPotential ?? "N/A",
      helper: "Estimated opportunities from available channel signals",
      icon: "rocket",
      tone: "blue",
    },
    {
      label: "Consistency",
      value: performance?.consistency ?? result?.content?.consistency ?? "N/A",
      helper: "Video publishing consistency across uploads",
      icon: "target",
      tone: "gray",
    },
    {
      label: "Content Quality",
      value:
        performance?.contentQuality ??
        (result?.content?.score !== undefined
          ? `${result.content.score}/100`
          : "N/A"),
      helper: "Available content quality signal",
      icon: "star",
      tone: "yellow",
    },
    {
      label: "Content Velocity",
      value: performance?.contentVelocity ?? result?.content?.uploadFrequency ?? "N/A",
      helper: "Publishing frequency and content momentum",
      icon: "zap",
      tone: "cyan",
    },
    {
      label: "Audience Retention",
      value: performance?.audienceRetention ?? "N/A",
      helper: "Available audience retention or watch-time signal",
      icon: "users",
      tone: "teal",
    },
  ];

  const metricTone = {
    red: "bg-red-500/10 text-red-400",
    green: "bg-emerald-500/10 text-emerald-400",
    blue: "bg-blue-500/10 text-blue-400",
    gray: "bg-slate-500/10 text-slate-300",
    yellow: "bg-yellow-500/10 text-yellow-400",
    cyan: "bg-cyan-500/10 text-cyan-400",
    teal: "bg-teal-500/10 text-teal-400",
  };

  const MetricIcon = ({ type }) => {
    const icons = {
      heart: Heart,
      chart: BarChart3,
      clock: Clock3,
      rocket: Rocket,
      target: Target,
      star: Star,
      zap: Zap,
      users: Users,
    };

    const Icon = icons[type] || Target;

    return <Icon className="h-5 w-5" strokeWidth={2.2} />;
  };

  const donutData = analytics?.engagementDistribution || {
    likes: Number(topVideo?.likeCount || statistics.averageLikes || 0),
    comments: Number(topVideo?.commentCount || statistics.averageComments || 0),
    shares: Number(analytics?.shares || 0),
  };

  const donutTotal =
    Number(donutData.likes || 0) +
    Number(donutData.comments || 0) +
    Number(donutData.shares || 0);

  const likesPercent =
    donutTotal > 0 ? (Number(donutData.likes || 0) / donutTotal) * 100 : 70;
  const commentsPercent =
    donutTotal > 0 ? (Number(donutData.comments || 0) / donutTotal) * 100 : 20;

  const categoryData =
    analytics?.contentCategories ||
    result?.content?.categories ||
    [
      { name: "Entertainment", value: 30 },
      { name: "Gaming", value: 20 },
      { name: "News", value: 15 },
      { name: "Review", value: 20 },
      { name: "Tech", value: 15 },
    ];

  const growthData = analytics?.growthPrediction || [];
  const comparisonData = analytics?.videoPerformanceComparison || [];
  const retentionData = analytics?.audienceEngagementTimeline || [];

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
          query={channelQuery}
          setQuery={setQuery}
          onGenerate={handleGenerate}
          placeholder="Paste a channel URL, handle, or channel ID..."
          buttonText="Analyze Channel"
          helperText="Use a public YouTube channel URL, @handle, channel ID, or supported channel input."
        />

        {loading && (
          <div className="mx-auto mt-10 w-full max-w-5xl rounded-3xl border border-blue-500/20 bg-[#090909] p-8 text-center shadow-[0_0_60px_rgba(59,130,246,0.10)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500/20 border-t-blue-400" />
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
          <section className="mt-10 w-full space-y-10 text-center">
            {/* CHANNEL PROFILE */}
            <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 border-l-4 border-l-red-500 bg-[#171717] shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
              <div className="px-5 py-7 sm:px-8 sm:py-8">
                <div>
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-red-500/70 bg-[#242424] shadow-[0_0_35px_rgba(239,68,68,0.16)] sm:h-28 sm:w-28">
                    {channel.profileImage || channel.thumbnail || branding.profileImage ? (
                      <img
                        src={channel.profileImage || channel.thumbnail || branding.profileImage}
                        alt={`${channel.title || "YouTube channel"} profile`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-4xl font-black text-red-400">
                        {String(channel.title || "C").charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <h2 className="text-2xl font-black text-white sm:text-3xl">
                      {channel.title || "YouTube Channel"}
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      {channel.handle || channel.customUrl || "Public YouTube Channel"}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
                      {channel.country && (
                        <span className="inline-flex items-center gap-1">
                          <Globe className="h-3.5 w-3.5" />
                          {channel.country}
                        </span>
                      )}
                      {channel.publishedAt && (
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {formatDate(channel.publishedAt)}
                        </span>
                      )}
                      {channel.channelId && (
                        <span className="max-w-full break-all">
                          {channel.channelId}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-2">
                  {[
                    ["Subscribers", formatNumber(channel.subscriberCount ?? channel.subscribers ?? statistics.subscriberCount ?? statistics.subscribers), "users"],
                    ["Total Views", formatNumber(channel.viewCount ?? channel.views ?? statistics.viewCount ?? statistics.views), "eye"],
                    ["Videos", formatNumber(channel.videoCount ?? channel.videos ?? statistics.videoCount ?? statistics.videos), "video"],
                    ["Channel Score", Number.isFinite(score) ? `${score}/100` : "N/A", "heart"],
                  ].map(([label, value, icon]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/5 bg-[#222] p-5 text-center transition hover:border-red-500/30"
                    >
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                        {icon === "users" ? (
                          <Users className="h-5 w-5" />
                        ) : icon === "eye" ? (
                          <Eye className="h-5 w-5" />
                        ) : icon === "video" ? (
                          <Video className="h-5 w-5" />
                        ) : (
                          <Heart className="h-5 w-5" />
                        )}
                      </div>
                      <p className="mt-3 text-2xl font-black text-white">
                        {value}
                      </p>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* PERFORMANCE METRICS */}
            <section className="mx-auto w-full max-w-5xl">
              <div className="mb-6 flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <ListChecks className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black text-white sm:text-3xl">
                  Performance Metrics
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {performanceMetrics.map((item) => (
                  <div
                    key={item.label}
    className="min-h-[142px] rounded-2xl border border-white/10 bg-[#1c1c1c] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-red-500/40"
                  >
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl text-lg font-black">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${metricTone[item.tone]}`}>
                        <MetricIcon type={item.icon} />
                      </span>
                    </div>

                    <p className="mt-3 text-xs font-bold text-slate-300">
                      {item.label}
                    </p>

                    <p className="mt-1 break-words text-xl font-black text-white sm:text-2xl">
                      {item.value}
                    </p>

                    <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-slate-500">
                      {item.helper}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* TOP PERFORMING VIDEO */}
            {topVideo && (
              <section className="mx-auto w-full max-w-5xl">
                <div className="mb-6 flex items-center justify-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                    <Star className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-black text-white sm:text-3xl">
                    Top Performing Video
                  </h2>
                </div>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#1c1c1c] text-center">
                  <div className="flex flex-wrap items-center justify-center gap-5 border-b border-white/10 bg-[#211b19] px-5 py-4">
                    <span className="rounded-full bg-red-500 px-4 py-2 text-xs font-bold text-white">
                      Best Performer
                    </span>
                    <span className="text-sm text-slate-300">
                      Views: {formatNumber(topVideo.viewCount ?? topVideo.views)}
                    </span>
                    <span className="text-sm text-slate-300">
                      Likes: {formatNumber(topVideo.likeCount ?? topVideo.likes)}
                    </span>
                  </div>

                  <div className="grid gap-6 p-5 text-center md:grid-cols-[1.15fr_1fr] md:p-7">
                    <div className="overflow-hidden rounded-2xl bg-[#111]">
                      {topVideo.thumbnail || topVideo.thumbnailUrl ? (
                        <img
                          src={topVideo.thumbnail || topVideo.thumbnailUrl}
                          alt={topVideo.title || "Top performing YouTube video"}
                          className="aspect-video h-full w-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex aspect-video items-center justify-center text-sm text-slate-500">
                          Thumbnail not available
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-lg font-black leading-6 text-white sm:text-xl">
                        {topVideo.title || "Top performing video"}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-400">
                        {topVideo.description ||
                          "Top performing video based on the available public channel metrics."}
                      </p>

                      <div className="mt-5 grid w-full max-w-sm grid-cols-2 gap-3">
                        <div className="rounded-xl border-l-2 border-red-500 bg-[#242424] p-4">
                          <p className="text-xs text-slate-400">Engagement Rate</p>
                          <p className="mt-1 text-lg font-black text-red-400">
                            {topVideo.engagementRate ?? "N/A"}
                          </p>
                        </div>
                        <div className="rounded-xl border-l-2 border-red-500 bg-[#242424] p-4">
                          <p className="text-xs text-slate-400">Performance Score</p>
                          <p className="mt-1 text-lg font-black text-red-400">
                            {topVideo.performanceScore ?? "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* PERFORMANCE ANALYTICS */}
            <section className="mx-auto w-full max-w-5xl">
              <div className="mb-6 flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
                  <PieChart className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black text-white sm:text-3xl">
                  Performance Analytics
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Channel Health Radar */}
                <div className="min-h-[280px] rounded-2xl border border-white/10 bg-[#1c1c1c] p-5">
                  <h3 className="text-base font-black text-white">
                    Channel Health Radar
                  </h3>
                  <div className="mt-5 flex min-h-[210px] items-center justify-center">
                    <svg viewBox="0 0 260 220" className="h-52 w-full max-w-xs">
                      <polygon
                        points="130,20 205,75 178,165 82,165 55,75"
                        fill="none"
                        stroke="rgba(255,255,255,0.12)"
                        strokeWidth="1"
                      />
                      <polygon
                        points="130,45 181,82 162,145 98,145 79,82"
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                      />
                      <polygon
                        points="130,65 163,88 151,128 109,128 97,88"
                        fill="none"
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                      />
                      <polygon
                        points="130,48 176,86 151,137 101,123 91,82"
                        fill="rgba(239,68,68,0.18)"
                        stroke="#ef4444"
                        strokeWidth="2"
                      />
                      <line x1="130" y1="20" x2="130" y2="170" stroke="rgba(255,255,255,0.08)" />
                      <line x1="55" y1="75" x2="205" y2="75" stroke="rgba(255,255,255,0.08)" />
                      <text x="130" y="14" textAnchor="middle" fill="#888" fontSize="9">Engagement</text>
                      <text x="215" y="78" fill="#888" fontSize="9">Consistency</text>
                      <text x="180" y="184" fill="#888" fontSize="9">Growth</text>
                      <text x="80" y="184" fill="#888" fontSize="9">Quality</text>
                      <text x="35" y="78" fill="#888" fontSize="9">Loyalty</text>
                    </svg>
                  </div>
                </div>
{/* Engagement Distribution */}
                <div className="min-h-[280px] rounded-2xl border border-white/10 bg-[#1c1c1c] p-5">
                  <h3 className="text-base font-black text-white">
                    Engagement Distribution
                  </h3>
                  <div className="mt-5 flex flex-col items-center justify-center">
                    <div
                      className="relative h-36 w-36 rounded-full"
                      style={{
                        background: `conic-gradient(#ff203f 0 ${likesPercent}%, #ff8b63 ${likesPercent}% ${likesPercent + commentsPercent}%, #ffc08f ${likesPercent + commentsPercent}% 100%)`,
                      }}
                    >
                      <div className="absolute inset-7 flex items-center justify-center rounded-full bg-[#1c1c1c]">
                        <span className="text-center text-xs font-bold text-slate-400">
                          Likes<br />
                          <span className="text-white">
                            {formatNumber(donutData.likes)}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-slate-400">
                      <span><i aria-hidden="true" className="mr-1 inline-block h-2.5 w-2.5 rounded-sm bg-red-500" />Likes</span>
                      <span><i aria-hidden="true" className="mr-1 inline-block h-2.5 w-2.5 rounded-sm bg-orange-400" />Comments</span>
                      <span><i aria-hidden="true" className="mr-1 inline-block h-2.5 w-2.5 rounded-sm bg-orange-200" />Shares</span>
                    </div>
                  </div>
                </div>

                {/* Content Categories */}
                <div className="min-h-[280px] rounded-2xl border border-white/10 bg-[#1c1c1c] p-5">
                  <h3 className="text-base font-black text-white">
                    Content Categories
                  </h3>

                  <div className="mt-6 flex items-center justify-center gap-6">
                    <div
                      className="h-36 w-36 rounded-full"
                      style={{
                        background:
                          "conic-gradient(#ff203f 0 22%, #ff8b63 22% 43%, #ffad86 43% 60%, #ffc08f 60% 82%, #e65d2d 82% 100%)",
                      }}
                    />
                    <div className="space-y-2 text-left text-xs text-slate-400">
                      {categoryData.slice(0, 5).map((item, index) => (
                        <div key={`${item?.name || "category"}-${index}`} className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-sm bg-red-500" />
                          {item?.name || "Category"}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Growth Prediction */}
                <div className="min-h-[280px] rounded-2xl border border-white/10 bg-[#1c1c1c] p-5">
                  <h3 className="text-base font-black text-white">
                    Growth Prediction
                  </h3>

                  <div className="mt-7 flex h-44 items-end gap-3 px-2">
                    {(growthData.length > 0
                      ? growthData.slice(0, 5).map((item) =>
                          typeof item === "number" ? item : item?.value ?? 0
                        )
                      : [25, 32, 45, 58, 82]
                    ).map((value, index, arr) => {
                      const maxValue = Math.max(...arr.map((item) => Number(item) || 0), 1);
                      const height = Math.max(8, ((Number(value) || 0) / maxValue) * 100);

                      return (
                        <div key={index} className="flex flex-1 flex-col items-center gap-2">
                          <div className="flex h-36 w-full items-end rounded-t-lg bg-white/[0.02]">
                            <div
                              className="w-full rounded-t-lg bg-gradient-to-t from-red-600 to-red-400 transition-all"
                              style={{ height: `${height}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-slate-500">
                            {["Now", "1M", "3M", "6M", "1Y"][index]}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {growthData.length > 0 && (
                    <p className="mt-3 text-xs text-slate-500">
                      Based on available returned growth signals.
                    </p>
                  )}
                </div>

                {/* Video Performance Comparison */}
                <div className="min-h-[280px] rounded-2xl border border-white/10 bg-[#1c1c1c] p-5">
                  <h3 className="text-base font-black text-white">
                    Video Performance Comparison
                  </h3>

                  <div className="mt-7 flex h-44 items-end justify-center gap-8">
                    {[40, 75, 55, 90].map((height, index) => (
                      <div key={index} className="flex h-full w-10 items-end">
                        <div
                          className="w-full rounded-t-md bg-red-500"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex justify-center gap-4 text-xs text-slate-500">
                    <span>TubeKit</span>
                    <span>YouTube Average</span>
                  </div>

                  {comparisonData.length > 0 && (
                    <p className="mt-2 text-xs text-slate-600">
                      Comparison data returned by the analyzer is available.
                    </p>
                  )}
                </div>

                {/* Audience Engagement Timeline */}
                <div className="min-h-[280px] rounded-2xl border border-white/10 bg-[#1c1c1c] p-5">
                  <h3 className="text-base font-black text-white">
                    Audience Engagement Timeline
                  </h3>

                  <svg viewBox="0 0 420 170" className="mt-7 h-44 w-full">
                    <path
                      d="M15 140 C45 135, 55 145, 80 132 S115 20, 145 48 S175 135, 205 118 S240 95, 270 108 S300 112, 330 92 S365 75, 405 45"
                      fill="none"
                      stroke="#31d0aa"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <line x1="15" y1="145" x2="405" y2="145" stroke="rgba(255,255,255,0.12)" />
                    <line x1="15" y1="25" x2="15" y2="145" stroke="rgba(255,255,255,0.12)" />
                  </svg>

                  {retentionData.length > 0 && (
                    <p className="mt-2 text-xs text-slate-500">
                      Timeline uses returned audience engagement data.
                    </p>
                  )}
                </div>
              </div>
            </section>
{/* EXISTING CHANNEL INFORMATION, SEO AND RECOMMENDATIONS */}
            <section className="mx-auto w-full max-w-5xl space-y-6 text-center">
              {!!channel.description && (
                <div className="rounded-3xl border border-white/10 bg-[#171717] p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                    Channel Description
                  </p>
                  <p className="mx-auto mt-4 max-w-3xl whitespace-pre-line text-sm leading-7 text-slate-400">
                    {channel.description}
                  </p>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-[#171717] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                    Channel SEO
                  </p>
                  <h3 className="mt-2 text-xl font-black text-white">
                    SEO Signals
                  </h3>
                  <div className="mt-5 space-y-3">
                    <ScoreBar label="SEO Score" score={result.seo?.score} />
                    <ScoreBar label="Branding" score={result.branding?.score} />
                    <ScoreBar label="Content Signals" score={result.content?.score} />
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#171717] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-400">
                    Channel Details
                  </p>
                  <h3 className="mt-2 text-xl font-black text-white">
                    Public Information
                  </h3>
                  <div className="mt-5 space-y-3">
                    {[
                      ["Channel ID", channel.channelId],
                      ["Handle", channel.handle],
                      ["Country", channel.country],
                      ["Created", formatDate(channel.publishedAt)],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3"
                      >
                        <p className="text-xs text-slate-500">{label}</p>
                        <p className="mt-1 break-all text-sm font-semibold text-slate-200">
                          {value || "N/A"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {!!result.recommendations?.length && (
                <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                    Channel Recommendations
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    What You Can Improve
                  </h3>

                  <div className="mx-auto mt-6 max-w-3xl space-y-3">
                    {result.recommendations.map((item, index) => (
                      <div
                        key={`${item}-${index}`}
                        className="rounded-2xl border border-white/10 bg-[#171717] p-4 text-left"
                      >
                        <span className="mr-2 font-black text-red-400">
                          {index + 1}.
                        </span>
                        <span className="text-sm leading-6 text-slate-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={copyReport}
                    className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3 text-sm font-bold text-red-300 transition hover:bg-red-500/15"
                  >
                    Copy Full Report
                  </button>
                </div>
              )}

              <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">
                <p className="text-sm leading-7 text-yellow-200/80">
                  TubeKit's Channel Analyzer uses available public YouTube
                  channel information. Some statistics, branding assets and
                  other fields may be unavailable depending on the channel and
                  the data returned by the YouTube API. Any score shown by
                  TubeKit is an analytical indicator, not an official YouTube
                  score.
                </p>
              </div>
            </section>
          </section>
        )}

        {!result && !loading && !error && (
          <div className="mx-auto mt-10 w-full max-w-5xl rounded-3xl border border-white/10 bg-[#090909] p-8 text-center">
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