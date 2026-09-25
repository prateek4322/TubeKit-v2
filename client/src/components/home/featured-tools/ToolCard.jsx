import {
  ArrowRight,
  Bot,
  Calculator,
  ChartNoAxesCombined,
  CircleDollarSign,
  FileText,
  Film,
  Hash,
  Image,
  KeyRound,
  List,
  PenLine,
  Search,
  Tags,
  Target,
  Type,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  bot: Bot,
  title: Type,
  description: FileText,
  tags: Tags,
  hashtag: Hash,
  keyword: Search,
  thumbnail: Image,
  script: PenLine,
  hook: Target,
  outline: List,
  shorts: Film,

  money: CircleDollarSign,
  monetization: ChartNoAxesCombined,
  cpm: Calculator,
  rpm: Calculator,
  channel: KeyRound,
  video: Video,
  downloader: Image,
  tagExtractor: Tags,
};

function ToolCard({ tool }) {
  const Icon = iconMap[tool.icon] || Bot;

  return (
    <Link
      to={tool.path}
      className="
        group block min-h-[235px] rounded-2xl
        border border-slate-800 bg-[#0b0b0b]
        p-6 outline-none
        transition-all duration-300
        hover:-translate-y-1
        hover:border-red-500/70
        hover:bg-[#0e0e0e]
        hover:shadow-[0_20px_50px_rgba(239,68,68,0.12)]
        focus:border-red-500
        focus:shadow-[0_0_35px_rgba(239,68,68,0.18)]
        active:border-red-500
        active:shadow-[0_0_35px_rgba(239,68,68,0.22)]
        sm:min-h-[250px] sm:p-7
      "
    >
      <div
        className="
          flex h-14 w-14 items-center justify-center
          rounded-xl border border-red-500/15
          bg-red-500/10 text-red-500
          transition-all duration-300
          group-hover:border-red-500/30
          group-hover:bg-red-500/15
          group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]
          sm:h-16 sm:w-16
        "
      >
        <Icon
          size={30}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h3
        className="
          mt-5 text-xl font-extrabold leading-tight
          tracking-tight text-white
          transition-colors duration-300
          group-hover:text-red-500
          group-focus:text-red-500
          sm:text-2xl
        "
      >
        {tool.title}
      </h3>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
        {tool.description}
      </p>

      <div className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-red-500 transition-all duration-300 group-hover:gap-3 sm:text-lg">
        Learn more
        <ArrowRight
          size={20}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

export default ToolCard;