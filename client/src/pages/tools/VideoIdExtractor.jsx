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
    </ToolLayout>
    </>
  );
}

export default VideoIdExtractor;