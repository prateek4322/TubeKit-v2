import { useEffect, useRef, useState } from "react";
import { Download, Search, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "@/components/common/SEO";
import ToolLayout from "@/components/tool-layout/ToolLayout";
import ToolHeader from "@/components/tool-layout/ToolHeader";

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

function ThumbnailDownloader({ query = "" }) {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState("");
  const generatedForRef = useRef("");

  const extractVideoId = (inputValue = url) => {
    const input = String(inputValue || "").trim();

    if (!input) {
      setError("Please enter a YouTube video URL first.");
      setVideoId("");
      return;
    }

    const normalized = /^https?:\/\//i.test(input)
      ? input
      : `https://${input}`;

    try {
      const parsed = new URL(normalized);
      const hostname = parsed.hostname.replace(/^www\./, "").toLowerCase();
      let id = "";

      if (hostname === "youtu.be") {
        id = parsed.pathname.split("/").filter(Boolean)[0] || "";
      } else if (
        hostname === "youtube.com" ||
        hostname === "m.youtube.com" ||
        hostname === "music.youtube.com"
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
        setUrl(input);
        setVideoId(id);
        setError("");
        return;
      }
    } catch {
      // Fall through to the invalid URL message below.
    }

    setVideoId("");
    setError("Please enter a valid YouTube video URL.");
  };

  useEffect(() => {
    const value = String(query || "").trim();

    if (!value || value === generatedForRef.current) return;

    generatedForRef.current = value;
    setUrl(value);
    extractVideoId(value);
  }, [query]);

  const reset = () => {
    setUrl("");
    setVideoId("");
    setError("");
    generatedForRef.current = "";
  };

  const downloadThumbnail = async (thumbnailUrl, title) => {
    const key = `${title}-${thumbnailUrl}`;

    try {
      setDownloading(key);

      const response = await fetch(thumbnailUrl, {
        mode: "cors",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Thumbnail download failed.");
      }

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const anchor = document.createElement("a");

      anchor.href = blobUrl;
      anchor.download = `youtube-thumbnail-${title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}.jpg`;

      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      setTimeout(() => URL.revokeObjectURL(blobUrl), 1500);
    } catch (error) {
      console.error("Thumbnail download error:", error);

      // Cross-origin browser restrictions can prevent a direct blob download.
      // Opening the original image gives the user a browser save option.
      window.open(thumbnailUrl, "_blank", "noopener,noreferrer");
    } finally {
      setDownloading("");
    }
  };

  const thumbnails = [
    {
      title: "Maximum Resolution",
      description: "Highest available thumbnail resolution.",
      url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      color: "red",
    },
    {
      title: "High Quality",
      description: "High-quality thumbnail preview.",
      url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      color: "yellow",
    },
    {
      title: "Medium Quality",
      description: "Medium-resolution thumbnail image.",
      url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
      color: "green",
    },
    {
      title: "Default",
      description: "Standard YouTube thumbnail image.",
      url: `https://img.youtube.com/vi/${videoId}/default.jpg`,
      color: "blue",
    },
  ];

  const faqs = [
    {
      question: "What is a YouTube thumbnail downloader?",
      answer:
        "A YouTube thumbnail downloader is a tool that retrieves an available thumbnail image associated with a YouTube video URL so it can be viewed or saved.",
    },
    {
      question: "How do I download a YouTube thumbnail?",
      answer:
        "Copy the YouTube video URL, paste it into TubeKit's YouTube Thumbnail Downloader, click <Search className="h-4 w-4" />
              Get Thumbnails, and choose the available thumbnail resolution.",
    },
    {
      question: "Can I download a YouTube thumbnail in HD?",
      answer:
        "TubeKit displays available thumbnail resolutions, including a maximum-resolution option when that image is available for the video.",
    },
    {
      question: "Can I use someone else's YouTube thumbnail?",
      answer:
        "Downloading a thumbnail does not automatically give you permission to republish or commercially use it. Make sure you have the appropriate rights or permission before reusing another creator's thumbnail.",
    },
    {
      question: "Can I download thumbnails from YouTube Shorts?",
      answer:
        "TubeKit accepts supported YouTube Shorts URLs and attempts to retrieve the available thumbnail associated with the video.",
    },
    {
      question: "Is the TubeKit YouTube Thumbnail Downloader free?",
      answer:
        "Yes. TubeKit provides the YouTube Thumbnail Downloader as a free tool for creators.",
    },
  ];

  return (
    <>
      <SEO
        title="YouTube Thumbnail Downloader â€“ Download HD Thumbnails | TubeKit"
        description="Download available YouTube video thumbnails in HD and other resolutions with TubeKit's free YouTube Thumbnail Downloader. Paste a video URL and preview available thumbnail images."
        keywords="YouTube thumbnail downloader, download YouTube thumbnail, YouTube thumbnail download, HD YouTube thumbnail downloader, YouTube thumbnail grabber, YouTube thumbnail extractor, YouTube thumbnail saver, download YouTube video thumbnail"
        canonical="/tools/thumbnail-downloader"
        faqs={faqs}
        breadcrumbs={[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "YouTube Thumbnail Downloader",
            path: "/tools/thumbnail-downloader",
          },
        ]}
      />

      <ToolLayout>
        <ToolHeader
          title="YouTube Thumbnail Downloader"
          description="Download and preview available thumbnails from YouTube videos in different resolutions."
        />

        {/* TOOL */}
        <div className="rounded-3xl border border-blue-500/25 bg-[#070b18] p-5 shadow-2xl shadow-blue-500/5 sm:p-7 lg:p-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-400">
                Thumbnail Downloader
              </p>
              <h2 className="mt-1 text-lg font-black text-white sm:text-xl">
                Paste a YouTube Video URL
              </h2>
            </div>

            <div className="hidden rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold text-blue-300 sm:block">
              HD Preview
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex min-h-14 min-w-0 flex-1 items-center rounded-xl border-2 border-blue-500/70 bg-[#030712] px-4 transition-all duration-300 focus-within:border-blue-400 focus-within:shadow-lg focus-within:shadow-blue-500/15">
              <Search className="mr-3 h-5 w-5 shrink-0 text-blue-400" strokeWidth={2.4} />

              <input
                type="text"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  if (error) setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") extractVideoId();
                }}
                placeholder="Paste a YouTube URL..."
                aria-label="Paste a YouTube video URL"
                className="min-w-0 w-full bg-transparent text-sm font-medium text-white outline-none placeholder:text-slate-500 sm:text-base"
              />

              {url && (
                <button
                  type="button"
                  onClick={() => {
                    setUrl("");
                    setVideoId("");
                    setError("");
                    generatedForRef.current = "";
                  }}
                  className="ml-2 shrink-0 rounded-lg px-2 py-1 text-xs font-bold text-slate-500 transition hover:bg-white/5 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() => extractVideoId()}
              className="flex min-h-14 shrink-0 items-center justify-center gap-2 rounded-xl border-2 border-blue-500 bg-blue-600 px-6 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/30 sm:min-w-[170px]"
            >
              <Search className="h-5 w-5" strokeWidth={2.5} />
              Get Thumbnails
            </button>
          </div>

          {error ? (
            <p className="mt-3 text-xs font-semibold text-red-400">{error}</p>
          ) : (
            <p className="mt-3 text-xs text-slate-500">
              Paste a YouTube video URL and press Enter or Get Thumbnails.
            </p>
          )}

          <button
            type="button"
            onClick={reset}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-400 transition hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <RotateCcw className="h-4 w-4" />
              Reset
          </button>
        </div>

        {/* THUMBNAIL RESULTS */}
        {videoId && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {thumbnails.map((item) => {
              const borderColors = {
                red: "border-red-500/20 bg-red-500/5",
                yellow: "border-yellow-400/20 bg-yellow-400/5",
                green: "border-green-500/20 bg-green-500/5",
                blue: "border-blue-500/20 bg-blue-500/5",
              };

              const textColors = {
                red: "text-red-400",
                yellow: "text-yellow-300",
                green: "text-green-400",
                blue: "text-blue-400",
              };

              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-5 ${borderColors[item.color]}`}
                >
                  <img
                    src={item.url}
                    alt={`${item.title} YouTube thumbnail`}
                    className="w-full rounded-xl"
                    loading="lazy"
                  />

                  <h3
                    className={`mt-4 text-lg font-bold ${textColors[item.color]}`}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => downloadThumbnail(item.url, item.title)}
                    disabled={Boolean(downloading)}
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-wait disabled:opacity-70"
                  >
                    <Download className="h-4 w-4" />
                    {downloading === `${item.title}-${item.url}`
                      ? "Downloading..."
                      : "<Download className="h-4 w-4" />
                    Download Thumbnail"}
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* SEO CONTENT */}
        <section className="mt-16 space-y-12">

          {/* INTRO */}
          <div>
            <SectionHeading color="red">
              Free YouTube Thumbnail Downloader
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              TubeKit's free YouTube Thumbnail Downloader lets you retrieve
              available thumbnail images from a YouTube video URL. Simply
              paste the video link into the tool and view the available
              thumbnail resolutions.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              This tool is useful for creators, researchers, designers,
              marketers, and anyone who needs to inspect the thumbnail
              associated with a YouTube video.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              The downloader retrieves available thumbnail images. It does
              not remove watermarks, improve the original image quality,
              or provide permission to reuse copyrighted material.
            </p>
          </div>

          {/* HOW TO USE */}
          <div>
            <SectionHeading color="yellow">
              How to Download a YouTube Thumbnail
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              You can get a YouTube thumbnail in a few simple steps:
            </p>

            <ol className="mt-5 list-decimal space-y-3 pl-6 leading-8 text-slate-300">
              <li>Copy the URL of the YouTube video.</li>

              <li>
                Paste the URL into the TubeKit Thumbnail Downloader.
              </li>

              <li>
                Click the{" "}
                <strong className="text-white">
                  Get Thumbnails
                </strong>{" "}
                button.
              </li>

              <li>
                Review the available thumbnail resolutions.
              </li>

              <li>
                Choose the thumbnail you want to view or save.
              </li>
            </ol>
          </div>

          {/* WHAT IS THUMBNAIL */}
          <div>
            <SectionHeading color="green">
              What Is a YouTube Thumbnail?
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              A YouTube thumbnail is the preview image associated with a
              video. It is one of the first visual elements viewers may
              see when discovering a video on YouTube.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              A well-designed thumbnail should communicate the subject of
              the video clearly and accurately. Creators often combine
              visual elements, short text, colors, products, people, or
              other relevant imagery to communicate the video's topic.
            </p>
          </div>

          {/* RESOLUTIONS */}
          <div>
            <SectionHeading color="blue">
              YouTube Thumbnail Resolutions
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              YouTube can provide thumbnail images in different sizes.
              The exact image available can depend on the individual
              video.
            </p>

            <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-5 py-4 font-semibold text-white">
                      Option
                    </th>

                    <th className="px-5 py-4 font-semibold text-white">
                      Purpose
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-400">
                  <tr className="border-b border-white/10">
                    <td className="px-5 py-4 font-medium text-red-400">
                      Maximum Resolution
                    </td>

                    <td className="px-5 py-4">
                      Highest available thumbnail option.
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="px-5 py-4 font-medium text-yellow-300">
                      High Quality
                    </td>

                    <td className="px-5 py-4">
                      Useful for high-quality previews.
                    </td>
                  </tr>

                  <tr className="border-b border-white/10">
                    <td className="px-5 py-4 font-medium text-green-400">
                      Medium Quality
                    </td>

                    <td className="px-5 py-4">
                      Smaller thumbnail suitable for quick viewing.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 font-medium text-blue-400">
                      Default
                    </td>

                    <td className="px-5 py-4">
                      Standard thumbnail option.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FEATURES */}
          
             <div>
            <SectionHeading color="red">
              YouTube Thumbnail Downloader Features
            </SectionHeading>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <li className="rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-slate-300">
                <Check className="mr-2 inline-block h-4 w-4 shrink-0 align-[-2px]" />Free YouTube thumbnail downloader</li>

              <li className="rounded-lg border border-yellow-400/20 bg-yellow-400/5 p-4 text-slate-300">
                <Check className="mr-2 inline-block h-4 w-4 shrink-0 align-[-2px]" />Supports common YouTube URLs</li>

              <li className="rounded-lg border border-green-500/20 bg-green-500/5 p-4 text-slate-300">
                <Check className="mr-2 inline-block h-4 w-4 shrink-0 align-[-2px]" />Multiple thumbnail resolutions</li>

              <li className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-slate-300">
                <Check className="mr-2 inline-block h-4 w-4 shrink-0 align-[-2px]" />Quick thumbnail preview</li>

              <li className="rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-slate-300">
                <Check className="mr-2 inline-block h-4 w-4 shrink-0 align-[-2px]" />Simple URL-based workflow</li>

              <li className="rounded-lg border border-yellow-400/20 bg-yellow-400/5 p-4 text-slate-300">
                <Check className="mr-2 inline-block h-4 w-4 shrink-0 align-[-2px]" />Easy image access</li>

              <li className="rounded-lg border border-green-500/20 bg-green-500/5 p-4 text-slate-300">
                <Check className="mr-2 inline-block h-4 w-4 shrink-0 align-[-2px]" />Works without complicated setup</li>

              <li className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-slate-300">
                <Check className="mr-2 inline-block h-4 w-4 shrink-0 align-[-2px]" />Free for creators</li>
            </ul>
          </div>

          {/* USE CASES */}
          <div>
            <SectionHeading color="yellow">
              Who Can Use a YouTube Thumbnail Downloader?
            </SectionHeading>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                <h3 className="font-semibold text-red-400">
                  YouTube Creators
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Review existing thumbnails and study how different
                  channels present their videos.
                </p>
              </div>

              <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
                <h3 className="font-semibold text-yellow-300">
                  Designers
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Inspect thumbnail layouts and visual approaches for
                  research and inspiration.
                </p>
              </div>

              <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                <h3 className="font-semibold text-green-400">
                  Researchers
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Access thumbnail images associated with videos for
                  legitimate research purposes.
                </p>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                <h3 className="font-semibold text-blue-400">
                  Content Teams
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Review visual trends and organize thumbnail references
                  during content planning.
                </p>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div>
            <SectionHeading color="red">
              Can You Reuse a Downloaded YouTube Thumbnail?
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              Downloading a YouTube thumbnail does not automatically give
              you permission to publish, modify, or commercially reuse
              that image.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              A thumbnail may be protected by copyright or other
              applicable rights. If you want to reuse another creator's
              thumbnail, make sure you have the appropriate permission or
              legal right to use it.
            </p>

            <div className="mt-6 rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5">
              <p className="leading-7 text-yellow-200">
                <strong>Important:</strong> Use downloaded thumbnails
                responsibly and respect the rights of the original
                creator.
              </p>
            </div>
          </div>

          {/* RELATED TOOL */}
          <div>
            <SectionHeading color="green">
              Create Better YouTube Thumbnail Ideas
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              If you are creating your own thumbnails rather than
              downloading an existing one, use TubeKit's AI Thumbnail
              Generator to brainstorm visual concepts for your videos.
            </p>

            <Link
              to="/tools/thumbnail-generator"
              className="mt-6 inline-flex rounded-xl border border-green-500/30 bg-green-500/5 px-5 py-3 font-semibold text-green-400 transition hover:border-green-400 hover:bg-green-500/10"
            >
              Try AI Thumbnail Generator
            </Link>
          </div>

          {/* MORE TOOLS */}
          <div>
            <SectionHeading color="blue">
              More Free YouTube Creator Tools
            </SectionHeading>

            <p className="mt-5 leading-8 text-slate-300">
              TubeKit provides additional tools for YouTube creators,
              including title generation, descriptions, keywords,
              scripts, and hashtags.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                to="/tools/title-generator"
                className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 transition hover:border-red-400"
              >
                <span className="font-semibold text-red-400">
                  YouTube Title Generator
                </span>

                <p className="mt-2 text-sm text-slate-400">
                  Generate YouTube title ideas with AI.
                </p>
              </Link>

              <Link
                to="/tools/description-generator"
                className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5 transition hover:border-yellow-300"
              >
                <span className="font-semibold text-yellow-300">
                  YouTube Description Generator
                </span>

                <p className="mt-2 text-sm text-slate-400">
                  Generate useful video description ideas.
                </p>
              </Link>

              <Link
                to="/tools/keyword-generator"
                className="rounded-xl border border-green-500/20 bg-green-500/5 p-5 transition hover:border-green-400"
              >
                <span className="font-semibold text-green-400">
                  YouTube Keyword Generator
                </span>

                <p className="mt-2 text-sm text-slate-400">
                  Generate keyword ideas for YouTube content.
                </p>
              </Link>

              <Link
                to="/tools/tags-generator"
                className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5 transition hover:border-blue-400"
              >
                <span className="font-semibold text-blue-400">
                  YouTube Tags Generator
                </span>

                <p className="mt-2 text-sm text-slate-400">
                  Generate relevant YouTube tag ideas.
                </p>
              </Link>
            </div>
          </div>

          {/* RELATED BLOGS */}
          <div>
            <SectionHeading color="yellow">
              Learn More About YouTube Thumbnails
            </SectionHeading>

            <div className="mt-6 grid gap-4">
              <Link
                to="/blog/how-to-create-better-youtube-thumbnails"
                className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-5 transition hover:border-yellow-300"
              >
                <span className="font-semibold text-yellow-300">
                  How to Create Better YouTube Thumbnails
                </span>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Learn practical principles for creating clear,
                  relevant, and attractive YouTube thumbnails.
                </p>
              </Link>

              <Link
                to="/blog/how-to-write-youtube-titles-that-get-more-clicks"
                className="rounded-xl border border-red-500/20 bg-red-500/5 p-5 transition hover:border-red-400"
              >
                <span className="font-semibold text-red-400">
                  How to Write YouTube Titles That Get More Clicks
                </span>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Learn how YouTube titles and thumbnails can work
                  together to communicate your video's topic.
                </p>
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <SectionHeading color="blue">
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

export default ThumbnailDownloader;