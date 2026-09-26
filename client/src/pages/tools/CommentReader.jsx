import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";
import ToolForm from "@/components/tool-layout/ToolForm";

function CommentReader({ query: initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const generatedForRef = useRef("");

  const readComments = async (value) => {
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
      const response = await api.get("/youtube/comments", {
        params: { url: input },
      });

      const data = response?.data?.data || response?.data || null;

      if (!data) {
        throw new Error("No comment data was returned.");
      }

      setResult(data);
    } catch (err) {
      console.error("Comment Reader Error:", err);

      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Unable to read comments right now. Please try again.";

      setError(message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = ({ topic }) => {
    setQuery(topic);
    readComments(topic);
  };

  useEffect(() => {
    const value = String(initialQuery || "").trim();

    if (!value) return;

    setQuery(value);

    const timer = setTimeout(() => {
      readComments(value);
    }, 0);

    return () => clearTimeout(timer);
  }, [initialQuery]);

  const copyText = async (text) => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(String(text));
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const copyAllComments = async () => {
    const comments = result?.comments || [];

    const text = comments
      .map((comment, index) => {
        const author =
          comment.author ||
          comment.authorName ||
          comment.channelTitle ||
          "Unknown";
        const body = comment.text || comment.comment || "";

        return `${index + 1}. ${author}\n${body}`;
      })
      .join("\n\n");

    await copyText(text);
  };

  const formatNumber = (value) => {
    if (value === null || value === undefined || value === "") return "N/A";

    const numeric = Number(value);

    if (!Number.isFinite(numeric)) return String(value);

    return new Intl.NumberFormat("en-US", {
      notation: numeric >= 1000 ? "compact" : "standard",
      maximumFractionDigits: 1,
    }).format(numeric);
  };

  const comments = result?.comments || [];
  const videoInfo = result?.videoInfo || {};

  const sentiment = result?.sentiment || {};
  const positive = Number(sentiment.positive ?? 0);
  const neutral = Number(sentiment.neutral ?? 0);
  const negative = Number(sentiment.negative ?? 0);

  const totalSentiment =
    positive + neutral + negative > 0
      ? positive + neutral + negative
      : 0;

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

  const sentimentPercent = (value) => {
    if (!totalSentiment) return 0;
    return Math.round((Number(value) / totalSentiment) * 100);
  };

  return (
    <>
      <SEO
        title="YouTube Comment Reader - Read & Analyze Comments | TubeKit"
        description="Read public YouTube comments with TubeKit's Comment Reader. View comments, authors, likes, replies, timestamps, comment statistics and available sentiment insights."
        canonical="/tools/comment-reader"
        keywords={[
          "YouTube comment reader",
          "YouTube comments reader",
          "YouTube comment extractor",
          "YouTube comment viewer",
          "read YouTube comments",
          "YouTube comment analyzer",
          "YouTube comments tool",
        ]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Tools", url: "/tools" },
          { name: "Comment Reader", url: "/tools/comment-reader" },
        ]}
      />

      <ToolLayout>
        <ToolHeader
          title="YouTube Comment Reader"
          description="Read public comments from a YouTube video in a clean dashboard with comment details, engagement data, replies, statistics, and available audience insights."
        />

        <ToolForm
          query={query}
          setQuery={setQuery}
          onGenerate={handleGenerate}
          placeholder="Paste a YouTube video URL..."
          buttonText="Read Comments"
          helperText="Enter a public YouTube video URL to load available comments."
        />

        {loading && (
          <div className="mt-10 rounded-3xl border border-red-500/20 bg-[#090909] p-8 text-center shadow-[0_0_60px_rgba(239,68,68,0.08)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-red-500/20 border-t-red-500" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              Reading YouTube Comments
            </h3>

            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Loading available comments and engagement information from the
              video.
            </p>

            <div className="mx-auto mt-7 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Comment text",
                "Comment authors",
                "Likes & replies",
                "Timestamps",
                "Comment statistics",
                "Audience signals",
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
                      COMMENT READER
                    </span>

                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                      Public Comments
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                    {videoInfo.title || "YouTube Video Comments"}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
                    <span>
                      Channel:{" "}
                      <strong className="text-slate-200">
                        {videoInfo.channelTitle || "N/A"}
                      </strong>
                    </span>

                    <span>
                      Video ID:{" "}
                      <strong className="text-slate-200">
                        {videoInfo.videoId || "N/A"}
                      </strong>
                    </span>
                  </div>

                  {videoInfo.videoUrl && (
                    <a
                      href={videoInfo.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300"
                    >
                      Open YouTube Video
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={copyAllComments}
                  className="shrink-0 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2.5 text-sm font-bold text-red-300 transition hover:bg-red-500/15"
                >
                  Copy All Comments
                </button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <MetricCard
                label="Comments"
                value={formatNumber(
                  result.totalComments ?? result.commentCount ?? comments.length
                )}
                helper="Available comments"
                icon="C"
              />

              <MetricCard
                label="Replies"
                value={formatNumber(result.totalReplies)}
                helper="Available comment replies"
                icon="R"
              />

              <MetricCard
                label="Likes"
                value={formatNumber(result.totalLikes)}
                helper="Likes across returned comments"
                icon="L"
              />

              <MetricCard
                label="Comments Loaded"
                value={formatNumber(comments.length)}
                helper="Comments displayed below"
                icon="D"
              />
            </div>

            {!!result.sentiment && (
              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-400">
                      Audience Signals
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">
                      Available Sentiment Insights
                    </h3>
                  </div>

                  <span className="rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-bold text-green-400">
                    Informational
                  </span>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  <MetricCard
                    label="Positive"
                    value={`${sentimentPercent(positive)}%`}
                    helper={`${formatNumber(positive)} comments`}
                    icon="+"
                  />

                  <MetricCard
                    label="Neutral"
                    value={`${sentimentPercent(neutral)}%`}
                    helper={`${formatNumber(neutral)} comments`}
                    icon="="
                  />

                  <MetricCard
                    label="Negative"
                    value={`${sentimentPercent(negative)}%`}
                    helper={`${formatNumber(negative)} comments`}
                    icon="-"
                  />
                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="flex h-full">
                    <div
                      className="h-full bg-green-500"
                      style={{
                        width: `${sentimentPercent(positive)}%`,
                      }}
                    />
                    <div
                      className="h-full bg-yellow-400"
                      style={{
                        width: `${sentimentPercent(neutral)}%`,
                      }}
                    />
                    <div
                      className="h-full bg-red-500"
                      style={{
                        width: `${sentimentPercent(negative)}%`,
                      }}
                    />
                  </div>
                </div>

                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Sentiment data is shown only when returned by the analysis
                  service. It is an indicative classification, not a
                  definitive interpretation of viewer intent.
                </p>
              </div>
            )}

            {!!result.topKeywords?.length && (
              <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                  Comment Topics
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Frequently Detected Terms
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {result.topKeywords.map((item, index) => {
                    const keyword =
                      typeof item === "string" ? item : item.keyword;
                    const count =
                      typeof item === "object" ? item.count : null;

                    return (
                      <span
                        key={`${keyword}-${index}`}
                        className="rounded-full bg-yellow-500/10 px-3 py-1.5 text-xs font-semibold text-yellow-300"
                      >
                        {keyword}
                        {count !== null && ` (${count})`}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="rounded-3xl border border-white/10 bg-[#090909] p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                    Comments
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    Viewer Comments
                  </h3>
                </div>

                <span className="text-sm font-semibold text-slate-500">
                  {formatNumber(comments.length)} loaded
                </span>
              </div>

              {comments.length > 0 ? (
                <div className="mt-6 space-y-4">
                  {comments.map((comment, index) => {
                    const author =
                      comment.author ||
                      comment.authorName ||
                      comment.channelTitle ||
                      "Unknown user";

                    const text =
                      comment.text ||
                      comment.comment ||
                      comment.snippet?.textDisplay ||
                      "";

                    const likes =
                      comment.likeCount ??
                      comment.likes ??
                      comment.snippet?.likeCount;

                    const replies =
                      comment.replyCount ??
                      comment.replies ??
                      comment.snippet?.totalReplyCount;

                    const publishedAt =
                      comment.publishedAt ||
                      comment.createdAt ||
                      comment.snippet?.publishedAt;

                    const authorImage =
                      comment.authorImage ||
                      comment.authorProfileImage ||
                      comment.snippet?.authorProfileImageUrl;

                    return (
                      <article
                        key={
                          comment.id ||
                          comment.commentId ||
                          `${author}-${index}`
                        }
                        className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-blue-500/30"
                      >
                        <div className="flex items-start gap-4">
                          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-blue-500/10">
                            {authorImage ? (
                              <img
                                src={authorImage}
                                alt={`${author} profile`}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-sm font-black text-blue-400">
                                {String(author).charAt(0).toUpperCase()}
                              </div>
                            )}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                              <div className="min-w-0">
                                <p className="truncate text-sm font-bold text-white">
                                  {author}
                                </p>

                                {publishedAt && (
                                  <p className="mt-1 text-xs text-slate-500">
                                    {publishedAt}
                                  </p>
                                )}
                              </div>

                              <button
                                type="button"
                                onClick={() => copyText(text)}
                                className="self-start rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-slate-400 transition hover:border-blue-500/30 hover:text-blue-300"
                              >
                                Copy
                              </button>
                            </div>

                            <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-300">
                              {text || "Comment text unavailable."}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
                              <span>
                                Likes: {formatNumber(likes ?? 0)}
                              </span>

                              <span>
                                Replies: {formatNumber(replies ?? 0)}
                              </span>

                              {comment.sentiment && (
                                <span className="text-green-400">
Sentiment: {comment.sentiment}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-6 text-center">
                  <h4 className="text-lg font-bold text-white">
                    No comments returned
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Comments may be disabled, unavailable, restricted, or not
                    returned by the data source for this video.
                  </p>
                </div>
              )}
            </div>

            {!!result.recommendations?.length && (
              <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                  Comment Insights
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Available Audience Insights
                </h3>

                <div className="mt-6 space-y-3">
                  {result.recommendations.map((item, index) => (
                    <div
                      key={`${item}-${index}`}
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
                TubeKit displays comments and engagement information available
                through the supported YouTube data source. Some videos may have
                comments disabled, restricted, deleted, or otherwise
                unavailable. Returned comments may also represent only the
                available sample rather than every comment on the video.
              </p>
            </div>
          </section>
        )}

        {!result && !loading && !error && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-[#090909] p-8 text-center">
            <h3 className="text-2xl font-black text-white">
              Read YouTube Comments in One Place
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Enter a public YouTube video URL to view available comments,
              authors, likes, replies, timestamps, statistics, and supported
              audience insights.
            </p>

            <div className="mx-auto mt-7 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Comment text",
                "Comment authors",
                "Profile images",
                "Comment likes",
                "Reply counts",
                "Timestamps",
                "Comment statistics",
                "Top comment topics",
                "Available sentiment",
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
                Comment Insights
              </span>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Understand Your YouTube Audience
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-400">
                Comments can provide useful context about what viewers are
                discussing, asking, praising, criticizing, or requesting.
                TubeKit puts available public comments into a readable format
                for easier review.
              </p>
            </div>

            <div className="mt-10 space-y-8 text-slate-300">
              <article>
                <h3 className="text-xl font-bold text-white">
                  What does Comment Reader do?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Comment Reader loads available public comments for a YouTube
                  video and presents the comment text, author information,
                  engagement counts, timestamps, and other fields returned by
                  the data source.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-bold text-white">
                  Can I copy individual comments?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Yes. Each returned comment has its own Copy action, and the
                  report also includes a Copy All Comments option.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-bold text-white">
                  Why are some comments missing?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  A video may have comments disabled, comments may be
                  restricted or deleted, or the data source may return only a
                  limited set of comments. Therefore, the displayed list
                  should not automatically be treated as every comment on the
                  video.
                </p>
              </article>

              <article>
                <h3 className="text-xl font-bold text-white">
                  Can comments be used to understand audience feedback?
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Comments can provide qualitative audience feedback, but they
                  represent only the viewers who choose to comment and should
                  not be treated as a complete representation of the entire
                  audience.
                </p>
              </article>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <Link
                to="/tools/channel-analyzer"
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-blue-500/40"
              >
                <p className="text-sm font-bold text-blue-400">
                  Channel Analyzer
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Review channel profile, branding, statistics, and public
                  channel signals.
                </p>
              </Link>

              <Link
                to="/tools/seo-analyzer"
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-red-500/40"
              >
                <p className="text-sm font-bold text-red-400">
                  SEO Analyzer
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Analyze video metadata, title, description, tags, keywords,
                  and SEO checks.
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
                  Extract and review a video's public description.
                </p>
              </Link>

              <Link
                to="/tools/tag-extractor"
                className="rounded-2xl border border-white/10 bg-[#0b0b0b] p-5 transition hover:border-yellow-500/40"
              >
                <p className="text-sm font-bold text-yellow-400">
                  Tag Extractor
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Extract available YouTube video tags for research and
                  comparison.
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
                YouTube Comment Reader FAQs
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {[
                {
                  q: "What URL should I enter?",
                  a: "Enter a public YouTube video URL that has comments available through the supported data source.",
                },
                {
                  q: "Can I read all comments from a video?",
                  a: "The tool can only display the comments returned by the supported data source. The returned list may be limited and should not automatically be treated as every comment on the video.",
                },
                {
                  q: "Can I copy comments?",
                  a: "Yes. You can copy an individual comment or use Copy All Comments to copy the currently returned comments.",
                },
                {
                  q: "Does the tool show comment likes and replies?",
                  a: "Yes, when those engagement fields are available in the returned comment data.",
                },
                {
                  q: "Why does a video show no comments?",
                  a: "Comments may be disabled, restricted, deleted, unavailable, or not returned by the data source.",
                },
                {
                  q: "Is sentiment analysis guaranteed to be accurate?",
                  a: "No. If sentiment data is provided, it should be treated as an indicative classification rather than a definitive interpretation of viewer intent.",
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

export default CommentReader;
                  