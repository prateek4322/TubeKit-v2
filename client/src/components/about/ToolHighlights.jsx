import {
  AtSign,
  Calculator,
  FileText,
  Hash,
  KeyRound,
  Link as LinkIcon,
  Search,
  Sparkles,
  Tags,
  WandSparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    title: "AI Title Generator",
    description:
      "Generate engaging YouTube title ideas based on your video topic.",
    icon: Sparkles,
    path: "/tools/title-generator",
    color: "red",
  },
  {
    title: "Description Generator",
    description:
      "Create structured YouTube descriptions designed around your content.",
    icon: FileText,
    path: "/tools/description-generator",
    color: "yellow",
  },
  {
    title: "Tags Generator",
    description:
      "Discover relevant tag ideas to help organize and optimize your videos.",
    icon: Tags,
    path: "/tools/tags-generator",
    color: "green",
  },
  {
    title: "Hashtag Generator",
    description:
      "Generate relevant hashtag ideas based on your video's topic.",
    icon: Hash,
    path: "/tools/hashtag-generator",
    color: "blue",
  },
  {
    title: "Keyword Generator",
    description:
      "Generate keyword ideas to support your YouTube content strategy.",
    icon: KeyRound,
    path: "/tools/keyword-generator",
    color: "red",
  },
  {
    title: "Script Writer",
    description:
      "Turn video ideas into structured scripts with AI assistance.",
    icon: WandSparkles,
    path: "/tools/script-generator",
    color: "yellow",
  },
  {
    title: "Money Calculator",
    description:
      "Estimate potential YouTube earnings using your channel metrics.",
    icon: Calculator,
    path: "/tools/money-calculator",
    color: "green",
  },
  {
    title: "Monetization Checker",
    description:
      "Review public channel information and estimate monetization eligibility.",
    icon: Search,
    path: "/tools/monetization-checker",
    color: "blue",
  },
  {
    title: "Channel ID Finder",
    description:
      "Find the channel ID associated with a YouTube channel.",
    icon: LinkIcon,
    path: "/tools/channel-id-finder",
    color: "red",
  },
  {
    title: "Thumbnail Downloader",
    description:
      "Access available YouTube thumbnail images from a video URL.",
    icon: AtSign,
    path: "/tools/thumbnail-downloader",
    color: "yellow",
  },
];

const colorStyles = {
  red: {
    border: "border-red-500/15",
    iconBg: "bg-red-500/10",
    icon: "text-red-400",
    hover: "group-hover:border-red-500/30",
  },
  yellow: {
    border: "border-yellow-400/15",
    iconBg: "bg-yellow-400/10",
    icon: "text-yellow-300",
    hover: "group-hover:border-yellow-400/30",
  },
  green: {
    border: "border-green-500/15",
    iconBg: "bg-green-500/10",
    icon: "text-green-400",
    hover: "group-hover:border-green-500/30",
  },
  blue: {
    border: "border-blue-500/15",
    iconBg: "bg-blue-500/10",
    icon: "text-blue-400",
    hover: "group-hover:border-blue-500/30",
  },
};

function ToolHighlights() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-24">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-green-500/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Creator Toolkit
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
            Everything You Need to
            <span className="bg-gradient-to-r from-red-400 via-yellow-300 via-green-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Create & Grow
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Explore TubeKit's collection of AI and utility tools built
            to simplify your YouTube workflow.
          </p>

        </div>

        {/* Tools Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {tools.map((tool) => {
            const Icon = tool.icon;
            const styles = colorStyles[tool.color];

            return (
              <Link
                key={tool.title}
                to={tool.path}
                className={`group relative overflow-hidden rounded-3xl border ${styles.border} ${styles.hover} bg-white/[0.03] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]`}
              >
                {/* Icon */}
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${styles.iconBg}`}
                >
                  <Icon
                    size={21}
                    className={styles.icon}
                  />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-bold text-white">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {tool.description}
                </p>

                {/* Link Indicator */}
                <div className="mt-5 flex items-center text-sm font-semibold text-slate-500 transition group-hover:text-blue-400">
                  Open Tool
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </Link>
            );
          })}

        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-400/30 hover:bg-white/[0.06]"
          >
            Explore All TubeKit Tools
            <span className="ml-2">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ToolHighlights;