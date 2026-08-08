import { useState } from "react";
import api from "@/services/api";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function ChannelIdFinder() {
  const [channel, setChannel] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const findChannel = async () => {
    try {
      setLoading(true);

      const response = await api.post("/youtube/channel-id", {
        channel,
      });

      setData(response.data.data);
    } catch (error) {
      alert(error.response?.data?.message || "Channel not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <> <SEO
title="YouTube Channel ID Finder | TubeKit"
description="Find YouTube Channel IDs."
url="/tools/channel-id-finder"
/>
    <ToolLayout>
      <ToolHeader
        title="Channel ID Finder"
        description="Find YouTube Channel ID instantly."
      />

      <input
        value={channel}
        onChange={(e) => setChannel(e.target.value)}
        placeholder="https://youtube.com/@MrBeast"
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
      />

      <button
        onClick={findChannel}
        disabled={loading}
        className="mt-5 rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        {loading ? "Searching..." : "Find Channel"}
      </button>

      {data && (
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <img
            src={data.snippet.thumbnails.high.url}
            alt={data.snippet.title}
            className="h-24 w-24 rounded-full"
          />

          <h2 className="mt-4 text-xl font-bold text-white">
            {data.snippet.title}
          </h2>

          <p className="mt-2 text-slate-400">
            Channel ID:
          </p>

          <code className="text-green-400">
            {data.id}
          </code>

          <p className="mt-4 text-white">
            Subscribers:{" "}
            {Number(
              data.statistics.subscriberCount
            ).toLocaleString()}
          </p>

          <p className="text-white">
            Videos:{" "}
            {Number(
              data.statistics.videoCount
            ).toLocaleString()}
          </p>
        </div>
      )}
      <section className="mt-12 space-y-10">
  {/* How to Use */}
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the YouTube Channel ID Finder
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's YouTube Channel ID Finder helps creators find the unique
      channel ID associated with a YouTube channel. Enter the requested
      channel information and use the result for tools, integrations,
      analytics, or other channel-related tasks.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Enter the YouTube channel URL or information requested by the tool.</li>
      <li>Click the Find Channel ID button.</li>
      <li>Wait for the channel information to be processed.</li>
      <li>Copy the displayed Channel ID.</li>
      <li>Use the ID wherever a YouTube Channel ID is required.</li>
    </ol>
  </div>

  {/* What Is Channel ID */}
  <div>
    <h2 className="text-2xl font-bold">
      What Is a YouTube Channel ID?
    </h2>

    <p className="mt-3 text-muted-foreground">
      A YouTube Channel ID is a unique identifier associated with a
      YouTube channel. It is different from the channel's display name
      and can be useful when working with YouTube-related tools and APIs.
    </p>

    <p className="mt-3 text-muted-foreground">
      Channel names can change, while the channel's unique identifier
      provides a more consistent way to reference the channel.
    </p>
  </div>

  {/* Why Channel ID Is Useful */}
  <div>
    <h2 className="text-2xl font-bold">
      Why Do You Need a YouTube Channel ID?
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Identify a specific YouTube channel.</li>
      <li>Use channel information with compatible tools and APIs.</li>
      <li>Distinguish channels with similar names.</li>
      <li>Use the identifier in channel-related workflows.</li>
      <li>Make integrations more reliable than using a display name.</li>
    </ul>
  </div>

  {/* Features */}
  <div>
    <h2 className="text-2xl font-bold">
      YouTube Channel ID Finder Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ Find YouTube Channel IDs</li>
      <li>✓ Simple channel lookup</li>
      <li>✓ Easy-to-use interface</li>
      <li>✓ Quick results</li>
      <li>✓ One-click copying</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  {/* Tips */}
  <div>
    <h2 className="text-2xl font-bold">
      Tips for Finding the Correct Channel ID
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Make sure the channel URL belongs to the intended channel.</li>
      <li>Check the returned channel information before copying the ID.</li>
      <li>Do not confuse a channel ID with a video ID.</li>
      <li>Keep the complete ID when copying it into another tool.</li>
    </ul>
  </div>

  {/* FAQ */}
  <div>
    <h2 className="text-2xl font-bold">
      Frequently Asked Questions
    </h2>

    <div className="mt-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          What is a YouTube Channel ID?
        </h3>
        <p className="mt-2 text-muted-foreground">
          A YouTube Channel ID is a unique identifier used to reference
          a specific YouTube channel.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is a YouTube Channel ID the same as the channel name?
        </h3>
        <p className="mt-2 text-muted-foreground">
          No. A channel name is the public name displayed on YouTube,
          while the Channel ID is a unique identifier for the channel.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can a YouTube Channel ID change?
        </h3>
        <p className="mt-2 text-muted-foreground">
          The unique channel identifier is intended to provide a stable
          reference to the channel even if its public name changes.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          What is the difference between a Channel ID and Video ID?
        </h3>
        <p className="mt-2 text-muted-foreground">
          A Channel ID identifies a YouTube channel, while a Video ID
          identifies an individual YouTube video.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit Channel ID Finder free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the Channel ID Finder as a free tool for
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

export default ChannelIdFinder;