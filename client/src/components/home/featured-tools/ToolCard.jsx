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
        group
        flex
        min-h-[230px]
        w-full
        flex-col
        rounded-2xl
        border
        border-slate-800
        bg-[#0b0b0b]
        p-6
        outline-none
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-red-500/70
        hover:bg-[#0e0e0e]
        hover:shadow-[0_20px_50px_rgba(239,68,68,0.12)]
        focus:border-red-500
        focus:shadow-[0_0_35px_rgba(239,68,68,0.18)]
        active:border-red-500
        sm:min-h-[245px]
        sm:p-7
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-red-500/20
          bg-red-500/10
          text-red-500
          transition-all
          duration-300
          group-hover:border-red-500/40
          group-hover:bg-red-500/15
          group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]
          sm:h-14
          sm:w-14
        "
      >
        <Icon
          size={26}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3
        className="
          mt-5
          text-lg
          font-extrabold
          leading-tight
          tracking-tight
          text-white
          transition-colors
          duration-300
          group-hover:text-red-500
          sm:mt-6
          sm:text-xl
        "
      >
        {tool.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-3
          min-h-[48px]
          text-sm
          leading-6
          text-slate-400
          sm:text-[15px]
          sm:leading-6
        "
      >
        {tool.description}
      </p>

      {/* Bottom Action */}
      <div
        className="
          mt-auto
          flex
          items-center
          gap-2
          pt-5
          text-sm
          font-semibold
          text-red-500
          transition-all
          duration-300
          group-hover:gap-3
          sm:text-base
        "
      >
        Learn more
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

export default ToolCard;