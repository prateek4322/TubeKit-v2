import { useState } from "react";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function VideoIdExtractor() {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  const extractVideoId = () => {
    const regex =
      /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^?&/\s]+)/;

    const match = url.match(regex);

    if (match && match[1]) {
      setVideoId(match[1]);
    } else {
      alert("Invalid YouTube URL");
      setVideoId("");
    }
  };

  const copyId = async () => {
    await navigator.clipboard.writeText(videoId);
    alert("Video ID Copied!");
  };

  const reset = () => {
    setUrl("");
    setVideoId("");
  };

  return (
    <> <SEO
title="YouTube Video ID Extractor | TubeKit"
description="Extract YouTube Video IDs."
url="/tools/video-id-extractor"
/>
    <ToolLayout>
      <ToolHeader
        title="Video ID Extractor"
        description="Extract the YouTube Video ID from any YouTube URL."
      />

      <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <label className="mb-2 block text-white">
          YouTube Video URL
        </label>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://youtu.be/xxxxxxxxxxx"
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
        />

        <div className="mt-8 flex gap-4">

          <button
            onClick={extractVideoId}
            className="rounded-xl bg-blue-600 px-6 py-3 text-white"
          >
            Extract ID
          </button>

          <button
            onClick={reset}
            className="rounded-xl bg-slate-700 px-6 py-3 text-white"
          >
            Reset
          </button>

        </div>

      </div>

      {videoId && (
        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-xl font-bold text-white">
            Video ID
          </h2>

          <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-950 p-4">

            <code className="text-lg text-green-400">
              {videoId}
            </code>

            <button
              onClick={copyId}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white"
            >
              Copy
            </button>

          </div>

        </div>
      )}
      <section className="mt-12 space-y-10">
  {/* How to Use */}
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the YouTube Video ID Extractor
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's YouTube Video ID Extractor helps you find the unique
      identifier of a YouTube video from its URL. Enter a supported
      YouTube video URL and the tool extracts the Video ID for you.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Copy the URL of the YouTube video.</li>
      <li>Paste the URL into the Video ID Extractor.</li>
      <li>Click the Extract Video ID button.</li>
      <li>Review the extracted Video ID.</li>
      <li>Copy the ID and use it wherever a YouTube Video ID is required.</li>
    </ol>
  </div>

  {/* What Is Video ID */}
  <div>
    <h2 className="text-2xl font-bold">
      What Is a YouTube Video ID?
    </h2>

    <p className="mt-3 text-muted-foreground">
      A YouTube Video ID is a unique identifier associated with an
      individual YouTube video. It is commonly used when referencing a
      video in URLs, embedded players, tools, and integrations.
    </p>

    <p className="mt-3 text-muted-foreground">
      The Video ID is different from the Channel ID. A Channel ID
      identifies a channel, while a Video ID identifies a specific video.
    </p>
  </div>

  {/* Example */}
  <div>
    <h2 className="text-2xl font-bold">
      YouTube Video ID Example
    </h2>

    <p className="mt-3 text-muted-foreground">
      A standard YouTube URL can look like this:
    </p>

    <div className="mt-4 rounded-lg border p-4 overflow-x-auto">
      <code className="text-sm">
        https://www.youtube.com/watch?v=VIDEO_ID
      </code>
    </div>

    <p className="mt-3 text-muted-foreground">
      The value after the <strong>v=</strong> parameter is the Video ID
      for that URL.
    </p>
  </div>

  {/* Supported URLs */}
  <div>
    <h2 className="text-2xl font-bold">
      YouTube URLs and Video IDs
    </h2>

    <p className="mt-3 text-muted-foreground">
      YouTube videos can be shared using different URL formats. A video
      may be opened through a standard watch URL, a shortened youtu.be
      URL, or another supported YouTube URL format.
    </p>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Standard YouTube watch URLs.</li>
      <li>Short youtu.be video URLs.</li>
      <li>Supported YouTube URLs containing a video identifier.</li>
    </ul>
  </div>

  {/* Features */}
  <div>
    <h2 className="text-2xl font-bold">
      YouTube Video ID Extractor Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ Extract YouTube Video IDs</li>
      <li>✓ Simple URL input</li>
      <li>✓ Supports common YouTube URL formats</li>
      <li>✓ Quick results</li>
      <li>✓ Easy copying</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  {/* Tips */}
  <div>
    <h2 className="text-2xl font-bold">
      Tips for Extracting a YouTube Video ID
    </h2>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Copy the complete YouTube video URL when possible.</li>
      <li>Make sure the URL points to a specific video.</li>
      <li>Do not confuse a Video ID with a Channel ID.</li>
      <li>Check the extracted ID before using it in another application.</li>
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
          What is a YouTube Video ID?
        </h3>
        <p className="mt-2 text-muted-foreground">
          A YouTube Video ID is a unique identifier associated with a
          specific YouTube video.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Where can I find a YouTube Video ID?
        </h3>
        <p className="mt-2 text-muted-foreground">
          For many YouTube URLs, the Video ID appears as part of the URL.
          TubeKit can extract it from a supported video URL automatically.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is a Video ID the same as a Channel ID?
        </h3>
        <p className="mt-2 text-muted-foreground">
          No. A Video ID identifies an individual video, while a Channel
          ID identifies a YouTube channel.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can I use a Video ID in an embedded YouTube player?
        </h3>
        <p className="mt-2 text-muted-foreground">
          A Video ID is commonly used when referencing a specific video
          in YouTube embeds and compatible applications.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit Video ID Extractor free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the Video ID Extractor as a free tool for
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

export default VideoIdExtractor;