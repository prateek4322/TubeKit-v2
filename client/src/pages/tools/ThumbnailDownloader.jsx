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
    </ToolLayout>
    </>
  );
}

export default ThumbnailDownloader;