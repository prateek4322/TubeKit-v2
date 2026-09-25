import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const colorStyles = {
  red: {
    icon: "bg-red-500/10 text-red-400",
    border: "hover:border-red-500/40",
    glow: "group-hover:bg-red-500/5",
  },
  green: {
    icon: "bg-green-500/10 text-green-400",
    border: "hover:border-green-500/40",
    glow: "group-hover:bg-green-500/5",
  },
  yellow: {
    icon: "bg-yellow-500/10 text-yellow-400",
    border: "hover:border-yellow-500/40",
    glow: "group-hover:bg-yellow-500/5",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-400",
    border: "hover:border-blue-500/40",
    glow: "group-hover:bg-blue-500/5",
  },
};

export default function ToolCard({
  title,
  description,
  icon,
  color = "blue",
  path,
}) {
  const styles = colorStyles[color] || colorStyles.blue;

  return (
    <Link
      to={path}
      className={`
        group relative block overflow-hidden
        rounded-2xl
        border border-white/10
        bg-white/[0.03]
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:bg-white/[0.05]
        ${styles.border}
      `}
    >
      {/* Soft background glow */}
      <div
        className={`
          pointer-events-none
          absolute -right-16 -top-16
          h-32 w-32
          rounded-full
          blur-3xl
          opacity-0
          transition-opacity duration-300
          ${styles.glow}
        `}
      />

      <div className="relative">
        {/* Icon */}
        <div
          className={`
            flex h-12 w-12
            items-center justify-center
            rounded-xl
            text-xl font-bold
            ${styles.icon}
          `}
        >
          {icon}
        </div>

        {/* Content */}
        <div className="mt-5">
          <h3 className="text-lg font-bold text-white">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {description}
          </p>
        </div>

        {/* Bottom action */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-300 transition-colors group-hover:text-white">
            Try Tool
          </span>

          <span
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-full
              border border-white/10
              bg-white/[0.03]
              text-slate-400
              transition-all duration-300
              group-hover:border-white/20
              group-hover:bg-white/10
              group-hover:text-white
            "
          >
            <ArrowUpRight size={17} />
          </span>
        </div>
      </div>
    </Link>
  );
}