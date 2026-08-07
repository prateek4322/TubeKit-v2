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
    </ToolLayout>
    </>
  );
}

export default ChannelIdFinder;