import { useState } from "react";
import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

function ThumbnailDownloader() {
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

  const reset = () => {
    setUrl("");
    setVideoId("");
  };

  const thumbnails = [
    {
      title: "Maximum Resolution",
      url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    },
    {
      title: "High Quality",
      url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    },
    {
      title: "Medium Quality",
      url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    },
    {
      title: "Default",
      url: `https://img.youtube.com/vi/${videoId}/default.jpg`,
    },
  ];

  return ( 
    <> <SEO
title="YouTube Thumbnail Downloader | TubeKit"
description="Download HD YouTube thumbnails."
url="/tools/thumbnail-downloader"
/>
    <ToolLayout>
      <ToolHeader
        title="YouTube Thumbnail Downloader"
        description="Download thumbnails from any YouTube video."
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
            Get Thumbnails
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
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {thumbnails.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full rounded-xl"
              />

              <h3 className="mt-4 text-lg font-bold text-white">
                {item.title}
              </h3>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white"
              >
                Download
              </a>
            </div>
          ))}

        </div>
      )}
      <section className="mt-12 space-y-10">
  {/* How to Use */}
  <div>
    <h2 className="text-2xl font-bold">
      How to Use the YouTube Thumbnail Downloader
    </h2>

    <p className="mt-3 text-muted-foreground">
      TubeKit's YouTube Thumbnail Downloader helps you retrieve available
      thumbnail images associated with a YouTube video. Enter a supported
      YouTube video URL and use the generated thumbnail options to view
      or save the available image.
    </p>

    <ol className="mt-5 list-decimal space-y-2 pl-6 text-muted-foreground">
      <li>Copy the URL of the YouTube video.</li>
      <li>Paste the URL into the Thumbnail Downloader.</li>
      <li>Click the Download or Get Thumbnail button.</li>
      <li>Review the available thumbnail image.</li>
      <li>Save the image if you have permission to use it.</li>
    </ol>
  </div>

  {/* What Is YouTube Thumbnail */}
  <div>
    <h2 className="text-2xl font-bold">
      What Is a YouTube Thumbnail?
    </h2>

    <p className="mt-3 text-muted-foreground">
      A YouTube thumbnail is the preview image displayed for a video.
      It gives viewers a visual indication of what the video is about
      before they open it.
    </p>

    <p className="mt-3 text-muted-foreground">
      Thumbnails can be an important part of how viewers evaluate videos,
      so creators should make sure their thumbnails accurately represent
      the content.
    </p>
  </div>

  {/* Thumbnail Quality */}
  <div>
    <h2 className="text-2xl font-bold">
      YouTube Thumbnail Quality and Formats
    </h2>

    <p className="mt-3 text-muted-foreground">
      YouTube may provide thumbnail images at different resolutions or
      sizes depending on the video and available image resources. The
      exact quality available can vary.
    </p>

    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
      <li>Use the highest available quality when appropriate.</li>
      <li>Check the image before saving or using it.</li>
      <li>Make sure the thumbnail belongs to the intended video.</li>
      <li>Respect the copyright and usage rights of the image.</li>
    </ul>
  </div>

  {/* Features */}
  <div>
    <h2 className="text-2xl font-bold">
      YouTube Thumbnail Downloader Features
    </h2>

    <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-muted-foreground">
      <li>✓ Retrieve YouTube thumbnails</li>
      <li>✓ Simple video URL input</li>
      <li>✓ Quick thumbnail preview</li>
      <li>✓ Easy access to available images</li>
      <li>✓ Supports common YouTube video URLs</li>
      <li>✓ Free to use</li>
    </ul>
  </div>

  {/* Usage Rights */}
  <div>
    <h2 className="text-2xl font-bold">
      Can You Use Downloaded YouTube Thumbnails?
    </h2>

    <p className="mt-3 text-muted-foreground">
      Downloading an image does not automatically give you permission to
      republish or commercially use it. Thumbnail images may be protected
      by copyright or other rights.
    </p>

    <p className="mt-3 text-muted-foreground">
      If you plan to reuse a thumbnail, make sure you have the appropriate
      permission or rights to use the image.
    </p>
  </div>

  {/* FAQ */}
  <div>
    <h2 className="text-2xl font-bold">
      Frequently Asked Questions
    </h2>

    <div className="mt-6 space-y-6">
      <div>
        <h3 className="text-lg font-semibold">
          What is a YouTube thumbnail downloader?
        </h3>
        <p className="mt-2 text-muted-foreground">
          It is a tool that retrieves an available thumbnail image from a
          YouTube video URL.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can I download any YouTube thumbnail?
        </h3>
        <p className="mt-2 text-muted-foreground">
          The tool can retrieve available thumbnail images for supported
          YouTube videos, but your right to reuse the image depends on
          applicable copyright and usage rights.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Can I use downloaded thumbnails on my own channel?
        </h3>
        <p className="mt-2 text-muted-foreground">
          You should only reuse another creator's thumbnail when you have
          the appropriate permission or legal right to do so.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Does the downloader improve thumbnail quality?
        </h3>
        <p className="mt-2 text-muted-foreground">
          No. The tool retrieves available thumbnail images. It does not
          guarantee higher quality than the source image provides.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold">
          Is the TubeKit Thumbnail Downloader free?
        </h3>
        <p className="mt-2 text-muted-foreground">
          TubeKit provides the Thumbnail Downloader as a free tool for
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

export default ThumbnailDownloader;