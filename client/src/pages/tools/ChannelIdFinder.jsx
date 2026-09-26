import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Check,
  Copy,
  ExternalLink,
  Image as ImageIcon,
  Search,
  Users,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";
import api from "@/services/api";

import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function ChannelIdFinder({ query = "" }) {
  const [channel, setChannel] = useState("");
  const [error, setError] = useState("");
  const generatedForRef = useRef("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const faqs = [
    {
      question: "What is a YouTube Channel ID?",
      answer:
        "A YouTube Channel ID is a unique identifier associated with a specific YouTube channel.",
    },
    {
      question: "How can I find my YouTube Channel ID?",
      answer:
        "Enter your YouTube channel URL or supported channel information into the TubeKit Channel ID Finder and use the returned channel information to identify the Channel ID.",
    },
    {
      question: "Is a YouTube Channel ID the same as the channel name?",
      answer:
        "No. A channel name is the public name displayed on YouTube, while the Channel ID is a unique identifier associated with the channel.",
    },
    {
      question: "What is the difference between a Channel ID and Video ID?",
      answer:
        "A Channel ID identifies a YouTube channel, while a Video ID identifies an individual YouTube video.",
    },
    {
      question: "Can a YouTube Channel ID change?",
      answer:
        "A YouTube Channel ID is intended to provide a stable identifier for a channel even when public channel information such as the name changes.",
    },
    {
      question: "Is the TubeKit YouTube Channel ID Finder free?",
      answer:
        "Yes. TubeKit provides the YouTube Channel ID Finder as a free tool for creators.",
    },
  ];

  const findChannel = async (inputValue = channel) => {
    const value = String(inputValue || "").trim();

    if (!value) {
      setError("Please enter a YouTube channel URL, handle, channel ID, or video URL.");
      setData(null);
      return;
    }

    try {
      setLoading(true);
      setData(null);
      setError("");

      const response = await api.post("/youtube/channel-id", {
        channel: value,
      });

      const result = response?.data?.data;

      if (!result?.id) {
        throw new Error("Channel information was not returned.");
      }

      setData(result);
    } catch (error) {
      console.error("CHANNEL ID FINDER ERROR:", error);
      setError(
        error.response?.data?.message ||
          error.message ||
          "Channel not found. Please check the URL and try again."
      );
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const value = String(query || "").trim();

    if (!value || value === generatedForRef.current) return;

    generatedForRef.current = value;
    setChannel(value);

    const timer = setTimeout(() => {
      findChannel(value);
    }, 100);

    return () => clearTimeout(timer);
  }, [query]);

  const copyChannelId = async () => {
    if (!data?.id) return;

    try {
      await navigator.clipboard.writeText(data.id);
      alert("Channel ID copied!");
    } catch (error) {
      console.error("COPY CHANNEL ID ERROR:", error);
    }
  };

  // Support both the normal YouTube API response shape and flattened
  // channel objects returned by the backend.
  const channelName =
    data?.snippet?.title ||
    data?.title ||
    data?.channelName ||
    data?.name ||
    "YouTube Channel";

  const channelLogo =
    data?.snippet?.thumbnails?.high?.url ||
    data?.snippet?.thumbnails?.medium?.url ||
    data?.snippet?.thumbnails?.default?.url ||
    data?.thumbnail ||
    data?.thumbnailUrl ||
    data?.channelLogo ||
    data?.logo ||
    "";

  return (
    <>
      <SEO
        title="YouTube Channel ID Finder | Find Channel ID Free | TubeKit"
        description="Find any YouTube Channel ID instantly with TubeKit's free YouTube Channel ID Finder. Enter a channel URL to get the Channel ID and channel information."
        keywords="YouTube Channel ID Finder, YouTube Channel ID, find YouTube Channel ID, Channel ID Finder, YouTube channel ID extractor, YouTube channel identifier"
        canonical="/tools/channel-id-finder"
        faqs={faqs}
      />

      <ToolLayout>
        <ToolHeader
          title="YouTube Channel ID Finder"
          description="Find a YouTube Channel ID instantly from a supported channel URL."
        />

        {/* Tool */}
        <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/10 bg-[#151515] p-4 shadow-2xl sm:p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
              <Search size={19} strokeWidth={2.5} />
            </div>

            <div>
              <h2 className="text-sm font-black text-white sm:text-base">
                Find YouTube Channel ID
              </h2>
              <p className="text-xs text-slate-500">
                Enter a channel URL, @handle, Channel ID, or YouTube video URL
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex min-h-14 min-w-0 flex-1 items-center rounded-xl border-2 border-red-500/70 bg-[#202020] px-4 transition focus-within:border-red-400 focus-within:shadow-[0_0_25px_rgba(239,68,68,0.12)]">
              <Search
                size={18}
                strokeWidth={2.5}
                className="mr-3 shrink-0 text-red-500"
              />

              <input
                value={channel}
                onChange={(e) => {
                  setChannel(e.target.value);
                  if (error) setError("");
                  generatedForRef.current = "";
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") findChannel();
                }}
                placeholder="Channel URL, @handle, ID, or video URL..."
                aria-label="YouTube channel input"
                className="min-w-0 w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-slate-500 sm:text-base"
              />
            </div>

            <button
              type="button"
              onClick={() => findChannel()}
              disabled={loading}
              className="flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-black text-white shadow-lg shadow-red-500/20 transition hover:bg-red-500 disabled:cursor-wait disabled:opacity-70 sm:min-w-[165px]"
            >
              <Search size={18} strokeWidth={2.5} />
              {loading ? "Searching..." : "Find Channel ID"}
            </button>
          </div>

          {error ? (
            <p className="mt-3 text-xs font-semibold text-red-400">{error}</p>
          ) : (
            <p className="mt-3 text-xs text-slate-500">
              Supported: /channel/UC..., /@handle, /user/username, /c/channel,
              channel IDs, channel names, and YouTube video URLs.
            </p>
          )}
        </div>

        {/* Result */}
        {data && !loading && (
          <div className="mx-auto mt-8 w-full max-w-5xl rounded-3xl border border-blue-500/20 bg-[#090909] p-5 shadow-2xl sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="relative shrink-0">
                {channelLogo ? (
                  <img
                    src={channelLogo}
                    alt={`${channelName} channel logo`}
                    className="h-24 w-24 rounded-full border-2 border-red-500/40 object-cover shadow-lg shadow-red-500/10"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                ) : null}

                <div
                  className={`${
                    channelLogo ? "hidden " : ""
                  }flex h-24 w-24 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 text-red-400`}
                >
                  <Users size={34} />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
                    <Check size={14} />
                    CHANNEL FOUND
                  </span>

                  {data.snippet?.customUrl && (
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
                      {data.snippet.customUrl}
                    </span>
                  )}
                </div>

                <h2 className="mt-3 break-words text-2xl font-black text-white sm:text-3xl">
                  {channelName}
                </h2>

                {(data.snippet?.description || data.description) && (
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">
                    {data.snippet?.description || data.description}
                  </p>
                )}

                {(data.snippet?.publishedAt || data.publishedAt) && (
                  <p className="mt-3 text-xs text-slate-500">
                    Created:{" "}
                    {new Date(
                      data.snippet?.publishedAt || data.publishedAt
                    ).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                    YouTube Channel ID
                  </p>
                  <code className="mt-2 block break-all text-sm font-bold text-green-400 sm:text-base">
                    {data.id}
                  </code>
                </div>

                <button
                  type="button"
                  onClick={copyChannelId}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  <Copy size={16} />
                  Copy ID
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5">
                <Users size={20} className="text-red-400" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Subscribers
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  {Number(data.statistics?.subscriberCount || 0).toLocaleString()}
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
                <Video size={20} className="text-yellow-300" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Videos
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  {Number(data.statistics?.videoCount || 0).toLocaleString()}
                </p>
              </div>

              <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5">
                <BarChart3 size={20} className="text-green-400" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Channel Views
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  {Number(data.statistics?.viewCount || 0).toLocaleString()}
                </p>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
                <ImageIcon size={20} className="text-blue-400" />
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Profile Image
                </p>
                <p className="mt-2 text-sm font-bold text-white">
                  {channelLogo ? "Available" : "Not available"}
                </p>
              </div>
            </div>

            {channelLogo && data.snippet?.thumbnails && (
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <p className="text-sm font-bold text-white">
                  Profile Image URLs
                </p>

                <div className="mt-4 space-y-3">
                  {["default", "medium", "high"].map((size) => {
                    const imageUrl = data.snippet?.thumbnails?.[size]?.url;
                    if (!imageUrl) return null;

                    return (
                      <div
                        key={size}
                        className="flex flex-col gap-2 rounded-xl border border-white/10 bg-black/20 p-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span className="text-xs font-bold uppercase text-slate-500">
                          {size}
                        </span>

                        <code className="break-all text-xs text-slate-400">
                          {imageUrl}
                        </code>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              {data.snippet?.customUrl && (
                <a
                  href={`https://www.youtube.com/${String(data.snippet.customUrl).replace(/^@?/, "@")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/5 px-5 py-3 text-sm font-bold text-red-400 transition hover:border-red-400 hover:bg-red-500/10"
                >
                  <ExternalLink size={16} />
                  Open Channel
                </a>
              )}

              {data.id && (
                <a
                  href={`https://www.youtube.com/channel/${data.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/5 px-5 py-3 text-sm font-bold text-blue-400 transition hover:border-blue-400 hover:bg-blue-500/10"
                >
                  <ExternalLink size={16} />
                  Open Channel ID URL
                </a>
              )}
            </div>
          </div>
        )}

        {/* SEO Content */}
        <section className="mt-16 space-y-12">

          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">
                YouTube Channel ID Finder
              </span>{" "}
              <span className="text-blue-400">
                Free Online Tool
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              TubeKit's YouTube Channel ID Finder helps you find the
              unique identifier associated with a YouTube channel.
              Instead of manually searching through channel information,
              enter a supported channel URL and get the Channel ID along
              with available channel details.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              A YouTube Channel ID can be useful when working with
              YouTube APIs, analytics tools, channel integrations and
              other creator workflows that require a unique channel
              identifier.
            </p>
          </div>

          {/* How to Use */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">
                How to Find
              </span>{" "}
              <span className="text-yellow-400">
                a YouTube Channel ID
              </span>
            </h2>

            <ol className="mt-6 list-decimal space-y-3 pl-6 text-muted-foreground">
              <li>Copy the YouTube channel URL.</li>
              <li>Paste the URL into the Channel ID Finder.</li>
              <li>Click the Find Channel ID button.</li>
              <li>Wait for the channel information to load.</li>
              <li>Check the returned channel name and information.</li>
              <li>Copy the Channel ID using the Copy ID button.</li>
            </ol>
          </div>

          {/* What is Channel ID */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-yellow-400">
                What Is a
              </span>{" "}
              <span className="text-red-400">
                YouTube Channel ID?
              </span>
            </h2>

            <p className="mt-4 leading-8 text-muted-foreground">
              A YouTube Channel ID is a unique identifier associated
              with a particular YouTube channel. It is different from
              the channel's display name, handle or custom URL.
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              Channel IDs are especially useful when a specific channel
              needs to be identified programmatically or used with
              compatible YouTube tools and APIs.
            </p>
          </div>

          {/* Why useful */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-blue-400">
                Why Do You Need a
              </span>{" "}
              <span className="text-green-400">
                YouTube Channel ID?
              </span>
            </h2>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-muted-foreground">
              <li>Identify a specific YouTube channel.</li>
              <li>Work with compatible YouTube APIs.</li>
              <li>Connect channel data with supported tools.</li>
              <li>Distinguish channels with similar names.</li>
              <li>Use a stable identifier in channel workflows.</li>
              <li>Analyze channel information with compatible services.</li>
            </ul>
          </div>

          {/* Channel ID vs Channel Name */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-red-400">
                Channel ID
              </span>{" "}
              <span className="text-yellow-400">
                vs Channel Name
              </span>
            </h2>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="px-5 py-4 font-black text-red-400">
                      Channel ID
                    </th>

                    <th className="px-5 py-4 font-black text-blue-400">
                      Channel Name
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="px-5 py-4 text-muted-foreground">
                      Unique identifier
                    </td>

                    <td className="px-5 py-4 text-muted-foreground">
                      Public display name
                    </td>
                  </tr>

                  <tr className="border-t border-slate-800">
                    <td className="px-5 py-4 text-muted-foreground">
                      Used for identification
                    </td>

                    <td className="px-5 py-4 text-muted-foreground">
                      Used for branding and recognition
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-green-400">
                YouTube Channel ID Finder
              </span>{" "}
              <span className="text-blue-400">
                Features
              </span>
            </h2>

            <ul className="mt-6 grid gap-3 text-muted-foreground sm:grid-cols-2">
              <li>Find YouTube Channel IDs</li>
              <li>Simple channel URL input</li>
              <li>Fast channel lookup</li>
              <li>Channel name preview</li>
              <li>Subscriber information</li>
              <li>Video count information</li>
              <li>One-click Channel ID copying</li>
              <li>Free to use</li>
            </ul>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-yellow-400">
                Tips for Finding the
              </span>{" "}
              <span className="text-red-400">
                Correct Channel ID
              </span>
            </h2>

            <ul className="mt-6 list-disc space-y-3 pl-6 text-muted-foreground">
              <li>
                Make sure the URL belongs to the intended YouTube channel.
              </li>

              <li>
                Check the returned channel name before copying the ID.
              </li>

              <li>
                Do not confuse a Channel ID with a Video ID.
              </li>

              <li>
                Copy the complete Channel ID without removing characters.
              </li>

              <li>
                Use the Channel ID only with services that support it.
              </li>
            </ul>
          </div>

          {/* Internal Links */}
          <div>
            <h2 className="text-3xl font-black tracking-tight">
              <span className="text-blue-400">
                More Free
              </span>{" "}
              <span className="text-green-400">
                YouTube Tools
              </span>
            </h2>

            <p className="mt-4 text-muted-foreground">
              Explore more TubeKit tools for YouTube creators.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Link
                to="/tools/video-id-extractor"
                className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5 transition hover:border-red-400"
              >
                <h3 className="font-black text-red-400">
                  YouTube Video ID Extractor
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Extract a Video ID from a YouTube video URL.
                </p>
              </Link>

              <Link
                to="/tools/thumbnail-downloader"
                className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5 transition hover:border-yellow-400"
              >
                <h3 className="font-black text-yellow-400">
                  YouTube Thumbnail Downloader
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Retrieve available thumbnails from a YouTube video.
                </p>
              </Link>

              <Link
                to="/tools/tags-generator"
                className="rounded-2xl border border-green-500/30 bg-green-500/5 p-5 transition hover:border-green-400"
              >
                <h3 className="font-black text-green-400">
                  YouTube Tags Generator
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Generate relevant tags for your YouTube videos.
                </p>
              </Link>

              <Link
                to="/tools/keyword-generator"
                className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 transition hover:border-blue-400"
              >
                <h3 className="font-black text-blue-400">
                  YouTube Keyword Generator
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  Generate keyword ideas for YouTube content.
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
                About Channel IDs
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

        </section>
      </ToolLayout>
    </>
  );
}

export default ChannelIdFinder;