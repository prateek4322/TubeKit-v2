import { useState } from "react";
import { Link } from "react-router-dom";
import api from "@/services/api";

import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function ChannelIdFinder() {
  const [channel, setChannel] = useState("");
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

  const findChannel = async () => {
    if (!channel.trim()) {
      alert("Please enter a YouTube channel URL.");
      return;
    }

    try {
      setLoading(true);
      setData(null);

      const response = await api.post("/youtube/channel-id", {
        channel: channel.trim(),
      });

      setData(response.data.data);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Channel not found. Please check the URL and try again."
      );
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const copyChannelId = async () => {
    if (!data?.id) return;

    try {
      await navigator.clipboard.writeText(data.id);
      alert("Channel ID copied!");
    } catch (error) {
      console.error("COPY CHANNEL ID ERROR:", error);
    }
  };

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
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <label className="mb-2 block font-semibold text-white">
            YouTube Channel URL
          </label>

          <input
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                findChannel();
              }
            }}
            placeholder="https://youtube.com/@channelname"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none transition focus:border-blue-500"
          />

          <button
            onClick={findChannel}
            disabled={loading}
            className="mt-6 rounded-xl bg-gradient-to-r from-red-500 via-yellow-400 via-green-500 to-blue-500 px-6 py-3 font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Searching..." : "Find Channel ID"}
          </button>
        </div>

        {/* Result */}
        {data && (
          <div className="mt-10 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              {data.snippet?.thumbnails?.high?.url && (
                <img
                  src={data.snippet.thumbnails.high.url}
                  alt={`${data.snippet.title} YouTube channel`}
                  className="h-24 w-24 rounded-full object-cover"
                />
              )}

              <div>
                <p className="text-sm font-semibold text-green-400">
                  CHANNEL FOUND
                </p>

                <h2 className="mt-1 text-2xl font-black text-white">
                  {data.snippet?.title}
                </h2>
              </div>
            </div>

            {/* Channel ID */}
            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950 p-5">
              <p className="text-sm font-semibold text-yellow-400">
                YouTube Channel ID
              </p>

              <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <code className="break-all text-sm text-green-400 sm:text-base">
                  {data.id}
                </code>

                <button
                  onClick={copyChannelId}
                  className="shrink-0 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-500"
                >
                  Copy ID
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">
                  Subscribers
                </p>

                <p className="mt-2 text-2xl font-black text-white">
                  {Number(
                    data.statistics?.subscriberCount || 0
                  ).toLocaleString()}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                <p className="text-sm text-slate-400">
                  Videos
                </p>

                <p className="mt-2 text-2xl font-black text-white">
                  {Number(
                    data.statistics?.videoCount || 0
                  ).toLocaleString()}
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
              <li>✓ Find YouTube Channel IDs</li>
              <li>✓ Simple channel URL input</li>
              <li>✓ Fast channel lookup</li>
              <li>✓ Channel name preview</li>
              <li>✓ Subscriber information</li>
              <li>✓ Video count information</li>
              <li>✓ One-click Channel ID copying</li>
              <li>✓ Free to use</li>
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
                  YouTube Video ID Extractor →
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
                  YouTube Thumbnail Downloader →
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
                  YouTube Tags Generator →
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
                  YouTube Keyword Generator →
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