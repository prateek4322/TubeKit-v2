import { useCallback, useEffect, useState } from "react";
import { Copy, ExternalLink, RotateCcw, Search, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

/* =========================================================
   RGYB SECTION HEADING
   ========================================================= */

function SectionHeading({ children, color = "blue" }) {
  const colors = {
    red: "border-red-500 bg-red-500/5 text-red-400",
    yellow: "border-yellow-400 bg-yellow-400/5 text-yellow-300",
    green: "border-green-500 bg-green-500/5 text-green-400",
    blue: "border-blue-500 bg-blue-500/5 text-blue-400",
  };

  return (
    <h2
      className={`rounded-r-xl border-l-4 px-5 py-3 text-2xl font-bold tracking-tight sm:text-3xl ${colors[color]}`}
    >
      {children}
    </h2>
  );
}

/* =========================================================
   VIDEO ID EXTRACTOR
   ========================================================= */

function VideoIdExtractor({ query = "" }) {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  /* =========================================================
     EXTRACT VIDEO ID
     ========================================================= */

  const extractVideoId = useCallback((inputValue = url, { silent = false } = {}) => {
    const input = String(inputValue || "").trim();

    if (!input) {
      setVideoId("");
      if (!silent) alert("Please enter a YouTube URL");
      return;
    }

    let normalized = input;

    if (!/^https?:\/\//i.test(normalized)) {
      normalized = `https://${normalized}`;
    }

    try {
      const parsed = new URL(normalized);
      const host = parsed.hostname.toLowerCase().replace(/^www\./, "");

      let id = "";

      if (host === "youtu.be") {
        id = parsed.pathname.split("/").filter(Boolean)[0] || "";
      } else if (
        host === "youtube.com" ||
        host === "m.youtube.com" ||
        host === "music.youtube.com"
      ) {
        if (parsed.pathname === "/watch") {
          id = parsed.searchParams.get("v") || "";
        } else if (
          parsed.pathname.startsWith("/shorts/") ||
          parsed.pathname.startsWith("/embed/") ||
          parsed.pathname.startsWith("/live/")
        ) {
          id = parsed.pathname.split("/").filter(Boolean)[1] || "";
        }
      }

      if (/^[A-Za-z0-9_-]{11}$/.test(id)) {
        setVideoId(id);
        return;
      }

      setVideoId("");
      if (!silent) alert("Invalid YouTube URL");
    } catch (error) {
      console.error("VIDEO ID EXTRACTION ERROR:", error);
      setVideoId("");
      if (!silent) alert("Invalid YouTube URL");
    }
  }, [url]);

  /* =========================================================
     HERO AUTO GENERATION
     ========================================================= */

  useEffect(() => {
    const value = String(query || "").trim();
    if (!value) return;

    setUrl(value);
    extractVideoId(value, { silent: true });
  }, [query, extractVideoId]);

  /* =========================================================
     COPY VIDEO ID
     ========================================================= */

  const copyId = async () => {
    if (!videoId) return;

    try {
      await navigator.clipboard.writeText(videoId);
      alert("Video ID Copied!");
    } catch (error) {
      console.error("COPY VIDEO ID ERROR:", error);
      alert("Unable to copy Video ID");
    }
  };

/* =========================================================
     RESET
     ========================================================= */

  const reset = () => {
    setUrl("");
    setVideoId("");
  };

  /* =========================================================
     FAQ
     ========================================================= */

  const faqs = [
    {
      question: "What is a YouTube Video ID?",
      answer:
        "A YouTube Video ID is a unique identifier associated with a specific YouTube video. It is commonly used when referencing videos in URLs, embeds, tools, and applications.",
    },
    {
      question: "How do I find the Video ID of a YouTube video?",
      answer:
        "You can find a Video ID inside many YouTube video URLs. TubeKit's Video ID Extractor can automatically extract the ID from supported YouTube URLs.",
    },
    {
      question: "Is a YouTube Video ID the same as a Channel ID?",
      answer:
        "No. A Video ID identifies an individual YouTube video, while a Channel ID identifies a YouTube channel.",
    },
    {
      question: "Can this tool extract a Video ID from a YouTube Shorts URL?",
      answer:
        "Yes. TubeKit supports common YouTube Shorts URLs and can extract the Video ID from a supported Shorts URL.",
    },
    {
      question: "Can I extract a Video ID from a youtu.be URL?",
      answer:
        "Yes. TubeKit supports common shortened YouTube URLs such as youtu.be links.",
    },
    {
      question: "Is the TubeKit YouTube Video ID Extractor free?",
      answer:
        "Yes. TubeKit provides this YouTube Video ID Extractor as a free online tool for creators.",
    },
    {
      question: "Can I use a YouTube Video ID for embedding a video?",
      answer:
        "A YouTube Video ID is commonly used when referencing a specific video in compatible YouTube embed URLs and applications.",
    },
  ];
/* =========================================================
     BREADCRUMBS
     ========================================================= */

  const breadcrumbs = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "YouTube Video ID Extractor",
      path: "/tools/video-id-extractor",
    },
  ];

  return (
    <>
      {/* =====================================================
          SEO
          ===================================================== */}

      <SEO
        title="YouTube Video ID Extractor â€“ Extract Video ID Free | TubeKit"
        description="Extract a YouTube Video ID from any supported YouTube URL with TubeKit's free Video ID Extractor. Supports YouTube watch, Shorts, embed and youtu.be URLs."
        keywords="YouTube Video ID extractor, YouTube video ID finder, extract YouTube video ID, YouTube ID extractor, video ID finder, YouTube URL ID extractor, YouTube Shorts ID extractor, youtu.be ID extractor"
        canonical="/tools/video-id-extractor"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
      />

      <ToolLayout>

        {/* ===================================================
            TOOL HEADER
            =================================================== */}

        <ToolHeader
          title="YouTube Video ID Extractor"
          description="Extract the unique Video ID from any supported YouTube URL quickly and for free."
        />

        {/* ===================================================
            TOOL
            =================================================== */}

        <div className="rounded-3xl border border-white/10 bg-[#090909] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                Creator Utility
              </p>
              <h2 className="mt-2 text-xl font-black text-white sm:text-2xl">
                Extract Video ID
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
              <Youtube size={22} />
            </div>
          </div>

          <label
            htmlFor="youtube-video-url"
            className="mb-2 block text-sm font-semibold text-slate-300"
          >
            YouTube Video URL
          </label>

          <div className="relative">
            <Search
              size={19}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-red-400"
            />

            <input
              id="youtube-video-url"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  extractVideoId();
                }
              }}
              placeholder="https://www.youtube.com/watch?v=VIDEO_ID"
              className="w-full rounded-2xl border border-blue-500/40 bg-[#050505] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
            />
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-500">
            Supports watch, youtu.be, Shorts, embed, and live YouTube URLs.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={extractVideoId}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-bold text-white shadow-[0_10px_30px_rgba(239,68,68,0.18)] transition hover:bg-red-400"
            >
              <Search size={18} />
              Extract Video ID
            </button>

            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-slate-300 transition hover:border-blue-500/30 hover:text-white"
            >
              <RotateCcw size={17} />
              Reset
            </button>
          </div>
        </div>
{/* ===================================================
            RESULT
            =================================================== */}

        {videoId && (
          <div className="mt-10 overflow-hidden rounded-3xl border border-green-500/20 bg-[#090909] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="border-b border-white/10 bg-green-500/5 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-400">
                  <Youtube size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-400">
                    Extraction Complete
                  </p>
                  <h2 className="mt-1 text-xl font-black text-white sm:text-2xl">
                    YouTube Video ID
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="rounded-2xl border border-white/10 bg-[#050505] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Extracted ID
                </p>

                <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <code className="break-all text-xl font-black tracking-wide text-green-400 sm:text-2xl">
                    {videoId}
                  </code>

                  <button
                    onClick={copyId}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-bold text-black transition hover:bg-green-400"
                  >
                    <Copy size={17} />
                    Copy ID
                  </button>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Video URL
                  </p>
                  <p className="mt-2 break-all text-sm font-semibold text-slate-300">
                    {url}
                  </p>
                </div>

                <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Watch URL
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${videoId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 flex items-center gap-2 break-all text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    https://www.youtube.com/watch?v={videoId}
                    <ExternalLink size={15} className="shrink-0" />
                  </a>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-4">
                <p className="text-sm leading-6 text-yellow-200/80">
                  The extracted Video ID is the unique 11-character identifier
                  used to reference this YouTube video in supported URLs,
                  embeds, tools, and applications.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================
            SEO CONTENT
            =================================================== */}

        <section className="mt-16 space-y-12">

          {/* =================================================
              INTRODUCTION
              ================================================= */}

          <div>
            <SectionHeading color="red">
              Free YouTube Video ID Extractor
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              TubeKit's free YouTube Video ID Extractor helps you quickly
              find the unique identifier of a YouTube video from its URL.
              Instead of manually looking through a YouTube link, paste
              the URL into the tool and get the Video ID instantly.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              A YouTube Video ID is useful when working with video
              embeds, YouTube-related tools, applications, APIs, and
              other integrations that require a specific video
              identifier.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              TubeKit supports common YouTube URL formats, including
              standard video links, shortened youtu.be links, YouTube
              Shorts URLs, and supported embed URLs.
            </p>
          </div>

          {/* =================================================
              HOW TO USE
              ================================================= */}

          <div>
            <SectionHeading color="yellow">
              How to Extract a YouTube Video ID
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              Follow these simple steps to find the Video ID from a
              YouTube URL:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 leading-8 text-slate-300">
              <li>
                Copy the URL of the YouTube video you want to analyze.
              </li>

              <li>
                Paste the YouTube URL into the Video ID Extractor.
              </li>

              <li>
                Click the{" "}
                <strong className="text-white">
                  Extract Video ID
                </strong>{" "}
                button.
              </li>

              <li>
                Review the extracted Video ID.
              </li>

              <li>
                Click{" "}
                <strong className="text-green-400">
                  Copy ID
                </strong>{" "}
                to copy it to your clipboard.
              </li>
            </ol>
          </div>
 {/* =================================================
              WHAT IS VIDEO ID
              ================================================= */}

          <div>
            <SectionHeading color="green">
              What Is a YouTube Video ID?
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              A YouTube Video ID is a unique identifier associated with
              an individual YouTube video. It helps identify one
              specific video separately from other videos on the
              platform.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              For example, in a URL such as:
            </p>

            <div className="mt-5 overflow-x-auto rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
              <code className="whitespace-nowrap text-sm text-blue-300 sm:text-base">
                https://www.youtube.com/watch?v=dQw4w9WgXcQ
              </code>
            </div>

            <p className="mt-4 leading-8 text-slate-300">
              the value after <strong className="text-white">v=</strong>{" "}
              is the Video ID.
            </p>

            <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
              <p className="text-sm text-slate-400">
                Video ID:
              </p>

              <code className="mt-2 block text-lg font-bold text-green-400">
                dQw4w9WgXcQ
              </code>
            </div>
          </div>

          {/* =================================================
              URL FORMATS
              ================================================= */}

          <div>
            <SectionHeading color="blue">
              Supported YouTube URL Formats
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              YouTube videos can be shared using different URL formats.
              TubeKit can extract Video IDs from several common formats.
            </p>

            <div className="mt-6 space-y-4">

              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <p className="font-semibold text-red-400">
                  Standard YouTube URL
                </p>

                <code className="mt-2 block break-all text-sm text-slate-300">
                  https://www.youtube.com/watch?v=VIDEO_ID
                </code>
              </div>

              <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
                <p className="font-semibold text-yellow-300">
                  Short YouTube URL
                </p>

                <code className="mt-2 block break-all text-sm text-slate-300">
                  https://youtu.be/VIDEO_ID
                </code>
              </div>

              <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                <p className="font-semibold text-green-400">
                  YouTube Shorts URL
                </p>

                <code className="mt-2 block break-all text-sm text-slate-300">
                  https://www.youtube.com/shorts/VIDEO_ID
                </code>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                <p className="font-semibold text-blue-400">
                  YouTube Embed URL
                </p>

                <code className="mt-2 block break-all text-sm text-slate-300">
                  https://www.youtube.com/embed/VIDEO_ID
                </code>
              </div>

            </div>
          </div>

          {/* =================================================
              VIDEO ID VS CHANNEL ID
              ================================================= */}

          <div>
            <SectionHeading color="red">
              YouTube Video ID vs Channel ID
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              A Video ID and Channel ID identify different things on
              YouTube. A Video ID belongs to a specific video, while a
              Channel ID identifies a YouTube channel.
            </p>

            <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[600px] border-collapse text-left">

                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-5 py-4 text-white">
                      Identifier
                    </th>

                    <th className="px-5 py-4 text-white">
                      Identifies
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="px-5 py-4 font-semibold text-green-400">
                      Video ID
                    </td>

                    <td className="px-5 py-4 text-slate-400">
                      An individual YouTube video.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-semibold text-blue-400">
                      Channel ID
                    </td>

                    <td className="px-5 py-4 text-slate-400">
                      A YouTube channel.
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>

            <div className="mt-6">
              <Link
                to="/tools/channel-id-finder"
                className="inline-flex rounded-xl border border-blue-500/30 bg-blue-500/5 px-5 py-3 font-semibold text-blue-400 transition hover:border-blue-400 hover:bg-blue-500/10"
              >
                Find a YouTube Channel ID
              </Link>
            </div>
          </div>

          {/* =================================================
              USE CASES
              ================================================= */}

          <div>
            <SectionHeading color="yellow">
              What Is a YouTube Video ID Used For?
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              A Video ID can be useful in different YouTube-related
              workflows and technical applications.
            </p>

            <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-300">
              <li>
                Referencing a specific YouTube video.
              </li>

              <li>
                Creating or working with YouTube embed URLs.
              </li>

              <li>
                Working with compatible YouTube tools and applications.
              </li>

              <li>
                Identifying videos in content workflows.
              </li>

              <li>
                Using video identifiers in supported integrations.
              </li>

              <li>
                Checking a video URL before using it in another tool.
              </li>
            </ul>
          </div>

{/* =================================================
              FEATURES
              ================================================= */}

          <div>
            <SectionHeading color="green">
              TubeKit YouTube Video ID Extractor Features
            </SectionHeading>

            <ul className="mt-6 grid gap-3 text-slate-300 sm:grid-cols-2">

              <li className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                [OK] Extract YouTube Video IDs
              </li>

              <li className="rounded-lg border border-yellow-400/20 bg-yellow-400/5 p-4">
                [OK] Simple URL input
              </li>

              <li className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                [OK] Supports common YouTube URLs
              </li>

              <li className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                [OK] Supports YouTube Shorts URLs
              </li>

              <li className="rounded-lg border border-red-500/20 bg-red-500/5 p-4">
                [OK] Supports shortened URLs
              </li>

              <li className="rounded-lg border border-yellow-400/20 bg-yellow-400/5 p-4">
                [OK] Instant results
              </li>

              <li className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
                [OK] One-click copying
              </li>

              <li className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                [OK] Free to use
              </li>

            </ul>
          </div>

          {/* =================================================
              TIPS
              ================================================= */}

          <div>
            <SectionHeading color="blue">
              Tips for Extracting a YouTube Video ID
            </SectionHeading>

            <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-300">
              <li>
                Copy the complete YouTube video URL when possible.
              </li>

              <li>
                Make sure the URL points to a specific video.
              </li>

              <li>
                Do not confuse a Video ID with a Channel ID.
              </li>

              <li>
                Check the extracted ID before using it in another
                application.
              </li>

              <li>
                Use a supported YouTube URL format for the best result.
              </li>
            </ul>
          </div>

          {/* =================================================
              RELATED TOOLS
              ================================================= */}

          <div>
            <SectionHeading color="red">
              More Free YouTube Tools
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              TubeKit provides several free tools for YouTube creators.
              After extracting a Video ID, you can use these related
              tools for other creator workflows.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Link
                to="/tools/channel-id-finder"
                className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 transition hover:border-blue-400 hover:bg-blue-500/10"
              >
                <span className="font-semibold text-blue-400">
                  YouTube Channel ID Finder
                </span>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Find the unique ID associated with a YouTube channel.
                </p>
              </Link>

              <Link
                to="/tools/thumbnail-downloader"
                className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 transition hover:border-red-400 hover:bg-red-500/10"
              >
                <span className="font-semibold text-red-400">
                  YouTube Thumbnail Downloader
                </span>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Get YouTube thumbnail images from supported video URLs.
                </p>
              </Link>

              <Link
                to="/tools/title-generator"
                className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5 transition hover:border-yellow-300 hover:bg-yellow-400/10"
              >
                <span className="font-semibold text-yellow-300">
                  YouTube Title Generator
                </span>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Generate AI-powered YouTube title ideas.
                </p>
              </Link>

              <Link
                to="/tools/tags-generator"
                className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 transition hover:border-green-400 hover:bg-green-500/10"
              >
                <span className="font-semibold text-green-400">
                  YouTube Tags Generator
                </span>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Generate relevant YouTube tag suggestions.
                </p>
              </Link>

            </div>
          </div>

          {/* =================================================
              RELATED BLOG
              ================================================= */}

          <div>
            <SectionHeading color="yellow">
              Learn More About YouTube Tools
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              Explore TubeKit's guides to learn more about YouTube SEO,
              creator tools, and video optimization.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <Link
                to="/blog/best-youtube-seo-tools-for-creators"
                className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5 transition hover:border-yellow-300 hover:bg-yellow-400/10"
              >
                <span className="font-semibold text-yellow-300">
                  Best YouTube SEO Tools for Creators
                </span>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Explore useful YouTube tools for creators and content
                  optimization.
                </p>
              </Link>

              <Link
                to="/blog/how-to-get-more-views-on-youtube"
                className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 transition hover:border-blue-400 hover:bg-blue-500/10"
              >
                <span className="font-semibold text-blue-400">
                  How to Get More Views on YouTube
                </span>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Learn practical strategies for improving YouTube
                  discoverability and content performance.
                </p>
              </Link>

            </div>
          </div>

          {/* =================================================
              FAQ
              ================================================= */}

          <div>
            <SectionHeading color="green">
              Frequently Asked Questions
            </SectionHeading>

            <div className="mt-6 space-y-4">

              {faqs.map((faq, index) => {
                const colors = [
                  "border-red-500/20 bg-red-500/5",
                  "border-yellow-400/20 bg-yellow-400/5",
                  "border-green-500/20 bg-green-500/5",
                  "border-blue-500/20 bg-blue-500/5",
                ];

                return (
                  <div
                    key={faq.question}
                    className={`rounded-xl border p-5 ${colors[index % 4]}`}
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {faq.question}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      {faq.answer}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>

        </section>
      </ToolLayout>
    </>
  );
}

export default VideoIdExtractor;