import { useState } from "react";
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
        "Copy the YouTube video URL, paste it into TubeKit's YouTube Thumbnail Downloader, click Get Thumbnails, and choose the available thumbnail resolution.",
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
        title="YouTube Thumbnail Downloader – Download HD Thumbnails | TubeKit"
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <label className="mb-2 block font-medium text-white">
            YouTube Video URL
          </label>

          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                extractVideoId();
              }
            }}
            placeholder="https://www.youtube.com/watch?v=xxxxxxxxxxx"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white outline-none transition focus:border-blue-500"
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={extractVideoId}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Get Thumbnails
            </button>

            <button
              onClick={reset}
              className="rounded-xl bg-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-600"
            >
              Reset
            </button>
          </div>
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

                  <a
                    href={item.url}
                    download={`youtube-thumbnail-${item.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}.jpg`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-500"
                  >
                    Download Thumbnail
                  </a>
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
                ✓ Free YouTube thumbnail downloader
              </li>

              <li className="rounded-lg border border-yellow-400/20 bg-yellow-400/5 p-4 text-slate-300">
                ✓ Supports common YouTube URLs
              </li>

              <li className="rounded-lg border border-green-500/20 bg-green-500/5 p-4 text-slate-300">
                ✓ Multiple thumbnail resolutions
              </li>

              <li className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-slate-300">
                ✓ Quick thumbnail preview
              </li>

              <li className="rounded-lg border border-red-500/20 bg-red-500/5 p-4 text-slate-300">
                ✓ Simple URL-based workflow
              </li>

              <li className="rounded-lg border border-yellow-400/20 bg-yellow-400/5 p-4 text-slate-300">
                ✓ Easy image access
              </li>

              <li className="rounded-lg border border-green-500/20 bg-green-500/5 p-4 text-slate-300">
                ✓ Works without complicated setup
              </li>

              <li className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-slate-300">
                ✓ Free for creators
              </li>
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
              Try AI Thumbnail Generator →
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
                  YouTube Title Generator →
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
                  YouTube Description Generator →
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
                  YouTube Keyword Generator →
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
                  YouTube Tags Generator →
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
                  How to Create Better YouTube Thumbnails →
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
                  How to Write YouTube Titles That Get More Clicks →
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