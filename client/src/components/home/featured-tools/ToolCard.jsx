import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function ToolCard({ tool }) {
  return (
    <Link
      to={tool.path}
      className="
        group block
        min-h-[235px]
        rounded-2xl
        border border-slate-800
        bg-[#0b0b0b]
        p-7
        outline-none
        transition-all duration-300

        hover:-translate-y-1
        hover:border-red-500/70
        hover:shadow-[0_20px_50px_rgba(239,68,68,0.12)]

        focus:border-red-500
        focus:shadow-[0_0_35px_rgba(239,68,68,0.18)]

        active:border-red-500
        active:shadow-[0_0_35px_rgba(239,68,68,0.22)]

        sm:min-h-[250px]
        sm:p-8
      "
    >
      {/* Icon */}
      <div
        className="
          flex h-16 w-16
          items-center justify-center
          rounded-xl
          bg-red-500/15
          text-3xl
          text-red-500
          transition-all duration-300
          group-hover:bg-red-500/20
          group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]
          group-focus:bg-red-500/20
        "
      >
        {tool.icon}
      </div>

      {/* Title */}
      <h3
        className="
          mt-6
          text-2xl
          font-extrabold
          tracking-tight
          text-white
          transition-colors duration-300
          group-hover:text-red-500
          group-focus:text-red-500
        "
      >
        {tool.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-base leading-6 text-slate-400">
        {tool.description}
      </p>

      {/* Learn More */}
      <div
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          text-lg
          font-semibold
          text-red-500
          transition-all duration-300
          group-hover:gap-3
        "
      >
        Learn more

        <ArrowRight
          size={20}
          className="
            transition-transform duration-300
            group-hover:translate-x-1
          "
        />
      </div>
    </Link>
  );
}

export default ToolCard;