import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileText,
  Film,
  Hash,
  Image,
  List,
  PenLine,
  Search,
  Tags,
  Target,
  Type,
} from "lucide-react";

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
};

const colorStyles = {
  red: {
    icon: "bg-red-500/10 text-red-500",
    border: "hover:border-red-500/50",
    glow: "group-hover:bg-red-500/5",
  },

  green: {
    icon: "bg-green-500/10 text-green-500",
    border: "hover:border-green-500/50",
    glow: "group-hover:bg-green-500/5",
  },

  yellow: {
    icon: "bg-yellow-500/10 text-yellow-500",
    border: "hover:border-yellow-500/50",
    glow: "group-hover:bg-yellow-500/5",
  },

  blue: {
    icon: "bg-blue-500/10 text-blue-500",
    border: "hover:border-blue-500/50",
    glow: "group-hover:bg-blue-500/5",
  },
};

export default function ToolCard({
  title,
  description,
  icon,
  color = "red",
  path,
}) {
  const Icon = iconMap[icon] || Type;
  const styles = colorStyles[color] || colorStyles.red;

  return (
    <Link
      to={path}
      className={`
        group relative flex min-h-[245px] w-full flex-col
        overflow-hidden
        rounded-2xl
        border border-slate-800
        bg-[#000000]
        p-6
        outline-none
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-[#050505]
        ${styles.border}
        focus:border-red-500/60
        focus:ring-2 focus:ring-red-500/20
        sm:min-h-[255px]
        sm:p-7
      `}
    >
      {/* Background Glow */}
      <div
        className={`
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          blur-3xl
          opacity-0
          transition-opacity
          duration-300
          ${styles.glow}
        `}
      />

      <div className="relative flex h-full flex-col">

        {/* Icon */}
        <div
          className={`
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-xl
            ${styles.icon}
          `}
        >
          <Icon
            size={28}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3
            className="
              text-xl
              font-extrabold
              leading-7
              tracking-tight
              text-white
              transition-colors
              duration-300
              group-hover:text-red-500
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              min-h-[48px]
              text-sm
              leading-6
              text-slate-400
            "
          >
            {description}
          </p>
        </div>

        {/* Open Tool */}
        <div className="mt-auto pt-6">
          <div
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-red-500
              transition-all
              duration-300
              group-hover:gap-3
              sm:text-base
            "
          >
            Open Tool

            <ArrowRight
              size={19}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </div>
        </div>

      </div>
    </Link>
  );
}